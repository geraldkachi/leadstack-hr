import { useNavigate } from "react-router-dom"
import { Breadcrumbs, Button } from "../../components"
import { BreadcrumsbProps } from "../../types/types"
import { PostNewJob } from ".."

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
const HiringDetailEdit = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full pt-3 ">
      <div className="px-4 md:px-8">
        <Breadcrumbs {...{ bread }} />

        <div className="block space-y-3 md:space-y-0 md:flex items-center justify-between gap-3">
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
            <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/edit-.svg" alt="" />} title="Save" onClick={() => navigate('/hiring/1/edit')} />
            <Button style={{ border: "1px solid #E01507" }} className='flex items-center rounded-lg  !border !bg-white !border-[#E01507] !text-[#E01507] my-5' prefixIcon={<img src="/edit-.svg" alt="" />} title="Cancel" onClick={() => navigate('/hiring/1/edit')} />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <PostNewJob />
      </div>

    </div>
  )
}

export default HiringDetailEdit