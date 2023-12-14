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
            <div className="text-lg md:text-2xl whitespace-nowrap flex items-center gap-3 mt-5">Full Stack Developer  <Button className="!bg-[#D1EEE4] !text-[#1EAA79] !p-1 text-[10px]" title="Active" /></div>
            <div className="text-[#98A1B0] text-sm mt-5">
              <div className="flex flex-wrap gap-x-3 ga-8 gap-y-1  md:text-x">
                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/briefcase.svg" alt="" /> Part Time (Remote)</p>
                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/graduate.svg" alt="" /> Html, Python, CSS</p>
                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/credit-card-hire.svg" alt="" /> 200k - 350k</p>
                {/* <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/credit-card-hire.svg" alt="" />staff</p> */}
              </div>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/edit.svg" alt="" />} title="Edit Post" onClick={() => null} />
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
              badge: 4,
              badgeColor: 'red-600',
              badgeTextColor: 'white',
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