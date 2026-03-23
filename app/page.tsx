import Link from "next/link";

const tools = [
  {
    title: "Lead Intelligence",
    description:
      "Build prospect lists, identify high-value opportunities, and organize lead data for outreach and activation.",
    accent: "from-lime-100 to-white border-lime-200",
  },
  {
    title: "Audience Builder",
    description:
      "Create custom activation-ready audiences using targeting logic, segmentation rules, and input datasets.",
    accent: "from-cyan-100 to-white border-cyan-200",
  },
  {
    title: "Geo Intelligence",
    description:
      "Target by radius, territory, ZIP, and location intelligence for precise local campaign execution.",
    accent: "from-orange-100 to-white border-orange-200",
  },
  {
    title: "Lookback Intelligence",
    description:
      "Reach audiences based on past visits, movement history, and behavioral location patterns.",
    accent: "from-emerald-100 to-white border-emerald-200",
  },
  {
    title: "Ad Studio",
    description:
      "Generate ad copy, headlines, CTAs, creative prompts, and downloadable activation-ready packages.",
    accent: "from-yellow-100 to-white border-yellow-200",
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#f4f6f1] text-slate-900">
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
            <Link href="/" className="hover:text-teal-700 transition">Home</Link>
            <a href="#tools" className="hover:text-teal-700 transition">Tools</a>
            <a href="#workflow" className="hover:text-teal-700 transition">Workflow</a>
            <a href="#offers" className="hover:text-teal-700 transition">Offers</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex rounded-full border border-teal-700 text-teal-800 px-6 py-3 font-semibold hover:bg-teal-50 transition">
              Login
            </button>
            <button className="rounded-full bg-lime-500 text-white px-6 py-3 font-semibold hover:bg-lime-600 transition shadow-[0_10px_30px_rgba(132,204,22,0.22)]">
              Book Demo
            </button>
          </div>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-cyan-500 via-lime-500 to-orange-400" />
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-0 h-[460px] w-[460px] rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute top-12 right-0 h-[460px] w-[460px] rounded-full bg-lime-200/35 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-orange-100/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex rounded-full bg-teal-100 text-teal-800 px-5 py-3 text-sm font-bold tracking-wide uppercase mb-8">
                TerravaultIQ Platform
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-slate-900">
                One system.
                <br />
                <span className="text-teal-500">Multiple tools.</span>
                <br />
                <span className="text-lime-500">One buyer story.</span>
              </h1>

              <p className="mt-8 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
                TerravaultIQ lets buyers purchase standalone solutions or unlock the
                full all-in-one platform for lead generation, audience creation,
                geo targeting, lookback intelligence, and ad production.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-lime-500 text-white px-7 py-4 font-bold hover:bg-lime-600 transition shadow-[0_10px_30px_rgba(132,204,22,0.25)]">
                  Request Pricing
                </button>
                <Link
                  href="/"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold hover:bg-slate-50 transition"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-[28px] bg-white/90 backdrop-blur border border-slate-200 shadow-[0_25px_80px_rgba(15,23,42,0.10)] p-8">
                <div className="inline-flex rounded-full bg-teal-100 text-teal-800 px-4 py-2 text-sm font-bold uppercase tracking-wide mb-6">
                  Commercial Structure
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-5">
                  Buy one tool or buy the full platform
                </h2>

                <ul className="space-y-4 text-slate-700 text-lg">
                  <li>
                    <span className="font-bold text-slate-900">Standalone tools</span>{" "}
                    for focused buyer needs
                  </li>
                  <li>
                    <span className="font-bold text-slate-900">Bundled platform</span>{" "}
                    for one connected workflow
                  </li>
                  <li>
                    <span className="font-bold text-slate-900">Ad Studio outputs</span>{" "}
                    for activation-ready campaign packages
                  </li>
                  <li>
                    <span className="font-bold text-slate-900">Flexible expansion</span>{" "}
                    from one product into the full ecosystem
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl border border-lime-200 bg-lime-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-lime-700 mb-2">
                    Best Positioning
                  </p>
                  <p className="text-slate-800 font-medium">
                    TerravaultIQ is an audience intelligence company with
                    standalone tools and one integrated platform offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Each module can be sold on its own or connected into the full
              TerravaultIQ operating system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className={`rounded-[24px] border bg-gradient-to-br ${tool.accent} p-6 shadow-sm`}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {tool.title}
                </h3>
                <p className="text-slate-700 mb-6">{tool.description}</p>
                <button className="inline-flex rounded-full bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800 transition">
                  Open Tool
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-[28px] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="mb-8">
            <p className="text-teal-700 font-bold uppercase tracking-wide text-sm mb-3">
              Workflow
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              A clean path from strategy to activation
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl">
              The full platform connects multiple buyer needs into one consistent flow.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-lime-200 bg-lime-50 p-5">
              <div className="text-sm font-bold uppercase text-lime-700 mb-2">Step 1</div>
              <h3 className="text-xl font-bold mb-2">Find</h3>
              <p className="text-slate-700">
                Discover prospects and identify market opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <div className="text-sm font-bold uppercase text-cyan-700 mb-2">Step 2</div>
              <h3 className="text-xl font-bold mb-2">Build</h3>
              <p className="text-slate-700">
                Create custom audiences and define targeting logic.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <div className="text-sm font-bold uppercase text-orange-700 mb-2">Step 3</div>
              <h3 className="text-xl font-bold mb-2">Target</h3>
              <p className="text-slate-700">
                Apply geo and lookback intelligence to sharpen reach.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="text-sm font-bold uppercase text-emerald-700 mb-2">Step 4</div>
              <h3 className="text-xl font-bold mb-2">Activate</h3>
              <p className="text-slate-700">
                Generate ads, packages, and activation-ready outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-teal-700 mb-3">
              Standalone Offer
            </p>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Buy only what you need
            </h3>
            <p className="text-slate-700 text-lg">
              Sell each tool independently for buyers who need a focused solution
              without the full platform commitment.
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
              For buyers who want connected lead generation, audience creation,
              geo targeting, lookback intelligence, and ad production in one system.
            </p>
            <button className="rounded-full bg-lime-500 text-white px-6 py-3 font-bold hover:bg-lime-600 transition">
              Request Platform Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}