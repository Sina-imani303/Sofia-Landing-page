import Link from "next/link";
import React from "react";
import { FaReact, FaFigma, FaChartLine } from "react-icons/fa";

import { SiNextdotjs, SiTypescript } from "react-icons/si";

import { MdDashboard, MdManageAccounts } from "react-icons/md";

import { BsSpeedometer2 } from "react-icons/bs";

import { HiOutlineTemplate } from "react-icons/hi";

import { RiCustomerService2Line } from "react-icons/ri";
function featurePage() {
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
          </div>
        </nav>
        <div className="bg-[#eef1f3]">
          <section className="  max-w-7xl mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-5xl font-bold leading-tight">
                  <span className="text-[#14B8A6]">Powerful Features </span>
                  <br />
                  That Drive Results
                </h2>

                <p className="text-gray-500 mt-8 max-w-xl text-xl leading-9">
                  We combine modern technologies, creative design, and strategic
                  thinking to build digital products that help businesses grow
                  faster and smarter.
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-[450px] h-[450px]">
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
        <div className="bg-[#eef1f3]">
          <section className="max-w-7xl mx-auto border-t border-gray-200 ">
            <div className="grid lg:grid-cols-5 border-b border-gray-200">
              <div className="p-7">
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                  Development
                </p>

                <h3 className="mt-4 text-4xl font-medium">
                  Modern
                  <br />
                  Development
                </h3>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <SiNextdotjs
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Next.js</h4>

                <p className="mt-4 text-gray-500">
                  Fast, scalable and SEO-friendly web applications.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <FaReact
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">React</h4>

                <p className="mt-4 text-gray-500">
                  Interactive and dynamic user experiences.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <SiTypescript
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">TypeScript</h4>

                <p className="mt-4 text-gray-500">
                  Type-safe and maintainable code architecture.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <BsSpeedometer2
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Performance</h4>

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

                <h3 className="mt-4 text-4xl font-medium">
                  UI/UX
                  <br />
                  Design
                </h3>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <FaFigma
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Figma</h4>

                <p className="mt-4 text-gray-500">
                  Modern interface and design systems.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <HiOutlineTemplate
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Wireframes</h4>

                <p className="mt-4 text-gray-500">
                  Structured planning before development.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <FaChartLine
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Prototype</h4>

                <p className="mt-4 text-gray-500">
                  Interactive product validation and testing.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <RiCustomerService2Line
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Research</h4>

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

                <h3 className="mt-4 text-4xl font-medium">
                  Business
                  <br />
                  Solutions
                </h3>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <MdDashboard
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Dashboard</h4>

                <p className="mt-4 text-gray-500">
                  Data visualization and analytics platforms.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <MdManageAccounts
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">Admin Panel</h4>

                <p className="mt-4 text-gray-500">
                  Powerful management systems for businesses.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <RiCustomerService2Line
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">CRM</h4>

                <p className="mt-4 text-gray-500">
                  Customer and sales management solutions.
                </p>
              </div>

              <div className="group p-10 border-l border-gray-200">
                <FaChartLine
                  size={36}
                  className="mb-5 transition group-hover:text-[#14B8A6]"
                />

                <h4 className="text-2xl font-semibold">SaaS</h4>

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

export default featurePage;
