import React from "react";
import { motion } from "framer-motion";
const Box3 = () => {
  const boxVariable = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const listVariable = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        variants={boxVariable}
        className="box"
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box, index) => {
          return (
            <motion.li
              key={index}
              variants={listVariable}
              className="boxItem"
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
