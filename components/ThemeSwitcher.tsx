"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-16 glass-strong rounded-2xl flex items-center justify-center group overflow-hidden border border-white/20 dark:border-white/20 hover:border-primary/30 transition-all duration-500"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Background gradient that changes with theme */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
          theme === "dark"
            ? "gradient-primary"
            : "bg-gradient-to-br from-orange-400 to-pink-500"
        }`}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <Sun className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <Moon className="w-7 h-7 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          y: [0, -8, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.button>
  );
}
