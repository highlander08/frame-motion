import React, { useState } from "react";
import { motion } from "framer-motion";
const Box1 = () => {
  const [first, setfirst] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{ x: first ? 900 : 0 , opacity: first ? 1 : 0.5, rotate: first ? 360 : 0 }}
        initial={{ opacity: 0.1 }}
        transition={{ type: "spring", stiffness: 60 }}
        onClick={() => setfirst(!first)}
      />
    </div>
  );
};

export default Box1;
