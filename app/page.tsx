import Link from "next/link";

const LEAD_TOOL_URL =
  "https://terravaultiq-lead-intelligence-adxpkdfgcbl45ujd3sdkqo.streamlit.app/";

const tools = [
  {
    title: "Lead Intelligence",
    description:
      "Build prospect lists, uncover high-value opportunities, and launch targeted outreach from real market intelligence.",
    accent: "border-lime-200 bg-lime-50",
    cta: "Launch Tool",
    href: LEAD_TOOL_URL,
    external: true,
    status: "Live Now",
    statusColor: "text-lime-700 bg-lime-100",
  },
  {
    title: "Audience Builder",
    description:
      "Create activation-ready audiences using targeting logic, segmentation rules, and layered data inputs.",
    accent: "border-cyan-200 bg-cyan-50",
    cta: "Coming Soon",
    href: "#",
    external: false,
    status: "Coming Soon",
    statusColor: "text-cyan-700 bg-cyan-100",
  },
  {
    title: "Geo Intelligence",
    description:
      "Target by radius, territory, and geography for stronger local performance and smarter market coverage.",
    accent: "border-orange-200 bg-orange-50",
    cta: "Coming Soon",
    href: "#",
    external: false,
    status: "Coming Soon",
    statusColor: "text-orange-700 bg-orange-100",
  },
  {
    title: "Lookback Intelligence",
    description:
      "Use past visit behavior and movement signals to build more valuable audiences and sharper campaigns.",
    accent: "border-emerald-200 bg-emerald-50",
    cta: "Coming Soon",
    href: "#",
    external: false,
    status: "Coming Soon",
    statusColor: "text-emerald-700 bg-emerald-100",
  },
  {
    title: "Ad Studio",
    description:
      "Generate ad copy, creative prompts, and downloadable activation packages from one connected system.",
    accent: "border-yellow-200 bg-yellow-50",
    cta: "Coming Soon",
    href: "#",
    external: false,
    status: "Coming Soon",
    statusColor: "text-yellow-700 bg-yellow-100",
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f1] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f4f6f1]/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-slate-200">
              <img
                src="/logo.png"
                alt="TerravaultIQ"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-800">
            <Link href="/" className="hover:text-teal-700 transition">
              Home
            </Link>
            <a href="#tools" className="hover:text-teal-700 transition">
              Products
            </a>
            <Link href="/platform" className="hover:text-teal-700 transition">
              Platform
            </Link>
            <a href="#offers" className="hover:text-teal-700 transition">
              Pricing
            </a>
            <a href="#faq" className="hover:text-teal-700 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex rounded-full border border-teal-700 text-teal-800 px-6 py-3 font-semibold hover:bg-teal-50 transition">
              Login
            </button>

            <a
              href={LEAD_TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-lime-500 text-white px-6 py-3 font-semibold hover:bg-lime-600 transition shadow-[0_10px_30px_rgba(132,204,22,0.22)]"
            >
              Launch Lead Tool
            </a>
          </div>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-cyan-500 via-lime-500 to-orange-400" />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-0 h-[440px] w-[440px] rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute top-16 right-0 h-[440px] w-[440px] rounded-full bg-lime-200/35 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex rounded-full bg-teal-100 text-teal-800 px-5 py-3 text-sm font-bold tracking-wide uppercase mb-8">
                TerravaultIQ Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-slate-900">
                One platform
                <br />
                for
                <br />
                <span className="text-teal-500">audience intelligence</span>{" "}
                <span className="text-lime-500">and</span>{" "}
                <span className="text-orange-400">activation</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
                TerravaultIQ brings Lead Intelligence, Audience Builder, Geo
                Intelligence, Lookback Intelligence, and Ad Studio into one
                premium operating system. Sell the tools individually or
                position the full platform as your all-in-one growth engine.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={LEAD_TOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-lime-500 text-white px-7 py-4 font-bold hover:bg-lime-600 transition shadow-[0_10px_30px_rgba(132,204,22,0.25)]"
                >
                  Launch Lead Intelligence
                </a>

                <Link
                  href="/"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold hover:bg-slate-50 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] bg-white/90 backdrop-blur border border-slate-200 shadow-[0_25px_80px_rgba(15,23,42,0.10)] p-8">
              <div className="inline-flex rounded-full bg-teal-100 text-teal-800 px-4 py-2 text-sm font-bold uppercase tracking-wide mb-6">
                Platform Overview
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                A cleaner path from prospecting to activation
              </h2>

              <ul className="space-y-4 text-slate-700 text-lg">
                <li>
                  <span className="font-bold text-slate-900">
                    Lead Intelligence
                  </span>{" "}
                  for prospect discovery and list building
                </li>
                <li>
                  <span className="font-bold text-slate-900">
                    Audience Builder
                  </span>{" "}
                  for custom segmentation and targeting
                </li>
                <li>
                  <span className="font-bold text-slate-900">
                    Geo Intelligence
                  </span>{" "}
                  for location-based campaign precision
                </li>
                <li>
                  <span className="font-bold text-slate-900">
                    Lookback Intelligence
                  </span>{" "}
                  for past-visit audience creation
                </li>
                <li>
                  <span className="font-bold text-slate-900">Ad Studio</span>{" "}
                  for creative generation and activation-ready outputs
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-lime-200 bg-lime-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-lime-700 mb-2">
                  Full Platform Offer
                </p>
                <p className="text-slate-800 font-medium">
                  Sell each tool independently or package TerravaultIQ as one
                  connected audience intelligence and marketing activation
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-teal-700 font-bold uppercase tracking-wide text-sm mb-3">
              Platform Modules
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The tools inside the TerravaultIQ ecosystem
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl">
              Each module can stand alone or work together inside the full
              TerravaultIQ platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className={`rounded-[24px] border ${tool.accent} p-6 shadow-sm`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {tool.title}
                  </h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${tool.statusColor}`}
                  >
                    {tool.status}
                  </span>
                </div>

                <p className="text-slate-700 mb-6">{tool.description}</p>

                {tool.external ? (
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800 transition"
                  >
                    {tool.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="inline-flex rounded-full bg-slate-200 text-slate-500 px-5 py-3 font-semibold cursor-not-allowed"
                  >
                    {tool.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-teal-700 mb-3">
              Standalone Offer
            </p>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Buy only what you need
            </h3>
            <p className="text-slate-700 text-lg">
              Start with Lead Intelligence today and expand into more tools as
              your platform usage grows.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-900 bg-slate-900 text-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-bold uppercase tracking-wide text-lime-300 mb-3">
              Full Platform Offer
            </p>
            <h3 className="text-3xl font-bold mb-4">
              License the entire TerravaultIQ ecosystem
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              Position TerravaultIQ as the premium all-in-one platform for lead
              discovery, audience targeting, geo intelligence, lookback
              intelligence, and ad creation.
            </p>
            <button
              type="button"
              className="rounded-full bg-lime-500 text-white px-6 py-3 font-bold hover:bg-lime-600 transition"
            >
              Request Platform Demo
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-lg mb-2">
                Can I buy just one TerravaultIQ tool?
              </h3>
              <p className="text-slate-700">
                Yes. Each solution can be sold independently or bundled into the
                full platform.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-lg mb-2">What is live right now?</h3>
              <p className="text-slate-700">
                Lead Intelligence is live now. The other tools are being added
                into the platform ecosystem.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-lg mb-2">
                Can the platform create ad outputs too?
              </h3>
              <p className="text-slate-700">
                Yes. Ad Studio is part of the platform vision and will support
                activation-ready ad packages.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-lg mb-2">
                Is TerravaultIQ built for standalone use or full workflow use?
              </h3>
              <p className="text-slate-700">
                Both. Buyers can purchase one solution or use TerravaultIQ as a
                connected growth infrastructure platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}