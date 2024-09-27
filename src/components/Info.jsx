import { UserRoundPlus, SquareArrowOutUpRight, SquarePen, ShieldCheck  } from "lucide-react";

const Info = () => {
    return (
        <>
            <div>
                <div className="ml-3 text-sm">
                    <div className="flex items-center space-x-5 mt-5">
                        <div>
                            <UserRoundPlus size={15} />
                        </div>
                        <div className="font-thin">
                            Upgrade to Plus
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 mt-5">
                        <div>
                            <SquareArrowOutUpRight size={15} />
                        </div>
                        <div className="font-thin">
                            Updates & FAQ
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 mt-5">
                        <div>
                            <SquarePen size={15} />
                        </div>
                        <div className="font-thin">
                            Terms and Conditions
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 mt-5">
                        <div>
                            <ShieldCheck size={15} />
                        </div>
                        <div className="font-thin">
                            Privacy Policy Page
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info;