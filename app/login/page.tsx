import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-[#eef1f3] flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-sm">
        <div className="p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logos/sofia.png"
                alt="Sofia"
                width={48}
                height={48}
              />

              <h2 className="text-3xl font-bold">
                So<span className="text-[#14B8A6]">fia</span>
              </h2>
            </div>

            <h1 className="mt-12 text-6xl font-bold leading-[1.05]">
              Welcome Back
              <br />
              To <span className="text-[#14B8A6]">Sofia</span>
            </h1>

            <p className="mt-8 text-xl text-gray-500 leading-9 max-w-xl">
              Access your projects, manage your services, and collaborate with
              our team.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold">35K+</h3>
                <p className="text-gray-500">Companies</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-gray-500">Satisfaction</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-gray-500">Support</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Image
              src="/banner/banner10.png"
              alt="Workspace"
              width={800}
              height={500}
              className="rounded-4xl w-full object-cover"
            />
          </div>
        </div>

        <div className="bg-[#fafafa] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md bg-white rounded-4xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-5xl font-bold">Sign In</h2>

            <p className="text-gray-500 mt-4">
              Welcome back! Please enter your details.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <label className="text-sm font-medium">Email Address</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 h-14 px-5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mt-2 h-14 px-5 rounded-xl border border-gray-200 outline-none"
                />
              </div>

              <button className="w-full h-14 rounded-xl bg-[#14B8A6] text-white font-medium">
                Sign In
              </button>

              <div className="relative py-4">
                <div className="border-t border-gray-200"></div>

                <span className="absolute left-1/2 -translate-x-1/2 top-0 bg-white px-4 text-gray-400">
                  OR
                </span>
              </div>
              <div className="grid gap-4 mt-6">
                <button className="flex-1 flex items-center justify-center gap-3 h-14 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition">
                  <Image
                    src="/logos/google.png"
                    width={24}
                    height={24}
                    alt="Google"
                  />
                  <span>continue with Google</span>
                </button>

                <button className="flex-1 flex items-center justify-center gap-3 h-14 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition">
                  <Image
                    src="/logos/github.png"
                    width={24}
                    height={24}
                    alt="GitHub"
                  />
                  <span> continue with GitHub</span>
                </button>
              </div>

              <p className="text-center text-gray-500 pt-4">
                Don&apos;t have an account?{" "}
                <span className="text-[#14B8A6] font-medium cursor-pointer">
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
