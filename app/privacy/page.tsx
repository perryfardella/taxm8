import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="mb-6 text-muted-foreground">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
        <p className="text-muted-foreground">
          Taxm8 ("we," "our," or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our AI-powered tax guidance
          service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          2. Information We Collect
        </h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Account information (email address, name)</li>
          <li>Chat history and queries</li>
          <li>Usage data and analytics</li>
          <li>
            Technical information (IP address, browser type, device information)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          3. How We Use Your Information
        </h2>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>To provide and maintain our service</li>
          <li>To improve our AI responses and service quality</li>
          <li>To communicate with you about service updates</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          4. Data Storage and Security
        </h2>
        <p className="text-muted-foreground">
          Your data is stored in Australia using secure cloud infrastructure. We
          implement appropriate technical and organizational measures to protect
          your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          5. Data Sharing and Disclosure
        </h2>
        <p className="text-muted-foreground">
          We do not sell your personal information. We may share data with:
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Service providers (hosting, analytics)</li>
          <li>Law enforcement when required by law</li>
          <li>Professional advisers and insurers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Your Rights</h2>
        <p className="text-muted-foreground">
          Under Australian Privacy Principles, you have the right to:
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent for data processing</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Contact Us</h2>
        <p className="text-muted-foreground">
          For privacy-related inquiries, contact our Privacy Officer at
          [privacy@taxm8.com.au]
        </p>
      </section>
    </LegalPageLayout>
  );
}
