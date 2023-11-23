import { useRef, useState } from "react";
import { Button, Input } from "../../components"
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Emergency = () => {
  const navigate = useNavigate()
  const formInput = useRef<HTMLInputElement>(null);
  const [modalDel, setModalDel] = useState(false)
  const [modalDelPop, setModalDelPop] = useState(false)
  const [modalSuccessEmp, setModalSuccessEmp] = useState(false)

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

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" onClick={() => setModalDelPop(true)} />
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

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" onClick={() => setModalDelPop(true)} />
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

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" onClick={() => setModalDelPop(true)} />
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

                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" onClick={() => setModalDelPop(true)} />
                  </div>
                </div>
              </div>


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
                onClick={() => setModalSuccessEmp(true)}
              />
            </div>
          </div>

        </div>
      </form>




      <Modal
        open={modalDelPop}
        onCancel={() => setModalDelPop(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalDelPop(false)}
        width={500}
      >
        <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
          <div className='flex items-center justify-center'>

            <img src="/empskip.svg" alt="" />
          </div>

          <div className="py-3">
            <p className='text-xl text-[#0D1227] mt-3'>Delete Field</p>

            <p className='text-base text-[#535768] mt-1'>Are you sure want to delete this field ? </p>
          </div>


          <div className="flex flex-row items-center justify-end mt-10">
            <Button className='!px-8 !bg-white !text-[#0D1227]' title='Cancel' onClick={() => setModalDelPop(false)} />
            <Button className='!px-8 !bg-[#E01507] ' title='Yes' onClick={() => {
              setModalDel(true)
              setModalDelPop(false)
            }} />
          </div>
        </div>
      </Modal>

      <Modal
        open={modalDel}
        onCancel={() => setModalDel(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalDel(false)}
        width={500}
      >
        <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
          <div className='flex items-center justify-center'>

            <img src="/success-check.svg" alt="" />
          </div>

          <div className="py-3">
            <p className='text-xl text-[#0D1227] mt-3'>Data Deleted</p>
          </div>


          <div className="flex flex-row items-center justify-end mt-10">
            <Button className='!px-8  ' title='Got it' onClick={() => setModalDel(false)} />
          </div>
        </div>
      </Modal>


      <Modal
        open={modalSuccessEmp}
        onCancel={() => setModalSuccessEmp(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalSuccessEmp(false)}
        width={500}
      >
        <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
          <div className='flex items-center justify-center'>

            <img src="/employeesuccess.svg" alt="" />
          </div>

          <div>
            <p className='text-xl text-[#0D1227] mt-3'>Employee onboarding successfully
              completed</p>

            <p className='text-base text-[#535768] mt-1'>Kindly ask the employee to check their email for their login credentials. </p>
          </div>


          <div className="flex flex-row items-center justify-between mt-10 gap-28">
            <div></div>
            <Button className='!px-8' title='Got it' onClick={() => navigate('/dashboard')} />
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default Emergency