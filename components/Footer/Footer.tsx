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
    <footer className="bg-[#070B10] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 border-b border-white/10 pb-16">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-[#14B8A6]">
              Sofia Studio
            </span>

            <h2 className="text-5xl md:text-5xl font-bold mt-6 leading-tight">
              Let`s Build
              <br />
              Something Great
            </h2>

            <p className="text-gray-400 mt-8 max-w-xl text-lg leading-8">
              We create modern websites, SaaS platforms, and digital products
              that help businesses grow faster and stand out online.
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-sm">
                Get In Touch
              </p>

              <a
                href="mailto:hello@sofia.com"
                className="block mt-4 text-3xl font-semibold hover:text-[#14B8A6] transition"
              >
                DevSofia@gamil.com
              </a>
            </div>

            <div className="flex gap-4 mt-10">
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
