import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

function Collective() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const split = new SplitType(".hero-title", {
      types: "words",
    });

    gsap.from(split.words, {
      y: 120,
      opacity: 0,
      rotateX: -90,
      stagger: 0.08,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".hero-title",
        start: "top 80%",
      },
    });
  });
  const members = [
    {
      name: "John Anderson",
      role: "ENGINEER PARTNER",
      exp: "8 YEARS IN WEB DEVELOPMENT",
      image: "/banner/6.webp",
    },
    {
      name: "Aaron Wilson",
      role: "DESIGN PARTNER",
      exp: "6 YEARS IN UI/UX DESIGN",
      image: "/banner/8.png",
    },
    {
      name: "Michael Brown",
      role: "MARKETING PARTNER",
      exp: "7 YEARS IN DIGITAL MARKETING",
      image: "/banner/7.png",
    },
  ];

  return (
    <section className="bg-[#eef1f3] py-20 md:py-32 lg:py-60">
      <div className="mouse-glow mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="hero-title text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Crafting Exceptional Digital Experiences
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 md:mt-10 md:text-lg md:leading-8 lg:mt-12 lg:text-xl lg:leading-9">
              At Sofia, we combine modern technologies, creative design, and
              strategic thinking to build websites and software solutions that
              help businesses grow with confidence.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <p className="uppercase tracking-[0.25em] text-sm">
              A Collective Of Experts
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 mt-28">
          {members.map((member) => (
            <div key={member.name} className="group">
              <div className="mb-4 border-t border-gray-300 pt-3">
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
                  ■ [ {member.role} ]
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={900}
                  className="
                    w-full
                    h-85
                    sm:h-105
                    lg:h-130
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "
                />
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-medium text-black md:text-3xl lg:text-4xl">
                  {member.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-500 md:mt-3 md:text-sm">
                  {member.exp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collective;
