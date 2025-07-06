import { motion } from "framer-motion";
import { useExport } from "../hooks/useExport.js";
import { calculateInvestmentResults } from "../util/investment.js";
import InvestmentSummary from "./InvestmentSummary.jsx";
import InvestmentTable from "./InvestmentTable.jsx";
import Button from "./common/Button.jsx";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const { exportToCSV } = useExport();

  const handleExport = () => {
    exportToCSV(resultsData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <motion.div
      id="results-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <InvestmentSummary resultsData={resultsData} input={input} />
      </motion.div>

      <motion.div className="table-controls" variants={itemVariants}>
        <Button onClick={handleExport} variant="secondary">
          Export to CSV
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <InvestmentTable resultsData={resultsData} />
      </motion.div>
    </motion.div>
  );
}
