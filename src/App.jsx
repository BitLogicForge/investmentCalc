import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Header from "./components/Header.jsx";
import Presets from "./components/Presets.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import Button from "./components/common/Button.jsx";
import ErrorDisplay from "./components/common/ErrorDisplay.jsx";
import { useInvestmentCalculator } from "./hooks/useInvestmentCalculator.js";

function App() {
  const [showPresets, setShowPresets] = useState(false);
  const {
    userInput,
    errors,
    isValid,
    updateInput,
    resetToDefaults,
    applyPreset,
  } = useInvestmentCalculator();

  const handleApplyPreset = (presetSettings) => {
    applyPreset(presetSettings);
    setShowPresets(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />

      <main role="main">
        <motion.section
          className="app-controls"
          aria-label="Investment calculator controls"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button
            onClick={() => setShowPresets(!showPresets)}
            variant="secondary"
            aria-expanded={showPresets}
            aria-controls="presets-section"
          >
            {showPresets ? "Hide Presets" : "Show Presets"}
          </Button>
        </motion.section>

        <AnimatePresence>
          {showPresets && (
            <motion.section
              id="presets-section"
              aria-label="Investment presets"
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Presets onApplyPreset={handleApplyPreset} />
            </motion.section>
          )}
        </AnimatePresence>

        <motion.section
          aria-label="Investment input form"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <UserInput
            userInput={userInput}
            onChange={updateInput}
            errors={errors}
            onReset={resetToDefaults}
          />
        </motion.section>

        <AnimatePresence>
          {Object.keys(errors).length > 0 && (
            <motion.section
              aria-label="Input validation errors"
              role="alert"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ErrorDisplay errors={errors} />
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isValid && Object.keys(errors).length === 0 && (
            <motion.section
              role="alert"
              aria-live="polite"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="center error">
                Please enter a duration greater than zero.
              </p>
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isValid && (
            <motion.section
              key="results"
              aria-label="Investment calculation results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Results input={userInput} />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
}

export default App;
