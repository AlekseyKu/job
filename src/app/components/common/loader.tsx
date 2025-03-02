"use client";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      suppressHydrationWarning={true}
    >
      <div className="loader">
        <div className="circle primary"></div>
        <div className="circle secondary"></div>
      </div>
    </motion.div>
  );
};

export default Loader;
