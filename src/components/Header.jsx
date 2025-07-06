import { motion } from "framer-motion";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <motion.header
      id="header"
      role="banner"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        src={logo}
        alt="Investment Calculator logo - Money bag representing financial growth and compound interest calculations"
        width="180"
        height="180"
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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{
          marginTop: "1rem",
          fontSize: "1.1rem",
          color: "#b8d4c8",
          textAlign: "center",
          maxWidth: "600px",
          margin: "1rem auto 0",
        }}
      >
        Calculate compound interest and plan your financial future with
        customizable investment scenarios
      </motion.p>
    </motion.header>
  );
}
