import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Search,
  Shield,
  Zap,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NavButtons } from "@/components/nav/NavButtons";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary">Taxm8</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <NavButtons />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Your AI Tax Assistant for Australia
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get real-time, accurate guidance for navigating the
                    Australian tax system with our AI-powered advisor. Join the
                    waitlist today!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Join Waitlist <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Be the first to know when we launch</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square md:aspect-[4/3] lg:aspect-[3/2] rounded-lg overflow-hidden border bg-muted/50 p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-muted"></div>
                  <div className="relative flex flex-col h-full gap-4 p-4 rounded-lg shadow-lg bg-card">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Taxm8 Chat</span>
                    </div>
                    <div className="flex-1 space-y-4 overflow-y-auto">
                      <div className="p-3 text-sm rounded-lg bg-muted">
                        Can I claim my home office expenses as a freelancer?
                      </div>
                      <div className="p-3 text-sm rounded-lg bg-primary/10">
                        <p className="mb-2">
                          Yes, as a freelancer in Australia, you can claim home
                          office expenses. According to the ATO guidelines (TR
                          2000/7), you can claim:
                        </p>
                        <ul className="pl-5 mt-2 space-y-1 list-disc">
                          <li>
                            Occupancy expenses (if you have a dedicated
                            workspace)
                          </li>
                          <li>
                            Running expenses like electricity and internet
                          </li>
                          <li>Depreciation of office equipment</li>
                        </ul>
                        <p className="mt-2">
                          You'll need to maintain records and calculate the
                          work-related percentage.
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Ask about your tax situation..."
                        className="w-full px-3 py-2 text-sm border rounded-md bg-background"
                        disabled
                      />
                      <Button
                        size="sm"
                        className="absolute right-0.5 top-0.5"
                        style={{ height: "2.125rem" }}
                      >
                        Ask
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Taxm8 combines AI with official ATO documentation to provide
                  accurate, reliable tax guidance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<MessageSquare className="w-8 h-8" />}
                title="AI Chatbot"
                description="Ask tax-related questions in natural language and get clear, accurate answers instantly."
              />
              <FeatureCard
                icon={<Search className="w-8 h-8" />}
                title="Grounded in ATO Docs"
                description="All answers are backed by official ATO documentation using Retrieval-Augmented Generation."
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8" />}
                title="Transparent References"
                description="Every answer includes references to relevant ATO rulings and guidelines."
              />
              <FeatureCard
                icon={<Zap className="w-8 h-8" />}
                title="Fast & Intuitive"
                description="Get answers in seconds with our lightning-fast, easy-to-use interface."
              />
              <FeatureCard
                icon={<CheckCircle className="w-8 h-8" />}
                title="Feedback System"
                description="Rate answers and flag inaccuracies to help us continuously improve."
              />
              <FeatureCard
                icon={<MessageSquare className="w-8 h-8" />}
                title="Session History"
                description="Access your past conversations and tax advice whenever you need it."
              />
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powered by Australian Tax Expertise
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our AI is trained on comprehensive Australian tax resources.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
              <div className="p-6 border rounded-lg shadow-sm bg-background">
                <h3 className="mb-4 text-xl font-bold">
                  Trained on Official Tax Resources
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Taxm8's AI is extensively trained on the complete Australian
                  tax legislation, ensuring that all guidance is based on the
                  most current tax laws.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Income Tax Assessment Act</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Tax Administration Act</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>GST Act and Regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Fringe Benefits Tax legislation</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg shadow-sm bg-background">
                <h3 className="mb-4 text-xl font-bold">
                  Incorporates ATO Rulings & Guidance
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Beyond legislation, Taxm8 incorporates thousands of ATO
                  rulings, interpretations, and practice statements to provide
                  comprehensive guidance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Public Rulings and Determinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Private Rulings (anonymized)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Practice Statements and Guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>ATO Fact Sheets and Guides</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How Taxm8 Works
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our AI-powered system delivers accurate tax guidance in three
                  simple steps.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Ask Your Question</h3>
                <p className="text-muted-foreground">
                  Type your tax-related question in natural language, just like
                  you'd ask a tax professional.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">AI Searches ATO Docs</h3>
                <p className="text-muted-foreground">
                  Our AI searches through thousands of ATO documents to find
                  relevant information.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Get Clear Answers</h3>
                <p className="text-muted-foreground">
                  Receive easy-to-understand answers with references to official
                  ATO sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CPA Developer Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="flex justify-center">
                <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <img
                      src="/perry.png"
                      alt="CPA Developer"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Built by Tax Professionals, For Everyone
                </h2>
                <p className="text-muted-foreground">
                  Taxm8 was developed by Perry Fardella CPA a Certified
                  Practicing Accountant with years of experience navigating the
                  complexities of the Australian tax system. Our mission is to
                  make tax knowledge accessible to everyone.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Certified Practicing Accountant (CPA Australia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>7+ years of tax advisory experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>
                      Specializing in individual and small business taxation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>
                      Passionate about tax education and accessibility
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Who Taxm8 Is For
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Designed for Australians who need straightforward tax
                  guidance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
              <AudienceCard
                title="Freelancers & Gig Workers"
                description="Uber drivers, Airtasker workers, and Upwork freelancers navigating complex tax obligations."
              />
              <AudienceCard
                title="Side Hustlers & Sole Traders"
                description="People with side businesses looking to understand their tax deductions and obligations."
              />
              <AudienceCard
                title="Crypto Traders"
                description="Individuals trading cryptocurrency who need clarity on tax implications and reporting."
              />
              <AudienceCard
                title="Young Professionals"
                description="First-time tax filers and young professionals doing DIY tax returns."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that works for your tax needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
              <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-background">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free Trial</h3>
                  <p className="text-muted-foreground">
                    Try Taxm8 with limited features
                  </p>
                </div>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">$0</span>
                </div>
                <ul className="flex-1 mb-8 space-y-2">
                  <PricingFeature>5 queries per month</PricingFeature>
                  <PricingFeature>Basic tax guidance</PricingFeature>
                  <PricingFeature>No account required</PricingFeature>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </div>
              <div className="relative flex flex-col p-6 border rounded-lg shadow-sm bg-background border-primary">
                <div className="absolute px-4 py-1 text-sm font-medium transform -translate-x-1/2 rounded-full -top-4 left-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Standard</h3>
                  <p className="text-muted-foreground">
                    Perfect for individuals
                  </p>
                </div>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="flex-1 mb-8 space-y-2">
                  <PricingFeature>Unlimited queries</PricingFeature>
                  <PricingFeature>Saved chat history</PricingFeature>
                  <PricingFeature>Downloadable PDF summaries</PricingFeature>
                  <PricingFeature>Priority support</PricingFeature>
                </ul>
                <Button className="w-full">Subscribe Now</Button>
              </div>
              <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-background">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Lifetime</h3>
                  <p className="text-muted-foreground">One-time purchase</p>
                </div>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="ml-1 text-muted-foreground">one-time</span>
                </div>
                <ul className="flex-1 mb-8 space-y-2">
                  <PricingFeature>All Standard features</PricingFeature>
                  <PricingFeature>Lifetime access</PricingFeature>
                  <PricingFeature>Future updates included</PricingFeature>
                  <PricingFeature>Premium support</PricingFeature>
                </ul>
                <Button variant="outline" className="w-full">
                  Buy Lifetime
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Common questions about Taxm8 and how it works.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
              <FaqItem
                question="Is Taxm8 a registered tax agent?"
                answer="No, Taxm8 is not a registered tax agent. We provide general information based on ATO documentation, but we do not provide personalized tax advice. For complex situations, we recommend consulting a registered tax professional."
              />
              <FaqItem
                question="How accurate is the information provided?"
                answer="Taxm8 uses Retrieval-Augmented Generation to ground all answers in official ATO documentation. While we strive for accuracy, tax laws change frequently, and you should verify important information with the ATO or a tax professional."
              />
              <FaqItem
                question="Is my data secure?"
                answer="Yes, we take data security seriously. Your conversations are encrypted, and we do not share your personal information with third parties. We only use your data to improve our service."
              />
              <FaqItem
                question="Can I use Taxm8 for business tax questions?"
                answer="The current version of Taxm8 is optimized for individual taxpayers. Support for business tax questions will be available in future updates."
              />
              <FaqItem
                question="How do I cancel my subscription?"
                answer="You can cancel your subscription at any time from your account settings. If you cancel, you'll continue to have access until the end of your billing period."
              />
              <FaqItem
                question="Do you offer refunds?"
                answer="Yes, we offer a 14-day money-back guarantee if you're not satisfied with our service. Contact our support team to request a refund."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Be First in Line When We Launch
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Join our waitlist today and be the first to experience Taxm8
                  when we launch. Early subscribers will receive special
                  benefits and discounts.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Join the Waitlist <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We'll notify you as soon as Taxm8 is ready. No spam, we promise.
              </p>
            </div>
          </div>
        </section>
      </main>

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
                    href="#"
                    className="transition-colors text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
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
                    href="#"
                    className="transition-colors text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
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
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 text-center border rounded-lg shadow-sm bg-background">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function AudienceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-background">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircle className="flex-shrink-0 w-4 h-4 text-primary" />
      <span>{children}</span>
    </li>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}
