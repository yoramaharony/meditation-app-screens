import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rest - Start Your Free Trial",
  description: "Unlock your full potential with personalized meditation that adapts to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
} 