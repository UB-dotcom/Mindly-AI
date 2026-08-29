import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({ onLogin }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://mindly-ai.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Registration failed."
        );
      }

      // Save user
      localStorage.setItem(
        "mindly-user",
        JSON.stringify(data.user)
      );

      // If backend returns token, save it
      if (data.token) {
        localStorage.setItem(
          "mindly-token",
          data.token
        );
      }

      // Update App state
      if (onLogin) {
        onLogin(data.user);
      }

      // Go to homepage
      navigate("/");

    } catch (error) {
      setError(
        error.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05050a] px-6 py-32 text-white">

      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="text-center">

          <Link
            to="/"
            className="inline-flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-lg">
              ✨
            </div>

            <span className="text-xl font-bold">
              Mindly{" "}
              <span className="text-violet-400">
                AI
              </span>
            </span>
          </Link>

          <h1 className="mt-10 text-4xl font-bold">
            Create{" "}
            <span className="text-violet-400">
              Account.
            </span>
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Join Mindly AI and start creating.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6"
        >

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="text-sm text-gray-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="text-sm text-gray-400">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-5">
            <label className="text-sm text-gray-400">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
            />
          </div>

          {/* Register */}
          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-3.5 text-sm font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Creating account..."
              : "Create Account →"}
          </button>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-violet-400 hover:text-violet-300"
            >
              Login
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Register;