import { Navbar } from "../nav/Navbar";
import { Footer } from "../nav/Footer";

interface LegalPageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function LegalPageLayout({ children, title }: LegalPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container max-w-4xl px-4 py-16 md:px-6">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-center">
            {title}
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="p-6 border rounded-lg shadow-sm bg-card">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
