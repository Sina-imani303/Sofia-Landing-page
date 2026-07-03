"use client";
import Link from "next/link";
import React from "react";
import { FaReact, FaFigma, FaChartLine } from "react-icons/fa";

import { SiNextdotjs, SiTypescript } from "react-icons/si";

import { MdDashboard, MdManageAccounts } from "react-icons/md";

import { BsSpeedometer2 } from "react-icons/bs";

import { HiOutlineTemplate } from "react-icons/hi";

import { RiCustomerService2Line } from "react-icons/ri";
import {
  Briefcase,
  ChevronRight,
  Home,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
function FeaturePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <nav className="relative flex items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">SOFIA</div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/feature">Features</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          {open && (
            <div
              className="
      absolute
      left-0
      right-0
      top-[calc(100%+12px)]
      z-50
      origin-top
      animate-in
      fade-in
      zoom-in-95
      duration-200
      lg:hidden
    "
            >
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-[#1a1a1a]">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-gray-100 px-6 py-5 transition hover:bg-[#eef8f7] dark:border-gray-700 dark:hover:bg-[#202020]"
                >
                  <div className="flex items-center gap-4">
                    <Home
                      size={20}
                      className="text-[#14B8A6] transition group-hover:scale-110"
                    />

                    <span className="text-lg font-medium">Home</span>
                  </div>

                  <ChevronRight className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/feature"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-gray-100 px-6 py-5 transition hover:bg-[#eef8f7] dark:border-gray-700 dark:hover:bg-[#202020]"
                >
                  <div className="flex items-center gap-4">
                    <Sparkles
                      size={20}
                      className="text-[#14B8A6] transition group-hover:scale-110"
                    />

                    <span className="text-lg font-medium">Features</span>
                  </div>

                  <ChevronRight className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-gray-100 px-6 py-5 transition hover:bg-[#eef8f7] dark:border-gray-700 dark:hover:bg-[#202020]"
                >
                  <div className="flex items-center gap-4">
                    <Briefcase
                      size={20}
                      className="text-[#14B8A6] transition group-hover:scale-110"
                    />

                    <span className="text-lg font-medium">Services</span>
                  </div>

                  <ChevronRight className="transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between px-6 py-5 transition hover:bg-[#eef8f7] dark:hover:bg-[#202020]"
                >
                  <div className="flex items-center gap-4">
                    <Phone
                      size={20}
                      className="text-[#14B8A6] transition group-hover:scale-110"
                    />

                    <span className="text-lg font-medium">Contact</span>
                  </div>

                  <ChevronRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          )}
        </nav>
        <div className="bg-[#eef1f3]">
          <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xlfont-bold leading-tight">
                  <span className="text-[#14B8A6]">Powerful Features </span>
                  <br />
                  That Drive Results
                </h2>

                <p className="text-gray-500 mt-8 max-w-xl text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9">
                  We combine modern technologies, creative design, and strategic
                  thinking to build digital products that help businesses grow
                  faster and smarter.
                </p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative h-70 w-70 md:h-90 md:w-90 xl:h-112.5 xl:w-112.5">
                  <div className="absolute inset-0 rounded-full border border-gray-300" />
                  <div className="absolute inset-12 rounded-full border border-gray-300" />
                  <div className="absolute inset-24 rounded-full border border-gray-300" />
                  <div className="absolute inset-36 rounded-full border border-gray-300" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-black rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="overflow-hidden bg-[#eef1f3]">
          <section className="max-w-7xl mx-auto border-t border-gray-200 ">
            <div className="grid border-b border-gray-200 md:grid-cols-2 lg:grid-cols-5">
              <div className="border-b border-gray-200 p-6 md:p-8 lg:border-b-0">
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                  Development
                </p>
                <h3 className="mt-3 text-2xl font-medium md:text-3xl lg:text-4xl">
                  Modern
                  <br />
                  Development
                </h3>
              </div>
              <div
                className="    group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <SiNextdotjs
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Next.js
                </h4>

                <p className="mt-3 text-sm leading-7 text-gray-500 md:text-base">
                  Fast, scalable and SEO-friendly web applications.
                </p>
              </div>
              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <FaReact
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  React
                </h4>

                <p className="mt-4 text-gray-500">
                  Interactive and dynamic user experiences.
                </p>
              </div>
              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <SiTypescript
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  TypeScript
                </h4>

                <p className="mt-4 text-gray-500">
                  Type-safe and maintainable code architecture.
                </p>
              </div>
              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <BsSpeedometer2
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Performance
                </h4>

                <p className="mt-4 text-gray-500">
                  Optimized speed and Core Web Vitals.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 border-b border-gray-200">
              <div className="p-10">
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                  Design
                </p>

                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  UI/UX
                  <br />
                  Design
                </h3>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <FaFigma
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Figma
                </h4>

                <p className="mt-4 text-gray-500">
                  Modern interface and design systems.
                </p>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <HiOutlineTemplate
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Wireframes
                </h4>

                <p className="mt-4 text-gray-500">
                  Structured planning before development.
                </p>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <FaChartLine
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Prototype
                </h4>

                <p className="mt-4 text-gray-500">
                  Interactive product validation and testing.
                </p>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <RiCustomerService2Line
                  size={32}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Research
                </h4>

                <p className="mt-4 text-gray-500">
                  Understanding users and customer needs.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-5">
              <div className="p-10">
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                  Solutions
                </p>

                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Business
                  <br />
                  Solutions
                </h3>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <MdDashboard
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Dashboard
                </h4>

                <p className="mt-4 text-gray-500">
                  Data visualization and analytics platforms.
                </p>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <MdManageAccounts
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  Admin Panel
                </h4>

                <p className="mt-4 text-gray-500">
                  Powerful management systems for businesses.
                </p>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <RiCustomerService2Line
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  CRM
                </h4>

                <p className="mt-4 text-gray-500">
                  Customer and sales management solutions.
                </p>
              </div>

              <div
                className="  group border-t
    border-gray-200
    p-6
    transition-all
    duration-300
    hover:bg-white
    md:p-8
    lg:border-l
    lg:border-t-0
    lg:p-10"
              >
                <FaChartLine
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#14B8A6] md:text-2xl">
                  SaaS
                </h4>

                <p className="mt-4 text-gray-500">
                  Scalable cloud-based software products.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default FeaturePage;
