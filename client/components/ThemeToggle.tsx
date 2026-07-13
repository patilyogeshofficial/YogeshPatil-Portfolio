import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      // Default to dark theme
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      if (!savedTheme) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      size="lg"
      className="fixed bottom-4 right-4 z-[60] w-10 h-10 sm:w-14 sm:h-14 rounded-full backdrop-blur-md border transition-all duration-500 shadow-lg hover:shadow-xl group bg-white/90 border-gray-300 hover:bg-blue-50/90 hover:border-blue-400/50 toggle-bg-responsive"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center">
        <img
          src={
            isDark
              ? "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Fd6eb0ab2b8bd4519ad41ab6a5d19f5b7?format=webp&width=800"
              : "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2F65c82b4b4e0d4568989c229972d1fcc4?format=webp&width=800"
          }
          alt={
            isDark
              ? "Sun icon - Switch to light mode"
              : "Moon icon - Switch to dark mode"
          }
          className={`w-4 h-4 sm:w-6 sm:h-6 transition-all duration-500 group-hover:scale-110 ${
            isDark
              ? "filter brightness-110 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(255,223,0,0.6)]"
              : "filter group-hover:brightness-90 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          }`}
        />

        {/* Animated glow effect */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-r from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/20 group-hover:to-orange-400/20"
              : "bg-gradient-to-r from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/20 group-hover:to-indigo-400/20"
          }`}
        />
      </div>

      {/* Mode indicator text */}
      <div
        className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
          isDark
            ? "bg-yellow-400/90 text-yellow-900"
            : "bg-blue-500/90 text-white"
        }`}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </div>
    </Button>
  );
}
