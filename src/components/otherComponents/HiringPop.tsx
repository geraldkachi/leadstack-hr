import { Link } from "react-router-dom";
import { ClickOutside } from "../../hooks/useClickOutside"
interface Props {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}
const HiringPop = ({ state, setState }: Props) => {
    return (
        <>
            <ClickOutside onclickoutside={() => setState(false)} className={` text-black`} >
                {state && <>
                    <div className="flex flex-col items-start justify-start list-none top-10 opacity-100 absolute -left-2 bg-[#F9F9F9] dark:bg-gradient-to-t transition-all m-2 dark:from-[#ffffff] dark:vai-[#292929] shadow-3xl rounded-md w-[150px] md:w-full z-20 shadow-md py-2">
                        <Link to="/hiring/overview" className="cursor-pointer flex items-center gap-4 p-2 text-xs w-full" onClick={() => setState(false)}>
                            <span>•</span>
                            <span>Overview</span>
                        </Link>

                        <Link to="/hiring/job-portal" className="cursor-pointer flex items-center gap-4 p-2 text-xs w-full" onClick={() => setState(false)}>
                            <span>•</span>
                            <span >Job Portal</span>
                        </Link>
                        <Link to="/hiring/application" className="cursor-pointer flex items-center gap-4 p-2 text-xs w-full" onClick={() => setState(false)}>
                            <span>•</span>
                            <span >Application</span>
                        </Link>
                    </div>
                </>
                }
            </ClickOutside>
        </>

    )
}

export default HiringPop