import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JOBIT",
  description: "Best Freelancers you can find",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-indigo-50 via-white to-cyan-100`}
      >
        {children}
      </body>
    </html>
  );
}
