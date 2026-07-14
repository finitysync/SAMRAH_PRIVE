export default function About() {
  return (
    <main className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Our vision
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Connecting People with Exceptional Real Estate Opportunities
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              SAMRAH PRIVE was founded with a commitment to providing clients
              with access to premium properties, expert guidance, and a seamless
              real estate experience. We combine local market expertise with
              international standards to help clients make confident property
              decisions in Lahore and Dubai.
            </p>
          </div>
          <div className="mx-auto w-full max-w-xl space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft lg:mx-0">
            <div
              className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900"
              style={{ aspectRatio: "4 / 5" }}
            >
              <img
                src="/images/SAMRAHimg.png"
                alt="Samrah Prive Co-founder"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-400">
                CEO
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Samrah Chaudhry
              </h2>
              <p className="mt-3 font-semibold text-teal-400">
                Message from CEO
              </p>
              <p className="mt-4 text-slate-300 leading-8">
                Samrah is the visionary co-founder of SAMRAH PRIVE, combining
                deep luxury real estate knowledge with a sharp eye for premium
                opportunities in Lahore and Dubai. Her leadership ensures every
                client receives thoughtful guidance, tailored property matching,
                and a seamless journey from first viewing to closing.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Experience
                </p>
                <p className="mt-2 font-semibold text-white">
                  12+ years in luxury real estate
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Focus
                </p>
                <p className="mt-2 font-semibold text-white">
                  Lahore & Dubai premiere properties
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Our mission</h2>
              <p className="mt-3 text-slate-300">
                To redefine the real estate experience through professionalism,
                transparency, innovation, and exceptional client service.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Our core values
              </h2>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>Integrity & Transparency</li>
                <li>Client-First Approach</li>
                <li>Professional Excellence</li>
                <li>Market Expertise</li>
                <li>Long-Term Relationships</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-20 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">
              Curated Property Selection
            </h3>
            <p className="mt-4 text-slate-300">
              Every property undergoes careful evaluation to ensure quality,
              location value, investment potential, and long-term growth
              prospects.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">
              Premium Client Support
            </h3>
            <p className="mt-4 text-slate-300">
              From your first inquiry to the final transaction, our team remains
              committed to delivering personalized assistance every step of the
              way.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">
              Market Insights
            </h3>
            <p className="mt-4 text-slate-300">
              We provide accurate market analysis, investment trends, and
              property intelligence to help clients make informed decisions.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-400 font-semibold">
                Our Agents
              </p>
              <h2 className="mt-4 text-4xl font-bold text-white">
                Lahore and Dubai Property Experts
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400">
                Two dedicated teams serving Lahore and Dubai with local market
                knowledge, premium service, and trusted property guidance.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {[
                {
                  img: "/images/person_1-min.jpg",
                  city: "Lahore",
                  title: "Lahore Office",
                  subtitle: "DHA & Gulberg luxury properties",
                },
                {
                  img: "/images/person_2-min.jpg",
                  city: "Dubai",
                  title: "Dubai Office",
                  subtitle: "Premium Dubai investment homes",
                },
              ].map((agent, index) => (
                <div
                  key={index}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full border border-white/10 bg-slate-900">
                      <img
                        src={agent.img}
                        alt={`${agent.city} team avatar`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-teal-300">
                        {agent.city}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {agent.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-300">{agent.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
                    <span className="rounded-full border border-slate-700 px-3 py-2">
                      Local market expertise
                    </span>
                    <span className="rounded-full border border-slate-700 px-3 py-2">
                      Premium client service
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
