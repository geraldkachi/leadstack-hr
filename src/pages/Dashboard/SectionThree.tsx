import { Dispatch, SetStateAction } from "react"
import { Button, Input } from "../../components"

interface Props {
    setState: Dispatch<SetStateAction<number>>
    setModalSuccess: Dispatch<SetStateAction<boolean>>
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const SectionThree =({setState, setModalSuccess, setModalOpen}: Props) => {
  return (
    <div className='w-full'>
         <svg className='cursor-pointer mb-4' onClick={() => setState(1)} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0007 36.6666C29.2054 36.6666 36.6673 29.2047 36.6673 19.9999C36.6673 10.7952 29.2054 3.33325 20.0007 3.33325C10.7959 3.33325 3.33398 10.7952 3.33398 19.9999C3.33398 29.2047 10.7959 36.6666 20.0007 36.6666Z" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.0007 13.3333L13.334 19.9999L20.0007 26.6666" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.6673 20H13.334" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                <div className="text-[27px] text-[#091E42] border-b border-gray-200 pb-3">Company Domain</div>

                <div className='flex items-center gap-2 py-6'>
                  <div className="max-w-2xl w-full">
                    <Input LeadingIcon={() => <><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.6">
                        <path d="M10.0404 12.9602C11.4072 14.327 13.6233 14.327 14.9901 12.9602L18.5257 9.42462C19.8925 8.05779 19.8925 5.84171 18.5257 4.47487C17.1588 3.10804 14.9427 3.10804 13.5759 4.47487L11.8081 6.24264" stroke="#272848" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M12.8698 10.1316C11.5029 8.76481 9.28687 8.76481 7.92004 10.1316L4.3845 13.6672C3.01767 15.034 3.01767 17.2501 4.3845 18.6169C5.75134 19.9838 7.96741 19.9838 9.33425 18.6169L11.102 16.8492" stroke="#272848" stroke-width="1.5" stroke-linecap="round" />
                      </g>
                    </svg>
                    </>} label='Enter your Company Domain' labelClass='text-lg' placeholder='Insert company domain' />

                    <div className="flex items-center justify-center gap-2 max-w-md my-10">

                      <Button className='!px-10 !bg-white !text-black' title="Submit" onClick={() => null} />
                      <Button className='!px-10' title="Complete" onClick={() => {
                        setModalSuccess(true)
                        setModalOpen(false)
                        setState(0)
                      }} />

                    </div>
                  </div>
                </div>
              </div>
  )
}

export default SectionThree