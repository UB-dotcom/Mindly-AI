const products = [
  {
    id: 1,
    name: "AI Prompt Guide",
    category: "eBook",
    price: "₹199",
    rating: "4.9",
    reviews: "120",
    icon: "📘",
    gradient: "from-violet-600/30 via-blue-500/20 to-fuchsia-500/20",
  },
  {
    id: 2,
    name: "Python for Beginners",
    category: "Full Course",
    price: "₹499",
    rating: "4.8",
    reviews: "98",
    icon: "🐍",
    gradient: "from-blue-600/30 via-cyan-500/20 to-violet-500/20",
  },
  {
    id: 3,
    name: "10,000+ AI Wallpapers",
    category: "HD Pack",
    price: "₹99",
    rating: "4.7",
    reviews: "64",
    icon: "🎨",
    gradient: "from-fuchsia-600/30 via-purple-500/20 to-blue-500/20",
  },
  {
    id: 4,
    name: "Mindly AI T-Shirt",
    category: "Premium",
    price: "₹599",
    rating: "4.9",
    reviews: "42",
    icon: "👕",
    gradient: "from-blue-600/30 via-indigo-500/20 to-purple-500/20",
  },
];

function FeaturedProducts() {
  return (
    <section className="border-t border-white/10 bg-[#06060b] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Featured Products
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Learn. Create. Grow.
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Useful digital products and resources for your journey.
            </p>
          </div>

          <button
            type="button"
            className="hidden rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-violet-500/40 hover:text-white sm:block"
          >
            View All →
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-violet-500/40"
            >

              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${product.gradient}`}
              >
                <div className="absolute h-32 w-32 rounded-full bg-white/10 blur-3xl" />

                <span className="relative text-7xl drop-shadow-2xl transition duration-500 group-hover:scale-110">
                  {product.icon}
                </span>

                {product.id === 1 && (
                  <span className="absolute left-3 top-3 rounded-md bg-pink-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide">
                    Bestseller
                  </span>
                )}

                <button
                  type="button"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-gray-300 backdrop-blur transition hover:bg-white/10 hover:text-white"
                >
                  ♡
                </button>
              </div>

              <div className="p-5">

                <p className="text-xs text-violet-400">
                  {product.category}
                </p>

                <h3 className="mt-2 min-h-[48px] font-semibold leading-6">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">
                    {product.rating}
                  </span>
                  <span className="text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">

                  <span className="text-lg font-bold">
                    {product.price}
                  </span>

                  <button
                    type="button"
                    className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-2 text-xs font-semibold shadow-lg shadow-violet-600/10 transition hover:scale-[1.02]"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-7 text-center sm:hidden">
          <button
            type="button"
            className="text-sm font-medium text-violet-400"
          >
            View All Products →
          </button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;