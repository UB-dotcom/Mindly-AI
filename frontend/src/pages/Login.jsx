import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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
  setLoading(true);

  try {
    const response = await fetch(
      "https://mindly-ai.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || "Login failed."
      );
    }

    // Save JWT token
    localStorage.setItem(
      "mindly-token",
      data.token
    );

    // Save user
    localStorage.setItem(
      "mindly-user",
      JSON.stringify(data.user)
    );

    // Update App authentication state
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
            Welcome{" "}
            <span className="text-violet-400">
              Back.
            </span>
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Login to your Mindly AI account.
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

          {/* Email */}
          <div>
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
              placeholder="••••••••"
              required
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
            />
          </div>

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-3.5 text-sm font-semibold shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login →"}
          </button>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-violet-400 hover:text-violet-300"
            >
              Create one
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;