import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Chatbar from "./Chatbar";
import { useState } from "react";

const Chatbot = () => {
    const  [selectedOption, setSelectedOption] = useState("Marketing");
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
                <div className="flex flex-grow overflow-hidden">
                    <Sidebar />
                    <Chatbar selectedOption={selectedOption} />
                </div>
            </div>
        </>
    );
}

export default Chatbot;
