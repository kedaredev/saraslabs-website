"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group glass rounded-3xl p-8 hover:glass-strong transition-all duration-500 border border-foreground/10 hover:border-foreground/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Icon container */}
      <motion.div
        className="relative w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-8 shadow-glow"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 },
        }}
      >
        <Icon className="w-10 h-10 text-white" />

        {/* Floating particles */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [0, -10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          className="text-xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Hover effect border */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}
