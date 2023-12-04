import { Breadcrumbs, Button, Tabs } from "../../components"
import { BreadcrumsbProps } from "../../types"
import Calender from "./Calender"
import History from "./History"
import Holidays from "./Holidays"
import LeaveType from "./LeaveType"
import Overview from "./Overview"
import Requests from "./Requests"

const bread: BreadcrumsbProps[] = [
    {
        name: 'Dashboard',
        url: 'dashboard'
    },
    {
        name: 'Employee',
        url: "employees"
    },
    {
        name: 'Overview',
        url: "overview"
    }
]
const data = [
    {
        label: 'Overview',
        content: (
            <>
                <Overview />
            </>
        )
    },
    {
        label: 'Leave Type',
        content: (
            <>
                <LeaveType />
            </>
        )
    },
    {
        label: 'Requests',
        content: (
            <>
                <Requests />
            </>
        )
    },
    {
        label: 'History',
        content: (
            <>
                <History />
            </>
        )
    },
    {
        label: 'Calender',
        content: (
            <>
                <Calender />
            </>
        )
    },
    {
        label: 'Holidays',
        content: (
            <>
                <Holidays />
            </>
        )
    }
]

const LeaveManagement = () => {
    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="text-lg md:text-2xl">Leave Management</div>
                        <div className="text-[#98A1B0] text-[13px] ">Efficiently track, manage, and approve employee leaves</div>
                    </div>

                    <Button className='flex items-center rounded-lg !text-white pr-8' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Create New Leave Type" onClick={(e) => e.preventDefault()} />
                </div>
            </div>

            {/* <div className="px-4 md:px-8 flex items-center justify-end">
        {data.map((_, idx) => <>
            <span key={idx} className={`${data[activeTab].label && 'border-b w-4 p-1 bg-[#1D8E6]'}"text border-b border-[#1D8EE6] w-4 p-2 bg-[#1D8EE6]"`}>{data[activeTab].label}</span>
        </>)}
    </div> */}
            <div className="mt-10  pb-36">
                <Tabs data={data} />
            </div>
        </div>
    )
}

export default LeaveManagement