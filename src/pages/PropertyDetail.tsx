import { useParams, Link } from "react-router-dom";
import { properties } from "../data/properties";

export default function PropertyDetail() {
  const { id } = useParams();
  const prop = properties.find((p) => p.id === id);
  if (!prop)
    return (
      <div className="mx-auto max-w-3xl p-8">
        Property not found.{" "}
        <Link to="/" className="text-slate-900 underline">
          Back home
        </Link>
      </div>
    );

  return (
    <main className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
          <div className="mb-10 overflow-hidden rounded-3xl h-64 sm:h-96 w-full">
            <img src={prop.image} alt={prop.title} className="h-full w-full object-cover" />
          </div>
          <div className="mb-10 grid gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Property details
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-white">
                {prop.title}
              </h1>
              <p className="mt-3 text-lg text-slate-300">
                {prop.location} · {prop.beds} beds · {prop.baths} baths
              </p>
              <p className="mt-6 max-w-2xl text-slate-300">
                {prop.description} Enjoy seamless luxury living backed by
                premium support, advanced home systems, and a private
                neighborhood experience.
              </p>
            </div>
            <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/80 p-6">
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Price
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {prop.price}
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Contact expert
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  Reach our private client concierge for an exclusive viewing
                  and financing guidance.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Schedule tour
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Interior
              </p>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Designer fixtures and modern finishes</li>
                <li>Smart home climate control</li>
                <li>Open plan chef kitchen</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Amenities
              </p>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Private garden and outdoor lounge</li>
                <li>Secure underground parking</li>
                <li>Concierge-grade services</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Investment
              </p>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>High resale potential</li>
                <li>Low-maintenance modern living</li>
                <li>Premium location demand</li>
              </ul>
            </div>
          </div>

          <section className="mt-10 rounded-[32px] border border-white/10 bg-black/70 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Luxury portfolio insights
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Portfolio growth
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  18% yearly
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Client satisfaction
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">98%</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Exclusive access
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  Private listings
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
