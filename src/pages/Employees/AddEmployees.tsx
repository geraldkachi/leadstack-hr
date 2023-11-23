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
        <div className="h-full pt-3 md:mr-20">
            <Breadcrumbs {...{ bread }} />
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-lg md:text-2xl">Add Employees</div>
                    <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
                </div>


            </div>
            <div className="mt-10 bg-white p-2 rounded-lg pb-36">

                <Tabs data={data} {...{ activeTab }} />
            </div>
        </div>
    )
}

export default AddEmployees