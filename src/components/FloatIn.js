import { motion } from "motion/react";

export default function FloatIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: "15px" }}
      whileInView={{ opacity: 1, marginTop: "0px" }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
