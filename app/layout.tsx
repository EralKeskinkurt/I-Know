import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/ui/Navbar";

export const metadata: Metadata = {
  title: "I Know",
  description: "I Know",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
