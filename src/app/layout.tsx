import type { Metadata } from "next";
import { Lato, Merriweather, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Mousa Ahmed - Full Stack Developer",
    template: "%s | Mousa Ahmed"
  },
  description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building exceptional digital experiences with passion and precision.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Frontend Developer", "Backend Developer", "Mousa Ahmed"],
  authors: [{ name: "Mousa Ahmed" }],
  creator: "Mousa Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mousaahmed.com",
    title: "Mousa Ahmed - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Mousa Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mousa Ahmed - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@mousaahmed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${lato.variable} ${merriweather.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
