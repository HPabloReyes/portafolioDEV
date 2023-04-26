import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedText({ text }) {
  const [ref, inView] = useInView({
    threshold: 0.5, // Configura el umbral de visibilidad al 50%
    triggerOnce: true, // Activa el gatillo solo una vez
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  );
}
