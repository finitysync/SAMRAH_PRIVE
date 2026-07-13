import { Link } from 'react-router-dom';
import { heroSlides, properties } from '../data/properties';
import { useEffect, useMemo, useState } from 'react';

function SocialIcon({ kind }: { kind: 'facebook' | 'twitter' | 'linkedin' | 'instagram' }) {
  const commonProps = {
    className: 'h-5 w-5',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
  };

  switch (kind) {
    case 'facebook':
      return (
        <svg {...commonProps}>
          <path d="M13.5 22v-8.5h2.8l.4-3.3h-3.2V3.9c0-.95.27-1.6 1.64-1.6H17V.1C16.4.1 15.2 0 13.8 0 11.2 0 9.4 1.8 9.4 5.2v2.9H6.6v3.3h2.8V22h4.1Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...commonProps}>
          <path d="M22 5.1c-.8.4-1.7.6-2.6.8a4.3 4.3 0 0 0 1.9-2.4 8.6 8.6 0 0 1-2.7 1.1 4.2 4.2 0 0 0-7.2 3.8A12.1 12.1 0 0 1 3.3 4.2a4.3 4.3 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.9a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.6A8.7 8.7 0 0 0 22 5.1Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...commonProps}>
          <path d="M6.45 8.75a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm-1.25 1.4h2.5V19h-2.5V10.15Zm4.05 0h2.4v1.22h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.66 3 3.82V19h-2.5v-8.48c0-2.02-.04-4.61-2.8-4.61-2.82 0-3.25 2.2-3.25 4.47V19h-2.5V10.15Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...commonProps}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.2-3.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home(){
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=> setActiveIndex(p=> (p+1)%heroSlides.length), 5000);
    return ()=> clearInterval(id);
  },[]);
  const active = useMemo(()=>heroSlides[activeIndex],[activeIndex]);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${active})`}} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-teal-300 opacity-0 animate-fade-up" style={{ animationDelay:'0.10s' }}>Premium Real Estate</p>
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl opacity-0 animate-fade-up" style={{ animationDelay:'0.22s' }}>Premium Real Estate in Lahore & Dubai</h1>
            <p className="mb-10 max-w-2xl text-lg text-slate-100 sm:text-xl leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay:'0.34s' }}>At SAMRAH PRIVE, we specialize in connecting buyers and investors with exceptional residential and commercial properties across DHA Lahore, Gulberg Lahore, and Dubai's most prestigious communities. Whether you're searching for a luxury family home, a high-return investment, or a commercial opportunity, our experienced advisors ensure a smooth, transparent, and rewarding property journey. We believe real estate is more than buying and selling—it's about building a future with confidence.</p>
            <div className="flex gap-3 opacity-0 animate-fade-up" style={{ animationDelay:'0.46s' }}>
              <a href="/properties" className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white shadow-lg btn-gradient">Explore Properties</a>
              <a href="https://wa.me/923255511022?text=Hello%20SAMRAH%20PRIVE%2C%20I%20would%20like%20to%20connect%20about%20a%20property." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/3 px-8 py-4 text-sm font-semibold text-white hover:shadow-lg transition">Contact on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PROPERTIES */}
      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Featured Listings</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">Exclusive Property Opportunities in Lahore & Dubai</h2>
            </div>
            <Link to="/properties" className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white hover:shadow-lg transition btn-gradient">View all properties</Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {properties.map((property)=> (
              <article key={property.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md transition hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img src={property.image} alt={property.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-teal-600 backdrop-blur-sm">{property.city}</div>
                </div>
                <div className="p-6">
                  <div className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-teal-600">{property.price}</div>
                  <h3 className="mb-3 text-xl font-bold text-slate-950">{property.title}</h3>
                  <p className="mb-5 text-sm text-slate-600">{property.location}</p>
                  <div className="mb-6 flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">🛏️ {property.beds} beds</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">🛁 {property.baths} baths</span>
                  </div>
                  <div className="mb-6 flex items-center gap-3 rounded-lg bg-slate-100 p-3">
                    <img src={property.agentAvatar} alt={property.agent} className="h-9 w-9 rounded-full object-cover border border-slate-300" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-500">Agent</p>
                      <p className="text-sm font-semibold text-slate-950">{property.agent}</p>
                    </div>
                  </div>
                  <Link to={`/property/${property.id}`} className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg btn-gradient">See details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / WHY CHOOSE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Our Services</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Why Choose Us</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Top Properties</h3>
              <p className="mt-3 text-sm text-slate-600">Handpicked homes from the finest neighborhoods worldwide.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Property for Sale</h3>
              <p className="mt-3 text-sm text-slate-600">Browse our exclusive portfolio of luxury residences.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Real Estate Agent</h3>
              <p className="mt-3 text-sm text-slate-600">Expert advisors ready to guide your property journey.</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">Light Properties</h3>
              <p className="mt-3 text-sm text-slate-600">Bright, modern spaces designed for contemporary living.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-bold text-slate-950">Customer Says</h2>
            <div className="flex gap-2">✨⭐⭐⭐⭐⭐</div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {name: 'Mike Houston', text: 'The team made the entire process seamless. From viewings to closing, every detail was handled with professionalism.'},
              {name: 'Cameron Webster', text: 'Found my dream home within weeks. The expert guidance and property curation exceeded all expectations.'},
              {name: 'Dave Smith', text: 'Outstanding service and beautiful properties. Highly recommended for anyone seeking luxury real estate.'}
            ].map((review, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-8 shadow-md hover:shadow-lg transition">
                <div className="mb-4 flex gap-1 text-yellow-400">⭐⭐⭐⭐⭐</div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">\"{ review.text }\"</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600"></div>
                  <div>
                    <p className="font-bold text-slate-950">{review.name}</p>
                    <p className="text-sm text-slate-600">Property Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIND HOME SECTION */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Let's find home that's perfect for you</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">Our comprehensive property search and expert consultation services ensure you find exactly what you're looking for.</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">🔑</div>
                  <div>
                    <h3 className="font-bold mb-1">Find Properties</h3>
                    <p className="text-sm text-slate-400">Browse our extensive portfolio of luxury homes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold mb-1">Top Rated Agents</h3>
                    <p className="text-sm text-slate-400">Work with the industry's finest real estate professionals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">💎</div>
                  <div>
                    <h3 className="font-bold mb-1">Light Properties</h3>
                    <p className="text-sm text-slate-400">Modern, bright homes with contemporary design.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={properties[0]?.image} alt="Featured home" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 text-center md:grid-cols-4">
            <div>
              <p className="text-5xl font-bold">3,500+</p>
                <p className="mt-3 text-teal-100">Premium Properties</p>
            </div>
            <div>
              <p className="text-5xl font-bold">2,400+</p>
                <p className="mt-3 text-teal-100">Successful Transactions</p>
            </div>
            <div>
              <p className="text-5xl font-bold">10,000+</p>
                <p className="mt-3 text-teal-100">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold">7,500+</p>
                <p className="mt-3 text-teal-100">Professional Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - BE PART OF AGENTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Join Our Team</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 mb-6">Be a part of our growing real estate agents</h2>
          <p className="max-w-2xl mx-auto text-slate-600 mb-10 text-lg">Become part of a thriving community of real estate professionals dedicated to luxury property expertise.</p>
          <a href="/contact" className="inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-semibold text-white hover:shadow-xl transition btn-gradient">
            Apply for Real Estate Agent
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-600 font-semibold">Our Team</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Our Agents</h2>
            <p className="mt-6 max-w-2xl mx-auto text-slate-600">Experienced professionals committed to finding you the perfect property with personalized service.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                name: 'Anees Khan',
                title: 'Lahore Office Head',
                city: 'Lahore',
                desc: 'Specialized in DHA and Gulberg luxury properties with years of expertise.',
                img: '/images/person_1-min.jpg',
                socials: [
                  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' as const },
                  { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' as const },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' as const },
                  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' as const },
                ]
              },
              {
                name: 'Ahmed Al Mansouri',
                title: 'Dubai Office Head',
                city: 'Dubai',
                desc: 'Premium Dubai properties specialist with deep market insights and client focus.',
                img: '/images/person_3-min.jpg',
                socials: [
                  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' as const },
                  { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' as const },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' as const },
                  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' as const },
                ]
              }
            ].map((agent, i) => (
              <div key={i} className="rounded-[32px] border border-slate-200 bg-slate-50 shadow-md p-8 text-center">
                <div className="mb-6 h-40 w-40 mx-auto overflow-hidden rounded-full border-4 border-teal-200 bg-slate-200 shadow-lg">
                  <img src={agent.img} alt={agent.name} className="h-full w-full object-cover" />
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-teal-600 font-semibold">{agent.city} Team</p>
                <h3 className="text-2xl font-bold text-slate-950 mt-2">{agent.name}</h3>
                <p className="text-sm text-teal-600 font-semibold mt-1">{agent.title}</p>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">{agent.desc}</p>
                <div className="mt-6 flex gap-3 justify-center">
                  {agent.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-600 transition hover:-translate-y-0.5 hover:bg-teal-600 hover:text-white"
                    >
                      <SocialIcon kind={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
