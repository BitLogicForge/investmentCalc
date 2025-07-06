import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={
        !disabled
          ? {
              scale: 1.05,
              y: -2,
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }
          : {}
      }
      whileTap={
        !disabled
          ? {
              scale: 0.95,
              y: 0,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
