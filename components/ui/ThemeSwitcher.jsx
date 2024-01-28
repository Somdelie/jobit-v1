// app/components/ThemeSwitcher.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center border-gray-300 border bg-[#65758569] bg-gray-600 rounded-full w-[49px]">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="dark:translate-x-6 transition text-roseRed bg-white dark:text-gray-300 justify-center p-1 dark:bg-gray-900 rounded-full text-xs flex items-center "
      >
        {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
      </button>
    </div>
  );
}
