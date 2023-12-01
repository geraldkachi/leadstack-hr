import { useRef } from "react";
import { Button, Input } from "../../components"
import { EditProfileIcon } from "../../assets";

const Employment = () => {
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="grid lg:grid-cols-2 h-max gap-x-8 mb">
        <div className="bg-white p-4 md:p-8 rounded-lg">
          <div className="text-[#7C8091] mb-5 text-lg font-medium">Department Information <span className="text-[#E01507]"></span></div>

          <form>
            <div className="grid lg:grid-cols-1 mb-2">
              <div>
                <Input
                  label="Role"
                  ref={formInput}
                  type="text"
                  name="product manager"
                  placeholder="Product Manager"
                />
                <div className="grid grid-cols-2 gap-x-2">
                  <Input
                    label="Department *"
                    ref={formInput}
                    type="text"
                    name="first name"
                    placeholder="hr@tch.com"
                  />
                  <Input
                    label="Unit"
                    ref={formInput}
                    type="text"
                    name="last name"
                    placeholder="HR Solution"
                  />
                  <Input
                    label="HR Solution"
                    ref={formInput}
                    type="text"
                    name="first name"
                    placeholder="EMP-2987"
                  />
                  <Input
                    label="Date of Employment *"
                    ref={formInput}
                    type="date"
                    name="last name"
                    placeholder="Choose a date"
                  />
                </div>
                {/* Payment Information */}
                <div className="mt-2">
                  <div className="text-[#7C8091] mb-5 text-lg font-medium">Payment Information <span className="text-[#E01507]"></span></div>
                  <div className="grid grid-cols-2 gap-x-2">
                    <Input
                      label="Pay Schedule"
                      ref={formInput}
                      type="text"
                      name="last name"
                      placeholder="Monthly"
                    />
                    <Input
                      label="Salary"
                      ref={formInput}
                      type="number"
                      name="number"
                      placeholder="NGN 450,000"
                    />
                  </div>
                  <Input
                    label="Salary Account Number *"
                    ref={formInput}
                    type="text"
                    name="first name"
                    placeholder="hr@tch.com"
                  />
                  <Input
                    label="Bank Name *"
                    ref={formInput}
                    type="date"
                    name="last name"
                    placeholder="NUBAN Bank"
                  />
                  <div className="grid grid-cols-2 gap-x-2">
                    <Input
                      label="Bank Branch "
                      ref={formInput}
                      type="text"
                      name="last name"
                      placeholder="Bank Branch"
                    />
                    <Input
                      label="Bank Code"
                      ref={formInput}
                      type="number"
                      name="number"
                      placeholder="NGN 450,000"
                    />
                  </div>

                </div>

                {/* Other Information */}
                <div className="mt-2">
                  <div className="text-[#7C8091] mb-5 text-lg font-medium">Other Information <span className="text-[#E01507]"></span></div>
                  <Input
                    label="HMO No"
                    ref={formInput}
                    type="number"
                    name="number"
                    placeholder="987654321"
                  />
                  <div className="grid grid-cols-2 gap-x-2">
                    <Input
                      label="Pension No *"
                      ref={formInput}
                      type="text"
                      name="first name"
                      placeholder="1287654321"
                    />
                    <Input
                      label="PFA *"
                      ref={formInput}
                      type="date"
                      name="last name"
                      placeholder="Leadway Assurance"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end mt-5">
                  <Button className='!px-8' title='Edit' prefixIcon={<EditProfileIcon />} onClick={() => null} />
                </div>

              </div>

              <div></div>

            </div>
          </form>
        </div>
        {/* half */}
        <div className="bg-white p-4 md:p-8 rounded-lg h-max">

        </div>

      </div>






      {/* <Modal
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
  </Modal> */}
    </>
  )
}

export default Employment