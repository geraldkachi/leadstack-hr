import { Modal } from 'antd'
import { useRef, useState } from "react";
import { Button, Input } from "../../components";
import { useAuth } from '../../hooks';
// import { Select } from 'antd';

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
const Biodata = () => {
  const formInput = useRef<HTMLInputElement>(null);
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalSuccessEmp, setModalSuccessEmp] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Access the selected file from the event
    const file = event.target.files?.[0];

    // Do something with the selected file (e.g., store it in state)
    //@ts-ignore
    setSelectedFile(file);

    // You can also perform additional actions, such as uploading the file to a server
    // Example: uploadFileToServer(file);
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg">
      <div className="text-[#2A2D7C] mb-5">Biodata <span className="text-[#E01507]">*</span></div>

      <form>
        <div className="grid lg:grid-cols-2 gap-x-8 mb-36">
          <div>

            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="First Name"
                ref={formInput}
                type="text"
                name="password"
                placeholder="hr@tch.com"
              />
              <Input
                label="Last Name"
                ref={formInput}
                type="text"
                name="password"
                placeholder="hr@tch.com"
              />
              <Input
                label="Date of Birth (Optional)"
                ref={formInput}
                type="date"
                name="password"
                placeholder="hr@tch.com"
              />
              <Input
                label="Gender"
                ref={formInput}
                type="text"
                name="password"
                placeholder="hr@tch.com"
              />

            </div>
            <Input
              label="Phone Number"
              ref={formInput}
              type="number"
              name="password"
              placeholder="hr@tch.com"
            />
            {/* <Input
              label="Uplaod Passport Photograph"
              ref={formInput}
              type="file"
              name="password"
              placeholder="hr@tch.com"
              onChange={handleFileChange}
            /> */}
            <>
              <label className="my-1 text-[#0D1227] leading-[19.6px] flex items-center text-left text-sm font-semibold"
                htmlFor={''}
              >Uplaod Passport Photograph</label>
              <label className="flex items-center text-[#B2B7C2] border-[#DEDEC] border w-full p-2 rounded-[4px] focus:outline-[#3699FF] placeholder:text-base placeholder:font-normal placeholder:leading-6 cursor-pointer">
                <img src="/chose-file.svg" alt="" />choose file
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </>

            {/* Display the selected file name */}
            {selectedFile && <p className='flex items-center gap-3 mt-3'>Selected File: {selectedFile.name}  <img src="/register-check.svg" alt="" /> </p>}
          </div>
          <div>
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Role"
                ref={formInput}
                type="text"
                name="password"
                placeholder="hr@tch.com"
              />
              <Input
                label="Email Address"
                ref={formInput}
                type="email"
                name="password"
                placeholder="hr@tch.com"
              />
            </div>
            <Input
              label="Country"
              ref={formInput}
              type="text"
              name="country"
              placeholder="hr@tch.com"
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="State"
                ref={formInput}
                type="text"
                name="state"
                placeholder="Lagos state"
              />
              <Input
                label="LGA"
                ref={formInput}
                type="text"
                name="lga"
                placeholder="LGA"
              />
            </div>
            <div className="flex items-center justify-end mt-6">
              <Button
                type="button"
                className="!bg-[#1D8EE6] !text-white !px-8 "
                // onClick={() => useAuth.setState({ activeTab: 1 })}
                onClick={() => setModalSuccess(true)}
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
              useAuth.setState({ activeTab: 1 })
            }} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Biodata