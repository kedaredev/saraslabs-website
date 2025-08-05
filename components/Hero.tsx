"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Code, Zap } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 gradient-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 gradient-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full shadow-glow"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-pink-400 rounded-full shadow-glow-pink"
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full shadow-glow"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-foreground/90 font-medium">
              Welcome to the Future of Development
            </span>
            <Zap className="w-5 h-5 text-pink-400" />
          </motion.div>

          {/* Main Heading - Reduced font sizes */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-gradient block">We Craft</span>
            <span className="text-foreground block">Digital Solutions</span>
            <span className="text-gradient-secondary block">
              with Passion 💙
            </span>
          </motion.h1>

          {/* Subtitle - Reduced font size */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {companyInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="group relative px-8 py-4 gradient-primary rounded-2xl font-bold text-lg text-white shadow-glow overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center gap-3">
                {"Let's Talk"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              onClick={scrollToServices}
              className="group glass-strong px-8 py-4 rounded-2xl font-bold text-lg text-foreground border border-foreground/20 hover:border-foreground/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                View Our Work
              </span>
            </motion.button>
          </motion.div>

          {/* Floating Code Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-10 glass w-16 h-16 rounded-2xl flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Code className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <motion.div
              className="absolute top-1/3 right-10 glass w-16 h-16 rounded-2xl flex items-center justify-center"
              animate={{
                y: [0, -25, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Zap className="w-8 h-8 text-pink-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
