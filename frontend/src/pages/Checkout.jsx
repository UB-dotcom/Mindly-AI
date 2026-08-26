import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );

  const delivery = subtotal > 0 ? 0 : 0;
  const total = subtotal + delivery;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const orderId =
      "MINDLY-" +
      Date.now().toString().slice(-8);

    alert(`Order placed successfully!\n\nOrder ID: ${orderId}`);

    clearCart();

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#05050a] text-white">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">

            <div className="text-6xl">
              🛒
            </div>

            <h1 className="mt-6 text-3xl font-bold">
              Your cart is empty
            </h1>

            <p className="mt-3 text-gray-500">
              Add a product before proceeding to checkout.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-block rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-semibold"
            >
              Explore Shop
            </Link>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05050a] text-white">

      {/* Header */}
      <section className="border-b border-white/10 px-6 pb-10 pt-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Secure Checkout
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Complete Your{" "}
            <span className="text-violet-400">
              Order.
            </span>
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Enter your details and review your order.
          </p>

        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12">

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-[1fr_380px]"
        >

          {/* Customer Details */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">

            <h2 className="text-xl font-bold">
              Customer Information
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              We'll use these details for your order.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-gray-400">
                  Full Name
                </label>

                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/60"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/60"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Phone
                </label>

                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/60"
                />
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-gray-400">
                  Address
                </label>

                <textarea
                  required
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  rows="4"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/60"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  City
                </label>

                <input
                  required
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/60"
                />
              </div>

              {/* State */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  State
                </label>

                <input
                  required
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/60"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Pincode
                </label>

                <input
                  required
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="6 digit pincode"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500/60"
                />
              </div>

            </div>

            {/* Payment placeholder */}
            <div className="mt-8 rounded-xl border border-violet-500/20 bg-violet-500/[0.05] p-5">

              <div className="flex items-center gap-3">
                <span className="text-xl">
                  🔒
                </span>

                <div>
                  <h3 className="text-sm font-semibold">
                    Secure Payment
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Payment gateway will be connected in the next phase.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-6">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-xl">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="truncate text-sm font-medium">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <p className="text-sm font-semibold">
                    ₹
                    {Number(item.price) *
                      Number(item.quantity)}
                  </p>

                </div>
              ))}

            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="space-y-4 text-sm">

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

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-4 text-sm font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5"
            >
              Place Order →
            </button>

            <p className="mt-4 text-center text-[11px] text-gray-600">
              By placing your order, you agree to our terms and
              conditions.
            </p>

          </aside>

        </form>

      </main>
    </div>
  );
}

export default Checkout;