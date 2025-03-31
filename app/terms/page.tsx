import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p className="mb-6 text-muted-foreground">
        <p className="mb-6 text-muted-foreground">Last Updated: 31/03/2025</p>
      </p>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground">
          By accessing or using Taxm8, you agree to be bound by these Terms of
          Service and all applicable laws and regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Service Description</h2>
        <p className="mb-4 text-muted-foreground">
          Taxm8 is an AI-powered platform providing general tax information and
          guidance for Australian tax matters. The service is:
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>For general information purposes only</li>
          <li>Not a substitute for professional tax advice</li>
          <li>Not a registered tax agent service</li>
          <li>
            Not providing personal tax advice as defined by Australian law
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. User Obligations</h2>
        <p className="text-muted-foreground">You agree to:</p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Provide accurate information</li>
          <li>Use the service for lawful purposes only</li>
          <li>Not rely solely on our AI guidance for tax decisions</li>
          <li>Seek professional advice for specific tax situations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          4. Disclaimer of Warranties
        </h2>
        <p className="text-muted-foreground">
          The service is provided "as is" without any warranties. We do not
          guarantee the accuracy, completeness, or timeliness of any information
          provided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          5. Limitation of Liability
        </h2>
        <p className="text-muted-foreground">
          To the maximum extent permitted by law, Taxm8 shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages
          resulting from your use of the service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Changes to Terms</h2>
        <p className="text-muted-foreground">
          We reserve the right to modify these terms at any time. Continued use
          of the service constitutes acceptance of modified terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">7. Governing Law</h2>
        <p className="text-muted-foreground">
          These terms are governed by Australian law. Any disputes shall be
          subject to the exclusive jurisdiction of Australian courts.
        </p>
      </section>
    </LegalPageLayout>
  );
}
