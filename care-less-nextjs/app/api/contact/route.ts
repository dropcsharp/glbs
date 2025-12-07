import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "Förnamn är obligatoriskt"),
  lastName: z.string().optional(),
  email: z.string().email("Ange en giltig e-postadress"),
  phone: z.string().optional(),
  wantsCallback: z.enum(["ja", "nej"]),
  message: z.string().optional(),
  service: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // For now, we'll log the data and simulate sending an email
    // In production, integrate with Resend, Nodemailer, or another email service
    console.log("Contact form submission:", data);

    // Create email content
    const emailContent = `
Ny kontaktförfrågan från Care-less.se

Kontaktuppgifter:
- Förnamn: ${data.firstName}
- Efternamn: ${data.lastName || "Ej angivet"}
- E-post: ${data.email}
- Telefon: ${data.phone || "Ej angivet"}
- Vill bli uppringd: ${data.wantsCallback === "ja" ? "Ja" : "Nej"}
${data.service ? `- Intresserad av: ${data.service}` : ""}

Meddelande:
${data.message || "Inget meddelande"}
    `.trim();

    // Log the email content for development
    console.log("Email content:", emailContent);

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, you would send the email here using Resend or Nodemailer:
    //
    // Using Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@care-less.se',
    //   to: 'kontakt@care-less.se',
    //   subject: `Ny kontaktförfrågan från ${data.firstName}`,
    //   text: emailContent,
    // });
    //
    // Using Nodemailer:
    // import nodemailer from 'nodemailer';
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: 'noreply@care-less.se',
    //   to: 'kontakt@care-less.se',
    //   subject: `Ny kontaktförfrågan från ${data.firstName}`,
    //   text: emailContent,
    // });

    return NextResponse.json(
      { success: true, message: "Meddelandet har skickats" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Något gick fel, försök igen senare" },
      { status: 500 }
    );
  }
}
