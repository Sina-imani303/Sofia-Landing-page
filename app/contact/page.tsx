"use client";
import { ArrowUpRight, Briefcase, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock3 } from "lucide-react";
import Home from "../page";
import Footer from "@/components/Footer/Footer";

function ContactPage() {
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
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-[35%_65%] gap-12 items-center">
              <div>
                <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-8">
                  Contact Us
                </p>

                <h1 className="text-6xl lg:text-7xl font-medium leading-none">
                  Let`s Build
                  <br />
                  <span className="text-[#14B8A6]">Something </span> Great
                  <br />
                  <span className="text-[#14B8A6]"> Together</span>
                </h1>

                <p className="mt-10 text-gray-500 text-xl leading-9 max-w-md">
                  Have a Project in mind? we`d Love to hear about it Tell us
                  about your goals and Let`s Create Something exceptional
                </p>

                <button className="group flex items-center  mt-10  bg-black text-white px-8 py-5 rounded-2xl font-medium transition-all hover:scale-105">
                  Start Your Project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>

              <div>
                <Image
                  src="/banner/banner10.png"
                  alt="Services"
                  width={1600}
                  height={900}
                  priority
                  className="
                w-full
               
                object-contain
                rounded-[28px]
                shadow-lg
              "
                />
              </div>
            </div>
          </section>
          <div className="bg-white">
            <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
              <div className="grid gap-10 lg:grid-cols-[350px_1fr] lg:gap-16">
                <div>
                  <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl">
                    Get In Touch
                  </h2>

                  <p className="mt-6 text-base leading-7 text-gray-500 md:mt-8 md:text-lg md:leading-8">
                    We`re here to answer any questions you may have. Reach out
                    to us and we`ll respond as soon as possible.
                  </p>

                  <div className="mt-14 space-y-8">
                    <div className="flex items-center gap-5 border-b border-gray-200 pb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#f7f7f7] flex items-center justify-center">
                        <Mail size={24} />
                      </div>

                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-500 mt-1">hello@sofia.dev</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 border-b border-gray-200 pb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#f7f7f7] flex items-center justify-center">
                        <Phone size={24} />
                      </div>

                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-500 mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 border-b border-gray-200 pb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#f7f7f7] flex items-center justify-center">
                        <MapPin size={24} />
                      </div>

                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-gray-500 mt-1">Tehran, Iran</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#f7f7f7] flex items-center justify-center">
                        <Clock3 size={24} />
                      </div>

                      <div>
                        <h4 className="font-medium">Working Hours</h4>
                        <p className="text-gray-500 mt-1">
                          Mon - Fri, 9AM - 6PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-4xl p-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-3 text-sm font-medium">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full h-14 rounded-xl border border-gray-200 px-4 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block mb-3 text-sm font-medium">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full h-14 rounded-xl border border-gray-200 px-4 outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block mb-3 text-sm font-medium">
                      Company Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your company name"
                      className="w-full h-14 rounded-xl border border-gray-200 px-4 outline-none"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block mb-3 text-sm font-medium">
                      Project Budget
                    </label>

                    <select
                      title="select"
                      className="w-full h-14 rounded-xl border border-gray-200 px-4 outline-none"
                    >
                      <option>Select your budget</option>
                      <option>$1k - $5k</option>
                      <option>$5k - $10k</option>
                      <option>$10k+</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="block mb-3 text-sm font-medium">
                      Project Details
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-xl border border-gray-200 p-4 outline-none resize-none"
                    />
                  </div>

                  <button className="mt-8 w-full h-14 rounded-xl bg-black text-white font-medium">
                    Send Message
                  </button>
                </div>
              </div>
            </section>
            <section className="max-w-7xl mx-auto py-24">
              <div className="relative overflow-hidden rounded-[40px] bg-linaer-to-br from-black via-[#05070b] to-[#0a0f18] p-px">
                <div className="absolute inset-0 rounded-[40px] bg-linaer-to-r from-white/5 via-white/10 to-white/5" />

                <div className="relative rounded-[40px] bg-[#05070b] px-10 md:px-16 py-20">
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
                    <div className="absolute right-50 top-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-white/10" />
                    <div className="absolute right-30 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full border border-white/10" />
                    <div className="absolute right-12.5 top-1/2 -translate-y-1/2 w-75 h-75 rounded-full border border-white/10" />
                  </div>

                  <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
                    <div>
                      <span className="uppercase tracking-[0.35em] text-xs text-white/50">
                        Ready To Start?
                      </span>

                      <h2 className="mt-6 text-white text-5xl md:text-6xl font-medium leading-[1.05] max-w-3xl">
                        Let’s <span className="text-[#14B8A6]">Build</span> Your
                        <br />
                        <span className="text-[#14B8A6]"> Next</span> Digital
                        <span className="text-[#14B8A6]"> Product</span>
                      </h2>

                      <p className="mt-8 text-white/60 text-lg leading-8 max-w-2xl">
                        From modern websites and SaaS platforms to custom
                        software, we help ambitious businesses turn ideas into
                        scalable products.
                      </p>
                    </div>

                    <button className="group flex items-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-medium transition-all hover:scale-105">
                      Start Your Project
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
