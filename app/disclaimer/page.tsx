import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export default function Disclaimer() {
  return (
    <LegalPageLayout title="Disclaimer">
      <p className="mb-6 text-muted-foreground">Last Updated: 31/03/2025</p>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Important Notice</h2>
        <p className="p-4 font-medium text-red-600 border border-red-100 rounded-lg dark:text-red-400 bg-red-50 dark:bg-red-900/10 dark:border-red-900/20">
          The information provided by Taxm8 is for general guidance purposes
          only and does not constitute financial or tax advice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Not a Registered Tax Agent
        </h2>
        <p className="mb-4 text-muted-foreground">Taxm8:</p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Is not a registered tax agent under Australian law</li>
          <li>
            Does not provide personal tax advice as defined by the Tax Agent
            Services Act 2009
          </li>
          <li>
            Should not be relied upon as a substitute for professional advice
          </li>
          <li>May not be suitable for complex tax situations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Seek Professional Advice
        </h2>
        <p className="text-muted-foreground">
          Before acting on any information provided by Taxm8, you should:
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Consult a registered tax agent or qualified accountant</li>
          <li>Verify all information independently</li>
          <li>Consider your personal circumstances</li>
          <li>Review current ATO guidelines</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">No Guarantee</h2>
        <p className="text-muted-foreground">While we strive for accuracy:</p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Tax laws and regulations change frequently</li>
          <li>AI responses may not reflect the latest updates</li>
          <li>
            Information may not be complete or applicable to your situation
          </li>
          <li>We cannot guarantee the accuracy of any information provided</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Liability Limitation</h2>
        <p className="text-muted-foreground">
          By using Taxm8, you acknowledge and accept that:
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>You use the service at your own risk</li>
          <li>We are not responsible for any financial decisions you make</li>
          <li>
            We are not liable for any losses or damages resulting from use of
            our service
          </li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
