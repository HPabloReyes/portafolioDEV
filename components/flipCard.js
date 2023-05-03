import { motion } from "framer-motion";
import { useState } from "react";

export default function FlipCard({ frontCard, backCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="card"
      onClick={handleHover}
      animate={{
        rotateX: isFlipped ? 180 : 0,
        transition: { duration: 0.5 },
      }}
    >
      <motion.div
        className="card-front"
        animate={{ opacity: isFlipped ? 0 : 1 }}
      >
        <div className="card-container">{frontCard}</div>
      </motion.div>
      <motion.div
        className="card-back"
        animate={{
          opacity: isFlipped ? 1 : 0,
          rotateX: 180,
        }}
      >
        <div className="relative">
          <div className={isFlipped ? "card-container" : "fliped"}>
            {backCard}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
