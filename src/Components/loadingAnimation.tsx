import React from "react";
import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";

const LoadingAnimation: React.FC = () => {
  return (
    <motion.div
      className="border-primary-500 h-12 w-12 rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <DiReact className="text-5xl" />
    </motion.div>
  );
};

export default LoadingAnimation;
