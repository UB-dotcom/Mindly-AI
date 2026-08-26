import { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "AI Prompt Guide",
    category: "eBooks",
    price: 199,
    rating: 4.9,
    icon: "📘",
    description:
      "A practical collection of powerful AI prompts designed to help students, creators and professionals get better results from AI.",
  },
  {
    id: 2,
    name: "Python for Beginners",
    category: "Courses",
    price: 499,
    rating: 4.8,
    icon: "🐍",
    description:
      "Start learning Python from the fundamentals and build a strong programming foundation.",
  },
  {
    id: 3,
    name: "AI Wallpaper Pack",
    category: "Wallpapers",
    price: 99,
    rating: 4.7,
    icon: "🎨",
    description:
      "A collection of high-quality AI-generated wallpapers for your desktop and mobile devices.",
  },
  {
    id: 4,
    name: "Mindly AI T-Shirt",
    category: "Merchandise",
    price: 599,
    rating: 4.9,
    icon: "👕",
    description:
      "Official Mindly AI merchandise designed for creators and AI enthusiasts.",
  },
  {
    id: 5,
    name: "ChatGPT Prompt Mastery",
    category: "Courses",
    price: 799,
    rating: 4.8,
    icon: "🤖",
    description:
      "Learn how to write effective prompts and get more useful results from modern AI assistants.",
  },
  {
    id: 6,
    name: "AI Business Templates",
    category: "Digital",
    price: 299,
    rating: 4.6,
    icon: "📊",
    description:
      "Ready-to-use templates to help you plan, organize and grow your projects with AI.",
  },
  {
    id: 7,
    name: "Developer Cheat Sheets",
    category: "eBooks",
    price: 149,
    rating: 4.7,
    icon: "💻",
    description:
      "Quick-reference programming cheat sheets for developers and students.",
  },
  {
    id: 8,
    name: "AI Creator Pack",
    category: "Digital",
    price: 399,
    rating: 4.9,
    icon: "✨",
    description:
      "A creative resource pack containing useful assets and tools for AI-powered creators.",
  },
];

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  // Product quantity
  const [quantity, setQuantity] = useState(1);

  // Find product
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Product doesn't exist
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#05050a] text-white">
        <div className="text-center">

          <p className="text-6xl">
            🔎
          </p>

          <h1 className="mt-6 text-3xl font-bold">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The product you're looking for doesn't exist.
          </p>

        </div>
      </div>
    );
  }

  // Add product to cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-white">

      {/* Header */}
      <section className="border-b border-white/10 px-6 pb-10 pt-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            {product.name}
          </h1>

        </div>
      </section>

      {/* Product Section */}
      <main className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-2">

        {/* Product Image */}
        <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-fuchsia-600/10">

          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

          {/* Icon */}
          <span className="relative text-[160px] drop-shadow-2xl transition duration-500 hover:scale-110">
            {product.icon}
          </span>

        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">

            <span className="text-yellow-400">
              ★
            </span>

            <span className="font-medium">
              {product.rating}
            </span>

            <span className="text-gray-600">
              Verified rating
            </span>

          </div>

          {/* Name */}
          <h2 className="mt-5 text-3xl font-bold">
            {product.name}
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl leading-7 text-gray-400">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-8">

            <span className="text-4xl font-black">
              ₹{product.price}
            </span>

          </div>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-5">

            <span className="text-sm text-gray-500">
              Quantity
            </span>

            <div className="flex items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">

              {/* Minus */}
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1)
                  )
                }
                className="px-5 py-3 text-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                −
              </button>

              {/* Quantity */}
              <span className="min-w-[55px] border-x border-white/10 px-4 py-3 text-center font-semibold">
                {quantity}
              </span>

              {/* Plus */}
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) =>
                    current + 1
                  )
                }
                className="px-5 py-3 text-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                +
              </button>

            </div>

          </div>

          {/* Quantity Price */}
          <p className="mt-4 text-sm text-gray-500">
            {quantity} × ₹{product.price} ={" "}
            <span className="font-semibold text-white">
              ₹{product.price * quantity}
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            {/* Add To Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-1 hover:shadow-violet-600/30"
            >
              🛒 Add to Cart
            </button>

            {/* Wishlist */}
            <button
              type="button"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold transition hover:bg-white/[0.08]"
            >
              ♡ Wishlist
            </button>

          </div>

          {/* Features */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

              <p className="text-lg">
                🔒
              </p>

              <p className="mt-2 text-xs font-semibold">
                Secure Payment
              </p>

              <p className="mt-1 text-[10px] text-gray-600">
                Safe checkout
              </p>

            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

              <p className="text-lg">
                ⚡
              </p>

              <p className="mt-2 text-xs font-semibold">
                Instant Access
              </p>

              <p className="mt-1 text-[10px] text-gray-600">
                Get it instantly
              </p>

            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

              <p className="text-lg">
                💜
              </p>

              <p className="mt-2 text-xs font-semibold">
                Mindly Support
              </p>

              <p className="mt-1 text-[10px] text-gray-600">
                We're here to help
              </p>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default ProductDetails;