import { useRef } from "react";
import { Button, Input } from "../../components"
import { EditProfileIcon } from "../../assets";

const Employment = () => {
    const formInput = useRef<HTMLInputElement>(null);

    return (
        <div className="bg-white p-4 md:px-10 rounded-lg w-max">
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

export default Employment