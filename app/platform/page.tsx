export default function Platform() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            TerravaultIQ Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The all-in-one audience intelligence system for lead generation,
            audience building, geo targeting, lookback activation, and ad creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
            <h2 className="text-2xl font-semibold mb-3">Lead Intelligence</h2>
            <p className="text-gray-400 mb-6">
              Build prospect lists and discover high-value opportunities.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
            <h2 className="text-2xl font-semibold mb-3">Audience Builder</h2>
            <p className="text-gray-400 mb-6">
              Create custom audiences for activation-ready targeting.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
            <h2 className="text-2xl font-semibold mb-3">Geo Intelligence</h2>
            <p className="text-gray-400 mb-6">
              Target by radius, territory, and location intelligence.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
            <h2 className="text-2xl font-semibold mb-3">Lookback Intelligence</h2>
            <p className="text-gray-400 mb-6">
              Reach audiences based on past visits and movement patterns.
            </p>
          </div>

          <div className="border border-emerald-500/30 rounded-2xl p-6 bg-emerald-500/10">
            <h2 className="text-2xl font-semibold mb-3">Ad Studio</h2>
            <p className="text-gray-300 mb-6">
              Generate ad copy, creative prompts, and downloadable ad packages.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}