import Link from "next/link";

const products = [
  {
    title: "Lead Intelligence",
    description:
      "Build prospect lists and uncover high-value opportunities for outreach and activation.",
    accent: "from-lime-100 to-white border-lime-200",
  },
  {
    title: "Audience Builder",
    description:
      "Create activation-ready audiences using targeting logic, custom segments, and data inputs.",
    accent: "from-cyan-100 to-white border-cyan-200",
  },
  {
    title: "Geo Intelligence",
    description:
      "Target by radius, territory, and location intelligence for precise local marketing.",
    accent: "from-orange-100 to-white border-orange-200",
  },
  {
    title: "Lookback Intelligence",
    description:
      "Reach audiences based on past visits, movement patterns, and behavioral location data.",
    accent: "from-emerald-100 to-white border-emerald-200",
  },
  {
    title: "Ad Studio",
    description:
      "Generate ad copy, creative prompts, and downloadable ad packages for fast activation.",
    accent: "from-yellow-100 to-white border-yellow-200",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6f1] text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#f4f6f1]/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-slate-200">
              <img
                src="/logo.png"
                alt="TerravaultIQ"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-800">
            <a href="#" className="hover:text-teal-700 transition">Home</a>
            <a href="#products" className="hover:text-teal-700 transition">Products</a>
            <Link href="/platform" className="hover:text-teal-700 transition">Platform</Link>
            <a href="#pricing" className="hover:text-teal-700 transition">Pricing</a>
            <a href="#faq" className="hover:text-teal-700 transition">FAQ</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex rounded-full border border-teal-700 text-teal-800 px-6 py-3 font-semibold hover:bg-teal-50 transition">
              Login
            </button>
            <Link
              href="/platform"
              className="rounded-full bg-lime-500 text-white px-6 py-3 font-semibold hover:bg-lime-600 transition shadow-[0_10px_30px_rgba(132,204,22,0.22)]"
            >
              Open Platform
            </Link>
          </div>
        </div>

        {/* BRAND LINE */}
        <div className="h-[3px] bg-gradient-to-r from-cyan-500 via-lime-500 to-orange-400" />
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-0 h-[500px] w-[500px] rounded-full bg-cyan-200/45 blur-3xl" />
          <div className="absolute top-16 right-0 h-[500px] w-[500px] rounded-full bg-lime-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-orange-100/35 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex rounded-full bg-teal-100 text-teal-800 px-5 py-3 text-sm font-bold uppercase mb-8">
                Audience Intelligence Solutions
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                Build smarter
                <br />
                <span className="text-teal-500">audiences</span>{" "}
                <span className="text-lime-500">faster</span>{" "}
                <span className="text-orange-400">everywhere</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-700 max-w-2xl">
                Buy one tool or unlock the full TerravaultIQ platform. Build leads,
                create audiences, target by geography, activate lookback intelligence,
                and generate ad-ready outputs from one connected system.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/platform"
                  className="rounded-full bg-lime-500 text-white px-7 py-4 font-bold hover:bg-lime-600 transition"
                >
                  Open Platform
                </Link>

                <button className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold hover:bg-slate-50 transition">
                  Request Demo
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="rounded-[28px] bg-white/90 border border-slate-200 shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">
                Inside the Platform
              </h2>

              <ul className="space-y-3 text-slate-700">
                <li><strong>Lead Intelligence</strong> — find opportunities</li>
                <li><strong>Audience Builder</strong> — create segments</li>
                <li><strong>Geo Intelligence</strong> — location targeting</li>
                <li><strong>Lookback Intelligence</strong> — past behavior</li>
                <li><strong>Ad Studio</strong> — generate ads</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {products.map((p) => (
            <div key={p.title} className={`rounded-xl border p-6 bg-gradient-to-br ${p.accent}`}>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-slate-700 mb-4">{p.description}</p>
              <Link href="/platform" className="text-teal-600 font-semibold">
                Learn More →
              </Link>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}