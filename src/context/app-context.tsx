// src\context\app-context.tsx
import React, { useState, createContext, useContext, useCallback, useMemo } from "react";

interface AppContextType {
  isEnter: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.error("useAppContext must be used within an AppContextProvider");
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  // ✅ useCallback предотвращает пересоздание функций при каждом ререндере
  const handleMouseEnter = useCallback(() => setIsEnter(true), []);
  const handleMouseLeave = useCallback(() => setIsEnter(false), []);

  // ✅ useMemo включает все зависимости, чтобы избежать warning'ов
  const values = useMemo(() => ({
    isEnter,
    handleMouseEnter,
    handleMouseLeave,
  }), [isEnter, handleMouseEnter, handleMouseLeave]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default ContextProvider;
