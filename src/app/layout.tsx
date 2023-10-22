import Footer from "@/components/Footer.tsx";
import WhatsappButton from "@/components/WhatsappButton.tsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import notfound from "@/app/not-found.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VENSUN",
  description: "¡dime a donde vamos!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`{inter.className} relative bg-[#bbb]`}>
        <span id="top"></span>
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
