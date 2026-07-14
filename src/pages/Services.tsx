export default function Services() {
  return (
    <main className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            What we offer
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Comprehensive Real Estate Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From property sourcing and market analysis to negotiations and
            after-sales support, we provide a complete real estate experience
            tailored to your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">
              Property sourcing
            </h2>
            <p className="mt-4 text-slate-300">
              We find premier homes that match your exact style, budget, and
              privacy requirements.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">
              Investment advisory
            </h2>
            <p className="mt-4 text-slate-300">
              Receive expert analysis and guidance to position your purchase for
              long-term growth.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">
              Private viewings
            </h2>
            <p className="mt-4 text-slate-300">
              Enjoy discreet tours, premium scheduling, and dedicated support
              throughout the process.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-black/60 p-8">
            <h3 className="text-xl font-semibold text-white">How It Works</h3>
            <ol className="mt-6 space-y-4 text-slate-300">
              <li>
                <strong>1.</strong> Tell Us Your Requirements
              </li>
              <li>
                <strong>2.</strong> Receive Curated Property Options
              </li>
              <li>
                <strong>3.</strong> Schedule Property Visits
              </li>
              <li>
                <strong>4.</strong> Compare Opportunities
              </li>
              <li>
                <strong>5.</strong> Complete Documentation
              </li>
              <li>
                <strong>6.</strong> Finalize Your Transaction With Confidence
              </li>
            </ol>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-black/60 p-8">
            <h3 className="text-xl font-semibold text-white">
              Why Choose SAMRAH PRIVE
            </h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>Access to Exclusive Properties</li>
              <li>Personalized Consultation and 24/7 Client Concierge</li>
              <li>Professional Transaction Support and Market Expertise</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
