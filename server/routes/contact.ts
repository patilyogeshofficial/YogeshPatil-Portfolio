import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

// Validation schema for contact form data
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message too long"),
});

export const handleContact: RequestHandler = async (req, res) => {
  try {
    console.log("Contact form submission received:", req.body);

    // Validate request body
    const validation = contactFormSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.error.errors,
      });
    }

    const { name, email, subject, message } = validation.data;

    // Log the contact form submission
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("===============================");

    // Check if email credentials are properly configured
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      console.log("Email not configured - form data logged to console");
      return res.json({
        success: true,
        message: "Message received! I'll get back to you soon.",
      });
    }

    try {
      // Create nodemailer transporter using Gmail SMTP
      const transporter = nodemailer.createTransporter({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      });

      // Email content with professional styling
      const mailOptions = {
        from: emailUser,
        to: "patilyogeshofficial@gmail.com",
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #495057; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #6c757d;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #0056b3;">
                <strong>Reply to:</strong> ${email}
              </p>
            </div>
            
            <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center;">
              <p style="color: #6c757d; font-size: 12px;">
                This message was sent from your portfolio contact form
              </p>
            </footer>
          </div>
        `,
        replyTo: email,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({
        success: true,
        message: "Message sent successfully! Thank you for reaching out.",
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Still return success to user but log the contact info
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
