const Cards = () => {
    return (
        <>
            <div className="text-[#7A8699] bg-white hover:bg-[#FAFBFB] rounded-[15px] border border-[rgb(241,242,245)] p-4 md:p-6 mt-4 mb-5 cursor-pointer">
                <div className="">
                    <div className="flex items-center justify-between mb-5">
                        <p className='text-xl text-[#4A5567] leading-[25.227px] font-bold'>No of Employee</p>
                        <img src="/cardcaution.svg" alt="cardcaution" />
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <p className='text-xl text-[#1D2939] leading-[25.227px] font-bold'>0</p>
                    </div>

                    <hr className="bg-[#FFF3F1] my-2" />

                    <div className="text-[#041329] flex items-center gap-x-4">
                        <span className="">All</span>
                        <p className=""><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L4 4.5L7 1.5" stroke="#98A1B0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
