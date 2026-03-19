export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      
      <img 
        src="/logo.png" 
        alt="TerravaultIQ Logo"
        className="w-80 md:w-[500px] mb-6"
      />

      <p className="text-xl md:text-2xl text-gray-300 mb-4">
        Audience Intelligence Solutions
      </p>

      <p className="text-lg md:text-xl max-w-3xl text-gray-400 mb-8">
        Build and activate hyper-targeted audiences using location,
        lookback, and lead data—all in one platform.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold">
          Build Audience
        </button>
        <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-xl font-semibold">
          Request Demo
        </button>
      </div>

    </main>
  );
}