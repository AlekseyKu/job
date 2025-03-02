"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./loader";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return; // 🔥 Не запускаем логику на сервере

    setLoading(true);
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Можно уменьшить

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (typeof window === "undefined" || loading) {
    return <Loader />; // 🔥 Теперь прелоадер рендерится только на клиенте
  }

  return <>{children}</>;
};

export default LoadingWrapper;
