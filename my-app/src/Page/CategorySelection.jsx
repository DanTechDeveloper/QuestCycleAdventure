import { useNavigate } from "react-router-dom";
export default function CategorySelection() {
  const navigate = useNavigate();
  return (
    <>
      <div class="bg-blue-900 overflow-hidden">
        <div class="relative h-screen w-full flex flex-col items-center pixel-sky overflow-hidden">
          <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div class="absolute bottom-1/3 right-1/4 pixel-sun"></div>
            <div class="absolute top-20 left-[15%] w-24 h-8 pixel-cloud opacity-80"></div>
            <div class="absolute top-40 right-[10%] w-32 h-10 pixel-cloud opacity-60"></div>
            <div class="absolute top-10 left-[40%] w-20 h-6 pixel-cloud opacity-40"></div>
            <div class="pixel-hill-back -left-1/4"></div>
            <div class="pixel-hill -left-1/4"></div>
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "4px 4px",
              }}
            ></div>
          </div>
          <div class="relative z-20 w-full max-w-6xl mt-8 px-8 flex justify-between items-center">
            <div class="flex items-center gap-4 bg-black/40 border-4 border-white p-3 rounded-2xl">
              <div class="w-16 h-16 bg-blue-400 border-4 border-white rounded-xl flex items-center justify-center character-box">
                <div class="relative w-10 h-10">
                  <div class="absolute top-0 left-2 w-6 h-4 bg-red-500"></div>
                  <div class="absolute top-4 left-3 w-4 h-4 bg-orange-200"></div>
                  <div class="absolute bottom-0 left-1 w-8 h-4 bg-blue-600"></div>
                </div>
              </div>
              <div>
                <h3 class="pixel-font text-white text-xs mb-1">SCOUT RIDER</h3>
                <div class="flex gap-1">
                  <div class="w-4 h-4 bg-yellow-400 border-2 border-white"></div>
                  <div class="w-4 h-4 bg-yellow-400 border-2 border-white"></div>
                  <div class="w-4 h-4 bg-gray-500 border-2 border-white"></div>
                </div>
              </div>
            </div>
            <div class="bg-white px-8 py-4 border-4 border-black rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <div class="pixel-font text-green-600 text-sm">
                QUESTS: 1/3 UNLOCKED
              </div>
            </div>
            <div class="bg-accent border-4 border-white p-3 rounded-2xl flex items-center gap-3">
              <span class="material-symbols-outlined text-white">star</span>
              <span class="bungee text-white text-2xl">1,250 XP</span>
            </div>
          </div>
          <div class="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-6">
            <h1 class="bungee text-white text-5xl md:text-6xl mb-12 drop-shadow-[0_6px_0_rgba(0,0,0,0.5)]">
              CHOOSE YOUR ADVENTURE
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
              <button
                onClick={() => navigate("/waterCycle")}
                class="quest-card quest-card-active bg-blue-500 rounded-2xl flex flex-col items-center justify-center p-8 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 2px, transparent 2px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <div class="mb-6 transform group-hover:scale-110 transition-transform">
                  <div class="relative w-24 h-24 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-white text-8xl"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      water_drop
                    </span>

                    <div class="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                  </div>
                </div>
                <h2 class="pixel-font text-white text-lg mb-6">WATER CYCLE</h2>
                <div class="bg-yellow-400 border-4 border-white px-8 py-3 rounded-xl bungee text-2xl text-white shadow-[0_4px_0_#ca8a04]">
                  PLAY
                </div>
                <div class="absolute top-4 right-4">
                  <span
                    className="material-symbols-outlined text-yellow-300 text-4xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    stars
                  </span>
                </div>
              </button>
              <button
                onClick={() => navigate("/rock-cycle")}
                class="quest-card quest-card-locked bg-amber-700 rounded-2xl flex flex-col items-center justify-center p-8 relative"
              >
                <div class="mb-6">
                  <div class="relative w-24 h-24 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-white text-8xl"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      landscape
                    </span>
                  </div>
                </div>
                <h2 class="pixel-font text-white text-lg mb-6">ROCK CYCLE</h2>
                <div class="bg-gray-400 border-4 border-white px-8 py-3 rounded-xl bungee text-2xl text-white">
                  LOCKED
                </div>
                <div class="absolute inset-0 flex items-center justify-center z-20">
                  <span
                    className="material-symbols-outlined text-yellow-500 text-9xl drop-shadow-2xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    lock
                  </span>
                </div>
              </button>
              <button
                onClick={() => navigate("/plant-cycle")}
                class="quest-card quest-card-locked bg-green-600 rounded-2xl flex flex-col items-center justify-center p-8 relative"
              >
                <div class="mb-6">
                  <div class="relative w-24 h-24 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-white text-8xl"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      eco
                    </span>
                  </div>
                </div>
                <h2 class="pixel-font text-white text-lg mb-6">PLANT CYCLE</h2>
                <div class="bg-gray-400 border-4 border-white px-8 py-3 rounded-xl bungee text-2xl text-white">
                  LOCKED
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span
                    className="material-symbols-outlined text-yellow-500 text-9xl drop-shadow-2xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    lock
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div class="relative z-20 w-full p-8 flex justify-center">
            <button
              onClick={() => navigate("/splashScreen")}
              class="bg-white px-8 py-3 border-4 border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div class="pixel-font text-black text-xs flex items-center gap-2">
                <span class="material-symbols-outlined">arrow_back</span>
                BACK TO HUB
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
