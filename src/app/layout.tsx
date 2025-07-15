import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ananya's Portfolio",
  description: "Showcasing development and artwork",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}