import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Chatbar from "./Chatbar";

const Chatbot = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex flex-grow overflow-hidden">
                    <Sidebar />
                    <Chatbar />
                </div>
            </div>
        </>
    );
}

export default Chatbot;
