import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GlobalCTA } from "@/components/layout/global-cta";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <GlobalCTA />
      <Footer />
    </div>
  );
}
