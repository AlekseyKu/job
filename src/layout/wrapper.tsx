// src/layout/wrapper.tsx
"use client";
import React from "react";
import dynamic from "next/dynamic";
import ContextProvider from "@/context/app-context";

// ✅ Динамические импорты
const BackToTopCom = dynamic(() => import("@/app/components/common/back-to-top-com"), { ssr: false });
// const AnimateMouse = dynamic(() => import("@/app/components/common/animated-mouse"), { ssr: false });
const ToastContainer = dynamic(() => import("react-toastify").then((mod) => mod.ToastContainer), { ssr: false });

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContextProvider>
      {/* ❌ Отключаем `AnimateMouse`, если он не критичен */}
      {/* <AnimateMouse /> */}

      {children}

      <BackToTopCom />

      {/* ✅ Ограничиваем `ToastContainer`, чтобы он не создавал лишние ререндеры */}
      <ToastContainer autoClose={3000} limit={1} />
    </ContextProvider>
  );
};

export default Wrapper;
