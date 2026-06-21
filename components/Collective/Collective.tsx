import Image from "next/image";
import React from "react";

function Collective() {
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
    <section className="bg-[#eef1f3] py-60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-5xl md:text-5xl font-medium leading-tight">
              Crafting Exceptional Digital Experiences
            </h1>

            <p className="text-gray-500 mt-12 text-xl max-w-3xl leading-9">
              At Sofia, we combine modern technologies, creative design, and
              strategic thinking to build websites and software solutions that
              help businesses grow with confidence.
            </p>
          </div>

          <div className="flex justify-end">
            <p className="uppercase tracking-[0.25em] text-sm">
              A Collective Of Experts
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-28">
          {members.map((member) => (
            <div key={member.name}>
              <div className="border-t border-gray-400 pt-3 mb-4">
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
                  ■ [ {member.role} ]
                </p>
              </div>

              <div className="overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={900}
                  className="w-full h-[520px] object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-4xl font-medium text-black">
                  {member.name}
                </h3>

                <p className="mt-3 text-gray-500 text-sm uppercase tracking-[0.2em]">
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
