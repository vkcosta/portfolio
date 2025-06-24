import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { profile } from "./constants";
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
  title: `Portfólio ${profile.name}`,
  description: `${profile.occupation}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="portfolio-container">
          <Menu />

          <div className="container" style={{ display: "flex" }}>
            <Sidebar />
            <main className="content">{children}</main>
          </div>
        </div>

      </body>
    </html>
  );
}
