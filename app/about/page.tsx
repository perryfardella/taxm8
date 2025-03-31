import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/nav/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  About Taxm8
                </h1>
                <p className="text-xl text-muted-foreground">
                  Making Australian tax simple and accessible for everyone.
                </p>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  G'day! We know dealing with taxes can be overwhelming and
                  expensive. That's exactly why we created Taxm8 – your
                  friendly, AI-powered tax assistant that won't break the bank.
                </p>

                <p>
                  Our mission is simple: help everyday Australians understand
                  and manage their taxes without the hefty price tag of
                  traditional tax services. Whether you're a salary earner,
                  small business owner, or just starting your first job, Taxm8
                  is here to guide you through the Australian tax system.
                </p>

                <div className="flex flex-col items-center gap-8 my-12 md:flex-row">
                  <div className="relative w-64 h-64 overflow-hidden rounded-full">
                    <Image
                      src="/perry.png"
                      alt="Perry Fardella"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="md:flex-1">
                    <h2 className="mb-4 text-2xl font-semibold">
                      Meet the Founder
                    </h2>
                    <p>
                      Hi, I'm Perry Fardella, a CPA with a passion for making
                      tax accessible to everyone. After years of helping clients
                      navigate the complexities of tax season, I realized there
                      had to be a better way. That's when Taxm8 was born –
                      combining my tax expertise with cutting-edge AI to create
                      a tool that's both powerful and easy to use.
                    </p>
                  </div>
                </div>

                <h2 className="mb-4 text-2xl font-semibold">
                  What Makes Taxm8 Different?
                </h2>
                <ul className="space-y-4">
                  <li>
                    <strong>Affordable:</strong> Quality tax guidance shouldn't
                    cost a fortune. We keep our prices low so everyone can
                    access the help they need.
                  </li>
                  <li>
                    <strong>24/7 Availability:</strong> Got a tax question at
                    midnight? Taxm8 is always here to help.
                  </li>
                  <li>
                    <strong>Australian-Focused:</strong> Built specifically for
                    the Australian tax system, with local knowledge and
                    understanding.
                  </li>
                  <li>
                    <strong>Plain English:</strong> We translate complex tax
                    jargon into language that actually makes sense.
                  </li>
                </ul>

                <div className="p-6 mt-12 rounded-lg bg-muted">
                  <p className="text-sm">
                    While Taxm8 is a powerful tool for tax guidance, we always
                    recommend consulting with a qualified tax professional for
                    complex situations or final advice. We're here to help you
                    understand and prepare, but we're not a replacement for
                    professional tax services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
