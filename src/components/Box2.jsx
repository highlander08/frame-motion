import React from "react";
import { motion } from "framer-motion";
const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag
        // dragConstraints={{
        //   left: -10,
        //   bottom: 20,
        //   top: 20,
        //   right: 80,
        // }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
};

export default Box2;
