import { useRef } from "react";
import { Button, Input } from "../../components"

const Emergency = () => {
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className="text-[#2A2D7C]">Education Details <span className="text-[E01507]"></span></div>
      <form>
        <div className="grid sm:grid-cols-2 gap-x-8">
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
            <Input
              label="Email"
              ref={formInput}
              type="email"
              name="password"
              placeholder="hr@tch.com"
            />
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

            <div className="flex items-center justify-end mt-6 gap-x-1">
              <span className="text-sm text-[#7C8091]">University of Lagos, Akoka</span>
              <Button
                type="button"
                style={{ border: '1px solid #0671E0' }}
                className="!border !border-[#0671E0] !bg-white !text-[#0671E0] !px-8"
                title="Save Details"
              />
            </div>
          </div>
          {/* half */}
          <div>
            <div className="border border-[#DEDFEC] p-4 rounded-2xl">
              <div className="text-[#7C8091]">Education History <span className="text-[E01507]"></span></div>
              <div className="rounded-lg my-5">
                <div className="bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-2">
                    </div>
                    <div>
                      <div className="text-[13px] text-[#272848]">Federal Govt. College, Ogun</div>
                      <div className="text-[#94A0B4] text-[10px] ">University  • <span>BSc.</span></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <img src="/edithistory.svg" alt="" />

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" />
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg my-5">
                <div className="bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-2">
                    </div>
                    <div>
                      <div className="text-[13px] text-[#272848]">Federal Govt. College, Ogun</div>
                      <div className="text-[#94A0B4] text-[10px] ">University  • <span>BSc.</span></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <img src="/edithistory.svg" alt="" />

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" />
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg my-5">
                <div className="bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-2">
                    </div>
                    <div>
                      <div className="text-[13px] text-[#272848]">Federal Govt. College, Ogun</div>
                      <div className="text-[#94A0B4] text-[10px] ">University  • <span>BSc.</span></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <img src="/edithistory.svg" alt="" />

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" />
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg my-5">
                <div className="bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-2">
                    </div>
                    <div>
                      <div className="text-[13px] text-[#272848]">Federal Govt. College, Ogun</div>
                      <div className="text-[#94A0B4] text-[10px] ">University  • <span>BSc.</span></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <img src="/edithistory.svg" alt="" />

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" />
                  </div>
                </div>
              </div>
              
       c
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
              />
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Emergency