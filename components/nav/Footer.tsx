import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-xl font-bold">Taxm8</div>
            <p className="text-sm text-muted-foreground">
              AI-powered Australian tax guidance for individuals.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="mailto:me@perryfardella.com"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="transition-colors text-muted-foreground hover:text-foreground"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-sm text-center border-t text-muted-foreground">
          <p>
            Disclaimer: Taxm8 provides general information only and is not a
            substitute for professional advice. We are not a registered tax
            agent and do not provide personalized tax advice.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Taxm8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
