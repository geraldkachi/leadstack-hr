import { useRef } from "react";
import { Button, Input } from "../../components"
import { useAuth } from "../../hooks";

const Employment = () => {
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg">
      <div className="text-[#2A2D7C] mb-5">Employment Details <span className="text-[#E01507]">*</span></div>
      <form>
        <div className="grid lg:grid-cols-2 gap-x-8 mb-36">
          <div>

            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Date"
                ref={formInput}
                className="mb-1"
                type="date"
                name="date"
                placeholder="Development"
              />
              <Input
                label="Unit"
                ref={formInput}
                className="mb-1"
                type="text"
                name="text"
                placeholder="Technical"
              />
            </div>
            <Input
              label="Official EmailOfficial Email"
              ref={formInput}
              className="mb-1"
              type="email"
              name="email"
              placeholder="jane.d@leadstack.ng"
            />
            <Input
              label="Employee No"
              ref={formInput}
              className="mb-1"
              type="number"
              name="Employee No"
              placeholder="EMP-2987"
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Grade"
                ref={formInput}
                className="mb-1"
                type="text"
                name="grade"
                placeholder="LEVEL 1"
              />
              <Input
                label="Date of Employment"
                ref={formInput}
                className="mb-1"
                type="date"
                name="date of employment"
                placeholder="Choose date"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Salary"
                ref={formInput}
                className="mb-1"
                type="text"
                name="Salary"
                placeholder="NGN 450,000"
              />
              <Input
                label="Pay Schedule"
                ref={formInput}
                className="mb-1"
                type="text"
                name="monthly"
                placeholder="Monthly"
              />
            </div>
          </div>
          {/* half */}
          <div>
            <Input
              label="Bank Name"
              ref={formInput}
              className="mb-1"
              type="text"
              name="name"
              placeholder="Lord Name"
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Bank Branch"
                ref={formInput}
                className="mb-1"
                type="text"
                name="name"
                placeholder="Iida"
              />
              <Input
                label="Bank Code"
                ref={formInput}
                className="mb-1"
                type="number"
                name="code"
                placeholder="1234"
              />
            </div>
            <Input
              label="Email"
              ref={formInput}
              className="mb-1"
              type="email"
              name="password"
              placeholder="hr@tch.com"
            />
            <Input
              label="Email"
              ref={formInput}
              className="mb-1"
              type="email"
              name="password"
              placeholder="hr@tch.com"
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Email"
                ref={formInput}
                className="mb-1"
                type="email"
                name="password"
                placeholder="hr@tch.com"
              />
              <Input
                label="Email"
                ref={formInput}
                className="mb-1"
                type="email"
                name="password"
                placeholder="hr@tch.com"
              />
            </div>

            <div className="flex items-center justify-end mt-6">
              <Button
                type="button"
                className="!bg-white !text-[#535768] !px-8 "
                title="Skip"
                onClick={() => useAuth.setState({ activeTab: 0 })}
              />
              <Button
                type="button"
                className="!bg-[#1D8EE6] !text-white !px-8 "
                title="Save & Continue"
                onClick={() => useAuth.setState({ activeTab: 2 })}
              />
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Employment