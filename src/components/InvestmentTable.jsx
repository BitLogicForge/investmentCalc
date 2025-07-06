import { motion } from "framer-motion";
import { formatter } from "../util/investment.js";

export default function InvestmentTable({ resultsData }) {
  if (!resultsData || resultsData.length === 0) return null;

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  const tableVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.table
      id="result"
      variants={tableVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.thead
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </motion.thead>
      <tbody>
        {resultsData.map((yearData, index) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <motion.tr
              key={yearData.year}
              variants={rowVariants}
              whileHover={{
                backgroundColor: "rgba(118, 192, 174, 0.1)",
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <motion.td
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.02 }}
              >
                {yearData.year}
              </motion.td>
              <motion.td
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 + index * 0.02 }}
              >
                {formatter.format(yearData.valueEndOfYear)}
              </motion.td>
              <motion.td
                className={yearData.interest >= 0 ? "positive" : "negative"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.34 + index * 0.02 }}
              >
                {formatter.format(yearData.interest)}
              </motion.td>
              <motion.td
                className={totalInterest >= 0 ? "positive" : "negative"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.36 + index * 0.02 }}
              >
                {formatter.format(totalInterest)}
              </motion.td>
              <motion.td
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 + index * 0.02 }}
              >
                {formatter.format(totalAmountInvested)}
              </motion.td>
            </motion.tr>
          );
        })}
      </tbody>
    </motion.table>
  );
}
