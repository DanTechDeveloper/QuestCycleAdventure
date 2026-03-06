export default function SplashScreen() {
  return (
    <>
      <div className="bg-blue-900 overflow-hidden">
        <div className="relative h-screen w-full flex flex-col items-center justify-center pixel-sky">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-1/3 right-1/4 pixel-sun"></div>
            <div className="absolute top-20 left-[15%] w-24 h-8 pixel-cloud opacity-80"></div>
            <div className="absolute top-40 right-[10%] w-32 h-10 pixel-cloud opacity-60"></div>
            <div className="absolute top-10 left-[40%] w-20 h-6 pixel-cloud opacity-40"></div>
            <div className="pixel-hill-back -left-1/4"></div>
            <div className="pixel-hill -left-1/4"></div>
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "4px 4px",
              }}
            ></div>
          </div>
   
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <div className="mb-8 relative">
              <div className="w-32 h-32 md:w-44 md:h-44 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-4 border-yellow-400 shadow-xl overflow-hidden">
                <div className="pixel-cyclist relative flex flex-col items-center">
                  <div className="relative w-24 h-24">
                    <div className="absolute top-2 left-6 w-10 h-6 bg-red-500 border-b-2 border-red-700"></div>
                    <div className="absolute top-8 left-8 w-6 h-6 bg-orange-200"></div>
                    <div className="absolute top-10 left-12 w-2 h-2 bg-black"></div>
                    <div className="absolute top-14 left-6 w-10 h-10 bg-blue-500"></div>
                    <div className="absolute bottom-0 left-2 w-20 h-2 bg-gray-700"></div>
                    <div className="absolute bottom-0 left-2 w-2 h-12 bg-gray-700"></div>
                    <div className="absolute bottom-0 right-2 w-2 h-12 bg-gray-700"></div>
                    <div className="absolute bottom-0 -left-2 w-8 h-8 rounded-full border-4 border-black bg-white/10"></div>
                    <div className="absolute bottom-0 -right-2 w-8 h-8 rounded-full border-4 border-black bg-white/10"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-lg border-4 border-white pixel-font text-[10px] shadow-lg">
                LVL 1
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-white text-6xl md:text-8xl bungee tracking-tighter drop-shadow-[0_8px_0_rgba(0,0,0,0.4)]">
                QUEST <span className="text-yellow-300">EARTH</span>
              </h1>
              <p className="text-white text-xl md:text-2xl pixel-font tracking-tight mt-4 bg-black/40 px-6 py-2 border-2 border-white/20 inline-block">
                CYCLE ADVENTURE
              </p>
            </div>
            <div className="mb-16">
              <button className="game-button bg-green-500 hover:bg-green-400 text-white bungee text-3xl md:text-4xl px-12 py-6 rounded-3xl border-4 border-white flex items-center gap-4 group">
                START QUEST
                <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">
                  play_arrow
                </span>
              </button>
            </div>
         
          </div>
         
     
        </div>
      </div>
    </>
  );
}
