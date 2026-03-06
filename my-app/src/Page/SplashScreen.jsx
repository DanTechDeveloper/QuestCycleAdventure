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
