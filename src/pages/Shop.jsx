import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "AI Prompt Guide",
    category: "eBooks",
    price: 199,
    rating: 4.9,
    icon: "📘",
  },
  {
    id: 2,
    name: "Python for Beginners",
    category: "Courses",
    price: 499,
    rating: 4.8,
    icon: "🐍",
  },
  {
    id: 3,
    name: "AI Wallpaper Pack",
    category: "Wallpapers",
    price: 99,
    rating: 4.7,
    icon: "🎨",
  },
  {
    id: 4,
    name: "Mindly AI T-Shirt",
    category: "Merchandise",
    price: 599,
    rating: 4.9,
    icon: "👕",
  },
  {
    id: 5,
    name: "ChatGPT Prompt Mastery",
    category: "Courses",
    price: 799,
    rating: 4.8,
    icon: "🤖",
  },
  {
    id: 6,
    name: "AI Business Templates",
    category: "Digital",
    price: 299,
    rating: 4.6,
    icon: "📊",
  },
  {
    id: 7,
    name: "Developer Cheat Sheets",
    category: "eBooks",
    price: 149,
    rating: 4.7,
    icon: "💻",
  },
  {
    id: 8,
    name: "AI Creator Pack",
    category: "Digital",
    price: 399,
    rating: 4.9,
    icon: "✨",
  },
];

const categories = [
  "All",
  "Courses",
  "eBooks",
  "Digital",
  "Wallpapers",
  "Merchandise",
];

function Shop({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, maxPrice, sort]);

  return (
    <div className="min-h-screen bg-[#05050a] text-white">

      {/* Header */}
      <section className="border-b border-white/10 px-6 pb-10 pt-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Mindly Marketplace
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Explore the <span className="text-violet-400">Shop.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">
            Discover courses, digital products, resources and Mindly
            merchandise created for learners and creators.
          </p>

        </div>
      </section>

      {/* Shop */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Search + Sort */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex w-full max-w-xl items-center rounded-xl border border-white/10 bg-white/[0.03] px-4">
            <span className="mr-3 text-gray-500">⌕</span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-600"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#0b0b12] px-4 py-3 text-sm text-gray-300 outline-none"
          >
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">

          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-5">

            <div>
              <h3 className="text-sm font-semibold">
                Categories
              </h3>

              <div className="mt-4 space-y-2">

                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      category === item
                        ? "bg-violet-600/15 text-violet-300"
                        : "text-gray-500 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>

            <div className="my-7 h-px bg-white/10" />

            {/* Price */}
            <div>
              <h3 className="text-sm font-semibold">
                Maximum Price
              </h3>

              <p className="mt-3 text-sm text-violet-400">
                ₹{maxPrice}
              </p>

              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-4 w-full accent-violet-500"
              />

              <div className="mt-2 flex justify-between text-[11px] text-gray-600">
                <span>₹0</span>
                <span>₹1000+</span>
              </div>
            </div>

          </aside>

          {/* Products */}
          <div>

            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {filteredProducts.length} products found
              </p>

              <span className="text-xs text-gray-600">
                Premium collection
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="text-center">
                  <p className="text-3xl">🔎</p>
                  <h3 className="mt-4 font-semibold">
                    No products found
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Try changing your search or filters.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-violet-500/40"
                  >

                    {/* Image */}
                    <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-fuchsia-600/10">

                      <div className="absolute h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />

                      <span className="relative text-7xl transition duration-500 group-hover:scale-110">
                        {product.icon}
                      </span>

                      <button
                        type="button"
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-gray-300 backdrop-blur hover:text-white"
                      >
                        ♡
                      </button>

                    </div>

                    {/* Details */}
                    <div className="p-5">

                      <p className="text-xs text-violet-400">
                        {product.category}
                      </p>

                      <h3 className="mt-2 min-h-[48px] font-semibold">
                        {product.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-xs">
                        <span className="text-yellow-400">
                          ★
                        </span>

                        <span>
                          {product.rating}
                        </span>

                        <span className="text-gray-600">
                          Verified rating
                        </span>
                      </div>

                      <div className="mt-5 flex items-center justify-between">

                        <span className="text-lg font-bold">
                          ₹{product.price}
                        </span>

                      <button
  type="button"
  onClick={() => addToCart(product)}
  className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-2 text-xs font-semibold shadow-lg shadow-violet-600/10 transition hover:scale-[1.02]"
>
  Add to Cart
</button>

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>
      </main>
    </div>
  );
}

export default Shop;