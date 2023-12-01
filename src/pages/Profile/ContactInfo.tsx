import { useRef, useState } from "react";
import { Button, Input, Select } from "../../components"
import { EditProfileIcon } from "../../assets";

const ContactInfo = () => {
  const formInput = useRef<HTMLInputElement>(null);
  const [gender, setGender] = useState('')
  const updateFieldValue = (value: string) => setGender(value)
  return (
    <>
      <div className="grid lg:grid-cols-2 h-max gap-x-8 mb">
        <div className="bg-white p-4 md:p-8 rounded-lg">
          <div className="text-[#7C8091] mb-5 text-lg font-medium">Primary Information  <span className="text-[E01507]"></span></div>

          <form>
            <div className="grid lg:grid-cols-1  gap-x-8 mb-36">
              <div>
                <div className="grid grid-cols-2 gap-x-2">
                  <Input
                    label="First Name"
                    ref={formInput}
                    className="mb-1"
                    type="text"
                    name="first name"
                    placeholder="hr@tch.com"
                  />
                  <Input
                    label="Last Name"
                    ref={formInput}
                    className="mb-1"
                    type="text"
                    name="last name"
                    placeholder="hr@tch.com"
                  />
                </div>
                <Input
                  label="Official Email Address"
                  ref={formInput}
                  className="mb-1"
                  type="email"
                  name="password"
                  placeholder="LordGerald@tch.com"
                />
                <Input
                  label="Phone Number"
                  ref={formInput}
                  className="mb-1"
                  type="number"
                  name="password"
                  placeholder="hr@tch.com"
                />
                <div className="grid grid-cols-2 gap-x-2">
                  <Input
                    label="Gender"
                    ref={formInput}
                    className="mb-1"
                    type="text"
                    name="gender"
                    placeholder="hr@tch.com"
                  />
                  <Input
                    label="Date of Birth (Optional)"
                    ref={formInput}
                    className="mb-1"
                    type="date"
                    name="password"
                    placeholder="Choose date"
                  />
                </div>
                <Input
                  label="Country"
                  ref={formInput}
                  className="mb-1"
                  type="text"
                  name="country"
                  placeholder="Nigeria"
                />
                <div className="grid grid-cols-2 gap-x-2">
                  {/* <Input
                    label="Gender"
                    ref={formInput}
                    className="mb-1"
                    type="text"
                    name="gender"
                    placeholder="hr@tch.com"
                /> */}
                  <Select
                    label="Gender"
                    options={["Male", "Female"]}
                    required
                    value={gender}
                    placeholder="Gender"
                    className="mb-1"
                    //@ts-ignore
                    onChange={(value: string) => updateFieldValue(value)}
                  />
                  <Input
                    label="Date of Birth (Optional)"
                    ref={formInput}
                    className="mb-1"
                    type="date"
                    name="password"
                    placeholder="Choose date"
                  />
                </div>
                <div className="flex items-center justify-end mt-5">
                  <Button className='!px-8' title='Edit' prefixIcon={<EditProfileIcon />} onClick={() => null} />
                </div>

              </div>

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

export default ContactInfo