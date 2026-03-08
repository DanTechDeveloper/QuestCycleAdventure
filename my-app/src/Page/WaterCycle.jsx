import { useState, useEffect } from "react";
import apiRequest from "../services/apiRequest";
export default function WaterCycle() {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];
  const choices = [
    {
      id: "A",
      text: currentQuestion?.choice_a,
      questions: currentQuestion?.question_text,
    },
    {
      id: "B",
      text: currentQuestion?.choice_b,
      questions: currentQuestion?.question_text,
    },
    {
      id: "C",
      text: currentQuestion?.choice_c,
      questions: currentQuestion?.question_text,
    },
    {
      id: "D",
      text: currentQuestion?.choice_d,
      questions: currentQuestion?.question_text,
    },
  ];
  // debugger;
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiRequest(
        "http://localhost/CotedThesis/my-app/src/backend/api.php",
        "QuestionAndAnswer",
      );
      if (response.status) {
        setQuestions(response.questions);
      } else {
        alert("Error: " + response.message);
      }
    };
    fetchData();
  }, []);

  const handleOnClick = () => {
    if (selectedChoice === null) {
      alert("Please select an option.");
      return;
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedChoice(null);
    } else {
      alert("Quiz Completed!");
    }
  };

  return (
    <>
      <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {/* <!-- Animated Pixel Background Layer --> */}
        <div
          className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-pixel-sky"
          data-alt="Pixel art background with blocky blue sky"
        >
          <div
            className="absolute bottom-0 w-full h-64 bg-green-800"
            data-alt="Blocky pixelated green mountains silhouette"
            style={{
              clipPath:
                "polygon(0% 100%, 0% 80%, 10% 70%, 20% 85%, 30% 60%, 40% 80%, 50% 50%, 60% 85%, 70% 65%, 80% 90%, 90% 60%, 100% 80%, 100% 100%)",
            }}
          ></div>

          <div
            className="absolute top-20 left-10 w-32 h-12 bg-white opacity-80"
            data-alt="Blocky pixelated white cloud"
            style={{ boxShadow: "4px 4px 0 #ddd" }}
          />

          <div
            className="absolute top-40 right-20 w-40 h-16 bg-white opacity-80"
            data-alt="Blocky pixelated white cloud"
            style={{ boxShadow: "4px 4px 0 #ddd" }}
          />
        </div>
        <div class="layout-container flex h-full grow flex-col z-10">
          {/* <!-- Top Nav Bar --> */}
          <header class="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b-4 border-black">
            <div class="flex items-center gap-3">
              <div class="size-10 bg-primary pixel-border flex items-center justify-center">
                <span className="material-symbols-outlined text-black font-bold">
                  public
                </span>
              </div>
              <h2 class="text-xl font-extrabold tracking-tight uppercase pixel-text-shadow text-black">
                Quest Earth
              </h2>
            </div>
            <div class="flex items-center gap-6">
              {/* <!-- XP Badge --> */}
              <div class="flex items-center bg-primary px-4 py-1 pixel-border pixel-button-shadow">
                <span class="text-black font-bold text-sm">1,250 XP</span>
              </div>
              {/* <!-- Lives / Hearts --> */}
              <div class="flex gap-1">
                <div>
                  <span
                    className="material-symbols-outlined text-red-500 scale-125"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    favorite
                  </span>
                  <span
                    className="material-symbols-outlined text-red-500 scale-125"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    favorite
                  </span>
                </div>

                <span
                  className="material-symbols-outlined text-red-500 scale-125"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  favorite
                </span>
              </div>
              {/* <!-- Profile --> */}
              <div class="size-10 bg-slate-200 dark:bg-slate-700 pixel-border overflow-hidden">
                <img
                  alt="User Avatar"
                  class="w-full h-full object-cover"
                  data-alt="Pixel art character avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLV9GE0NnwC3JNWd4xYc3S8fTUOMYI6dTgJqM16W5iLE0d2nsNxvUuPQEHLuUtxZ3vp1i856PXtwE85MC9bb1n2dmQSEZH0XsT7z-tmSI3WZPfF2KHPyHViMEpMFliBEztQWNhcUMIT9RQGAedVYBS1TsJc8-o9J1HLOtrITqZzJ6KlwTcnUmvTq6HXRgiM0pCDbDrhPrujc53rKMZW2-Y7Ytf8-mFzbYiHHsKgKAfEFN7RcWmC4ELueau6BxNP1kpdl3fSdzcnW8"
                />
              </div>
            </div>
          </header>
          <main class="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto w-full gap-8">
            {/* <!-- Question Header & Mode Toggle --> */}
            <div class="w-full flex justify-between items-center">
              <div class="flex flex-col">
                <span class="text-primary font-bold text-xs uppercase tracking-widest mb-1">
                  Adventure: Water Cycle
                </span>
                <h3 class="text-lg font-bold">{`QUESTION ${currentIndex + 1} OF ${questions?.length}`}</h3>
              </div>
              {/* <!-- Pre-Test Mode Toggle --> */}
            </div>
            {/* <!-- Main Question Box (Pixelated Parchment Style) --> */}
            <div class="w-full bg-[#f3e5ab] dark:bg-[#d4c590] p-8 pixel-border relative overflow-hidden">
              {/* <!-- Texture detail --> */}
              <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div class="relative z-10 flex flex-col items-center text-center gap-6">
                <p class="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-900 leading-tight">
                  {currentQuestion?.question_text}
                </p>
              </div>
            </div>
            {/* <!-- Multiple Choice Grid --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => setSelectedChoice(choice.id)}
                  className={`group relative flex items-center justify-between p-5 bg-white dark:bg-slate-800 border-4 transition-all text-left pixel-button-shadow text-slate-900 dark:text-white ${
                    selectedChoice === choice.id
                      ? "border-primary dark:border-primary"
                      : "border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-8 bg-slate-100 dark:bg-slate-900 pixel-border font-bold text-sm">
                      {choice.id}
                    </span>
                    <span className="text-lg">{choice.text}</span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-primary transition-opacity ${
                      selectedChoice === choice.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    check_circle
                  </span>
                </button>
              ))}
            </div>
            {/* <!-- Progress & Navigation --> */}
            <div class="w-full flex flex-col gap-6 mt-4">
              <div class="flex items-center justify-center w-full">
                <button
                  onClick={() => handleOnClick()}
                  class="flex items-center gap-2 bg-primary px-8 py-3 pixel-border pixel-button-shadow hover:translate-y-1 transition-transform"
                >
                  <span class="text-black font-black uppercase italic">
                    Next Question
                  </span>
                  <span class="material-symbols-outlined font-bold text-black">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </main>
          {/* <!-- Footer Stats --> */}
          <footer class="p-6 flex justify-center gap-12 border-t-4 border-black bg-white/50 dark:bg-background-dark/50">
            <div class="flex flex-col items-center">
              <span class="text-[10px] uppercase font-bold text-slate-500">
                Streak
              </span>
              <div class="flex items-center gap-1 text-orange-500 font-bold">
                <span class="material-symbols-outlined text-sm">
                  local_fire_department
                </span>
                <span>5 Questions</span>
              </div>
            </div>
            <div class="flex flex-col items-center border-x-4 border-black/10 px-12">
              <span class="text-[10px] uppercase font-bold text-slate-500">
                Time
              </span>
              <div class="flex items-center gap-1 text-slate-900 dark:text-slate-100 font-bold">
                <span class="material-symbols-outlined text-sm">schedule</span>
                <span>02:45</span>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-[10px] uppercase font-bold text-slate-500">
                Accuracy
              </span>
              <div class="flex items-center gap-1 text-blue-500 font-bold">
                <span class="material-symbols-outlined text-sm">target</span>
                <span>100%</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
