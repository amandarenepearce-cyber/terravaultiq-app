import Link from "next/link";

export default function Home() {
  const products = [
    {
      title: "Lead Intelligence",
      description:
        "Build prospect lists and uncover high-value opportunities for outreach and activation.",
      href: "/platform",
    },
    {
      title: "Audience Builder",
      description:
        "Create activation-ready audiences using targeting logic, custom segments, and data inputs.",
      href: "/platform",
    },
    {
      title: "Geo Intelligence",
      description:
        "Target by radius, territory, and location intelligence for precise local marketing.",
      href: "/platform",
    },
    {
      title: "Lookback Intelligence",
      description:
        "Reach audiences based on past visits, movement patterns, and behavioral location data.",
      href: "/platform",
    },
    {
      title: "Ad Studio",
      description:
        "Generate ad copy, creative prompts, and downloadable ad packages for fast activation.",
      href: "/platform",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-6">
                TerravaultIQ • Audience Intelligence Solutions
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Build and activate
                <span className="block text-emerald-400">
                  hyper-targeted audiences
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                Buy one tool or run the full platform. TerravaultIQ helps teams
                build leads, create audiences, target by geography, leverage
                lookback data, and generate activation-ready ads from one system.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/platform"
                  className="rounded-xl bg-emerald-500 hover:bg-emerald-600 px-6 py-3 font-semibold text-black transition"
                >
                  Open Platform
                </Link>
                <a
                  href="#solutions"
                  className="rounded-xl border border-gray-700 hover:border-gray-500 px-6 py-3 font-semibold transition"
                >
                  Explore Solutions
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-zinc-950 p-8 shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-800 bg-black p-5">
                  <div className="text-sm text-emerald-400 mb-2">
                    Standalone Tool
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lead Intelligence</h3>
                  <p className="text-gray-400 text-sm">
                    Buy only the lead engine when that is all you need.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-black p-5">
                  <div className="text-sm text-emerald-400 mb-2">
                    Standalone Tool
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Audience Builder</h3>
                  <p className="text-gray-400 text-sm">
                    Build custom, activation-ready audiences faster.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-black p-5">
                  <div className="text-sm text-emerald-400 mb-2">
                    Standalone Tool
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Geo Intelligence</h3>
                  <p className="text-gray-400 text-sm">
                    Target by geography, radius, and territory.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-800 bg-black p-5">
                  <div className="text-sm text-emerald-400 mb-2">
                    Standalone Tool
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lookback Intelligence</h3>
                  <p className="text-gray-400 text-sm">
                    Build audiences from past visits and movement patterns.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
                <div className="text-sm text-emerald-300 mb-2">
                  All-in-One Platform
                </div>
                <h3 className="text-2xl font-bold mb-2">TerravaultIQ Platform</h3>
                <p className="text-gray-200">
                  Run leads, audiences, geo, lookback, and ad creation in one
                  connected workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-emerald-400 font-semibold mb-2">Ways to Buy</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Buy one tool or the full system
            </h2>
            <p className="text-gray-400 max-w-3xl text-lg">
              TerravaultIQ is built to sell as standalone solutions or as one
              fully connected audience intelligence platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-2xl border border-gray-800 bg-zinc-950 p-6"
              >
                <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <Link
                  href={product.href}
                  className="inline-flex rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-gray-200 transition"
                >
                  View Solution
                </Link>
              </div>
            ))}

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <div className="text-emerald-300 font-semibold mb-2">
                Full Platform
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                TerravaultIQ All-in-One
              </h3>
              <p className="text-gray-200 mb-6">
                The full audience intelligence operating system for modern digital
                marketing teams.
              </p>
              <Link
                href="/platform"
                className="inline-flex rounded-xl bg-emerald-500 text-black px-5 py-3 font-semibold hover:bg-emerald-600 transition"
              >
                Open Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h3 className="text-2xl font-semibold mb-3">Buy Standalone</h3>
            <p className="text-gray-400">
              Purchase only the tool you need right now and expand later.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h3 className="text-2xl font-semibold mb-3">Activate Faster</h3>
            <p className="text-gray-400">
              Move from data to audience to ad-ready output with less friction.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h3 className="text-2xl font-semibold mb-3">Scale with One System</h3>
            <p className="text-gray-400">
              Replace fragmented workflows with one connected platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}