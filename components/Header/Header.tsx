"use client";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export default function Header() {
  const { theme, setTheme } = useTheme();

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
    <header
      className="bg-[#eef1f3]   dark:bg-[#0f0f0f]
 min-h-screen px-5 py-5"
    >
      <div className="max-w-[1250px] mx-auto">
        <nav className=" rounded-full px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md " />
            <Image src="/logos/sofia.png" alt="sofia" width={70} height={70} />
            <h2 className="text-2xl font-bold">
              So<span className="text-[#14B8A6]">fia</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-10 text-gray-700">
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

          <div className="flex gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <Link href="/login">
              <button className="px-5 py-2 rounded-full border border-gray-200">
                Log in
              </button>
            </Link>
          </div>
        </nav>

        <section className="relative mt-4 h-[650px] overflow-hidden rounded-[40px]">
          <Image
            src="/banner/banner1.png"
            alt="hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute left-20 top-1/2 -translate-y-1/2 z-20">
            <p className="text-white/80 text-xl mb-8">
              #1 Software company in the world
            </p>

            <h1 className="overflow-hidden">
              <span className="hero-line block text-white text-8xl leading-[1.05] font-light">
                New Software
              </span>

              <span className="hero-line block text-white text-8xl leading-[1.05] font-light">
                for the Future
              </span>
            </h1>

            <div className="flex gap-10 mt-12 text-white">
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
              absolute
              right-32
              top-24
              w-72
              rounded-[30px]
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              p-5
            "
          >
            <div className=" relative h-[190px] overflow-hidden rounded-[25px]">
              <Image
                src="/banner/banner2.png"
                alt="project"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 text-center text-white">
              <h3 className="text-3xl">Discover Our</h3>

              <p className="text-3xl">Recent Project</p>
            </div>
          </div>

          <div
            className="
              absolute
              bottom-0
              right-0
              translate-y-1/2
             bg-[#eef1f3]
              rounded-tl-[40px]
              px-12
              py-10
              shadow-xl
            "
          >
            <div className="flex gap-20">
              <div>
                <h3 className="text-5xl font-semibold">6 mil</h3>

                <p className="text-gray-500 mt-16 max-w-[150px]">followers</p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold">315</h3>

                <p className="text-gray-500 mt-16 max-w-[150px]">employed</p>
              </div>

              <div>
                <h3 className="text-5xl font-semibold">120K</h3>

                <p className="text-gray-500 mt-16 max-w-[150px]">
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
