import AllEmployees from "./AllEmployees";
import PendingApproval from "./PendingApproval";
import { Button as GButton, Tabs } from "../../components"

const Employees = () => {

  return (
    <div className="h-full pt-3 md:mr-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg md:text-2xl">Employees (20)</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>

        <GButton className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Add Employee" />
      </div>

      <Tabs
        data={[
          {
            label: 'All Employees',
            content: (
              <>
              <AllEmployees />
              </>
            )
          },
          {
            label: 'Pending Approval',
            content: (
              <>
              <PendingApproval />
              </>
            )
          }
        ]}
      />
    </div>
  )
}

export default Employees
