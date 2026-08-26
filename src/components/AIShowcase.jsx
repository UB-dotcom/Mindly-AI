import { MessageSquare, Image, Code2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "AI Chat",
    description: "Ask questions, brainstorm ideas and get intelligent answers.",
    icon: MessageSquare,
    link: "/chat",
  },
  {
    title: "AI Image Generator",
    description: "Turn your imagination into stunning AI-generated artwork.",
    icon: Image,
    link: "/image-generator",
  },
  {
    title: "AI Code Assistant",
    description: "Build, debug and understand code faster with AI.",
    icon: Code2,
    link: "/code-assistant",
  },
];

function AIShowcase() {
  return (
    <section className="border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            One platform
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to
            <span className="text-violet-400"> create with AI.</span>
          </h2>

          <p className="mt-5 text-gray-400">
            Powerful AI tools designed to turn your ideas into reality.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                to={tool.link}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]"
              >

                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                    <Icon size={23} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold">
                  {tool.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {tool.description}
                </p>

              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default AIShowcase;