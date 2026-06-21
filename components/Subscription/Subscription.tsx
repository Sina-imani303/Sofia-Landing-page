"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

const STAGGER = 0.035;

export default function Subscription() {
  return (
    <section className="w-full bg-[#070B10] py-32 overflow-hidden  relative  top-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <TextRoll className="text-white text-5xl md:text-7xl font-bold">
            Building Modern
          </TextRoll>

          <TextRoll className="text-white text-5xl md:text-7xl font-bold mt-4">
            Digital Experiences
          </TextRoll>

          <p className="mt-10 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            We create high-performance websites, SaaS platforms, and custom
            software solutions that help businesses grow faster and deliver
            exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          <div className="rounded-4xl border border-white/10 bg-linear-to-b from-[#141A20] to-[#0E1318] p-8">
            <h3 className="text-white text-3xl font-semibold">Starter</h3>

            <p className="text-gray-400 mt-4 leading-7">
              Perfect for startups and small businesses looking to establish a
              professional online presence.
            </p>

            <div className="mt-8">
              <span className="text-white text-5xl font-bold">$499</span>
              <span className="text-gray-400 text-xl ml-2">/ project</span>
            </div>

            <button className="w-full mt-8 py-4 rounded-full border border-[#14B8A6] text-white hover:bg-[#14B8A6] hover:text-black transition-all duration-300">
              Get Started
            </button>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-gray-400">Features</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="space-y-5">
              <Feature text="Responsive Website Design" />
              <Feature text="Next.js Development" />
              <Feature text="SEO Optimization" />
              <Feature text="Contact Form Integration" />
            </div>
          </div>

          <div className="rounded-4xl border border-[#14B8A6]/30 bg-linaer-to-b from-[#141A20] to-[#0E1318] p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-[#14B8A6]/10 blur-3xl rounded-full" />

            <h3 className="text-white text-3xl font-semibold">Enterprise</h3>

            <p className="text-gray-400 mt-4 leading-7">
              Complete digital solutions for growing businesses that need
              scalability, performance and long-term support.
            </p>

            <div className="mt-8">
              <span className="text-white text-5xl font-bold">$1999</span>
              <span className="text-gray-400 text-xl ml-2">/ project</span>
            </div>

            <button className="w-full mt-8 py-4 rounded-full bg-[#14B8A6] text-black font-semibold hover:opacity-90 transition">
              Contact Us
            </button>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-gray-400">Features</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="space-y-5">
              <Feature text="Custom SaaS Platform" />
              <Feature text="Advanced Dashboard" />
              <Feature text="API Integrations" />
              <Feature text="Priority Support" />
              <Feature text="Performance Optimization" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Check size={18} className="text-[#14B8A6]" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

function TextRoll({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden ${className}`}
      style={{ lineHeight: 1.3 }}
    >
      <div>
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block text-[#14B8A6]"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
}
