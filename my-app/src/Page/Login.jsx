import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../services/apiRequest";
export default function Login() {
  const [user, setUser] = useState({
    id: "",
    username: "",
    role: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest(
        "http://localhost/CotedThesis/my-app/src/backend/api.php",
        "login",
        "POST",
        user,
      );
      console.log("Login response:", response);
      // Handle success or error based on response.status
      if (response.status) {
        alert("User created successfully!");
        setUser({
          id: "",
          username: "",
          role: "",
          password: "",
        })
        navigate("/splashScreen");
      
      } else {
        alert("Error: " + response.message);
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login error: " + err.message);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
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
              EXPLORER LOGIN
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-center w-full max-w-5xl px-4">
            <div className="parchment-container w-full max-w-md p-8 md:p-10 border-4 border-[#8b4513] rounded-sm">
            
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#8b4513]"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#8b4513]"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#8b4513]"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#8b4513]"></div>
              <form className="space-y-5" onSubmit={handleOnSubmit}>
                <div>
                  <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2">
                    SCHOOL ID
                  </label>
                  <input
                    className="input-pixel w-full py-3 px-4 focus:ring-0 focus:outline-none pixel-font text-xs text-gray-700"
                    placeholder="Enter your School ID"
                    type="text"
                    name="id"
                    onChange={(e) => handleOnChange(e)}
                    value={user.id}

                  />
                </div>
                <div>
                  <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2">
                    USERNAME
                  </label>
                  <input
                    className="input-pixel w-full py-3 px-4 focus:ring-0 focus:outline-none pixel-font text-xs text-gray-700"
                    placeholder="Enter your Username"
                    type="text"
                    name="username"
                    onChange={(e) => handleOnChange(e)}
                    value={user.username}
                  />
                </div>
                <div>
                  <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2">
                    ROLE
                  </label>
                  <select
                    name="role"
                    className="input-pixel w-full py-3 px-4 focus:ring-0 focus:outline-none pixel-font text-xs text-gray-700 appearance-none bg-white"
                    onChange={(e) => handleOnChange(e)}
                    value={user.role}
                  >
                    <option value="Student">STUDENT</option>
                    <option value="Teacher">TEACHER</option>
                  </select>
                </div>
                <div>
                  <label className="block pixel-font text-[10px] text-[#5d2e0a] mb-2">
                    PASSWORD
                  </label>
                  <input
                    className="input-pixel w-full py-3 px-4 focus:ring-0 focus:outline-none pixel-font text-xs text-gray-700"
                    placeholder="Enter your Password"
                    type="password"
                    name="password"
                    onChange={(e) => handleOnChange(e)}
                    user={user.password}
                  />
                </div>
                <div className="pt-4">
                  <button
                    className="login-button w-full bg-green-500 hover:bg-green-400 text-white bungee text-2xl py-4 border-4 border-white rounded-none flex items-center justify-center gap-3"
                    type="submit"
                  >
                    LOGIN
                    <span className="material-symbols-outlined text-3xl">
                      login
                    </span>
                  </button>
                </div>
              </form>
              <div className="mt-6 text-center">
                <a
                  className="pixel-font text-[8px] text-[#8b4513] hover:underline"
                  href="#"
                >
                  FORGOT YOUR QUEST KEY?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
