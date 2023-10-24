// import { AdminIcon } from '../../assets'

const Topnav = () => {
    return (
        <>
            <div className="flex items-center justify-between border-b border-[rgba(0, 0, 0, 0.20)] bg-white z-50 px-2 gap-x-3">
                <div></div>

                <div className="topnav__search">
                    <img src="search.svg" alt="" />
                    <input type="text" name="search" placeholder="Search employees, teams..." />
                </div>


                <div className="flex gap-2 items-center py-3">
                    <p className="text-black text-[16px] mr-4">
                        {/* <AdminIcon className="cursor-pointer" /> */}
                    </p>
                    <div className="pr-3 py-2 flex gap-4 items-center rounded-full px-2 whitespace-nowrap text-[12px] font-bold text-white ">
                        <img src="/notification.svg" alt="notificationß" />
                    </div>
                    <div className="pr-3 py-2 flex gap-4 items-center rounded-full px-2 whitespace-nowrap text-[12px] font-bold text-white bg-[#1D8EE6]">
                        MB
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topnav
