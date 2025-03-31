export default function TermsOfService() {
  return (
    <div className="container px-4 py-16 md:px-6">
      <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Taxm8, you agree to be bound by these Terms of
          Service and all applicable laws and regulations.
        </p>

        <h2>2. Service Description</h2>
        <p>
          Taxm8 is an AI-powered platform providing general tax information and
          guidance for Australian tax matters. The service is:
        </p>
        <ul>
          <li>For general information purposes only</li>
          <li>Not a substitute for professional tax advice</li>
          <li>Not a registered tax agent service</li>
          <li>
            Not providing personal tax advice as defined by Australian law
          </li>
        </ul>

        <h2>3. User Obligations</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Use the service for lawful purposes only</li>
          <li>Not rely solely on our AI guidance for tax decisions</li>
          <li>Seek professional advice for specific tax situations</li>
        </ul>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          The service is provided "as is" without any warranties. We do not
          guarantee the accuracy, completeness, or timeliness of any information
          provided.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Taxm8 shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages
          resulting from your use of the service.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of the service constitutes acceptance of modified terms.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by Australian law. Any disputes shall be
          subject to the exclusive jurisdiction of Australian courts.
        </p>
      </div>
    </div>
  );
}
