// import { AdminIcon } from '../../assets'

import { useNavigate } from "react-router-dom"
import { Input } from ".."

const Topnav = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex items-center justify-between border-b border-[rgba(0, 0, 0, 0.20)] bg-white z-50 px-2 gap-x-3">
                <div className="flex items-center justify-center gap-3">
                    <div className="cursor-pointer" onClick={() => navigate(-1)}>
                        <img src="/arrow-right.svg" alt="" />
                    </div>
                    <div className="cursor-pointer" onClick={() => navigate(+1)}>
                        <img src="/arrow-left.svg" alt="" />
                    </div>
                </div>

                {/* <div className="relative w-fu flex items-center w-64">
                    <div className="absolute flex items-center justify-center  pointer-events-none">
                        <img src="/search.svg" className="pl-2" alt="" />
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3699FF] focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search employees, teams..." required />
                </div> */}
                <Input inputClassName="w-64 pr-24 w-full" LeadingIcon={() => <img src="/search.svg" className="pl-2" alt=""  />}
                    type="search"
                    placeholder="Search employees, teams..." />

                <div className="flex gap-2 items-center py-2">
                    <p className="text-black text-[16px] mr-4 flex items-start gap-2">
                        <img src="/calenda.svg" alt="calenda" />
                        <span className="whitespace-nowrap">August 8th 2022 . 09:00 AM</span>
                    </p>
                    <div className="w-12 h-12 cursor-pointer">
                        <img src="/notemsg.svg" alt="notemsg" />
                    </div>
                    <div className="w-12 h-12 cursor-pointer">
                        <img src="/notification.svg" alt="notificationß" />
                    </div>
                    <div onClick={() => navigate('/profile')} className="cursor-pointer w-12 h-12 pr-3 py-2 flex gap-4 items-center justify-center rounded-full px-3 whitespace-nowrap text-[12px] font-bold text-white bg-[#1D8EE6]">
                        MB
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topnav
