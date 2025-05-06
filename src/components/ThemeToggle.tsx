"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-full  p-2 bg-[#896aff] hover:bg-[#6d45fc] dark:bg-[#eee]/30 dark:hover:bg-[#eee]/100 transition-all duration-300"
        onClick={() => toggleDarkMode("system")}
      >
        ⚙️
      </button>
      <button
        className="rounded-full  p-2 bg-[#896aff] hover:bg-[#6d45fc] dark:bg-[#eee]/30 dark:hover:bg-[#eee]/100 transition-all duration-300"
        onClick={() => toggleDarkMode("dark")}
      >
        🌑
      </button>
      <button
        className="rounded-full  p-2 bg-[#896aff] hover:bg-[#6d45fc] dark:bg-[#eee]/30 dark:hover:bg-[#eee]/100 transition-all duration-300"
        onClick={() => toggleDarkMode("light")}
      >
        ☀️
      </button>
    </div>
  );
}
