import { Metadata } from "next";
import "./globals.css";
import { Maven_Pro } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "CodanteVagas",
  description:
    "O CodanteVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={mavenPro.variable}>
      <body className={`antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
