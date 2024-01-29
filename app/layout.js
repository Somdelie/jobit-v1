import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "JOBIT",
    template: "%s | JOBIT",
  },
  icons: {
    icon: "/favicon.png", // /public path
  },
  description: "Best Freelancers you can find",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-300 to-white dark:from-gray-800 dark:to-gray-800 dark:bg-gray-800 transition `}
      >
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
