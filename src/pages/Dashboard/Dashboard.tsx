import "react-color-palette/css";
// import './styles.css'
import Cards from './Cards'
import { Modal } from 'antd'
import { useRef, useState } from 'react'
import { Hue, Saturation, useColor } from "react-color-palette";


import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import { Button, EmployeePop, Input, Toast } from "../../components"
import IconOne from './IconOne'
import IconTwo from './IconTwo'
import IconThree from './IconThree'
import { openNotification } from "../../utils";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

const Dashboard = () => {
  const theme = useAuth(state => state.theme)
  const [color, setColor] = useColor("");
  const formInput = useRef<HTMLInputElement>(null);


  const [colorHex, setColorHex] = useState({
    hex: '', //default
  });
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)
  const [modalColor, setModalColor] = useState(false)
  const [state, setState] = useState(0)

  const pathList = [
    { route: 0, title: "Customize Experience", onclick: () => setState(0) },
    { route: 1, title: "Registration Info", onclick: () => setState(1) },
    { route: 2, title: "Company Domain", onclick: () => setState(2) },
  ];
  // console.log(colorHex, "colorHex")

  const changeColor = (e: string) =>
    setColorHex((prev) => ({ ...prev, hex: e }))


    // toast?
    const [showToast, setShowToast] = useState(false);

    const showToastMessage = () => {
      setShowToast(true);

      // Close the toast after 6 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 6000);
    };
  return (
    <div className="h-full pt-3">
       <Toast
        message="Changed Successfully!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <div className="px-4 md:px-8">
      <div className="block space-y-3 md:space-y-0 md:flex items-center justify-between gap-3 bg-whit">
        <div>
          <div className="text-lg md:text-2xl dark:text-[#ffffff]">Dashboard</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>

        <EmployeePop />
      </div>


      {(modalOpen === false && modalSuccess == false) ? (
        <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#EAFCFB] rounded-md border-dashed border border-[#1EAA79] lg:mr-56">
          <img src="/cautionsuccess.svg" alt="caution" />
          <div>
            <div className='text-[#3F4254] font-bold text-sm md:text-base'>Account Verification Successful</div>
            <div className='text-[#7E8299] text-xs md:text-base'>your account verification was successful, you can start with the following; <Link to='/employees/add-employees' className='text-[#00A3FF] cursor-pointer'>Add Employees</Link> </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#FFF7E7] dark:bg-[#393938] rounded-md border-dashed border border-[#FFA800] lg:mr-56">
          <img src="/caution.svg" alt="caution" />
          <div>
            <div className='text-[#3F4254] font-bold text-sm md:text-base'>We need your attention!</div>
            <div className='text-[#7E8299] text-xs md:text-sm'>To start adding employees & doing the cool stuffs, please <span className='text-[#00A3FF] cursor-pointer' onClick={() => {
              setState(0)
              setModalOpen(true)
            }}>Complete Onboarding</span> </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className="my-3 flex flex-col items-center justify-center pt-10 pb-20">
        <img src="/no-record.svg" alt="no-record" />

        <Button className='flex items-center !text-[15.85px] rounded-lg !text-white my-5' prefixIcon={<img src="/pluswhite.svg" alt="" />} onClick={() => setModalOpen(true)} title="Complete Onboarding" />
      </div>
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
        style={{ backgroundColor: theme === 'dark' && '#242729' }}

      >
        <div className='grid lg:grid-cols-5 items-start justify- py-8 h-[650px] overflow-y-scroll no-scrollbar dark:bg-[#161819]'>
          <div className='col-span-1 items-start hidden sm:block '>
            <div>
              <div className="text-base md:text-lg] whitespace-nowrap">Complete Onboarding</div>
              <div className="text-[#98A1B0] text-[13px] ">Verify your account and setup the space</div>
            </div>

            {pathList.map((item, index) => {
              const activeItem = state === (item.route);
              const iconArr = [
                <IconOne key={1} index={activeItem} />,
                <IconTwo key={2} index={activeItem} />,
                <IconThree key={3} index={activeItem} />
              ];
              return (
                <div
                  className={`${activeItem ? " !text-[#0D1227]" : "text-[#535768]"}
                  ${!open && 'text-center flex items-center justify-center'}
                  flex items-center gap-2  px-6 py-3 cursor-pointer mb-1 text-sm
                   w-full`}
                  onClick={item.onclick}>
                  <div key={index}> {iconArr[index]}</div>

                  <span className={`origin-left ease-in-out duration-500 whitespace-nowrap text-[#535768]`}>
                    {item.title}
                  </span>
                </div>
              );
            })}

          </div>

          <div className="col-span-4 w-full lg:border-l border-grey-200 overflow-y-scroll no-scrollbar">
            {/* State 1 */}
            {state === 0 &&
              <SectionOne {... { setState, setModalColor }} />
            }

            {/* <Button className='!px-8' title='Proceed' onClick={() => navigate('/login')} /> */}

            {/* State 2 */}
            {state === 1 && (
              <SectionTwo {... { setState }} />
            )}

            {state === 2 && (
              <SectionThree {... { setState, setModalSuccess, setModalOpen }} />
            )}
          </div>
        </div>
      </Modal>

      <Modal
        open={modalSuccess}
        onCancel={() => setModalSuccess(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalSuccess(false)}
        width={500}
      >
        <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
          <div className='flex items-center justify-center'>

            <img src="/success-check.svg" alt="" />
          </div>

          <div>
            <p className='text-xl text-[#0D1227] mt-3'>Onboarding Complete</p>

            <p className='text-base text-[#535768] mt-1'>Track and manage employee information and manage your organization activities. </p>
          </div>


          <div className="flex flex-row items-center justify-between mt-10 gap-28">
            <div></div>
            <Button className='!px-8' title='Proceed' onClick={() => setModalSuccess(false)} />
          </div>
        </div>
      </Modal>

      <Modal
        open={modalColor}
        onCancel={() => setModalColor(false)}
        footer={null}
        centered
        maskClosable={false}
        closable
        afterClose={() => setModalColor(false)}
        width={500}
      >
        <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
          <div className='flex items-center justify-center'>

            {/* <img src="/success-check.svg" alt="" /> */}
          </div>

          <div className='w-[290px] flex flex-col rounded-lg relative '>
            {/* <ColorPicker
              // width={290}
              height={290}
              color={color}
              onChange={setColor}
              hideInput={["rgb", "hsv", "hex"]}
              hideAlpha={false}
            /> */}
            <div className='w-[290px] flex flex-col rounded-lg relative'>
              <div className='w-60 md:w-[290px] fle items-center'>
                <span className="rotate-180">
                  <Saturation height={300} color={color} onChange={setColor} />
                </span>
                <span className="w-4 rotate-0 bottom-96">
                  <Hue color={color} onChange={setColor} />
                </span>
              </div>
            </div>

            <form className="mt-10" onSubmit={(e) => e.preventDefault()}>
              <Input
                label="Hex Number"
                ref={formInput}
                value={colorHex.hex}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColorHex(e.target.value)}
                onChange={(e) =>  changeColor(e.target.value)}
                type="text"
                name="color"
                placeholder="e.g #FFFFFF"
              />
              {/* {console.log(colorHex)} */}
            </form>
          </div>

          <div className="flex items-center justify-end mt-10">
            {/* <div></div> */}
            <div className='flex flex-row items-center  gap-x-2'>
              <Button className='!border !border-[#DEDFEC] bg-white !text-[#535768]' title='Cancel' onClick={() => setModalColor(false)} />
              <Button className='px-8' title='Save Changes' onClick={() => {
                openNotification({
                  type: "success",
                  title: "Changed Successfully",
                  message: ``,
                  placement: "topRight"
                });
                setModalColor(false)
                showToastMessage()
              }} />
            </div>
            {/* <div></div> */}
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default Dashboard
