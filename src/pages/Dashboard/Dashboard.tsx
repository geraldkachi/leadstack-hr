import './styles.css'
import { Button, Table } from "../../components"
import Cards from './Cards'
import { useState } from 'react'
import { Modal } from 'antd'

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const pathList = [
    { route: "/", title: "Customize Experience" },
    { route: "/", title: "Registration Info" },
    { route: "/", title: "Company Domain" },
  ];
  return (
    <div className="h-full pt-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg md:text-2xl">Dashboard</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>
        {/* <div className='flex items-center gap-2 p-3 bg-[#EEF5FC] rounded-lg md:mr-20 whitespace-nowrap'>
          <img src="/plusdash.svg" alt="" />
          <p className='text-sm md:text-base text-[#ABBED1]'>Add Employee</p>

        </div> */}
        <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Add Employee" onClick={() => setModalOpen(true)} />
      </div>

      <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#FFF7E7] rounded-md border-dashed border border-[#FFA800] md:mr-56">
        <img src="/caution.svg" alt="caution" />
        <div>
          <div className='text-[#3F4254] font-bold text-base'>We need your attention!</div>
          <div className='text-[#7E8299] text-sm md:text-base'>To start adding employees & doing the cool stuffs, please <span className='text-[#00A3FF]'>Complete Onboarding</span> </div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#EAFCFB] rounded-md border-dashed border border-[#1EAA79] md:mr-56">
        <img src="/cautionsuccess.svg" alt="caution" />
        <div>
          <div className='text-[#3F4254] font-bold text-base'>Account Verification Successful</div>
          <div className='text-[#7E8299] text-sm md:text-base'>your account verification was successful, you can start with the following; <span className='text-[#00A3FF]'>Add Employees</span> </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className="my-3 flex flex-col items-center justify-center pb-10">
        <img src="/no-record.svg" alt="no-record" />

        <Button className='flex items-center  rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Add Employee" />
      </div>

      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalOpen(false)}
        width={1127}
      >
        <div className='grid grid-cols-5 items-center justify-  p-8 w-full'>
          <div className='col-span-1 border items-start'>
            <div>
              <div className="text-base md:text-lg] whitespace-nowrap">Complete Onboarding</div>
              <div className="text-[#98A1B0] text-[13px] ">Verify your account and setup the space</div>
            </div>

            {pathList.map((item, index) => {
            const activeItem = location.pathname.includes(item.route);
            const iconArr = [
              ''
              // <DashboardIcon key={1} index={activeItem} />,
              // <EmployeesIcon key={2} index={activeItem} />,
              // <MyTeamIcon key={3} index={activeItem} />,
            ];
            return (
              <div
                
                className={`${activeItem && " !text-[#0D1227]"
                  }
                  ${!open && 'text-center flex items-center justify-center'}
                  flex items-center gap-2  px-6 py-3 cursor-pointer mb-1 text-sm
                  !text-[#535768] w-full`}
              >
                <div key={index}> {iconArr[index]}</div>

                <span
                  className={`origin-left ease-in-out duration-500 whitespace-nowrap`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}

          </div>

          <div className="col-span-4">
            <div></div>
            {/* <Button className='!px-8' title='Proceed' onClick={() => navigate('/login')} /> */}
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default Dashboard
