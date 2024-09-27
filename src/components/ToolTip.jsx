import { useState } from 'react';

const Tooltip = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <div className="relative inline-block">
            <div 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            {isVisible && (
                <div className="absolute bg-white text-black text-sm rounded-md p-2 z-10 w-[10rem] border border-black" style={{ top: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
