// app/providers.tsx
"use client";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
