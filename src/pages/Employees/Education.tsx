import { useRef } from "react";
import { Button, Input } from "../../components"
import { useAuth } from "../../hooks";

const Education = () => {
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg">
      <div className="text-[#2A2D7C] mb-5">Education History <span className="text-[E01507]"></span></div>
      <form>
        <div className="grid lg:grid-cols-2 gap-x-8 mb-36">
          <div>

            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Role"
                ref={formInput}
                type="email"
                name="password"
                placeholder="hr@tch.com"
              />
              <Input
                label="Email"
                ref={formInput}
                type="email"
                name="password"
                placeholder="hr@tch.com"
              />
            </div>
            <Input
              label="Email"
              ref={formInput}
              type="email"
              name="password"
              placeholder="hr@tch.com"
            />
            <Input
              label="Email"
              ref={formInput}
              type="email"
              name="password"
              placeholder="hr@tch.com"
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Role"
                ref={formInput}
                type="email"
                name="password"
                placeholder="hr@tch.com"
              />
              <Input
                label="Email"
                ref={formInput}
                type="email"
                name="password"
                placeholder="hr@tch.com"
              />
            </div>

            <div className="flex items-center justify-end mt-6 gap-x-1">
            <Button
                type="button"
                className="!bg-white !text-[#7C8091] !px-8"
                title="Skip"
              />
              <Button
                type="button"
                style={{ border: '1px solid #0671E0' }}
                className="!border !border-[#0671E0] !bg-white !text-[#0671E0] !px-8"
                title="Save Details"
              />
            </div>
          </div>
          {/* half */}
          <div className="flex flex-col justify-between items-center ">
            {/* <div className="flex flex-col w-max items-center justify-center"> */}
            <div className="flex flex-col justify-center items-center ">
            <img src="/edu.svg" alt="" />
              <div className="text-lg md:text-xl text-center">Education History is Empty</div>
              <div className="text-[#98A1B0] text-[13px] ">Education history will show here when you save them</div>
            </div>
            {/* </div> */}


            <div className="flex items-center justify-between mt-6">
              <Button
                type="button"
                className="!bg-white !text-[#535768] !px-8 "
                title="Skip"
                onClick={() => useAuth.setState({ activeTab: 1 })}
              />
              <Button
                type="button"
                className="!bg-[#1D8EE6] !text-white !px-8 "
                title="Save & Continue"
                onClick={() => useAuth.setState({ activeTab: 3 })}
              />
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Education