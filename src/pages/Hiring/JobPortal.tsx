import { Link, useNavigate } from "react-router-dom"
import { Archive, RunningJobs, ScheduledPost } from ".."
import { Breadcrumbs, Button, Tabs } from "../../components"
import { BreadcrumsbProps } from "../../types/types"

const bread: BreadcrumsbProps[] = [
    {
        name: 'Home',
        url: 'dashboard'
    },
    {
        name: 'Recruitment & Hiring',
        url: "employees/job-portal"
    },
]
const JobPortal = () => {
const navigate = useNavigate()
    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />

                <div className="flex items-center justify-between gap-x-3">
                    <div className="break-words">
                        <div className="text-lg md:text-2xl">Recruitment • Jobs</div>
                        <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to="/settings" className="cursor-pointer">
                            <img className="p-2 rounded-[4px] border border-[#1D8EE6]" src="/settings-icon.svg" alt="" />
                        </Link>
                        <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Post New Job" onClick={() => navigate('/hiring/create-new-job')}/>
                    </div>
                </div>


                <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#FFF7E7] rounded-md border-dashed border border-[#FFA800] lg:mr-56">
                    <img src="/cautionsign.svg" alt="caution" />
                    <div>
                        <div className='text-[#3F4254] font-bold text-sm md:text-base'>ATTENTION!!!</div>
                        <div className='text-[#7E8299] text-xs md:text-sm'>Kindly note that job posted is automatically moved to the archive after the expiration dateKindly note that job posted is automatically moved to the archive after the expiration date</div>
                    </div>
                </div>

            </div>

            <Tabs
                data={[
                    {
                        label: 'Running Jobs',
                        content: (
                            <>
                                <RunningJobs />
                            </>
                        )
                    },
                    {
                        label: 'Archive',
                        content: (
                            <>
                                <Archive />
                            </>
                        )
                    },
                    {
                        label: 'Scheduled post',
                        content: (
                            <>
                                <ScheduledPost />
                            </>
                        )
                    }
                ]}
            />
        </div>
    )
}

export default JobPortal