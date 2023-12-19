
const CardHistory = () => {
    return (
        <>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 py-3">

                <a className="flex flex-col items-center bg-white rounded-md shadow md:flex-row md:max-w-xl hover:bg-slate-50">
                    <div className="flex flex-col justify-between p-4 leading-norma pr-20">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">50</h5>
                        <p className="mb-3 font-normal text-[#7C8091] text-[10px] md:text-sm wh whitespace-nowrap">Current Job <br /> Openings</p>
                    </div>

                    <div className="w-full h-full flex items-center justify-center bg-[#E8F4FC]">
                        <img className="bg-[#E8F4FC] p-3" src="/card-file.svg" alt="" />
                    </div>
                </a>

                <a className="flex flex-col items-center bg-white rounded-md shadow md:flex-row md:max-w-xl hover:bg-slate-50">
                    <div className="flex flex-col justify-between p-4 leading-norma pr-20">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">50</h5>
                        <p className="mb-3 font-normal text-[#7C8091] text-[10px] md:text-sm wh whitespace-nowrap">Current Job <br /> Openings</p>
                    </div>

                    <div className="w-full h-full flex items-center justify-center bg-[#fff7ec]">
                        <img className="bg-[#fff7ec] p-3" src="/card-clock.svg" alt="" />
                    </div>
                </a>

                <a className="flex flex-col items-center bg-white rounded-md shadow md:flex-row md:max-w-xl hover:bg-slate-50">
                    <div className="flex flex-col justify-between p-4 leading-norma pr-20">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">50</h5>
                        <p className="mb-3 font-normal text-[#7C8091] text-[10px] md:text-sm wh whitespace-nowrap">Current Job <br /> Openings</p>
                    </div>

                    <div className="w-full h-full flex items-center justify-center bg-[#F3FCF9]">
                        <img className="bg-[#F3FCF9] p-3" src="/card-done.svg" alt="" />
                    </div>
                </a>

                <a className="flex flex-col items-center bg-white rounded-md shadow md:flex-row md:max-w-xl hover:bg-slate-50">
                    <div className="flex flex-col justify-between p-4 leading-norma pr-20">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">50</h5>
                        <p className="mb-3 font-normal text-[#7C8091] text-[10px] md:text-sm wh whitespace-nowrap">Current Job <br /> Openings</p>
                    </div>

                    <div className="w-full h-full flex items-center justify-center bg-[#FFEFED]">
                        <img className="bg-[#FFEFED] p-3" src="/card-flag.svg" alt="" />
                    </div>
                </a>
            </div>
        </>
    )
}

export default CardHistory