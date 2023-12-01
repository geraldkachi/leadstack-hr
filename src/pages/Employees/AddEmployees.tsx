import { useEffect } from "react"
import { Breadcrumbs, Tabs } from "../../components"
import { useAuth } from "../../hooks"
import Biodata from "./Biodata"
import Education from "./Education"
import Emergency from "./Emergency"
import Employment from "./Employment"

interface BreadcrumsbProps {
    url?: string
    name?: string
}
// interface BreadcrumsbItemsProps {
//   breadcrumbsItems: Array<BreadcrumsbProps>
// }
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
        label: 'Biodata',
        content: (
            <>
                <Biodata />
            </>
        )
    },
    {
        label: 'Employment',
        content: (
            <>
                <Employment />
            </>
        )
    },
    {
        label: 'Education',
        content: (
            <>
                <Education />
            </>
        )
    },
    {
        label: 'Emergency',
        content: (
            <>
                <Emergency />
            </>
        )
    }
]
const AddEmployees = () => {
    const activeTab = useAuth(state => state.activeTab)

    useEffect(() => {
        return () => {
            useAuth.setState({ activeTab: 0 })
        }
    }, [])

    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-lg md:text-2xl">Add Employees</div>
                        <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-8 flex items-center justify-end">
                {data.map((_, idx) => <>
                    <span key={idx} className={`${data[activeTab].label && 'border-b w-4 p-1 bg-[#1D8E6]'}"text border-b border-[#1D8EE6] w-4 p-2 bg-[#1D8EE6]"`}>{data[activeTab].label}</span>
                </>)}
            </div>
            <div className="mt-10  pb-36">
                <Tabs data={data} {...{ activeTab }} />
            </div>
        </div>
    )
}

export default AddEmployees