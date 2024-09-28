import { Pencil, MessageSquare, BadgeHelp, Mail, FileDown, Copy, ChartLine, SendHorizonal } from "lucide-react";
import "../App.css"

const Chatbar = ({ selectedOption }) => {
    const questionsAndAnswers = [
        { type: "answer", text: "Paris Paris Paris Paris Paris Paris Paris" },
        { type: "question", text: "What is the capital of France?" },
        { type: "answer", text: "William Shakespeare" },
        { type: "answer", text: "In today’s fast-paced world, effective communication plays a crucial role in building " },
        { type: "question", text: "What is the largest planet in our solar system?" },
        { type: "answer", text: "Paris Paris Paris Paris Paris Paris Paris" },
        { type: "question", text: "What is the capital of France?" },
        { type: "answer", text: "William Shakespeare" },
        { type: "answer", text: "In today’s fast-paced world, effective communication plays a crucial role in building In today’s fast-paced world, effective communication plays a crucial role in building In today’s fast-paced world, effective communication plays a crucial role in building " },
        { type: "question", text: "What is the largest planet in our solar system?" },
        { type: "answer", text: "Paris Paris Paris Paris Paris Paris Paris" },
        { type: "question", text: "What is the capital of France?" },
        { type: "answer", text: "William Shakespeare" },
        { type: "answer", text: "In today’s fast-paced world, effective communication plays a crucial role in building " },
        { type: "question", text: "What is the largest planet in our solar system?" },
        { type: "answer", text: "Paris Paris Paris Paris Paris Paris Paris" },
        { type: "question", text: "What is the capital of France?" },
        { type: "answer", text: "William Shakespeare" },
        { type: "answer", text: "In today’s fast-paced world, effective communication plays a crucial role in building " },
        { type: "question", text: "What is the largest planet in our solar system?" },
    ];

    return (
        <div className="flex flex-col h-full w-[46.88rem] rounded-md mb-2 mt-7 ml-5 relative">
            <div className="h-[5.5rem] w-full border-2 border-gray-400 rounded-md">
                <div className="font-bold text-lg pl-[2rem] pt-[0.5rem]">Introduce yourself to AIWorkSquad</div>
                <div className="flex items-center pl-[2rem] pt-[0.5rem]">
                    <div className="text-gray-400 mr-2">I am Harsh. CEO of an IT company</div>
                    <div><Pencil size={15} /></div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 chatbar">
                {questionsAndAnswers.map((item, index) => (
                    <div key={index} className={`my-3 flex ${item.type === 'question' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-2 rounded-sm flex items-center space-x-2 relative max-w-[42.75rem] ${item.type === 'question' ? 'bg-[#12A9BCFF] text-white' : 'bg-white text-[#12A9BCFF] border border-[#12A9BCFF]'}`}>
                            {item.type === 'answer' && <img src="/chatIcon.svg" alt="chat Icon" className="mr-2 w-[18px] h-[18px] mb-2 text-[#12A9BCFF]" />}
                            <span className="mb-3">{item.text}</span>
                            {item.type === 'question' && <BadgeHelp size={15} className="ml-2 mb-2" />}
                            {item.type === 'answer' && (
                                <div className="absolute bottom-0 right-0 flex space-x-2 p-1">
                                    <img src="/copy.svg" alt="Copy Icon" className="w-[15px] h-[15px] cursor-pointer" />
                                    <img src="/export.svg" alt="Export Icon" className="w-[15px] h-[15px] cursor-pointer" />
                                    <img src="/download.svg" alt="Download Icon" className="w-[15px] h-[15px] cursor-pointer" />
                                    <img src="/mail.svg" alt="Mail Icon" className="w-[15px] h-[15px] cursor-pointer" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-none mt-4 mb-[12rem] px-5">
                <BadgeHelp size={25} className="absolute text-[#12A9BCFF] left-[2.5rem] bottom-[12.8rem]"  /> 
                <input
                    className="border rounded-md w-full h-[3.5rem] px-2 text-[#12A9BCFF] pl-[5rem] placeholder:text-[#12A9BCFF]" 
                    type="text" 
                    placeholder={`Enter your ${selectedOption} query here ...`}
                />
                <SendHorizonal size={25} className="absolute text-[#12A9BCFF] right-[2.5rem] bottom-[12.8rem]" />
            </div>
            <div className="text-xs font-light text-gray-500 mt-2 absolute bottom-[9rem] pl-10">
                Type your next question above or select one from the related questions section.
            </div>
        </div>
    );
};

export default Chatbar;
