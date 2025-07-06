import { motion } from "framer-motion";

const PRESET_CONFIGS = [
  {
    name: "Conservative",
    description: "Low risk, steady growth",
    settings: {
      initialInvestment: 10000,
      annualInvestment: 2000,
      expectedReturn: 4,
      duration: 20,
    },
  },
  {
    name: "Moderate",
    description: "Balanced risk and return",
    settings: {
      initialInvestment: 15000,
      annualInvestment: 3000,
      expectedReturn: 7,
      duration: 15,
    },
  },
  {
    name: "Aggressive",
    description: "High risk, high potential return",
    settings: {
      initialInvestment: 20000,
      annualInvestment: 5000,
      expectedReturn: 10,
      duration: 10,
    },
  },
  {
    name: "Retirement",
    description: "Long-term retirement planning",
    settings: {
      initialInvestment: 5000,
      annualInvestment: 6000,
      expectedReturn: 6,
      duration: 30,
    },
  },
];

function PresetCard({ preset, onApply, index }) {
  const { name, description, settings } = preset;

  return (
    <motion.div
      className="preset-card"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow: "0 15px 30px rgba(118, 192, 174, 0.4)",
        transition: { type: "spring", stiffness: 300, damping: 30 },
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {name}
      </motion.h3>
      <motion.p
        className="preset-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="preset-details"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        <p>Initial: ${settings.initialInvestment.toLocaleString()}</p>
        <p>Annual: ${settings.annualInvestment.toLocaleString()}</p>
        <p>Return: {settings.expectedReturn}%</p>
        <p>Duration: {settings.duration} years</p>
      </motion.div>
      <motion.button
        onClick={() => onApply(settings)}
        className="apply-preset-btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.5 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply Preset
      </motion.button>
    </motion.div>
  );
}

export default function Presets({ onApplyPreset }) {
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

  return (
    <motion.section
      id="presets"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Investment Presets
      </motion.h2>
      <motion.div className="presets-grid" variants={containerVariants}>
        {PRESET_CONFIGS.map((preset, index) => (
          <PresetCard
            key={preset.name}
            preset={preset}
            onApply={onApplyPreset}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
