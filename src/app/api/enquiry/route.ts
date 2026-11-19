import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry-schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Zod schema validation
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // 2. Anti-spam checks
    // Honeypot check: If the hidden honeypot field is filled, silently reject or fail
    if (data.website_hp && data.website_hp.length > 0) {
      // Spam submission detected
      return NextResponse.json(
        { success: false, message: "Invalid submission detected." },
        { status: 400 }
      );
    }

    // Time-based check: Bots submit forms in milliseconds. Real humans need at least 2.5 seconds.
    if (data.formStartTime) {
      const submissionDuration = Date.now() - data.formStartTime;
      if (submissionDuration < 2000) {
        return NextResponse.json(
          { success: false, message: "Submission rejected: Completed too quickly." },
          { status: 400 }
        );
      }
    }

    // 3. Structured logging server-side
    console.info("[ADF Institutional Enquiry Received]", {
      timestamp: new Date().toISOString(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      organisation: data.organisation,
      designation: data.designation,
      enquiryType: data.enquiryType,
      messageLength: data.message.length,
    });

    // 4. Extensibility hooks:
    // When environment variables are provided (e.g. RESEND_API_KEY or SUPABASE_URL),
    // dispatch to external service without modifying component code:
    const resendKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ENQUIRY_NOTIFICATION_EMAIL;
    if (resendKey && adminEmail) {
      // Example Resend dispatch hook:
      // await resend.emails.send({ ... });
      console.info("[ADF Notification] Would dispatch email notification via Resend.");
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (supabaseUrl && supabaseServiceKey) {
      // Example Supabase insert hook:
      // await supabase.from('enquiries').insert({ ... });
      console.info("[ADF Database] Would persist enquiry to Supabase.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry successfully logged. Our institutional relations desk will connect with you.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ADF Enquiry API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error occurred while processing the enquiry.",
      },
      { status: 500 }
    );
  }
}
