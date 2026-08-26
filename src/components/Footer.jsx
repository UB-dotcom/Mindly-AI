function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040409]">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600">
              ✨
            </div>

            <div>
              <h3 className="font-bold">
                Mindly <span className="text-violet-400">AI</span>
              </h3>

              <p className="text-[10px] text-gray-600">
                AI for a Better Tomorrow
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
            Making AI useful, accessible and inspiring for learners,
            creators and dreamers.
          </p>

          <div className="mt-5 flex gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-sm text-gray-500">
              ◎
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-sm text-gray-500">
              ▶
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-sm text-gray-500">
              in
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-sm text-gray-500">
              ◉
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-5 text-sm font-semibold text-white">
            Quick Links
          </h4>

          <div className="space-y-3 text-sm text-gray-500">
            <p className="cursor-pointer hover:text-white">Home</p>
            <p className="cursor-pointer hover:text-white">Shop</p>
            <p className="cursor-pointer hover:text-white">About</p>
            <p className="cursor-pointer hover:text-white">Blog</p>
            <p className="cursor-pointer hover:text-white">Contact</p>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="mb-5 text-sm font-semibold text-white">
            Our Products
          </h4>

          <div className="space-y-3 text-sm text-gray-500">
            <p className="cursor-pointer hover:text-white">AI Tools</p>
            <p className="cursor-pointer hover:text-white">Courses</p>
            <p className="cursor-pointer hover:text-white">eBooks</p>
            <p className="cursor-pointer hover:text-white">Wallpapers</p>
            <p className="cursor-pointer hover:text-white">Merchandise</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-5 text-sm font-semibold text-white">
            Newsletter
          </h4>

          <p className="mb-4 text-sm leading-6 text-gray-500">
            Get the latest AI updates, products and resources.
          </p>

          <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600"
            />

            <button
              type="button"
              className="bg-gradient-to-r from-violet-600 to-blue-600 px-5 text-white"
            >
              →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-xs text-gray-600 sm:flex-row">
          <p>
            © 2026 Mindly AI. All rights reserved.
          </p>

          <p>
            Made with ❤️ by Uday
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;