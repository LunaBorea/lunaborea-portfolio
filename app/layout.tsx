import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LunaBorea",
  description: "Try looking into that place where you dare not look! You'll find me there, staring out at you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
