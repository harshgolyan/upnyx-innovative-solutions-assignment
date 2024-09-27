import "../App.css";
import ChatHistory from "./ChatHistory";
import Info from "./Info";

const Sidebar = () => {
    return (
        <>
            <div>
                <div className="w-[14.63rem] h-screen overflow-hidden m-2 mt-4 shadow-top rounded-md flex flex-col">
                    <div className="flex flex-col justify-start">
                        <button className="text-[#8191C9FF] border border-[#8191C9FF] w-[12.88rem] leading-6 rounded-sm py-2 m-3">+ New Chat</button>
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
        </>
    );
}

export default Sidebar;
