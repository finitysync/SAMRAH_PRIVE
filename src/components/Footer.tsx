import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";

export default function Footer() {
  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: "facebook" as const,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/",
      icon: "twitter" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: "linkedin" as const,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: "instagram" as const,
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-5 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white font-bold">
                SP
              </div>
              <span className="font-bold text-white">SAMRAH PRIVE</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your Trusted Real Estate Partner in Lahore & Dubai
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="hover:text-teal-400 transition"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-teal-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">
                  Blog (Coming soon)
                </span>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">
                  Careers (Coming soon)
                </span>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">
                  Press (Coming soon)
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>📧 hello@samrahprive.com</li>
              <li>📞 03255511022</li>
              <li>📍 DHA Lahore · Gulberg Lahore · Dubai (by appointment)</li>
              <li className="text-xs text-slate-400 mt-2">
                Available 24/7 for inquiries
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Get exclusive property listings and market updates.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>
              <input
                type="email"
                placeholder="Your email"
                className="rounded-lg bg-slate-800 border border-slate-700 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-white btn-gradient"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <p className="text-sm">© 2026 SAMRAH PRIVE. All Rights Reserved.</p>
            <div className="flex gap-6 justify-end text-sm">
              <span className="text-slate-500 cursor-not-allowed">
                Privacy Policy
              </span>
              <span className="text-slate-500 cursor-not-allowed">
                Terms & Conditions
              </span>
              <div className="flex gap-3 ml-auto">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:bg-teal-500 hover:text-white"
                  >
                    <SocialIcon kind={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
