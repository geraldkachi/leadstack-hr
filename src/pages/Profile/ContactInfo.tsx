import { useRef, useState } from "react";
import { Button, Input, Select } from "../../components"
import { EditProfileIcon } from "../../assets";

const ContactInfo = () => {
    const formInput = useRef<HTMLInputElement>(null);
    const [gender, setGender] = useState('')
    const updateFieldValue = (value: string) => setGender(value)
    return (
        <div className="bg-white p-4 md:px-10 rounded-lg w-max">
            <div className="text-[#7C8091] mb-5 text-lg font-medium">Primary Information <span className="text-[#E01507]"></span></div>

            <form>
                <div className="grid lg:grid-cols-1 mb-36">
                    <div>

                        <div className="grid grid-cols-2 gap-x-2">
                            <Input
                                label="First Name"
                                ref={formInput}
                                type="text"
                                name="first name"
                                placeholder="hr@tch.com"
                            />
                            <Input
                                label="Last Name"
                                ref={formInput}
                                type="text"
                                name="last name"
                                placeholder="hr@tch.com"
                            />
                        </div>
                        <Input
                            label="Official Email Address"
                            ref={formInput}
                            type="email"
                            name="password"
                            placeholder="LordGerald@tch.com"
                        />
                        <Input
                            label="Phone Number"
                            ref={formInput}
                            type="number"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <div className="grid grid-cols-2 gap-x-2">
                            <Input
                                label="Gender"
                                ref={formInput}
                                type="text"
                                name="gender"
                                placeholder="hr@tch.com"
                            />
                            <Input
                                label="Date of Birth (Optional)"
                                ref={formInput}
                                type="date"
                                name="password"
                                placeholder="Choose date"
                            />
                        </div>
                        <Input
                            label="Country"
                            ref={formInput}
                            type="text"
                            name="country"
                            placeholder="Nigeria"
                        />
                        <div className="grid grid-cols-2 gap-x-2">
                            {/* <Input
                                label="Gender"
                                ref={formInput}
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
                                //@ts-ignore
                                onChange={(value: string) => updateFieldValue(value)}
                            />
                            <Input
                                label="Date of Birth (Optional)"
                                ref={formInput}
                                type="date"
                                name="password"
                                placeholder="Choose date"
                            />
                        </div>
                        <div className="flex items-center justify-end mt-5">
                            <Button className='!px-8' title='Edit' prefixIcon={<EditProfileIcon />} onClick={() => null} />
                        </div>

                    </div>

                    <div></div>

                </div>
            </form>


            {/* <Modal
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
            useAuth.setState({ activeTab: 1 })
          }} />
        </div>
      </div>
    </Modal> */}
        </div>
    )
}

export default ContactInfo