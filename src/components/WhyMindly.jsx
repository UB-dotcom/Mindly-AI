const reasons = [
  {
    icon: "🎓",
    title: "Built for Learners",
    description:
      "Simple, practical and useful AI tools designed to help students learn faster.",
  },
  {
    icon: "✨",
    title: "All-in-One Platform",
    description:
      "Chat, create, learn and shop from one modern AI-powered platform.",
  },
  {
    icon: "💜",
    title: "Affordable & Reliable",
    description:
      "Great technology made accessible for students, creators and everyday users.",
  },
  {
    icon: "🤝",
    title: "Community Driven",
    description:
      "Built with people who want to learn, create and make a bigger impact.",
  },
];

function WhyMindly() {
  return (
    <section className="border-t border-white/10 bg-[#05050a] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Why Mindly AI?
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Built to make AI
            <span className="text-violet-400"> useful for everyone.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-500">
            We believe AI should be simple, useful and accessible.
            Mindly AI brings powerful tools together in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]"
            >

              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-xl">
                {reason.icon}
              </div>

              <h3 className="text-lg font-bold">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {reason.description}
              </p>

              <div className="mt-6 h-px w-0 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyMindly;