import { RequestHandler } from "express";
import { Resend } from "resend";
import { z } from "zod";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export const handleContactResend: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const validatedData = contactFormSchema.parse(req.body);
    const { name, email, subject, message } = validatedData;

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("=== CONTACT FORM SUBMISSION (Resend not configured) ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("=======================================================");

      return res.json({
        success: true,
        message: "Message received! I'll get back to you soon.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>", // Free tier uses this domain
        to: ["patilyogeshofficial@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        replyTo: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px;">
                <strong>Message:</strong>
                <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
            </div>
          </div>
        `,
      });

      res.json({
        success: true,
        message: "Message sent successfully!",
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      res.json({
        success: true,
        message: "Message received! I'll get back to you soon.",
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
};
