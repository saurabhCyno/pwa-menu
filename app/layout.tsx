import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spice Garden — Restaurant Menu",
  description:
    "Browse our menu, add dishes to your cart, and place orders instantly via WhatsApp.",
  applicationName: "Spice Garden Menu",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Spice Garden",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Spice Garden — Restaurant Menu",
    description: "Order delicious food from Spice Garden",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1B4332",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-dvh bg-shell font-sans text-neutral-900 antialiased">
        <div
          id="app-shell"
          className="relative mx-auto h-dvh w-full min-w-[390px] max-w-[430px] overflow-x-hidden overflow-y-auto bg-surface shadow-2xl"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
