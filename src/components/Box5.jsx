import React from "react";
import { motion, useAnimation } from "framer-motion";
const Box5 = () => {
  const control = useAnimation();
  return (
    <div className="box-container">
      <button
        onClick={() =>
          control.start({
            x: 1000,
            transition: {
              duration: 2,
            },
          })
        }
      >
        {" "}
        mover direita
      </button>
      <button
        onClick={() =>
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          })
        }
      >
        mover esquerda
      </button>
      <button
        onClick={() =>
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 1,
            },
          })
        }
      >
        circulo
      </button>
      <button
         onClick={() =>
          control.start({
            borderRadius: 0,
            transition: {
              duration: 1,
            },
          })
        }
      >
        quadrado
      </button>
      <button
        onClick={() =>
          control.stop()
        }
      >
        parar
      </button>

      <motion.div className="box" animate={control} />
    </div>
  );
};

export default Box5;
