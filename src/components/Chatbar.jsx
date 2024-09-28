import { Pencil, BadgeHelp, SendHorizonal } from "lucide-react";
import "../App.css";

const Chatbar = ({ selectedOption }) => {
    const questionsAndAnswers = [
        { type: "question", text: "What is the largest planet in our solar system?" },
        { type: "answer", text: "Jupiter is the largest planet in our solar system." },
        { type: "question", text: "How many continents are there on Earth?" },
        { type: "answer", text: "There are seven continents on Earth." },
        { type: "question", text: "What is the capital of France?" },
        { type: "answer", text: "The capital of France is Paris." },
        { type: "question", text: "Who wrote 'Romeo and Juliet'?" },
        { type: "answer", text: "William Shakespeare wrote 'Romeo and Juliet'." },
        { type: "question", text: "What is the chemical symbol for water?" },
        { type: "answer", text: "The chemical symbol for water is H₂O." },
    ];

    return (
        <div className="flex flex-col h-full w-full md:w-[46.88rem] md:mt-7 rounded-md mb-2 mt-[4rem] mr-[4rem] sm:mr-4 justify-center ml-5 sm:ml-1 relative">
            <div className="sm:h-[5.5rem] h-auto w-full border-2 border-gray-400 rounded-md">
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

            <div className="flex-none mt-4 mb-[8rem] px-5">
                <BadgeHelp 
                    size={25} 
                    className="absolute text-[#12A9BCFF] left-[2.5rem] bottom-[8.8rem]"  
                /> 
                <input
                    className="border rounded-md md:w-[44.88rem] sm:min-w-[35rem] w-[42rem] h-[3.5rem] px-2 text-[#12A9BCFF] pl-[5rem] placeholder:text-[#12A9BCFF]" 
                    type="text" 
                    placeholder={`Enter your ${selectedOption} query here ...`}
                />
                <SendHorizonal 
                    size={25} 
                    className="absolute text-[#12A9BCFF] right-[2.5rem] bottom-[8.8rem]" 
                />
            </div>

            <div className="text-xs font-light text-gray-500 mt-2 absolute bottom-[4rem] pl-10">
                Type your next question above or select one from the related questions section.
            </div>
        </div>
    );
};

export default Chatbar;
