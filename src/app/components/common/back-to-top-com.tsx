"use client";
import BackToTop from "@/lib/back-to-top";
import React, { useEffect } from "react";

function BackToTopCom() {
  useEffect(() => {
    BackToTop(".scroll__top");
  }, []);
  return (
    <button 
      className="scroll__top scroll-to-target" 
      data-target="html"
      aria-label="Scroll back to top"
    >
      <i className="flaticon-right-arrow" aria-hidden="true"></i>
      <span className="sr-only">Scroll back to top</span>
    </button>
  );
}

export default BackToTopCom;
