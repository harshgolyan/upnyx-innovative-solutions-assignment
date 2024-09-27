import { useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loginHandler = (event) => {
        event.preventDefault();

        if (email === "user123" && password === "user123") {
            setError("");
            toast.success("Login successful")
            navigate("/chatbot")
        } else {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <>
            <div className="bg-gray-700 h-screen w-screen flex justify-center items-center relative">
                <div className="absolute top-0 left-0">
                    <div className="h-[3.05rem] w-[13.88rem] mt-4 ml-4">
                        <img src="/icon.png" alt="Icon" />
                    </div>
                </div>
                <div className="w-[39.13rem] h-[37.44rem] bg-neutral-900 rounded-tr-lg rounded-br-lg flex flex-col items-center">
                    <div className="text-white text-2xl font-bold leading-9 mt-[2rem]">Welcome Back</div>
                    <div className="text-white text-lg leading-7 mt-[1rem]">Signin to continue to Aiworksquad</div>
                    
                    {error && <div className="text-red-500 mt-2 font-medium">{error}</div>}

                    <div className="mt-[3rem] w-full flex flex-col items-center">
                        <div className="relative mb-4">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 mt-[0.6rem]" size={20} />
                            <input
                                className="w-[17.44rem] h-[2.63rem] rounded-md pl-10 pr-1 bg-neutral-900 font-bold leading-6 border border-white mt-[1rem] text-white focus:text-neutral-500"
                                type="text"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 mt-[0.6rem]" size={20} />
                            <input
                                className="w-[17.44rem] h-[2.63rem] rounded-md pl-10 pr-1 bg-neutral-900 font-bold leading-6 border border-white mt-[1rem] text-white focus:text-neutral-500"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-[0.02rem]">
                        <div className="flex items-center mr-6">
                            <input 
                                className="text-white text-sm"
                                type="checkbox" 
                                name="remember-me" 
                                id="remember-me"
                            />
                            <label htmlFor="remember-me" className="text-white">Remember me</label>
                        </div>
                        <div>
                            <a href="#" className="text-slate-500 text-sm ml-6">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="mt-[3rem]">
                        <button className="text-white bg-blue-600 w-[17.44rem] h-[2.75rem] rounded-md font-bold" onClick={loginHandler}>Login</button>
                    </div>
                </div>
                <div className="absolute bottom-0 text-white text-sm font-semibold mb-2">
                    2023 AiworkSquad.
                </div>
            </div>
        </>
    );
}

export default Signin;
