import React, { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";

type ThemeMode = "coding" | "personal";

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  isCodingMode: () => boolean;
  isPersonalMode: () => boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>("coding");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "coding" ? "personal" : "coding"));
  };

  const isCodingMode = () => mode === "coding";
  const isPersonalMode = () => mode === "personal";

  useEffect(() => {
    // Remove both theme classes first
    document.documentElement.classList.remove("theme-coding", "theme-personal");
    // Add the current theme class
    document.documentElement.classList.add(`theme-${mode}`);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{ mode, toggleMode, isCodingMode, isPersonalMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
