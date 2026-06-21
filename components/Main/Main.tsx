import Image from "next/image";
import React from "react";
import Subscription from "../Subscription/Subscription";
import Collective from "../Collective/Collective";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Main() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".line1", {
      scrollTrigger: {
        trigger: ".line1",
        start: "top 80%",
        once: true,
      },
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".line2", {
      scrollTrigger: {
        trigger: ".line1",
        start: "top 80%",
        once: true,
      },
      x: 120,
      opacity: 0,
      duration: 1,
      delay: 0.15,
      ease: "power4.out",
    });
    gsap.utils.toArray<HTMLElement>(".image-card").forEach((card) => {
      gsap.from(card, {
        y: 120,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          once: true,
        },
      });
    });
    gsap.utils.toArray<HTMLElement>(".image-inner").forEach((img) => {
      gsap.to(img, {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    gsap.from(".why-image", {
      scrollTrigger: {
        trigger: ".why-image",
        start: "top 75%",
        once: true,
      },
      x: -120,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(".why-title", {
      scrollTrigger: {
        trigger: ".why-content",
        start: "top 75%",
        once: true,
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".why-item", {
      scrollTrigger: {
        trigger: ".why-content",
        start: "top 70%",
        once: true,
      },
      y: 60,
      opacity: 0,
      stagger: 0.18,
      duration: 0.9,
      ease: "power3.out",
    });
  });
  return (
    <div className="bg-[#eef1f3] pb-24">
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-wrap items-center justify-center gap-20 text-xl font-semibold">
            <div className="grid gap-y-4">
              <span className="text-black">Trusted by 35000+</span>
              <span className="text-black">Companies of all sizes</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/logos/mintlify.png"
                alt="Mintlify"
                width={28}
                height={28}
              />
              <span className="text-black">Mintlify</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/logos/vercel.png"
                alt="Vercel"
                width={28}
                height={28}
              />
              <span className="text-black">Vercel</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/logos/github.png"
                alt="GitHub"
                width={28}
                height={28}
              />
              <span className="text-black">GitHub</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/logos/nextdotjs.png"
                alt="Next.js"
                width={28}
                height={28}
              />
              <span className="text-black">Next.js</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/logos/react.png"
                alt="React"
                width={28}
                height={28}
              />
              <span className="text-black">React</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center">
          <h1 className="line1 text-6xl font-semibold overflow-hidden gap-3">
            Choose Your
            <span className="line2 inline-block text-[#14B8A6]">Adventure</span>
          </h1>
          <p className="text-gray-500 text-xl mt-6">
            We build elite tech teams for companies and enhance
          </p>

          <p className="text-gray-500 text-xl">
            candidates tech skills and job prospects
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-28">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="image-card rounded-4xl ">
            <Image
              src="/banner/banner3.png"
              alt="Developers"
              width={1920}
              height={1080}
              priority
              className="image-inner w-full h-auto rounded-4xl"
            />
          </div>

          <div className="image-card rounded-4xl ">
            <Image
              src="/banner/banner4.png"
              alt="Business"
              width={1920}
              height={1080}
              priority
              className="image-inner  rounded-4xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="why-image  rounded-4xl overflow-hidden">
            <Image
              src="/banner/banner5.png"
              alt="Developers"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto"
            />
          </div>

          <div className="why-content rounded-4xl overflow-hidden">
            <div className="grid">
              <div className="space-y-10">
                <div>
                  <h2 className="why-title text-5xl font-bold leading-tight text-black">
                    Why Choose
                    <span className="text-[#14B8A6]"> Sofia</span>?
                  </h2>

                  <p className="mt-5 text-lg text-gray-500 leading-8 max-w-xl">
                    We help startups and businesses build powerful digital
                    products with modern technologies, exceptional user
                    experiences, and scalable architectures.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="why-item flex gap-4">
                    <div className="mt-1 h-6 w-8 rounded-full bg-black flex items-center justify-center text-white text-sm">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Next.js & React Development
                      </h3>

                      <p className="mt-2 text-gray-500 leading-7">
                        Build modern, fast, and SEO-friendly web applications
                        using the latest technologies and best development
                        practices.
                      </p>
                    </div>
                  </div>

                  <div className="why-item flex gap-4">
                    <div className="mt-1 h-6 w-8 rounded-full bg-black flex items-center justify-center text-white text-sm">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Custom SaaS Solutions
                      </h3>

                      <p className="mt-2 text-gray-500 leading-7">
                        Develop scalable SaaS platforms and business systems
                        tailored to your company`s needs and long-term growth.
                      </p>
                    </div>
                  </div>

                  <div className="why-item flex gap-4">
                    <div className="mt-1 h-6 w-8 rounded-full bg-black flex items-center justify-center text-white text-sm">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        UI/UX Excellence
                      </h3>

                      <p className="mt-2 text-gray-500 leading-7">
                        Create beautiful, user-friendly interfaces that improve
                        engagement, increase conversions, and strengthen your
                        brand.
                      </p>
                    </div>
                  </div>

                  <div className="why-item flex gap-4">
                    <div className="mt-1 h-6 w-8 rounded-full bg-black flex items-center justify-center text-white text-sm">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Long-Term Support
                      </h3>

                      <p className="mt-2 text-gray-500 leading-7">
                        Continuous maintenance, updates, and technical support
                        to keep your digital products secure, stable, and up to
                        date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscription />
      <Collective />
    </div>
  );
}

export default Main;
