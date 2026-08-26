function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05050a] pt-32">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-[5%] top-[25%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <div className="mb-7 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            ✨ AI for a Better Tomorrow
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Your AI Partner
            <br />
            For{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Real Possibilities
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Explore AI tools, shop smart products, and learn skills for a
            brighter future. Build, create and grow with Mindly AI.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-1">
              Start Chatting →
            </button>

            <button className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-gray-200 transition hover:bg-white/[0.08]">
              🛒 Explore Shop
            </button>

          </div>

          {/* Stats */}
          <div className="mt-12 flex max-w-xl border-t border-white/10 pt-7">

            <div className="flex-1">
              <p className="text-2xl font-bold">10K+</p>
              <p className="mt-1 text-xs text-gray-500">
                Happy Users
              </p>
            </div>

            <div className="flex-1 border-l border-white/10 pl-7">
              <p className="text-2xl font-bold">50+</p>
              <p className="mt-1 text-xs text-gray-500">
                AI Tools
              </p>
            </div>

            <div className="flex-1 border-l border-white/10 pl-7">
              <p className="text-2xl font-bold">100%</p>
              <p className="mt-1 text-xs text-gray-500">
                Built With Passion
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT — AI VISUAL */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Glow behind card */}
          <div className="absolute inset-10 rounded-full bg-violet-600/30 blur-[100px]" />

          <div className="relative rounded-[30px] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">

            <div className="rounded-[24px] border border-white/10 bg-[#090912] p-6">

              {/* Window top */}
              <div className="mb-6 flex items-center justify-between">

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>

                <span className="text-xs text-gray-500">
                  Mindly AI
                </span>

              </div>

              {/* AI avatar */}
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-2xl shadow-lg shadow-violet-500/30">
                  ✨
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Mindly AI
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Online • Ready to help
                  </div>
                </div>

              </div>

              {/* Messages */}
              <div className="mt-7 space-y-3">

                <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] p-4 text-sm leading-6 text-gray-300">
                  Hello! 👋
                  <br />
                  What would you like to create today?
                </div>

                <div className="ml-8 rounded-2xl rounded-tr-sm bg-gradient-to-r from-violet-600/30 to-blue-600/30 p-4 text-sm leading-6 text-gray-300">
                  Help me build something amazing.
                </div>

                <div className="rounded-2xl rounded-tl-sm border border-white/5 bg-white/[0.04] p-4 text-sm leading-6 text-gray-400">
                  Absolutely! Let's turn your idea into reality. 🚀
                </div>

              </div>

              {/* Fake input */}
              <div className="mt-6 flex items-center rounded-xl border border-white/10 bg-white/[0.03] p-2">

                <div className="flex-1 px-3 text-xs text-gray-600">
                  Ask Mindly anything...
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white">
                  →
                </div>

              </div>

            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-[#0c0c15] p-4 shadow-xl sm:block">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                ✨
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  AI Ready
                </p>

                <p className="text-[10px] text-gray-500">
                  Create • Learn • Build
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;