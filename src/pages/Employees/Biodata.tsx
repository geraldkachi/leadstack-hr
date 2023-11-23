import { Modal } from 'antd'
import { useRef, useState } from "react";
import { Button, Input } from "../../components";
import { useAuth } from '../../hooks';

const Biodata = () => {
  const formInput = useRef<HTMLInputElement>(null);
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalSuccessEmp, setModalSuccessEmp] = useState(false)

  return (
    <div>
      <div className="text-[#2A2D7C]">Biodata <span className="text-[#E01507]">*</span></div>

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
                onClick={() => {
                  useAuth.setState({ activeTab: 1 })
                  setActiveTab(1)
                  // setModalSuccess(true)
                }
                }
                title="Save & Continue"
              />
            </div>
          </div>
        </div>
      </form>


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
            <Button className='!px-8' title='Got it' onClick={() => setModalSuccessEmp(false)} />
          </div>
        </div>
      </Modal>


      <Modal
        open={modalSuccess}
        onCancel={() => {
          setModalSuccess(false)
        }}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalSuccess(false)}
        width={500}
      >
        <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
          <div className='flex items-center justify-center'>

            <img src="/employeesuccess.svg" alt="" />
          </div>

          <div>
            <p className='text-xl text-[#0D1227] mt-3'>Employee Biodata Successfully <br />
              Submitted</p>

            <p className='text-base text-[#535768] mt-3'>You can choose to create the account instantly or continue onboarding the employee</p>
          </div>


          <div className="flex flex-row items-center justify-between mt-10 gap-">
            <Button className='!px-8 !bg-white !text-[#1D8EE6] !text-sm' title='Create Instant Account' onClick={() => {
              setModalSuccess(false)
              setModalSuccessEmp(true)
            }} />
            <Button className='!px-8 text-sm' title='Continue Onboarding' onClick={() => {
              setModalSuccess(false)
            
            }} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Biodata