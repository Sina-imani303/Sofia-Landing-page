"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

const STAGGER = 0.035;

export default function Subscription() {
  return (
    <section className="relative top-16 w-full overflow-hidden bg-[#070B10] py-20 md:top-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <TextRoll className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl ">
            Building Modern
          </TextRoll>

          <TextRoll className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
            Digital Experiences
          </TextRoll>

          <p className="mx-auto mt-8 max-w-3xl px-2 text-base leading-7 text-gray-400 md:mt-10 md:px-0 md:text-xl md:leading-8">
            We create high-performance websites, SaaS platforms, and custom
            software solutions that help businesses grow faster and deliver
            exceptional user experiences.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:mt-20 lg:mt-24 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-3xl border border-white/10 bg-linear-to-b from-[#141A20] to-[#0E1318] p-6 md:p-8 lg:rounded-4xl">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Starter
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400 md:text-base">
              Perfect for startups and small businesses looking to establish a
              professional online presence.
            </p>

            <div className="mt-8">
              <span className="text-4xl font-bold text-white md:text-5xl">
                $499
              </span>
              <span className="ml-2 text-base text-gray-400 md:text-xl">
                / project
              </span>
            </div>

            <button className="mt-8 w-full rounded-full border border-[#14B8A6] py-3 md:py-4 text-white transition-all duration-300 hover:bg-[#14B8A6] hover:text-black">
              Get Started
            </button>

            <div className="my-6 flex items-center gap-4 md:my-8">
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
    <div className="flex items-start gap-3">
      <Check size={18} className="mt-0.5 shrink-0 text-[#14B8A6]" />
      <span className="text-sm text-gray-300 md:text-base">{text}</span>
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
