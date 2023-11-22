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
          <div className="flex flex-col items-start justify-start list-none top-36 opacity-100 absolute r-2 right-5 md:right-[91px] bg-white dark:bg-gradient-to-t transition-all dark:from-[#ffffff] dark:vai-[#292929] shadow-3xl rounded-md w-[150px] md:w-[210px] z-20">
            <span className="cursor-pointer flex items-center gap-2 p-2 text-xs" onClick={() => setModalOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.66602C16.3807 6.66602 17.5 5.54673 17.5 4.16602C17.5 2.7853 16.3807 1.66602 15 1.66602C13.6193 1.66602 12.5 2.7853 12.5 4.16602C12.5 5.54673 13.6193 6.66602 15 6.66602Z" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 18.334C16.3807 18.334 17.5 17.2147 17.5 15.834C17.5 14.4533 16.3807 13.334 15 13.334C13.6193 13.334 12.5 14.4533 12.5 15.834C12.5 17.2147 13.6193 18.334 15 18.334Z" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.15845 11.2578L12.8501 14.5745" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.8418 5.42578L7.15845 8.74245" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Share Link</span>
            </span>

            <span className="cursor-pointer flex items-center gap-2 p-2 text-xs">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16675 1.66602H7.50008C3.33341 1.66602 1.66675 3.33268 1.66675 7.49935V12.4993C1.66675 16.666 3.33341 18.3327 7.50008 18.3327H12.5001C16.6667 18.3327 18.3334 16.666 18.3334 12.4993V10.8327" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3666 2.51639L6.7999 9.08306C6.5499 9.33306 6.2999 9.82472 6.2499 10.1831L5.89157 12.6914C5.75823 13.5997 6.3999 14.2331 7.30823 14.1081L9.81657 13.7497C10.1666 13.6997 10.6582 13.4497 10.9166 13.1997L17.4832 6.63306C18.6166 5.49972 19.1499 4.18306 17.4832 2.51639C15.8166 0.849722 14.4999 1.38306 13.3666 2.51639Z" stroke="#61646B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.425 3.45898C12.9834 5.45065 14.5417 7.00898 16.5417 7.57565" stroke="#61646B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <Link to="/employees/add-employees">Create Manually</Link>
            </span>

            <span className="cursor-pointer flex items-center gap-2 p-2 text-xs" onClick={() => setModalUpload(true)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99992 6.66602V1.66602L8.33325 3.33268" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 1.66602L11.6667 3.33268" stroke="#61646B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.83333 10C2.5 10 2.5 11.4917 2.5 13.3333V14.1667C2.5 16.4667 2.5 18.3333 6.66667 18.3333H13.3333C16.6667 18.3333 17.5 16.4667 17.5 14.1667V13.3333C17.5 11.4917 17.5 10 14.1667 10C13.3333 10 13.1 10.175 12.6667 10.5L11.8167 11.4C10.8333 12.45 9.16667 12.45 8.175 11.4L7.33333 10.5C6.9 10.175 6.66667 10 5.83333 10Z" stroke="#61646B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.16675 9.99987V8.3332C4.16675 6.6582 4.16675 5.27487 6.66675 5.0332" stroke="#61646B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.8333 9.99987V8.3332C15.8333 6.6582 15.8333 5.27487 13.3333 5.0332" stroke="#61646B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
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