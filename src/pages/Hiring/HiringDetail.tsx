import { Breadcrumbs, Button, Tabs } from "../../components"
import { BreadcrumsbProps } from "../../types/types"
import ApplicationDetail from "./ApplicationDetail"
import JobDetails from "./JobDetails"

const bread: BreadcrumsbProps[] = [
  {
      name: 'Home',
      url: 'dashboard'
  },
  {
      name: 'Recruitment & Hiring',
      url: "employees/overview"
  },
]
const HiringDetail = () => {
  return (
    <div className="h-full pt-3 ">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />

                <div className="flex items-center justify-between gap-3">
                    <div>
                        <div className="text-lg md:text-2xl">Applications</div>
                        <div className="text-[#98A1B0] text-[13px] ">Track and manage organization activities. </div>
                    </div>

                    <div className="flex items-center gap-3">
                      
                        <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Post New Job" onClick={() => null} />
                    </div>
                </div>

                <div className="bg-[#F5F6FA] px-4 md:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-3 h-max">
                        <a className="col-span-1 flex flex-col items-start bg-white rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
                            <div className="text-lg md:text-4xl text-[rgb(13,18,39)]">234</div>
                            <div className="flex items-center my-3">
                                <div className="h-4 w-4 rounded-full bg-[#1D8EE6]"></div>
                                <span className="text-sm text-[#7C8091] ml-2">Total</span>
                            </div>
                        </a>
                        <a className="col-span-1 flex flex-col items-start bg-white rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
                            <div className="text-lg md:text-4xl text-[rgb(13,18,39)]">20</div>
                            <div className="flex items-center my-3">
                                <div className="h-4 w-4 rounded-full bg-[#FFB240]"></div>
                                <span className="text-sm text-[#7C8091] ml-2">Pending</span>
                            </div>
                        </a>
                        <a className="col-span-1 flex flex-col items-start bg-white rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
                            <div className="text-lg md:text-4xl text-[rgb(13,18,39)]">160</div>
                            <div className="flex items-center my-3">
                                <div className="h-4 w-4 rounded-full bg-[#1EAA79]"></div>
                                <span className="text-sm text-[#7C8091] ml-2">Approved</span>
                            </div>
                        </a>
                        <a className="col-span-1 flex flex-col items-start bg-white rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
                            <div className="text-lg md:text-4xl text-[rgb(13,18,39)]">84</div>

                            <div className="flex items-center my-3">
                                <div className="h-4 w-4 rounded-full bg-#FF5A4F]"></div>
                                <span className="text-sm text-[#7C8091] ml-2">Rejected</span>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <div className="mt-10  pb-36">
                <Tabs
                    data={[
                        {
                            label: 'Job Details',
                            content: (
                                <>
                                    <JobDetails />
                                </>
                            )
                        },
                        {
                            label: 'ApplicationDetail',
                            content: (
                                <>
                                    <ApplicationDetail />
                                </>
                            )
                        }
                    ]}
                />
            </div>
        </div>
  )
}

export default HiringDetail