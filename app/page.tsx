export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          TerravaultIQ Platform
        </h1>
        <p className="text-gray-400 text-lg">
          A unified intelligence system for modern digital marketing.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Lead Intelligence */}
        <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0a0a]">
          <h2 className="text-2xl font-semibold mb-2">
            Lead Intelligence
          </h2>
          <p className="text-gray-400 mb-6">
            Discover high-value prospects and build targeted outreach lists instantly.
          </p>

          <a
            href="https://terravaultiq-lead-intelligence-adxpkdfgcbl45ujd3sdkqo.streamlit.app/"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Launch Tool →
          </a>
        </div>

        {/* Audience Builder */}
        <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0a0a]">
          <h2 className="text-2xl font-semibold mb-2">
            Audience Builder
          </h2>
          <p className="text-gray-400 mb-6">
            Create hyper-targeted audiences using location, behavior, and intent data.
          </p>

          <button className="bg-gray-800 text-gray-400 px-6 py-3 rounded-lg">
            Coming Soon
          </button>
        </div>

        {/* Geo Intelligence */}
        <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0a0a]">
          <h2 className="text-2xl font-semibold mb-2">
            Geo Intelligence
          </h2>
          <p className="text-gray-400 mb-6">
            Map and analyze geographic opportunities for local marketing dominance.
          </p>

          <button className="bg-gray-800 text-gray-400 px-6 py-3 rounded-lg">
            Coming Soon
          </button>
        </div>

        {/* Lookback Intelligence */}
        <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0a0a]">
          <h2 className="text-2xl font-semibold mb-2">
            Lookback Intelligence
          </h2>
          <p className="text-gray-400 mb-6">
            Analyze past campaign performance to uncover hidden growth patterns.
          </p>

          <button className="bg-gray-800 text-gray-400 px-6 py-3 rounded-lg">
            Coming Soon
          </button>
        </div>

        {/* Ad Studio */}
        <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0a0a]">
          <h2 className="text-2xl font-semibold mb-2">
            Ad Studio
          </h2>
          <p className="text-gray-400 mb-6">
            Generate and launch high-converting ads powered by AI insights.
          </p>

          <button className="bg-gray-800 text-gray-400 px-6 py-3 rounded-lg">
            Coming Soon
          </button>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <a
          href="/"
          className="text-green-400 hover:underline"
        >
          ← Back to Home
        </a>
      </div>

    </main>
  );
}