import AllEmployees from "./AllEmployees";
import PendingApproval from "./PendingApproval";
import { EmployeePop, Tabs } from "../../components"

const Employees = () => {

  return (
    <div className="h-full pt-3 ">
      <div className="block space-y-3 md:space-y-0 md:flex items-start justify-between gap-3 px-3 md:px-8 pb-4">
        <div className="break-all">
          <div className="text-lg md:text-2xl dark:text-[#ffffff]">Employees (20)</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>

        <div className="flex items-start justify-start">
          <EmployeePop  />
        </div>
      </div>

      <div className="">

        <Tabs
          data={[
            {
              label: `All Employee`,
              content: (
                <div className="">
                  <AllEmployees />
                </div>
              )
            },
            {
              label: 'Pending Approval',
              render: () =>  <></>,
              badge: 4,
              badgeColor: 'red-600',
              badgeTextColor: 'white',
              content: (
                <div className="">
                  <PendingApproval />
                </div>
              )
            }
          ]}
        />
      </div>
    </div>
  )
}

export default Employees
