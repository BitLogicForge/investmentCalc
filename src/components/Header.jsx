import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  const [showDescription, setShowDescription] = useState(false);

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

      {/* Expandable Description Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{ textAlign: "center", marginTop: "1.5rem" }}
      >
        <motion.button
          onClick={() => setShowDescription(!showDescription)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "linear-gradient(135deg, #4caf50, #45a049)",
            color: "white",
            border: "none",
            padding: "0.7rem 1.5rem",
            borderRadius: "25px",
            fontSize: "0.9rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(76, 175, 80, 0.3)",
            transition: "all 0.3s ease",
          }}
          aria-expanded={showDescription}
          aria-controls="app-description"
        >
          {showDescription ? "Hide Details" : "Discover What's Possible"}
          <motion.span
            animate={{ rotate: showDescription ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginLeft: "0.5rem", display: "inline-block" }}
          >
            ▼
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Expandable Description Content */}
      <AnimatePresence>
        {showDescription && (
          <motion.div
            id="app-description"
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              marginTop: "2rem",
              maxWidth: "800px",
              margin: "2rem auto 0",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                borderRadius: "15px",
                padding: "2rem",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  color: "#e1eeeb",
                  marginBottom: "1.5rem",
                  fontSize: "1.3rem",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                🚀 Unlock Your Financial Potential
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <h4
                    style={{
                      color: "#4caf50",
                      marginBottom: "0.8rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    💰 Smart Investment Planning
                  </h4>
                  <ul
                    style={{
                      color: "#b8d4c8",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      listStyle: "none",
                      padding: 0,
                    }}
                  >
                    <li>• Calculate compound interest growth over time</li>
                    <li>• Plan retirement savings with precision</li>
                    <li>• Compare different investment strategies</li>
                    <li>• Visualize year-by-year portfolio growth</li>
                  </ul>
                </div>

                <div>
                  <h4
                    style={{
                      color: "#4caf50",
                      marginBottom: "0.8rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    🎯 Customizable Scenarios
                  </h4>
                  <ul
                    style={{
                      color: "#b8d4c8",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      listStyle: "none",
                      padding: 0,
                    }}
                  >
                    <li>• Conservative, Moderate & Aggressive presets</li>
                    <li>• Adjust initial investment amounts</li>
                    <li>• Set annual contribution goals</li>
                    <li>• Test different return rates</li>
                  </ul>
                </div>

                <div>
                  <h4
                    style={{
                      color: "#4caf50",
                      marginBottom: "0.8rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    📊 Professional Tools
                  </h4>
                  <ul
                    style={{
                      color: "#b8d4c8",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      listStyle: "none",
                      padding: 0,
                    }}
                  >
                    <li>• Export detailed calculations to CSV</li>
                    <li>• Real-time input validation</li>
                    <li>• Automatic data persistence</li>
                    <li>• Mobile-responsive design</li>
                  </ul>
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  background: "rgba(76, 175, 80, 0.1)",
                  borderRadius: "10px",
                  border: "1px solid rgba(76, 175, 80, 0.2)",
                }}
              >
                <p
                  style={{
                    color: "#e1eeeb",
                    fontSize: "1rem",
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  "The best time to plant a tree was 20 years ago. The second
                  best time is now."
                </p>
                <p
                  style={{
                    color: "#4caf50",
                    fontSize: "0.9rem",
                    margin: "0.5rem 0 0 0",
                    fontWeight: "500",
                  }}
                >
                  Start planning your financial future today!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
