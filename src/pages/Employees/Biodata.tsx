import { useRef } from "react";
import { Button, Input } from "../../components";

const Biodata = () => {
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className="text-[#2A2D7C]">Biodata <span className="text-[#E01507]">*</span></div>

      <form>
        <div className="grid sm:grid-cols-2 gap-x-8">
          <div>

            <div className="grid sm:grid-cols-2 gap-x-2">
              <Input
                label="Role"s
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
          </div>
          <div>
            <div className="grid sm:grid-cols-2 gap-x-2">
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
            <div className="grid sm:grid-cols-2 gap-x-2">
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
            </div>
            <div className="flex items-center justify-end mt-6">
            <Button
            type="button"
            className="!bg-[#1D8EE6] !text-white !px-8 "
            
            // onClick={() => setCurrentStep(4)}
            title="Save & Continue"
            />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Biodata