import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Menu from "./components/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio Vitor Knupp",
  description: "Portfólio de desenvolvedor web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu></Menu>
        <div className="portfolio-container">
          <Sidebar />
          <main className="content">{children}</main>
        </div>

      </body>
    </html>
  );
}
