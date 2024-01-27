import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JOBIT",
  description: "Best Freelancers you can find",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  dark:bg-gray-800 transition `}>
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
