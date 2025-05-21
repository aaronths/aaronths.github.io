import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";

const ScrollContext = createContext<(sectionId: string) => void>(() => {});

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ScrollContext.Provider value={scrollToSection}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
