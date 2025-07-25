import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Form from "@/components/Utility/form";
import Footer from "@/components/Footer/Footer";
import Providers from "@/components/Utility/providers";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Liber Consulting",
  keywords: ["Liber Consulting"],
  authors: [
    { name: "Talesign" },
    { name: "Oliviero Taleghani", url: "https://talesign.com" },
  ],
  creator: "Oliviero Taleghani",
  publisher: "Talesign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="images/favicon.ico" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>
            {children}
            <section id="contatti" className="container my-32">
              <div className="grid xl:grid-cols-2 gap-32">
                <div className="mt-8 mb-6">
                  <p className="text-4xl border-b pb-8 border-g1100 font-bold">
                    Contattaci per maggiori informazioni
                  </p>
                  <p className="text-sm pt-8">
                    Hai domande sui nostri servizi o desideri una consulenza
                    personalizzata? Compila il nostro form di contatto. Una
                    volta ricevute le tue informazioni, sarai messo direttamente
                    in contatto con il referente del servizio di tuo interesse.
                  </p>
                </div>
                <div>
                  <Form />
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
