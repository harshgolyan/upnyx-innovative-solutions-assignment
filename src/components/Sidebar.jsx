import React, { useState } from "react";
import "../App.css";
import ChatHistory from "./ChatHistory";
import Info from "./Info";
import { AlignJustify, XCircle } from "lucide-react";
import Dropdown from "./Dropdown";

const Sidebar = ({selectedOption, setSelectedOption}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`md:sticky fixed mt-12 md:mt-0 inset-y-0 left-0 z-10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="w-[14.63rem] md:h-[40rem] h-[36rem] overflow-hidden m-2 mt-4 rounded-md flex flex-col bg-white shadow-md">
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 md:hidden"
                >
                    <XCircle size={25} color="black" />
                </button>
                    <div className="flex flex-col justify-start">
                        <button className="text-[#8191C9FF] border border-[#8191C9FF] w-[12.88rem] leading-6 rounded-sm py-2 m-3 md:mt-4 mt-10">+ New Chat</button>
                        <div className="md:hidden pr-2">
                            <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption}  />
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <ChatHistory />
                        </div>
                    </div>
                    <div className="flex-grow" />
                    <div className="mb-3">
                        <Info />
                    </div>
                </div>
            </div>

            {/* Toggle Button for mobile */}
            <button
                onClick={toggleSidebar}
                className="md:hidden sticky top-4 left-4 z-20  rounded-full h-[2rem] p-2"
            >
                {isOpen ?"" : <AlignJustify size={25} color="black" />}
            </button>
        </>
    );
}

export default Sidebar;
