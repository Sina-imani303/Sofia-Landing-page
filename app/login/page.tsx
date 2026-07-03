import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#eef1f3] p-3 sm:p-5 md:p-8">
      <div className="grid w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-sm sm:rounded-[30px] lg:grid-cols-2 lg:rounded-[40px]">
        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
          <div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logos/sofia.png"
                alt="Sofia"
                width={48}
                height={48}
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />

              <h2 className="text-2xl font-bold sm:text-3xl">
                So<span className="text-[#14B8A6]">fia</span>
              </h2>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.05] sm:mt-10 sm:text-5xl lg:mt-12 lg:text-5xl xl:text-6xl">
              Welcome Back
              <br />
              To <span className="text-[#14B8A6]">Sofia</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8 lg:mt-8 xl:text-xl xl:leading-9">
              Access your projects, manage your services, and collaborate with
              our team.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">35K+</h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm md:text-base">
                  Companies
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">98%</h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm md:text-base">
                  Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">24/7</h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm md:text-base">
                  Support
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 lg:mt-12">
            <div className="relative h-55 overflow-hidden rounded-[22px] sm:h-75 sm:rounded-[28px] lg:h-80 lg:rounded-4xl xl:h-95">
              <Image
                src="/banner/banner10.png"
                alt="Workspace"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#fafafa] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16">
          <div className="w-full max-w-md rounded-[22px] border border-gray-100 bg-white p-5 shadow-sm sm:rounded-[28px] sm:p-8 lg:rounded-4xl lg:p-10">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Sign In
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:mt-4 sm:text-base">
              Welcome back! Please enter your details.
            </p>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6 lg:mt-10">
              <div>
                <label className="text-sm font-medium">Email Address</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#14B8A6] sm:h-14 sm:px-5 sm:text-base"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#14B8A6] sm:h-14 sm:px-5 sm:text-base"
                />
              </div>

              <button className="h-12 w-full rounded-xl bg-[#14B8A6] font-medium text-white transition hover:bg-[#0f9f90] sm:h-14">
                Sign In
              </button>

              <div className="relative py-3 sm:py-4">
                <div className="border-t border-gray-200" />

                <span className="absolute left-1/2 top-0 -translate-x-1/2 bg-white px-4 text-sm text-gray-400">
                  OR
                </span>
              </div>

              <div className="grid gap-3 sm:gap-4">
                <button className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 px-3 text-sm font-medium transition hover:bg-gray-50 sm:h-14 sm:text-base">
                  <Image
                    src="/logos/google.png"
                    width={24}
                    height={24}
                    alt="Google"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />

                  <span>Continue with Google</span>
                </button>

                <button className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 px-3 text-sm font-medium transition hover:bg-gray-50 sm:h-14 sm:text-base">
                  <Image
                    src="/logos/github.png"
                    width={24}
                    height={24}
                    alt="GitHub"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />

                  <span>Continue with GitHub</span>
                </button>
              </div>

              <p className="pt-2 text-center text-sm leading-6 text-gray-500 sm:pt-4 sm:text-base">
                Don&apos;t have an account?{" "}
                <span className="cursor-pointer font-medium text-[#14B8A6] transition hover:text-[#0f9f90]">
                  Create Account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
