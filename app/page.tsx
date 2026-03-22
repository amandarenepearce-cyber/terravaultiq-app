import Link from "next/link";

export default function Home() {
  const products = [
    {
      title: "Lead Intelligence",
      description:
        "Build prospect lists and uncover high-value opportunities for outreach and activation.",
    },
    {
      title: "Audience Builder",
      description:
        "Create activation-ready audiences using targeting logic, custom segments, and data inputs.",
    },
    {
      title: "Geo Intelligence",
      description:
        "Target by radius, territory, and location intelligence for precise local marketing.",
    },
    {
      title: "Lookback Intelligence",
      description:
        "Reach audiences based on past visits, movement patterns, and behavioral location data.",
    },
    {
      title: "Ad Studio",
      description:
        "Generate ad copy, creative prompts, and downloadable ad packages for fast activation.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TerravaultIQ
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Build and activate hyper-targeted audiences using location,
            lookback, and lead data — all in one platform.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Link
              href="/platform"
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Open Platform
            </Link>

            <button className="border border-gray-600 px-6 py-3 rounded-xl">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="border border-gray-800 rounded-2xl p-6 bg-zinc-950"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {product.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {product.description}
              </p>

              <Link
                href="/platform"
                className="text-emerald-400 font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto text-center border border-emerald-500/30 bg-emerald-500/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-4">
            Full Platform Access
          </h2>
          <p className="text-gray-300 mb-6">
            Buy one tool or unlock the entire TerravaultIQ system and run
            your full digital marketing workflow from one place.
          </p>

          <Link
            href="/platform"
            className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Explore Platform
          </Link>
        </div>
      </section>
    </main>
  );
}