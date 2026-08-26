import { useEffect, useState } from "react";

function Cart({
  cart,
  removeFromCart,
  updateQuantity,
}) {
  // Local copy for instant UI update
  const [localCart, setLocalCart] = useState(cart);

  // Keep local cart synchronized with App cart
  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    // Immediately update UI
    setLocalCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );

    // Update global cart
    updateQuantity(productId, newQuantity);
  };

  const handleRemove = (productId) => {
    setLocalCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );

    removeFromCart(productId);
  };

  const subtotal = localCart.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-[#05050a] text-white">

      {/* Header */}
      <section className="border-b border-white/10 px-6 pb-10 pt-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Mindly Marketplace
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Your{" "}
            <span className="text-violet-400">
              Cart.
            </span>
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Review your products before checkout.
          </p>

        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12">

        {/* Empty Cart */}
        {localCart.length === 0 ? (
          <div className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] text-center">

            <div className="text-6xl">
              🛒
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500">
              Add some products from the Mindly AI Shop
              and they will appear here.
            </p>

            <a
              href="/shop"
              className="mt-7 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold"
            >
              Explore Shop
            </a>

          </div>
        ) : (

          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

            {/* Cart Items */}
            <div className="space-y-4">

              {localCart.map((item) => (

                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center"
                >

                  {/* Product Image */}
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/10 text-5xl">
                    {item.icon}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">

                    <p className="text-xs text-violet-400">
                      {item.category}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      ₹{item.price} per item
                    </p>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.03]">

                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          Number(item.quantity) - 1
                        )
                      }
                      className="px-4 py-3 text-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
                    >
                      −
                    </button>

                    <span className="min-w-[50px] border-x border-white/10 px-3 py-3 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          Number(item.quantity) + 1
                        )
                      }
                      className="px-4 py-3 text-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
                    >
                      +
                    </button>

                  </div>

                  {/* Price */}
                  <div className="min-w-[90px] text-right">

                    <p className="font-bold">
                      ₹
                      {Number(item.price) *
                        Number(item.quantity)}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        handleRemove(item.id)
                      }
                      className="mt-2 text-xs text-red-400 transition hover:text-red-300"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Summary */}
            <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-6">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm">

                <div className="flex justify-between text-gray-500">
                  <span>
                    Subtotal
                  </span>

                  <span>
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>
                    Delivery
                  </span>

                  <span className="text-green-400">
                    FREE
                  </span>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex justify-between text-lg font-bold">
                  <span>
                    Total
                  </span>

                  <span>
                    ₹{total}
                  </span>
                </div>

              </div>

             <a
  href="/checkout"
  className="mt-7 block w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-3.5 text-center text-sm font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5"
>
  Proceed to Checkout →
</a>

              <p className="mt-4 text-center text-[11px] text-gray-600">
                Secure checkout powered by Mindly AI
              </p>

            </aside>

          </div>

        )}

      </main>
    </div>
  );
}

export default Cart;