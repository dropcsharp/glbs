import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Care-less.se <onboarding@resend.dev>",
      to: "mariavlarsson@gmail.com",
      replyTo: data.email,
      subject: `Ny kontaktförfrågan från ${data.firstName}${data.lastName ? ` ${data.lastName}` : ""}`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Kunde inte skicka meddelandet" },
        { status: 500 }
      );
    }

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
