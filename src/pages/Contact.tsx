import { FormEvent, useState } from "react";

const BUSINESS_EMAIL = "hello@samrahprive.com";
const WHATSAPP_LINK =
  "https://wa.me/923255511022?text=Hello%20SAMRAH%20PRIVE%2C%20I%20would%20like%20to%20connect%20about%20a%20property.";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("SAMRAH PRIVE enquiry from website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_0.75fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Get in touch
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Contact our private property team.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Whether you are buying, investing, or exploring luxury real
              estate, our advisors are here to guide you with professional
              insight and exceptional care.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Office
                </p>
                <p className="mt-3 text-slate-300">
                  DHA Lahore & Dubai (by appointment)
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Email
                </p>
                <p className="mt-3 text-slate-300">{BUSINESS_EMAIL}</p>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="mt-3 inline-block text-sm text-teal-400 hover:text-teal-200"
                >
                  Send an email directly
                </a>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Phone
                </p>
                <p className="mt-3 text-slate-300">03255511022</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Support
                </p>
                <p className="mt-3 text-slate-300">
                  Available 24/7 for private viewings and enquiries.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950 px-4 py-4 text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="Email address"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950 px-4 py-4 text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell us about your ideal property"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950 px-4 py-4 text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold text-white btn-gradient"
              >
                Send message
              </button>
            </form>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Chat on WhatsApp: 03255511022
              </a>
              <p className="text-sm text-slate-400">
                When you click <strong>Send message</strong>, your email app
                will open with the message pre-filled for {BUSINESS_EMAIL}.
              </p>
              <p className="text-sm text-slate-400">
                Use the WhatsApp button for fast real-time chat with the same
                number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
