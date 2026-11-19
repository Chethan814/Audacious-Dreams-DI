"use client";

import React, { useState } from "react";
import { EnquiryTypeValue } from "@/content/site";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Programmes } from "@/components/sections/Programmes";
import { Impact } from "@/components/sections/Impact";
import { Organisation } from "@/components/sections/Organisation";
import { Partners } from "@/components/sections/Partners";
import { GetInvolved } from "@/components/sections/GetInvolved";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MobileStickyBar } from "@/components/ui/MobileStickyBar";

export default function Home() {
  const [selectedEnquiryType, setSelectedEnquiryType] =
    useState<EnquiryTypeValue>("School, college or university");
  const [activeModalProgrammeId, setActiveModalProgrammeId] = useState<
    string | null
  >(null);

  const handlePartnerWithUs = () => {
    setSelectedEnquiryType("School, college or university");
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectTier = (type: EnquiryTypeValue) => {
    setSelectedEnquiryType(type);
  };

  const handleOpenProgrammeModal = (progId: string) => {
    setActiveModalProgrammeId(progId);
  };

  const handleCloseProgrammeModal = () => {
    setActiveModalProgrammeId(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-paper text-ink selection:bg-accent selection:text-ink">
      <Header onPartnerClick={handlePartnerWithUs} />

      <main id="main-content" className="flex-1 w-full">
        <Hero onPartnerClick={handlePartnerWithUs} />
        <About />
        <WhatWeDo />
        <Programmes
          onSelectEnquiry={handleSelectTier}
          activeModalId={activeModalProgrammeId}
          onCloseModal={handleCloseProgrammeModal}
        />
        <Impact />
        <Organisation />
        <Partners onPartnerClick={handleSelectTier} />
        <GetInvolved onSelectTier={handleSelectTier} />
        <Contact
          selectedEnquiryType={selectedEnquiryType}
          onEnquiryTypeChange={setSelectedEnquiryType}
        />
      </main>

      <Footer onOpenProgramme={handleOpenProgrammeModal} />
      <MobileStickyBar onPartnerClick={handlePartnerWithUs} />
    </div>
  );
}
