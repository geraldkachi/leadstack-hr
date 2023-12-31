import { useEffect, useState } from 'react';
import './styles.css'
const Loading = () => {
    const [percentage, setPercentage] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setPercentage((prevPercentage) => Math.min(prevPercentage + 1, 100));
        }, 22); // Adjust the interval to control the speed of the countdown

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount


    return (
        <>
            <div className="divLoader flex items-center justify-center flex-col relative">
                <div className='text-center'>

                    <img src="loadersvg.svg" className='translate-x-full animate-spin  rotate-180' alt="" />
                    <span className="mt-5 text-[#535768]">Leadstack initializing...</span>
                </div>

                <div className='absolute bottom-0 right-0 p-3 text-3xl md:text-4xl lg:text-9xl text-[#E5E6E9] font-black    '>
                    <h1>{percentage}%</h1>
                </div>
            </div>

        </>
    )
}

export default Loading