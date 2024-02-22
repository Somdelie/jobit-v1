import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Thuso.com",
    template: "%s | | Thuso.com",
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
        <Providers>
          {children} <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
