import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Chatbar from "./Chatbar";

const Chatbot = () => {
    return (
        <>
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="flex ">
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        <Chatbar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatbot;