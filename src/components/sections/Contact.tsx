"use client";

import React, { useState, useRef, useEffect } from "react";
import { siteContent, EnquiryTypeValue } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MotionFade } from "@/components/ui/MotionFade";
import { enquirySchema, EnquiryFormData } from "@/lib/enquiry-schema";

interface ContactProps {
  selectedEnquiryType: EnquiryTypeValue;
  onEnquiryTypeChange: (type: EnquiryTypeValue) => void;
}

export function Contact({
  selectedEnquiryType,
  onEnquiryTypeChange,
}: ContactProps) {
  const content = siteContent.contact;

  const [formData, setFormData] = useState<Partial<EnquiryFormData>>({
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    designation: "",
    enquiryType: selectedEnquiryType,
    message: "",
    website_hp: "", // Honeypot
  });

  const formStartTimeRef = useRef<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  // Record start time on client mount
  useEffect(() => {
    formStartTimeRef.current = Date.now();
  }, []);

  // Sync external selection (from programmes or get-involved CTAs) using standard React pattern
  const [prevSelectedType, setPrevSelectedType] = useState(selectedEnquiryType);
  if (selectedEnquiryType !== prevSelectedType) {
    setPrevSelectedType(selectedEnquiryType);
    setFormData((prev) => ({
      ...prev,
      enquiryType: selectedEnquiryType,
    }));
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "enquiryType") {
      onEnquiryTypeChange(value as EnquiryTypeValue);
    }

    // Clear inline error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerErrorMessage("");
    setSubmitStatus("idle");

    const payload = {
      ...formData,
      formStartTime: formStartTimeRef.current || Date.now(),
    };

    // Client-side Zod validation
    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      const flattened = parsed.error.flatten().fieldErrors;
      Object.entries(flattened).forEach(([field, msgs]) => {
        if (msgs && msgs.length > 0) {
          fieldErrors[field] = msgs[0];
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        if (result.errors) {
          const serverValidationErrors: Record<string, string> = {};
          Object.entries(result.errors).forEach(([field, messages]) => {
            serverValidationErrors[field] = (messages as string[])[0];
          });
          setErrors(serverValidationErrors);
        }
        setServerErrorMessage(
          result.message || content.form.errorMessage
        );
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          organisation: "",
          designation: "",
          enquiryType: selectedEnquiryType,
          message: "",
          website_hp: "",
        });
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setServerErrorMessage(content.form.errorMessage);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full border-b border-line bg-paper py-[clamp(72px,9vw,128px)]"
    >
      <Container>
        {/* Centred Header Block */}
        <MotionFade>
          <SectionHeader
            eyebrow={content.eyebrow}
            headingPrefix={content.headingPrefix}
            headingEmphasized={content.headingEmphasized}
            headingSuffix={content.headingSuffix}
            intro={content.copy}
            theme="paper"
          />
        </MotionFade>

        {/* 5 / 7 Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-14 sm:mt-16">
          {/* Left Column (5 columns): Registered Secretariat Card */}
          <div className="lg:col-span-5 space-y-6">
            <MotionFade delay={50}>
              <div className="border border-line bg-paper-2/40 p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent font-semibold block mb-2">
                    Registered Secretariat
                  </span>
                  <p className="text-base font-semibold text-ink leading-snug">
                    {content.address}
                  </p>
                </div>

                {/* Render communication details strictly only when non-null */}
                {content.email && (
                  <div className="border-t border-line pt-4">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block mb-1">
                      Institutional Inquiries
                    </span>
                    <a
                      href={`mailto:${content.email}`}
                      className="text-sm font-mono text-ink hover:underline"
                    >
                      {content.email}
                    </a>
                  </div>
                )}

                {content.phone && (
                  <div className="border-t border-line pt-4">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block mb-1">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${content.phone}`}
                      className="text-sm font-mono text-ink hover:underline"
                    >
                      {content.phone}
                    </a>
                  </div>
                )}

                {content.website && (
                  <div className="border-t border-line pt-4">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block mb-1">
                      Official Portal
                    </span>
                    <a
                      href={content.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-ink hover:underline"
                    >
                      {content.website}
                    </a>
                  </div>
                )}

                <div className="border-t border-line pt-4">
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted block mb-2">
                    Enquiry Processing
                  </span>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    All enquiries are reviewed directly by the executive team. Response time is typically within two business days.
                  </p>
                </div>
              </div>
            </MotionFade>
          </div>

          {/* Right Column (7 columns): Form */}
          <div className="lg:col-span-7">
            <MotionFade delay={100}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-line bg-paper p-6 sm:p-10 space-y-6"
              >
                {/* Success Notification Banner */}
                {submitStatus === "success" && (
                  <div
                    role="alert"
                    className="p-5 border-l-4 border-accent bg-paper-2 border border-line"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-accent rounded-none inline-block flex-shrink-0" aria-hidden="true" />
                      <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-ink font-bold">
                        {content.form.successHeading}
                      </h3>
                    </div>
                    <p className="text-sm text-ink/80 leading-relaxed">
                      {content.form.successMessage}
                    </p>
                  </div>
                )}

                {/* Error Notification Banner */}
                {submitStatus === "error" && (
                  <div
                    role="alert"
                    className="p-5 border-l-4 border-red-600 bg-red-50/50 border border-line"
                  >
                    <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-red-700 font-bold mb-1">
                      Submission Unsuccessful
                    </h3>
                    <p className="text-sm text-red-700/90 leading-relaxed">
                      {serverErrorMessage}
                    </p>
                  </div>
                )}

                {/* Honeypot field (hidden from assistive tech and visual users) */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp || ""}
                    onChange={handleChange}
                    aria-hidden="true"
                  />
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullNameInput"
                      className="block font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium mb-2"
                    >
                      {content.form.nameLabel} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullNameInput"
                      name="fullName"
                      required
                      autoComplete="name"
                      placeholder={content.form.namePlaceholder}
                      value={formData.fullName || ""}
                      onChange={handleChange}
                      className={`w-full bg-paper px-3.5 py-3 border text-ink text-sm rounded-[2px] transition-colors ${
                        errors.fullName ? "border-red-600" : "border-line hover:border-ink/60"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="font-mono text-xs text-red-600 mt-1.5" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="emailInput"
                      className="block font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium mb-2"
                    >
                      {content.form.emailLabel} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailInput"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder={content.form.emailPlaceholder}
                      value={formData.email || ""}
                      onChange={handleChange}
                      className={`w-full bg-paper px-3.5 py-3 border text-ink text-sm rounded-[2px] transition-colors ${
                        errors.email ? "border-red-600" : "border-line hover:border-ink/60"
                      }`}
                    />
                    {errors.email && (
                      <p className="font-mono text-xs text-red-600 mt-1.5" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phoneInput"
                      className="block font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium mb-2"
                    >
                      {content.form.phoneLabel} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneInput"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder={content.form.phonePlaceholder}
                      value={formData.phone || ""}
                      onChange={handleChange}
                      className={`w-full bg-paper px-3.5 py-3 border text-ink text-sm rounded-[2px] transition-colors ${
                        errors.phone ? "border-red-600" : "border-line hover:border-ink/60"
                      }`}
                    />
                    {errors.phone && (
                      <p className="font-mono text-xs text-red-600 mt-1.5" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="orgInput"
                      className="block font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium mb-2"
                    >
                      {content.form.orgLabel} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="orgInput"
                      name="organisation"
                      required
                      autoComplete="organization"
                      placeholder={content.form.orgPlaceholder}
                      value={formData.organisation || ""}
                      onChange={handleChange}
                      className={`w-full bg-paper px-3.5 py-3 border text-ink text-sm rounded-[2px] transition-colors ${
                        errors.organisation ? "border-red-600" : "border-line hover:border-ink/60"
                      }`}
                    />
                    {errors.organisation && (
                      <p className="font-mono text-xs text-red-600 mt-1.5" role="alert">
                        {errors.organisation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Designation & Enquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="designationInput"
                      className="block font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium mb-2"
                    >
                      {content.form.designationLabel} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="designationInput"
                      name="designation"
                      required
                      autoComplete="organization-title"
                      placeholder={content.form.designationPlaceholder}
                      value={formData.designation || ""}
                      onChange={handleChange}
                      className={`w-full bg-paper px-3.5 py-3 border text-ink text-sm rounded-[2px] transition-colors ${
                        errors.designation ? "border-red-600" : "border-line hover:border-ink/60"
                      }`}
                    />
                    {errors.designation && (
                      <p className="font-mono text-xs text-red-600 mt-1.5" role="alert">
                        {errors.designation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiryTypeInput"
                      className="block font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium mb-2"
                    >
                      {content.form.typeLabel} <span className="text-accent">*</span>
                    </label>
                    <select
                      id="enquiryTypeInput"
                      name="enquiryType"
                      required
                      value={formData.enquiryType || selectedEnquiryType}
                      onChange={handleChange}
                      className={`w-full bg-paper px-3.5 py-3 border text-ink text-sm rounded-[2px] transition-colors cursor-pointer ${
                        errors.enquiryType ? "border-red-600" : "border-line hover:border-ink/60"
                      }`}
                    >
                      {content.enquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.enquiryType && (
                      <p className="font-mono text-xs text-red-600 mt-1.5" role="alert">
                        {errors.enquiryType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4: Message (Full Width) */}
                <div>
                  <label
                    htmlFor="messageInput"
                    className="block font-mono text-xs uppercase tracking-[0.08em] text-ink font-medium mb-2"
                  >
                    {content.form.messageLabel} <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="messageInput"
                    name="message"
                    rows={4}
                    required
                    placeholder={content.form.messagePlaceholder}
                    value={formData.message || ""}
                    onChange={handleChange}
                    className={`w-full bg-paper px-3.5 py-3 border text-ink text-sm rounded-[2px] transition-colors resize-y ${
                      errors.message ? "border-red-600" : "border-line hover:border-ink/60"
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-600 mt-1.5" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button (56px tall, full-width on mobile, auto-width on desktop) */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-center gap-2 bg-accent text-ink hover:bg-[#e09b00] active:bg-[#c98b00] font-semibold text-sm px-8 h-14 min-h-[56px] rounded-[2px] transition-colors w-full sm:w-auto cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2"
                    >
                      <span>
                        {isSubmitting
                          ? content.form.submittingButton
                          : content.form.submitButton}
                      </span>
                      <span className="arrow-hover-nudge font-mono text-sm leading-none" aria-hidden="true">
                        →
                      </span>
                    </button>
                  </div>
                  <p className="font-mono text-xs text-muted mt-3">
                    Strict confidentiality maintained. We do not share partner details.
                  </p>
                </div>
              </form>
            </MotionFade>
          </div>
        </div>
      </Container>
    </section>
  );
}