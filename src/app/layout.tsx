import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "TaskFlow — task management ",
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
        <header className="bg-white shadow-md p-4">
          <AppNavbar />
        </header>

        <main className="container mx-auto p-6 min-h-[calc(100vh-120px)]">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 mt-12 mb-4">
          &copy; 2026 TaskFlow
        </footer>
      </body>
    </html>
  );
}
