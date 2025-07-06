import { motion } from "framer-motion";
import Button from "./common/Button.jsx";
import InputField from "./common/InputField.jsx";

const INPUT_CONFIGS = [
  {
    key: "initialInvestment",
    label: "Initial Investment ($)",
    min: 1,
    step: 100,
    placeholder: "Enter initial amount",
  },
  {
    key: "annualInvestment",
    label: "Annual Investment ($)",
    min: 0,
    step: 100,
    placeholder: "Enter annual contribution",
  },
  {
    key: "expectedReturn",
    label: "Expected Return (%)",
    min: -100,
    max: 100,
    step: 0.1,
    placeholder: "Enter expected return rate",
  },
  {
    key: "duration",
    label: "Duration (Years)",
    min: 1,
    max: 100,
    step: 1,
    placeholder: "Enter investment duration",
  },
];

export default function UserInput({ onChange, userInput, errors, onReset }) {
  const handleInputChange = (field) => (event) => {
    onChange(field, event.target.value);
  };

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
    <motion.section
      id="user-input"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="input-controls" variants={itemVariants}>
        <Button onClick={onReset} variant="secondary">
          Reset to Defaults
        </Button>
      </motion.div>

      <motion.div className="input-groups" variants={containerVariants}>
        {INPUT_CONFIGS.reduce((groups, config, index) => {
          if (index % 2 === 0) {
            groups.push([]);
          }
          groups[groups.length - 1].push(config);
          return groups;
        }, []).map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            className="input-group"
            variants={itemVariants}
          >
            {group.map((config) => (
              <InputField
                key={config.key}
                label={config.label}
                value={userInput[config.key]}
                onChange={handleInputChange(config.key)}
                error={errors[config.key]}
                min={config.min}
                max={config.max}
                step={config.step}
                placeholder={config.placeholder}
                required
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
