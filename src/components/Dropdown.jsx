import { useState } from 'react';

const Dropdown = ({ selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedOption(item);
        setIsOpen(false);
    };

    const departments = [
        { id: 1, name: "Marketing" },
        { id: 2, name: "Sales" },
        { id: 3, name: "IT" },
        { id: 4, name: "Social Media" },
        { id: 5, name: "Content" },
        { id: 6, name: "Influencer" }
    ];

    return (
        <div className="relative inline-block text-center h-[2.25rem] w-[14.81rem]">
            <div>
                <button 
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                    Department : {selectedOption}
                </button>
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-[14.81rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {departments.map(({ id, name }) => (
                            <div 
                                key={id}
                                className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleItemClick(name)}
                            >
                                Department : {name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
