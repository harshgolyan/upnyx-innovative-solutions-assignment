import { CircleUserRound } from "lucide-react";
import Dropdown from "./Dropdown";
const Navbar = () => {
    return (
        <>
            <div className="h-[3.875rem] w-full bg-[#0095A9FF] flex items-center justify-between sticky top-0 left-0 py-2">
                <div >
                    <img className="h-[2.63rem] w-[13.75rem] bg-white mx-2 p-1 rounded-sm" src="icon2.png" alt="Icon" />
                </div>
                <div className="flex space-x-10 mr-20">
                    <div>
                        <Dropdown />
                    </div>
                    <div className="flex items-center">
                        <CircleUserRound size={30} color="white" />
                        <div className="text-white ml-4 font-medium">Harsh</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;