import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`fixed bottom-4 right-4 cursor-pointer ${
        isVisible ? "visible" : "invisible"
      }`}
      style={{ zIndex: 9999 }}
      onClick={goToTop}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={arrowVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="relative bg-gray-500 text-white rounded-full px-4 py-2 opacity-80 hover:opacity-100">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-btn_colors rounded-full shadow-md shadow-secondary border-2 opacity-80 hover:opacity-100" />
          <div className="relative z-10 flex items-center">
            <FiArrowUp />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GoToTop;
