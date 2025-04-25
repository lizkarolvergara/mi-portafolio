import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "/styles/globals.css";
import "/styles/animations.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Liz Karol Vergara",
  description: "Portafolio Liz Karol Vergara Reategui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body 
        className={`${jost.variable} font-[family-name:var(--font-jost)] antialiased`}
      >
        <Providers>
          <div className="light:bg-white dark:bg-[#191825] light:text-[#191825] dark:text-white text-lg">
            <Navbar />
            
            {children}

            <Footer />
          </div>

        </Providers>
      </body>
    </html>
  );
}
