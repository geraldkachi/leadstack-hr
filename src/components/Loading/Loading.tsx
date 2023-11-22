import { useEffect, useState } from 'react';
import './styles.css'
const Loading = () => {
    const [percentage, setPercentage] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setPercentage((prevPercentage) => Math.min(prevPercentage + 1, 100));
        }, 28); // Adjust the interval to control the speed of the countdown

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <>
            <div className="divLoader flex items-center justify-center flex-col relative">
                <div className='text-center'>

                    <svg className="svgLoader bg-pink-" viewBox="0 0 1024 1024" width="10em" height="10em">
                        <path fill="lightblue" d="PATH FOR THE LOADER ICON" />
                    </svg> 
                    <span className="mt-5 text-[#535768]">Leadstack initializing...</span>
                </div>

                <div className='absolute bottom-0 right-0 p-3 text-9xl text-[#E5E6E9] font-black    '>
                    <h1>{percentage}%</h1>
                </div>
            </div>

        </>
    )
}

export default Loading