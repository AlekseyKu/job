"use client";
import React, { useEffect, useState } from "react";

interface PreloadWrapperProps {
  children: React.ReactNode;
}

const PreloadWrapper: React.FC<PreloadWrapperProps> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    // Если документ уже загружен, сразу переключаем состояние
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loaded) {
    return (
      <div className="preloader">
        <div className="spinner"></div>
        <p style={{ color: "#000", fontSize: "24px" }}>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadWrapper;
