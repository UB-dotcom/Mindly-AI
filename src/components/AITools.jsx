const tools = [
  {
    icon: "💬",
    title: "AI Chatbot",
    description: "Ask anything, learn anything, build anything with your AI assistant.",
    label: "Your 24/7 assistant",
  },
  {
    icon: "🖼️",
    title: "AI Image Generator",
    description: "Turn your ideas into stunning images with powerful AI generation.",
    label: "Turn ideas into images",
  },
  {
    icon: "</>",
    title: "AI Code Helper",
    description: "Write, understand and debug code faster with your intelligent assistant.",
    label: "Code, debug, learn",
  },
  {
    icon: "🛒",
    title: "Shop Products",
    description: "Discover digital products, courses and resources for creators.",
    label: "Digital & physical goods",
  },
];

function AITools() {
  return (
    <section className="border-t border-white/10 bg-[#06060b] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Explore Mindly AI
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to
            <span className="text-violet-400"> create.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Powerful tools designed to help you learn, create, build and
            discover new possibilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]"
            >

              {/* Icon */}
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-300">
                {tool.icon}
              </div>

              {/* Text */}
              <p className="text-xs font-medium text-violet-400">
                {tool.label}
              </p>

              <h3 className="mt-2 text-lg font-bold">
                {tool.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {tool.description}
              </p>

              <div className="mt-6 text-sm text-gray-600 transition group-hover:text-violet-400">
                Explore →
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default AITools;