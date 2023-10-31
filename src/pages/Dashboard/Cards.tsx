const Cards = () => {
    return (
        <>
            <div className="text-[#7A8699] rounded-[15px] bg-[#FAFBFB] p-4">
                <div className="">
                    <div className="flex items-center justify-between mb-5">
                        <p className='text-xl text-[#4A5567] leading-[25.227px] font-bold'>No of Employee</p>
                        <img src="/cardcaution.svg" alt="cardcaution" />
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <p className='text-xl text-[#1D2939] leading-[25.227px] font-bold'>0</p>
                    </div>

                    <hr className="bg-[#DFE2E6]" />

                    <div className="text-[#041329] flex items-center gap-x-4">
                        <span className="">All</span>
                        <p className=""></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
