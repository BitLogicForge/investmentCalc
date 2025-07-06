import { motion } from "framer-motion";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <motion.header
      id="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        src={logo}
        alt="Logo showing a money bag"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.1,
          rotate: 10,
          transition: { duration: 0.3 },
        }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Investment Calculator
      </motion.h1>
    </motion.header>
  );
}
