export default function PrivacyPolicy() {
  return (
    <div className="container px-4 py-16 md:px-6">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Taxm8 ("we," "our," or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our AI-powered tax guidance
          service.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>Account information (email address, name)</li>
          <li>Chat history and queries</li>
          <li>Usage data and analytics</li>
          <li>
            Technical information (IP address, browser type, device information)
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To improve our AI responses and service quality</li>
          <li>To communicate with you about service updates</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>4. Data Storage and Security</h2>
        <p>
          Your data is stored in Australia using secure cloud infrastructure. We
          implement appropriate technical and organizational measures to protect
          your personal information.
        </p>

        <h2>5. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share data with:</p>
        <ul>
          <li>Service providers (hosting, analytics)</li>
          <li>Law enforcement when required by law</li>
          <li>Professional advisers and insurers</li>
        </ul>

        <h2>6. Your Rights</h2>
        <p>Under Australian Privacy Principles, you have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent for data processing</li>
        </ul>

        <h2>7. Contact Us</h2>
        <p>
          For privacy-related inquiries, contact our Privacy Officer at
          [privacy@taxm8.com.au]
        </p>
      </div>
    </div>
  );
}
