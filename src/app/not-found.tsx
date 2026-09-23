
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-white mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

