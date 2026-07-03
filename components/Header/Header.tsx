"use client";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Home, Sparkles, Briefcase, Phone, ChevronRight } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(false);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".nav-item", {
      y: -120,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
    gsap.to(".logo", {
      y: 20,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
    gsap.from(".hero-line", {
      y: 140,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    });
  });
  return (
    <header className="min-h-screen  bg-[#eef1f3] px-4 py-4 dark:bg-[#0f0f0f] sm:px-5 sm:py-5">
      <div className="mx-auto max-w-312.5">
        <nav className="flex relative items-center justify-between rounded-full px-4 py-4 md:px-8 md:py-5">
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/logos/sofia.png"
              alt="sofia"
              width={70}
              height={70}
              className="h-12 w-12 md:h-17.5 md:w-17.5"
            />

            <h2 className="text-xl font-bold md:text-2xl">
              So<span className="text-[#14B8A6]">fia</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-gray-700">
            <Link className="nav-item" href="/">
              Home
            </Link>
            <Link className="nav-item" href="/feature">
              Features
            </Link>
            <Link className="nav-item" href="/services">
              Services
            </Link>
            <Link className="nav-item" href="/contact">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <button className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-100">
                Log in
              </button>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100 lg:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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

        <section className="relative mt-4 h-150 overflow-hidden rounded-[30px] md:h-162.5 md:rounded-[40px]">
          <Image
            src="/banner/banner1.png"
            alt="hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute left-6 right-6 top-1/2 z-20 -translate-y-1/2 md:left-20 md:right-auto">
            <p className="mb-6 text-sm text-white/80 md:mb-8 md:text-xl">
              #1 Software company in the world
            </p>
            <h1 className="overflow-hidden">
              <span className="hero-line block text-5xl sm:text-6xl lg:text-8xl leading-[1.05] font-light text-white">
                New Software
              </span>

              <span className="hero-line block text-5xl sm:text-6xl lg:text-8xl leading-[1.05] font-light text-white">
                for the Future
              </span>
            </h1>
            <div className="mt-8 flex flex-col gap-4 text-white sm:flex-row md:mt-12 md:gap-10">
              <button className="border-b border-white pb-2">
                Get in touch ↗
              </button>
              <button className="border-b border-white pb-2">
                Our services ↗
              </button>
            </div>
          </div>
          <div
            className="
    logo
    hidden
    lg:block
    absolute
    right-10
    xl:right-20
    top-16
    xl:top-24
    w-72
    rounded-[30px]
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    p-5
  "
          >
            <div className=" relative h-47.5 overflow-hidden rounded-[25px]">
              <Image
                src="/banner/banner2.png"
                alt="project"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl xl:text-3xl">Discover Our</h3>

              <p className="text-2xl xl:text-3xl">Recent Project</p>
            </div>
          </div>
          <div
            className="
    absolute
    left-4
    right-4
    bottom-4
    rounded-3xl
    bg-[#eef1f3]
    px-5
    py-5
    shadow-xl
    md:left-auto
    md:right-0
    md:bottom-0
    md:translate-y-1/2
    md:rounded-tl-[40px]
    md:rounded-tr-none
    md:rounded-br-none
    md:rounded-bl-none
    md:px-12
    md:py-10
  "
          >
            <div className="grid grid-cols-3 gap-4 md:flex md:gap-20">
              <div>
                <h3 className="text-2xl font-semibold md:text-5xl">6 mil</h3>

                <p className="mt-2 text-xs text-gray-500 md:mt-16 md:max-w-37.5 md:text-base">
                  followers
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold md:text-5xl">315</h3>

                <p className="mt-2 text-xs text-gray-500 md:mt-16 md:max-w-37.5 md:text-base">
                  employed
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold md:text-5xl">120K</h3>

                <p className="mt-2 text-xs text-gray-500 md:mt-16 md:max-w-37.5 md:text-base">
                  Portfilo ARR
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
