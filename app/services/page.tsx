"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import {
  FiCode,
  FiPenTool,
  FiCloud,
  FiHeadphones,
  FiSearch,
  FiSend,
} from "react-icons/fi";

import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
function servicesPage() {
  return (
    <>
      <div className="">
        <nav className=" rounded-full px-8 py-3 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="w-8 h-6 rounded-md " />
            <h2 className="text-3xl leading-[1.2] font-light ">SOFIA</h2>
          </div>

          <div className="hidden md:flex items-center gap-10 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/feature">Features</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <div className="flex ">
              <button className="px-5 py-2 rounded-xl border text-white bg-black border-gray-200">
                Let`s Talk
              </button>
            </div>
          </div>
        </nav>
        <div className="bg-[#eef1f3]">
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-[35%_65%] gap-12 items-center">
              <div>
                <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-8">
                  Services
                </p>

                <h1 className="text-6xl lg:text-7xl font-medium leading-none">
                  Our <span className="text-[#14B8A6]"> Services</span>
                </h1>

                <p className="mt-10 text-gray-500 text-xl leading-9 max-w-md">
                  We help businesses build modern websites, scalable software,
                  and exceptional digital experiences.
                </p>

                <button className="mt-10 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:opacity-90 transition">
                  Let`s Work Together
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div>
                <Image
                  src="/banner/banner9.png"
                  alt="Services"
                  width={1600}
                  height={800}
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
            <section className="max-w-7xl mx-auto py-24">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center">
                    <FiCode size={28} />
                  </div>

                  <h3 className="mt-8 text-3xl font-medium">Web Development</h3>

                  <p className="mt-6 text-gray-500 leading-8">
                    Custom websites, landing pages and enterprise platforms
                    built with modern technologies.
                  </p>

                  <button title="ss" className="mt-10">
                    <ArrowRight size={22} />
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center">
                    <FiPenTool size={28} />
                  </div>

                  <h3 className="mt-8 text-3xl font-medium">UI/UX Design</h3>

                  <p className="mt-6 text-gray-500 leading-8">
                    Beautiful user interfaces and intuitive experiences designed
                    for conversion.
                  </p>

                  <button title="ss" className="mt-10">
                    <ArrowRight size={22} />
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center">
                    <FiCloud size={28} />
                  </div>

                  <h3 className="mt-8 text-3xl font-medium">
                    SaaS Development
                  </h3>

                  <p className="mt-6 text-gray-500 leading-8">
                    Scalable cloud-based software solutions tailored to your
                    business needs.
                  </p>

                  <button title="ss" className="mt-10">
                    <ArrowRight size={22} />
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center">
                    <FiHeadphones size={28} />
                  </div>

                  <h3 className="mt-8 text-3xl font-medium">
                    Support & Maintenance
                  </h3>

                  <p className="mt-6 text-gray-500 leading-8">
                    Continuous improvements, updates, security and technical
                    support.
                  </p>

                  <button title="ss" className="mt-10">
                    <ArrowRight size={22} />
                  </button>
                </div>
              </div>
            </section>
          </div>
          <section className="max-w-7xl mx-auto py-28 border-t border-gray-200">
            <div className="grid lg:grid-cols-[350px_1fr] gap-20 items-start">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
                  Our Process
                </p>

                <h2 className="text-5xl font-medium leading-tight">
                  Our
                  <span className="text-[#14B8A6]"> Development</span>
                  <br />
                  Process
                </h2>

                <p className="text-gray-500 mt-8 text-lg leading-8">
                  A clear and proven process to deliver high-quality digital
                  products.
                </p>

                <button className="mt-10 flex items-center gap-2 bg-black text-white px-6 py-4 rounded-xl">
                  Start Your Project
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-10 relative">
                <div className="absolute top-4 left-[12%] right-[12%] border-t border-gray-200"></div>

                <div className="relative text-center">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full mx-auto flex items-center justify-center text-sm font-medium">
                    01
                  </div>

                  <div className="w-16 h-16 bg-[#f8f8f8] rounded-2xl flex items-center justify-center mx-auto mt-10">
                    <FiSearch size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-medium">Discover</h3>

                  <p className="text-gray-500 mt-4 leading-7">
                    We understand your goals, ideas, and requirements.
                  </p>
                </div>

                <div className="relative text-center">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full mx-auto flex items-center justify-center text-sm font-medium">
                    02
                  </div>

                  <div className="w-16 h-16 bg-[#f8f8f8] rounded-2xl flex items-center justify-center mx-auto mt-10">
                    <FiPenTool size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-medium">Design</h3>

                  <p className="text-gray-500 mt-4 leading-7">
                    We create wireframes and designs focused on users.
                  </p>
                </div>

                <div className="relative text-center">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full mx-auto flex items-center justify-center text-sm font-medium">
                    03
                  </div>

                  <div className="w-16 h-16 bg-[#f8f8f8] rounded-2xl flex items-center justify-center mx-auto mt-10">
                    <FiCode size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-medium">Develop</h3>

                  <p className="text-gray-500 mt-4 leading-7">
                    We build fast, secure and scalable solutions.
                  </p>
                </div>

                <div className="relative text-center">
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full mx-auto flex items-center justify-center text-sm font-medium">
                    04
                  </div>

                  <div className="w-16 h-16 bg-[#f8f8f8] rounded-2xl flex items-center justify-center mx-auto mt-10">
                    <FiSend size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-medium">Deliver</h3>

                  <p className="text-gray-500 mt-4 leading-7">
                    We test, launch and support your product.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-white">
            <section className="max-w-7xl mx-auto py-24 border-t border-gray-200">
              <div className="grid lg:grid-cols-[350px_1fr] gap-16 items-center">
                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-6">
                    Technologies We Use
                  </p>

                  <h2 className="text-5xl font-medium leading-tight">
                    <span className=" text-[#14B8A6]">Modern Technologies</span>
                    <br />
                    For Modern Solutions
                  </h2>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-6 gap-5  items-center">
                  {[
                    {
                      icon: <SiNextdotjs size={38} />,
                      name: "Next.js",
                    },
                    {
                      icon: <FaReact size={38} className="text-sky-500" />,
                      name: "React",
                    },
                    {
                      icon: (
                        <SiTypescript size={38} className="text-blue-600" />
                      ),
                      name: "TypeScript",
                    },
                    {
                      icon: (
                        <SiTailwindcss size={38} className="text-cyan-500" />
                      ),
                      name: "Tailwind",
                    },
                    {
                      icon: (
                        <SiPostgresql size={38} className="text-blue-700" />
                      ),
                      name: "PostgreSQL",
                    },
                    {
                      icon: <SiVercel size={38} />,
                      name: "Vercel",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="bg-white border border-gray-200 rounded-3xl h-35 flex flex-col items-center justify-center gap-4"
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default servicesPage;
