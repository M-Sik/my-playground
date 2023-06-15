import React, { createContext, useState, ReactNode } from 'react';

export const DarkModeContext = createContext(null);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
