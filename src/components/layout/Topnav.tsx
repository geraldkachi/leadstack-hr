// import { AdminIcon } from '../../assets'

import { useNavigate } from "react-router-dom"
import { Drawer, Input } from ".."
import { AppLogo } from "../../assets"

const Topnav = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex items-center justify-between border-b border-[rgba(0, 0, 0, 0.20)] bg-white z-50 px-2 gap-x-3">
                <div className="flex items-center justify-center gap-3">
                    <span className="cursor-pointer hidden md:block w-full" onClick={() => navigate(-1)}>
                        <img src="/arrow-right.svg" alt="" />
                    </span>
                    <span className="cursor-pointer hidden md:block w-full" onClick={() => navigate(+1)}>
                        <img src="/arrow-left.svg" alt="" />
                    </span>
                    
                    <AppLogo className="md:hidden block" />
                </div>

            
                <div className="w-80  hidden md:block">
                    <Input inputClassName="!w-full font-noto !py-2" LeadingIcon={() => <img src="/search.svg" className="pl-2" alt="" />}
                        type="search"
                        // inputType="success"
                        placeholder="Search employees, teams..." />
                </div>

                <div className="flex gap-4 items-center py-2">
                    <p className="text-[#535768] text-sm font-medium mr-4 md:flex items-start gap-2 hidden bg-[#FAFAFA] p-2 rounded-2xl">
                        <img src="/calenda.svg" alt="calenda" />
                        <span className="whitespace-nowrap font-noto">August 8th 2022 . 09:00 AM</span>
                    </p>
                    <div className="w-10 h-10 flex items-center justify-center  cursor-pointer">
                        <img src="/notemsg.svg" alt="notemsg" />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center  cursor-pointer">
                        <img src="/notification.svg" alt="notificationß" />
                    </div>
                    <div onClick={() => navigate('/profile')} className="cursor-pointer hidden w-10 h-10 pr-3 py-2 md:flex gap-4 items-center justify-center rounded-full px-3 whitespace-nowrap text-[12px] font-bold text-white bg-[#1D8EE6]">
                        MB
                    </div>

                    <Drawer />
                </div>
            </div>
        </>
    )
}

export default Topnav
