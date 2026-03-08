import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "./components/ConditionalHeader";
import BurgerMenu from "./components/BurgerMenu";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Incident Ledger",
    template: "%s | Incident Ledger",
  },
  description:
    "Incident Ledger is a demo incident intake and tracking experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        <BurgerMenu />
        {/* Demo Mode Disclaimer */}
        <div className="fixed top-6 right-6 z-50 text-xs text-amber-400 font-semibold bg-amber-950/50 px-2 py-1 rounded border border-amber-700/50">
          DEMO MODE
        </div>
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}