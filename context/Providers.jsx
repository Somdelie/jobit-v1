// app/providers.tsx
"use client";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}
