export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl text-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to Yogesh Patil's Portfolio ("we," "our," or "us"). This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our portfolio website.
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Personal Information
              </h3>
              <p>
                When you contact us through our contact form, we may collect
                personally identifiable information, such as:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>Any other information you voluntarily provide</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                Non-Personal Information
              </h3>
              <p>
                We may automatically collect certain non-personal information
                about your visit, including:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                We may use the information we collect for various purposes,
                including to:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services and projects</li>
                <li>Improve our website and user experience</li>
                <li>Monitor and analyze usage and trends</li>
                <li>
                  Prevent fraudulent transactions and monitor against theft
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this privacy policy. We may share your information
                in the following situations:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Contact Information
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-card border border-border rounded-lg">
                <p>
                  <strong>Email:</strong> patilyogeshofficial@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 8010729955
                </p>
                <p>
                  <strong>Location:</strong> Dhule, Maharashtra, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
