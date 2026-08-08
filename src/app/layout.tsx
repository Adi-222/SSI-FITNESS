import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SSI Fitness | Premium Gym, Boxing & Recovery Services",
  description:
    "Transform your body and life at SSI Fitness — the premier gym offering boxing, MMA, strength training, cupping therapy, steam bath, massage, and personalized fitness plans.",
  keywords: [
    "SSI Fitness",
    "gym",
    "boxing",
    "MMA",
    "fitness",
    "cupping therapy",
    "steam bath",
    "massage",
    "personal training",
    "strength training",
  ],
  openGraph: {
    title: "SSI Fitness | Forge Your Legacy",
    description:
      "Premium training facility offering elite fitness programs, combat training, and holistic recovery services.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
