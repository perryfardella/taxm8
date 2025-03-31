export default function Disclaimer() {
  return (
    <div className="container px-4 py-16 md:px-6">
      <h1 className="mb-8 text-4xl font-bold">Disclaimer</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

        <h2>Important Notice</h2>
        <p className="font-bold text-red-600">
          The information provided by Taxm8 is for general guidance purposes
          only and does not constitute financial or tax advice.
        </p>

        <h2>Not a Registered Tax Agent</h2>
        <p>Taxm8:</p>
        <ul>
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

        <h2>Seek Professional Advice</h2>
        <p>Before acting on any information provided by Taxm8, you should:</p>
        <ul>
          <li>Consult a registered tax agent or qualified accountant</li>
          <li>Verify all information independently</li>
          <li>Consider your personal circumstances</li>
          <li>Review current ATO guidelines</li>
        </ul>

        <h2>No Guarantee</h2>
        <p>While we strive for accuracy:</p>
        <ul>
          <li>Tax laws and regulations change frequently</li>
          <li>AI responses may not reflect the latest updates</li>
          <li>
            Information may not be complete or applicable to your situation
          </li>
          <li>We cannot guarantee the accuracy of any information provided</li>
        </ul>

        <h2>Liability Limitation</h2>
        <p>By using Taxm8, you acknowledge and accept that:</p>
        <ul>
          <li>You use the service at your own risk</li>
          <li>We are not responsible for any financial decisions you make</li>
          <li>
            We are not liable for any losses or damages resulting from use of
            our service
          </li>
        </ul>
      </div>
    </div>
  );
}
