import { History, MessageSquare, PencilLine, Trash2 } from "lucide-react";
import Tooltip from "./ToolTip";

const ChatHistory = () => {
    const searchedHistory = [
        "New Chat",
        "What is Marketing",
        "What services do you offer?"
    ];

    return (
        <div>
            <div className="flex flex-col justify-center items-center text-sm">
                <div className="flex items-center">
                    <History size={20} className="text-black mr-3" />
                    <div className="text-lg">History</div>
                </div>
                <div>
                    {searchedHistory.map((item, index) => (
                        <div key={index} className="flex justify-between p-2 m-2 items-center space-x-2">
                            <div>
                                <MessageSquare size={15} />
                            </div>
                            <Tooltip content={item}>
                                <div className="font-thin text-black text-left">
                                    {item.length > 15 ? item.substring(0, 15) + "..." : item}
                                </div>
                            </Tooltip>
                            <div className="flex space-x-3">
                                <PencilLine size={15} />
                                <Trash2 size={15} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatHistory;
