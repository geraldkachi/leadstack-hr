import { Modal } from "antd";
import { ClickOutside } from "../../hooks/useClickOutside"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "..";
import InvisteUsersForm from "./InvisteUsersForm";
interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>
}
const EmployeePop = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalUpload, setModalUpload] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalSuccessUpload, setModalSuccessUpload] = useState(false)

  return (
    <>
      <ClickOutside onclickoutside={() => setState(false)} className={` text-black`} >
        {state && <>
          <div className="flex flex-col items-start justify-start list-none top-36 opacity-100 absolute r-2 right-5 md:right-[32px] bg-white  dark:bg-gradient-to-t transition-all dark:from-[#ffffff] dark:vai-[#292929] shadow-lg rounded-md w-[150px] md:w-[210px] z-20">
            <span className="cursor-pointer flex items-center gap-2 p-2 text-xs w-full" onClick={() => setModalOpen(true)}>
              <img src="/share-pop.svg" alt="" />
              <span>Share Link</span>
            </span>

            <span className="cursor-pointer flex items-center gap-2 p-2 text-xs w-full">
              <img src="/create-manual.svg" alt="" />
              <Link to="/employees/add-employees">Create Manually</Link>
            </span>

            <span className="cursor-pointer flex items-center gap-2 p-2 text-xs w-full" onClick={() => setModalUpload(true)}>
              <img src="/upload-excel.svg" alt="" />
              <span>Upload Excel</span>
            </span>
          </div>
        </>
        }
      </ClickOutside>


      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalOpen(false)}
        width={600}
      >


        <div className='grid grid-cols-1 items-center justify- p-4 w-full'>
          <div className='flex items-center justify-'>
            <div>
              <div className="text-lg md:text-2xl">Add New Employee</div>
              <div className="text-[#98A1B0] text-[13px] ">An email with the link will be sent to recipients.</div>
            </div>
          </div>

          <div>
            <InvisteUsersForm />
          </div>

          <div>
            <div className="text-base text-[#0D1227]">Access Protocol</div>
            <div className="text-[#535768] text-[13px] ">Choose who can have access to the company’s HR CRM</div>

            <div className="flex items-center gap-3  mt-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" fill="#1D8EE6" stroke="#1D8EE6" />
                <path d="M13.8254 6.23489C14.0638 5.95436 14.4845 5.92024 14.7651 6.1587C15.0456 6.39716 15.0797 6.81789 14.8413 7.09843L9.17461 13.7651C8.93241 14.05 8.50325 14.08 8.22374 13.8316L5.22374 11.1649C4.94856 10.9203 4.92377 10.4989 5.16838 10.2237C5.41299 9.94856 5.83437 9.92377 6.10956 10.1684L8.60013 12.3822L13.8254 6.23489Z" fill="white" />
              </svg>

              <div className="text-[#535768] text-[13px]"> Strictly with the company’s domain</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-10">
            <Button className='!px-8 !text-[#1D8EE6] !bg-white' title='Add Manually' onClick={() => navigate('/employees/add-employees')} />

            <div className="flex items-center">
              <Button className='!px-8 !bg-white !text-[#535768]' title='Cancel' onClick={() => setModalOpen(false)} />
              <Button className='!px-8' title='Send Invite' onClick={() => {
                setModalOpen(false);
                setModalSuccess(true)
              }
              } />
            </div>
          </div>
        </div>
      </Modal>

      {/* Upload  */}


      <Modal
        open={modalUpload}
        onCancel={() => setModalUpload(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalUpload(false)}
        width={600}
      >


        <div className='grid grid-cols-1 items-center justify- p-4 w-full'>
          <div className='flex items-center justify- w-full border-b pb-4'>
            <div>
              <div className="text-lg md:text-2xl">Upload Document</div>
              {/* <div className="text-[#98A1B0] text-[13px] ">An email with the link will be sent to recipients.</div> */}
            </div>


          </div>
          <div className="mt-3">
            <div className="text-base">Upload Document</div>
            <div className="text-[#3699FF] text-[13px] ">download compile file.</div>
          </div>

          <div className="p-2 bg-white my-2">
            <div className="flex flex-col justify-center items-center border-[2px] border-dashed rounded-md p-4 my-4">
              <div>
                <img className="" src="/uploaddocs.svg" alt="" />
              </div>

              <div className="text-center">
                <div className="text-sm md:text-[21px]">Drag your file here, or  <span className="text-[#1D8EE6]">browse</span></div>
              </div>
            </div>


            <div className="rounded-lg">
              <div className="bg-[#E9FCFB] rounded-lg p-3 flex items-start justify-between gap-4">
                <div className="flex items-center gap-x-2">
                  <img src="/uploadfilesheet.svg" alt="" />
                  <div>
                    <div className="text-[13px]">employees_001.xxls</div>
                    <div className="text-[#3699FF] text-[10px] ">100% • Click to view</div>
                  </div>
                </div>

                <img src="/uploaddelete.svg" className="cursor-pointer" alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mt-10 gap-28">
            <div></div>
            <Button className='!px-8' title='Submit' onClick={() => {
              setModalUpload(false)
              setModalSuccess(true)
            }} />
          </div>
        </div>
      </Modal>
      {/* Success share */}
      <Modal
        open={modalSuccess}
        onCancel={() => setModalSuccess(false)}
        footer={null}
        centered
        maskClosable={false}
        closable={false}
        afterClose={() => setModalSuccess(false)}
        width={400}
      >

        <div className='grid grid-cols-1 items-center justify- text-center p-2 md:py-4 w-full'>
          <div className='flex items-center justify-center'>

            <img src="/success-check.svg" alt="" />
          </div>

          <div>
            <p className='text-xl text-[#0D1227] mt-3'>Link Successfully Sent </p>

            <p className='text-base text-[#535768] mt-1'>Kindly inform the recipient to check their mail for their onboarding link</p>
          </div>

          <div className="flex flex-row items-center justify-between mt-10 gap-28">
            <div></div>
            <>
              <Button className='!px-8' title='Close' onClick={() => {
                setModalOpen(false)
                setModalSuccess(false)
              }} />
            </>

          </div>
        </div>
      </Modal >

      {/* suceess upload */}
      <Modal
        open={modalSuccessUpload}
        onCancel={() => setModalSuccessUpload(false)}
        footer={null}
        centered
        maskClosable={false}
        closable={false}
        afterClose={() => setModalSuccessUpload(false)}
        width={500}
      >

        <div className='grid grid-cols-1 items-center justify- text-center p-2 md:py-8 w-full'>
          <div className='flex items-center justify-center'>

            <img src="/success-check.svg" alt="" />
          </div>
          <div>
            <p className='text-xl text-[#0D1227] mt-3'>Employee List Successfully Submitted </p>

            <p className='text-base text-[#535768] mt-1'>The uploaded list will be sent for approval, check pending  list to award approval.</p>
          </div>


          <div className="flex flex-row items-center justify-between mt-10 gap-28">
            <div></div>
            {/* {!modalUpload ? ( */}

            <>
              <div className="flex items-center">
                <Button className='!px-8 !text-[#1D8EE6] !bg-white' title='Upload New List' onClick={() => {
                  setModalUpload(true)
                  setModalSuccess(false)
                }} />

                <Button className='!px-8' title='Continue' onClick={
                  () => {
                    setModalOpen(false)
                    setModalSuccess(false)
                  }
                } />
              </div>
            </>


          </div>
        </div>
      </Modal >
    </>
  )
}

export default EmployeePop