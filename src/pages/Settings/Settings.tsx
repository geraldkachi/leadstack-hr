import { Breadcrumbs, Tabs } from "../../components"
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
const Settings = () => {
  return (
    <div className="h-full pt-3">
    <div className="px-4 md:px-8">
        <Breadcrumbs {...{ bread }} />

        <div className="flex items-center gap-x-3 my-3">
            <div className="break-words">
                <div className="text-lg md:text-2xl">Settings</div>
                <div className="text-[#98A1B0] text-[13px] ">Manage your account settings and preferences </div>
            </div>

        </div>

    </div>

    <div className="mt-10">
                <Tabs
                    data={[
                        {
                            label: 'Contact Info',
                            content: (
                                <>
                                    {/* <PendingApplication /> */}
                                </>
                            )
                        },
                        {
                            label: 'Emergency contact',
                            content: (
                                <>
                                    {/* <InReview /> */}
                                </>
                            )
                        },
                        {
                            label: 'Education',
                            content: (
                                <>
                                    {/* <InReview /> */}
                                </>
                            )
                        },
                        {
                            label: 'Job History',
                            content: (
                                <>
                                    {/* <InReview /> */}
                                </>
                            )
                        },
                        {
                            label: 'Certifications',
                            content: (
                                <>
                                    {/* <InReview /> */}
                                </>
                            )
                        },
                        {
                            label: 'Work',
                            content: (
                                <>
                                    {/* <InReview /> */}
                                </>
                            )
                        }
                    ]}
                />
            </div>
    </div>
  )
}

export default Settings