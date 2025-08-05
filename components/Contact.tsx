"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle, Phone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { companyInfo } from "@/lib/data";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <SectionWrapper id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-foreground/90 font-medium">Get In Touch</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-gradient mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {"Let's Work Together"}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to transform your ideas into reality? Get in touch with us and
            {"let's"} discuss how we can help your business grow.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  info: companyInfo.email,
                  color: "text-cyan-400",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  info: companyInfo.address,
                  color: "text-pink-400",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "+1 (555) 123-4567",
                  color: "text-purple-400",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 group glass-strong p-6 rounded-2xl hover:border-white/20 border border-white/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 glass rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <contact.icon className={`w-8 h-8 ${contact.color}`} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-foreground/70 text-lg group-hover:text-foreground/90 transition-colors duration-300">
                      {contact.info}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="glass-strong p-8 rounded-3xl border border-white/20 space-y-6 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 gradient-accent rounded-full filter blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/90 mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-4 glass rounded-2xl border border-white/20 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-foreground placeholder-foreground/50 bg-transparent"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/90 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 glass rounded-2xl border border-white/20 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-foreground placeholder-foreground/50 bg-transparent"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/90 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-6 py-4 glass rounded-2xl border border-white/20 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-foreground placeholder-foreground/50 bg-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="group relative w-full gradient-primary px-8 py-5 rounded-2xl font-bold text-lg text-white shadow-glow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center justify-center gap-3">
                  Send Message
                  <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
