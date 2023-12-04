import { Archive, Active, ScheduledPost } from ".."
import { Breadcrumbs, EmployeePop, Tabs } from "../../components"
import { BreadcrumsbProps } from "../../types"

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

    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />

                <div className="flex items-start justify-between gap-x-3">
                    <div className="break-words">
                        <div className="text-lg md:text-2xl">Recruitment</div>
                        <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
                    </div>

                    <EmployeePop  />
                </div>


                <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#FFF7E7] rounded-md border-dashed border border-[#FFA800] lg:mr-56">
                    <img src="/cautionsign.svg" alt="caution" />
                    <div>
                        <div className='text-[#3F4254] font-bold text-sm md:text-base'>ATTENTION!!!</div>
                        <div className='text-[#7E8299] text-[10px] md:text-sm'>Kindly note that job posted is automatically moved to the archive after the expiration dateKindly note that job posted is automatically moved to the archive after the expiration date</div>
                    </div>
                </div>

            </div>

            <Tabs
                data={[
                    {
                        label: 'Active',
                        content: (
                            <>
                                <Active />
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