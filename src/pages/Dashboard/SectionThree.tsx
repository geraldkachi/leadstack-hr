import { Dispatch, SetStateAction } from "react"
import { Button, Input } from "../../components"

interface Props {
  setState: Dispatch<SetStateAction<number>>
  setModalSuccess: Dispatch<SetStateAction<boolean>>
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const SectionThree = ({ setState, setModalSuccess, setModalOpen }: Props) => {
  return (
    <div className='w-full dark:bg-[#161819]'>
      <img src="/back-icon.svg" alt='' className='cursor-pointer mb-4' onClick={() => setState(1)} />

      <div className="text-[27px] text-[#091E42] border-b border-gray-200 pb-3">Company Domain</div>

      <div className='flex items-center gap-2 py-6'>
        <div className="max-w-2xl w-full">
          <Input LeadingIcon={() => <img src='/company-domain.svg' />} label='Enter your Company Domain' labelClass='text-lg' placeholder='Insert company domain' />

          <div className="flex items-center justify-center gap-2 max-w-md my-10">

            <Button className='!px-10 !bg-white !text-black' title="Skip" onClick={() => setState(1)} />
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
