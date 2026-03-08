import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../services/apiRequest";

export default function Login() {
  const [user, setUser] = useState({
    id: "",
    username: "",
    role: "Student", // Defaulting to Student
    password: "",
  });
  
  const [mode, setMode] = useState("login"); // "login" or "register"

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // Direct action based on the mode selected
      const action = mode === "login" ? "login" : "register";
      const endpoint = "http://localhost/CotedThesis/my-app/src/backend/api.php";
      const response = await apiRequest(
        endpoint,
        action,
        "POST",
        user,
      );
      // Handle success or error based on response.status
      if (response.success) {
        setUser({
          id: "",
          username: "",
          role: "Student",
          password: "",
        });
        if (mode === "login") {
          navigate("/categoryselection");
        } else {
           // Switch to login mode after successful registration
           setMode("login");
        }
      } else {
        alert("Error: " + response.message);
      }
    } catch (err) {
      console.error(`${mode} failed:`, err);
      alert(`${mode} error: ` + err.message);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    
    // Automatically switch to login mode if role is Teacher
    if (name === "role" && value === "Teacher") {
       setMode("login");
    }
  };
  
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
                backgroundSize: "8px 8px",
              }}
            ></div>
          </div>
          <div className="relative z-20 mb-6 text-center">
            <h1 className="text-white text-4xl md:text-6xl bungee tracking-tighter drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]">
              QUEST <span className="text-yellow-300">EARTH</span>
            </h1>
            <p className="text-white text-sm md:text-base pixel-font tracking-tight mt-2 bg-black/40 px-4 py-1 border-2 border-white/20 inline-block">
              {mode === "login" ? "EXPLORER LOGIN" : "EXPLORER REGISTRATION"}
            </p>
          </div>
          
          <div className="relative z-10 flex items-center justify-center w-full max-w-5xl px-4">
            <div className="parchment-container w-full max-w-md p-8 md:p-10 border-4 border-[#8b4513] rounded-sm bg-[#dfc99e]">
              
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#8b4513]"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#8b4513]"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#8b4513]"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#8b4513]"></div>
              
              {/* Toggles */}
              <div className="flex mb-6 border-b-2 border-[#8b4513]/30 pb-4 justify-between items-center">
                 <div className="flex space-x-2">
                    <button 
                       type="button"
                       onClick={() => setMode("login")}
                       className={`px-3 py-1 text-xs pixel-font border-2 ${mode === "login" ? 'bg-[#8b4513] text-white border-[#8b4513]' : 'bg-transparent text-[#8b4513] border-[#8b4513]/50 hover:bg-[#8b4513]/10'}`}
                    >
                       LOGIN
                    </button>
                    {user.role === "Student" && (
                        <button 
                           type="button"
                           onClick={() => setMode("register")}
                           className={`px-3 py-1 text-xs pixel-font border-2 ${mode === "register" ? 'bg-[#8b4513] text-white border-[#8b4513]' : 'bg-transparent text-[#8b4513] border-[#8b4513]/50 hover:bg-[#8b4513]/10'}`}
                        >
                           REGISTER
                        </button>
                    )}
                 </div>
              </div>

              <form className="space-y-5" onSubmit={handleOnSubmit}>
                <div>
                  <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2 cursor-pointer">
                    ROLE
                  </label>
                  <select
                    name="role"
                    className="input-pixel w-full py-3 px-4 outline-none pixel-font text-xs text-gray-700 bg-white border-2 border-[#8b4513] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
                    onChange={(e) => handleOnChange(e)}
                    value={user.role}
                  >
                    <option value="Student">STUDENT</option>
                    <option value="Teacher">TEACHER</option>
                  </select>
                </div>

                <div>
                  <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2 cursor-pointer">
                    SCHOOL ID
                  </label>
                  <input
                    className="input-pixel w-full py-3 px-4 outline-none pixel-font text-xs text-gray-700 bg-white border-2 border-[#8b4513] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-text"
                    placeholder="Enter your School ID"
                    type="text"
                    name="id"
                    onChange={(e) => handleOnChange(e)}
                    value={user.id}
                    required
                  />
                </div>
                
                {mode === "register" && (
                   <div>
                     <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2 cursor-pointer">
                       USERNAME
                     </label>
                     <input
                       className="input-pixel w-full py-3 px-4 outline-none pixel-font text-xs text-gray-700 bg-white border-2 border-[#8b4513] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-text"
                       placeholder="Enter your Username"
                       type="text"
                       name="username"
                       onChange={(e) => handleOnChange(e)}
                       value={user.username}
                       required={mode === "register"}
                     />
                   </div>
                )}
                
                <div>
                  <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2 cursor-pointer">
                    PASSWORD
                  </label>
                  <input
                    className="input-pixel w-full py-3 px-4 outline-none pixel-font text-xs text-gray-700 bg-white border-2 border-[#8b4513] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-text"
                    placeholder="Enter your Password"
                    type="password"
                    name="password"
                    onChange={(e) => handleOnChange(e)}
                    value={user.password}
                    required
                  />
                </div>
                <div className="pt-4">
                  <button
                    className="login-button w-full bg-green-500 hover:bg-green-400 text-white bungee text-2xl py-4 border-4 border-white flex items-center justify-center gap-3 transition-colors active:translate-y-1 active:border-b-0 cursor-pointer"
                    type="submit"

                  >
                    {mode === "login" ? "LOGIN" : "REGISTER"}
                    <span className="material-symbols-outlined text-3xl">
                      {mode === "login" ? "login" : "person_add"}
                    </span>
                  </button>
                </div>
              </form>
              
              {mode === "login" && (
                  <div className="mt-6 text-center">
                    <a
                      className="pixel-font text-[8px] text-[#8b4513] hover:underline cursor-pointer"
                      href="#"
                    >
                      FORGOT YOUR QUEST KEY?
                    </a>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
