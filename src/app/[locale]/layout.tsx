import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "/styles/globals.css";
import "/styles/animations.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Providers } from "@/src/providers";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {notFound} from 'next/navigation';
import { routing } from "@/src/i18n/routing";


const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Liz Karol Vergara",
  description: "Portafolio personal",
};

export default async function RootLayout({
  children,
  params

}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;

}>) {


    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }

  return (
    <html lang={locale} className="scroll-smooth">
      <body 
        className={`${jost.variable} font-[family-name:var(--font-jost)] antialiased dark:bg-[#191825] dark:text-white text-lg`}
      >
        <Providers>
          <NextIntlClientProvider>
            <Navbar />
            
            {children}
            

            <Footer />
          </NextIntlClientProvider>

        </Providers>
      </body>
    </html>
  );
}
