import AllEmployees from "./AllEmployees";
import PendingApproval from "./PendingApproval";
import { Button as Button, EmployeePop, Tabs } from "../../components"
import { ClickOutside } from "../../hooks/useClickOutside";
import { useState } from "react";
import { useWindowDimensions } from "../../hooks";

const Employees = () => {
  const [state, setState] = useState(false);
  const { width } = useWindowDimensions()

  return (
    <div className="h-full pt-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg md:text-2xl">Employees (20)</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>

        <div onClick={() => setState(true)}>

          <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Add Employee" onClick={() => setState(true)} />
          <EmployeePop {...{state, setState}} />
        </div>
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
