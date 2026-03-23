import Link from "next/link";

const products = [
  {
    title: "Lead Intelligence",
    description:
      "Build prospect lists and uncover high-value opportunities for outreach and activation.",
    border: "border-lime-500/30",
    glow: "shadow-[0_0_30px_rgba(132,204,22,0.08)]",
  },
  {
    title: "Audience Builder",
    description:
      "Create activation-ready audiences using targeting logic, custom segments, and data inputs.",
    border: "border-cyan-400/30",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.08)]",
  },
  {
    title: "Geo Intelligence",
    description:
      "Target by radius, territory, and location intelligence for precise local marketing.",
    border: "border-orange-400/30",
    glow: "shadow-[0_0_30px_rgba(251,146,60,0.08)]",
  },
  {
    title: "Lookback Intelligence",
    description:
      "Reach audiences based on past visits, movement patterns, and behavioral location data.",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.08)]",
  },
  {
    title: "Ad Studio",
    description:
      "Generate ad copy, creative prompts, and downloadable ad packages for fast activation.",
    border: "border-yellow-400/30",
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.08)]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-6 pt-16 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute top-24 left-[18%] h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute top-20 right-[16%] h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center mb-10">
            <img
              src="/logo.png"
              alt="TerravaultIQ"
              className="w-[280px] md:w-[560px] h-auto"
            />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 mb-6">
              Audience Intelligence Solutions
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
              Build and activate
              <span className="block bg-gradient-to-r from-cyan-400 via-lime-400 to-orange-400 bg-clip-text text-transparent">
                hyper-targeted audiences
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10">
              Buy one tool or run the full platform. TerravaultIQ brings lead intelligence,
              audience building, geo targeting, lookback activation, and ad creation into one
              premium digital marketing system.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <Link
                href="/platform"
                className="rounded-xl bg-lime-400 text-black px-6 py-3 font-bold hover:bg-lime-300 transition"
              >
                Open Platform
              </Link>

              <button className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold hover:bg-cyan-400/20 transition">
                Request Demo
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {products.map((product) => (
              <div
                key={product.title}
                className={`rounded-2xl border ${product.border} ${product.glow} bg-zinc-950/90 p-6 backdrop-blur-sm`}
              >
                <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <Link
                  href="/platform"
                  className="inline-flex rounded-xl border border-white/10 bg-black px-5 py-3 font-semibold hover:bg-zinc-900 transition"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-lime-400 mb-3">
                Buy Standalone
              </h3>
              <p className="text-gray-300">
                Purchase only the exact tool you need today and expand later.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Activate Faster
              </h3>
              <p className="text-gray-300">
                Move from data to audience to ad-ready outputs without fragmented workflows.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Run the Full System
              </h3>
              <p className="text-gray-300">
                Unlock the all-in-one TerravaultIQ platform for a connected marketing engine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}