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
      <section className="w-full py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-20 text-base md:text-lg lg:text-xl font-semibold">
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
                className="h-6 w-6 md:h-7 md:w-7"
              />
              <span className="text-black">Mintlify</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/logos/vercel.png"
                alt="Vercel"
                width={28}
                height={28}
                className="h-6 w-6 md:h-7 md:w-7"
              />
              <span className="text-black">Vercel</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/logos/github.png"
                alt="GitHub"
                width={28}
                height={28}
                className="h-6 w-6 md:h-7 md:w-7"
              />
              <span className="text-black">GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/logos/nextdotjs.png"
                alt="Next.js"
                width={28}
                height={28}
                className="h-6 w-6 md:h-7 md:w-7"
              />
              <span className="text-black">Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/logos/react.png"
                alt="React"
                width={28}
                height={28}
                className="h-6 w-6 md:h-7 md:w-7"
              />
              <span className="text-black">React</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-20">
        <div className="text-center">
          <h1 className="line1 overflow-hidden text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Choose Your
            <span className="line2 ml-2 inline-block text-[#14B8A6] md:ml-3">
              Adventure
            </span>
          </h1>
          <p className="mt-5 px-6 text-base leading-7 text-gray-500 md:px-0 md:text-xl">
            We build elite tech teams for companies and enhance
          </p>

          <p className="px-6 text-base leading-7 text-gray-500 md:px-0 md:text-xl">
            candidates tech skills and job prospects
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-20 md:px-6 lg:mt-28">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="image-card overflow-hidden rounded-3xl lg:rounded-4xl">
            <Image
              src="/banner/banner3.png"
              alt="Developers"
              width={1920}
              height={1080}
              className="image-inner h-65 w-full object-cover rounded-3xl lg:h-auto lg:rounded-4xl"
            />
          </div>
          <div className="image-card overflow-hidden rounded-3xl lg:rounded-4xl">
            <Image
              src="/banner/banner4.png"
              alt="Business"
              width={1920}
              height={1080}
              className="image-inner h-65 w-full object-cover rounded-3xl lg:h-auto lg:rounded-4xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-20 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="why-image overflow-hidden rounded-3xl lg:rounded-4xl">
            <Image
              src="/banner/banner5.png"
              alt="Developers"
              width={1920}
              height={1080}
              className="h-80 w-full object-cover lg:h-auto"
            />
          </div>
          <div className="why-content rounded-4xl overflow-hidden">
            <div className="grid">
              <div className="space-y-8 lg:space-y-10">
                <div>
                  <h2 className="why-title text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Why Choose
                    <span className="text-[#14B8A6]"> Sofia</span>?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500 md:text-base md:leading-7">
                    We help startups and businesses build powerful digital
                    products with modern technologies, exceptional user
                    experiences, and scalable architectures.
                  </p>
                </div>
                <div className="space-y-6 lg:space-y-8">
                  <div className="why-item flex items-start gap-3 md:gap-4">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Next.js & React Development
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500 md:text-base md:leading-7">
                        Build modern, fast, and SEO-friendly web applications
                        using the latest technologies and best development
                        practices.
                      </p>
                    </div>
                  </div>
                  <div className="why-item flex gap-4">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Custom SaaS Solutions
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500 md:text-base md:leading-7">
                        Develop scalable SaaS platforms and business systems
                        tailored to your company`s needs and long-term growth.
                      </p>
                    </div>
                  </div>
                  <div className="why-item flex gap-4">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        UI/UX Excellence
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500 md:text-base md:leading-7">
                        Create beautiful, user-friendly interfaces that improve
                        engagement, increase conversions, and strengthen your
                        brand.
                      </p>
                    </div>
                  </div>
                  <div className="why-item flex gap-4">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        Long-Term Support
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500 md:text-base md:leading-7">
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
