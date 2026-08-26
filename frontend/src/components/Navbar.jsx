import { Link, useLocation } from "react-router-dom";

function Navbar({ cart = [] }) {
  const location = useLocation();

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05050a]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-lg shadow-lg shadow-violet-600/20">
            ✨
          </div>

          <div>
            <p className="text-lg font-bold leading-none">
              Mindly{" "}
              <span className="text-violet-400">
                AI
              </span>
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-wider text-gray-600">
              AI for a Better Tomorrow
            </p>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className={`text-sm transition ${
              isActive("/")
                ? "text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/shop"
            className={`text-sm transition ${
              isActive("/shop")
                ? "text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Shop
          </Link>

          <Link
            to="/chat"
            className={`text-sm transition ${
              isActive("/chat")
                ? "text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            AI Chat
          </Link>

          <Link
            to="/code-assistant"
            className={`text-sm transition ${
              isActive("/code-assistant")
                ? "text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Code AI
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg transition hover:bg-white/[0.08]"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden rounded-lg px-4 py-2 text-sm text-gray-400 transition hover:text-white sm:block"
          >
            Login
          </Link>

          {/* Get Started */}
          <Link
            to="/register"
            className="rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/10 transition hover:-translate-y-0.5"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;