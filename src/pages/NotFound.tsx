import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="bg-slate-950 min-h-[70vh] flex items-center justify-center py-20 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-teal-400 font-semibold">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg text-slate-300 mb-10">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition hover:shadow-xl btn-gradient"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
