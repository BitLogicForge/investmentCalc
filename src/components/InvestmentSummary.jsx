import { motion } from "framer-motion";
import { formatter } from "../util/investment.js";

export default function InvestmentSummary({ resultsData, input }) {
  if (!resultsData || resultsData.length === 0) return null;

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  const finalValue = resultsData[resultsData.length - 1].valueEndOfYear;
  const totalInvested =
    initialInvestment + input.annualInvestment * input.duration;
  const totalGain = finalValue - totalInvested;
  const totalReturn = ((finalValue - totalInvested) / totalInvested) * 100;

  const summaryData = [
    {
      label: "Final Value",
      value: formatter.format(finalValue),
      className: "",
    },
    {
      label: "Total Invested",
      value: formatter.format(totalInvested),
      className: "",
    },
    {
      label: "Total Gain",
      value: formatter.format(totalGain),
      className: totalGain >= 0 ? "positive" : "negative",
    },
    {
      label: "Total Return",
      value: `${totalReturn.toFixed(2)}%`,
      className: totalReturn >= 0 ? "positive" : "negative",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.div
      className="summary-cards"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {summaryData.map((item, index) => (
        <motion.div
          key={index}
          className="summary-card"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 10px 25px rgba(118, 192, 174, 0.4)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            {item.label}
          </motion.h3>
          <motion.p
            className={`summary-value ${item.className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2 + index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {item.value}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
}
