function SocialIcon({ kind }: { kind: 'facebook' | 'twitter' | 'linkedin' | 'instagram' }) {
  const commonProps = {
    className: 'h-4 w-4',
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

export default function Footer(){
  const socials = [
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' as const },
    { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' as const },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' as const },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' as const },
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
            <p className="text-sm leading-relaxed">Your Trusted Real Estate Partner in Lahore & Dubai</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
              <li><a href="/properties" className="hover:text-teal-400 transition">Properties</a></li>
              <li><a href="/services" className="hover:text-teal-400 transition">Services</a></li>
              <li><a href="/about" className="hover:text-teal-400 transition">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Press</a></li>
            </ul>
          </div>
          <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>📧 hello@samrahprive.com</li>
              <li>📞 03255511022</li>
              <li>📍 DHA Lahore · Gulberg Lahore · Dubai (by appointment)</li>
              <li className="text-xs text-slate-400 mt-2">Available 24/7 for inquiries</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Get exclusive property listings and market updates.</p>
              <form className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="rounded-lg bg-slate-800 border border-slate-700 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold text-white btn-gradient">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <p className="text-sm">© 2026 SAMRAH PRIVE. All Rights Reserved.</p>
            <div className="flex gap-6 justify-end text-sm">
                <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition">Terms & Conditions</a>
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
