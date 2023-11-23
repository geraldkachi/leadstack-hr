import { useRef } from "react";
import { Button, Input } from "../../components"
import { useAuth } from "../../hooks";

const Employment = () => {
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className="text-[#2A2D7C]">Employment Details <span className="text-[#E01507]">*</span></div>
      <form>
        <div className="grid lg:grid-cols-2 gap-x-8">
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
          </div>
          {/* half */}
          <div>
            <Input
              label="Email"
              ref={formInput}
              type="email"
              name="password"
              placeholder="hr@tch.com"
            />
            <div className="grid grid-cols-2 gap-x-2">
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
                className="!bg-white !text-[#535768] !px-8 "
                title="Skip"
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