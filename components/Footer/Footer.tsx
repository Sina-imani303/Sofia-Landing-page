import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="overflow-hidden bg-[#070B10] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-2 lg:gap-16 lg:pb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-[#14B8A6] md:text-sm">
              Sofia Studio
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:mt-6 lg:text-5xl">
              Let`s Build
              <br />
              Something Great
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:mt-8 md:text-lg md:leading-8">
              We create modern websites, SaaS platforms, and digital products
              that help businesses grow faster and stand out online.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:justify-between">
            <div>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">
                Get In Touch
              </p>

              <a
                href="mailto:hello@sofia.com"
                className="mt-4 block break-all text-2xl font-semibold transition hover:text-[#14B8A6] md:text-3xl"
              >
                DevSofia@gamil.com
              </a>
            </div>
            <div className="mt-6 flex gap-3 md:mt-10 md:gap-4">
              <Link
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#14B8A6] hover:text-black transition"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#14B8A6] hover:text-black transition"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#14B8A6] hover:text-black transition"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 py-16 border-b border-white/10">
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/AboutUs">About</Link>
              <Link href="/Shop">Services</Link>
              <Link href="/Contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <span>Web Development</span>
              <span>UI / UX Design</span>
              <span>SaaS Platforms</span>
              <span>SEO Optimization</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <span>Tehran, Iran</span>
              <span>+98 912 000 0000</span>
              <span>DevSofia@gamil.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10">
          <p className="text-gray-500">© 2025 Sofia. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 mt-6 md:mt-0 text-[#14B8A6]"
          >
            Back To Top
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
