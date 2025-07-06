import { AnimatePresence, motion } from "framer-motion";

export default function InputField({
  label,
  value,
  onChange,
  error,
  type = "number",
  min,
  max,
  step,
  placeholder,
  ...props
}) {
  return (
    <motion.div
      className="input-field"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.label
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.label>
      <motion.input
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        className={error ? "error" : ""}
        whileFocus={{
          scale: 1.02,
          borderColor: "#83e6c0",
          boxShadow: "0 0 0 3px rgba(131, 230, 192, 0.3)",
        }}
        transition={{ duration: 0.2 }}
        {...props}
      />
      <AnimatePresence>
        {error && (
          <motion.span
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
