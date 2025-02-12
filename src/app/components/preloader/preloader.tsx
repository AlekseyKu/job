// src/app/components/preloader/preloader.tsx
"use client";

import React, { useState, useEffect } from "react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Задержка для скрытия прелоадера (можете настроить по своему)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p style={{ color: "#000", fontSize: "24px" }}>Loading...</p>
    </div>
  );
};

export default Preloader;
