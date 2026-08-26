function CTA() {
  return (
    <section className="px-6 py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/20 via-blue-600/10 to-fuchsia-600/20 px-8 py-14 text-center">

        <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

        <div className="relative">
          <div className="mb-5 text-3xl">
            ✨
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Build a Smarter, Kinder,
            <br />
            More Creative World — Together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">
            Explore powerful AI tools, discover useful products and turn
            your ideas into real possibilities.
          </p>

          <button
            type="button"
            className="mt-7 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3 font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-1"
          >
            Shop Now →
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTA;