import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const WHATSAPP_URL =
  "https://wa.me/923255511022?text=Hello%20SAMRAH%20PRIVE%2C%20I%20would%20like%20to%20connect%20about%20a%20property.";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal-200/20 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.svg"
            alt="SAMRAH PRIVE"
            className="h-9 w-9 rounded-lg shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              SAMRAH PRIVE
            </span>
            <span className="text-xs text-slate-500">
              Luxury Homes & Real Estate
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-slate-900 border-b-2 border-transparent pb-1 nav-gradient-underline"
                  : "transition text-slate-700 hover:text-slate-900 nav-gradient-underline"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white btn-gradient"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-500 hover:text-teal-600 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.72 5.47a.75.75 0 0 1 1.06 0L12 9.69l4.22-4.22a.75.75 0 1 1 1.06 1.06L13.06 10.75l4.22 4.22a.75.75 0 0 1-1.06 1.06L12 11.81l-4.22 4.22a.75.75 0 1 1-1.06-1.06l4.22-4.22-4.22-4.22a.75.75 0 0 1 0-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 6.75A1.25 1.25 0 0 1 5.75 5.5h12.5a1.25 1.25 0 0 1 0 2.5H5.75A1.25 1.25 0 0 1 4.5 6.75zm0 5.5A1.25 1.25 0 0 1 5.75 11h12.5a1.25 1.25 0 0 1 0 2.5H5.75A1.25 1.25 0 0 1 4.5 12.25zm0 5.5A1.25 1.25 0 0 1 5.75 16.5h12.5a1.25 1.25 0 0 1 0 2.5H5.75A1.25 1.25 0 0 1 4.5 17.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden">
          <div className="border-t border-slate-200 bg-white/95 px-4 py-5 shadow-lg backdrop-blur-xl sm:px-6">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-3xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-teal-50 text-teal-700"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-3 text-base font-semibold text-white transition hover:shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
