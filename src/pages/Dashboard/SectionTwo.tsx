import { Dispatch, SetStateAction, useState } from "react"

import { Button, Input } from "../../components"
interface Props {
    setState: Dispatch<SetStateAction<number>>
}
const SectionTwo = ({ setState }: Props) => {
    const [register, setRegister] = useState(false)
    return (
        <div>
            <img src="/back-icon.svg" alt='' className='cursor-pointer mb-4' onClick={() => setState(0)} />

            <div className="text-[27px] text-[#091E42] border-b border-gray-200 pb-3">Registration Info.</div>

            <div className='flex items-center gap-x-4 py-6 relative'>
                <div className="relative">
                    {!register && (<img src="/register-check.svg" className="absolute top-2 px-2 ps-2" alt="" />)}
                    <div className={`${!register && '!border-[#1D8EE6]'} cursor-pointer border border-[#DEDFEC] rounded-xl flex flex-col items-center justify-center p-10`} onClick={() => setRegister(false)}>
                        <img src="/unregistered.svg" alt="unregistered" />
                        <div className="mt-4">{" "}&nbsp; Registered &nbsp;</div>
                    </div>
                </div>
                <div className="relative">
                    {register && (<img src="/register-check.svg" className="absolute top-2 px-2 ps-2" alt="" />)}
                    <div className={`${register && '!border-[#1D8EE6]'} cursor-pointer border border-[#DEDFEC] rounded-xl flex flex-col items-center justify-center p-10`} onClick={() => setRegister(true)}>
                        <img src="/unregistered.svg" alt="unregistered" />
                        <div className="mt-4">UnRegistered</div>
                    </div>
                </div>
            </div>

            <div className={`${register ? 'ease-in-out' : 'ease-in-out'}`}>
                {!register && (
                    <>
                        <div className="max-w-md">
                            <Input label='RC Number' placeholder='1234567RC' />
                        </div>
                        {/* upload stuffs */}

                        <div className="upload max-w-md">
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-48 border-2 border[#DEDFEC] border-dashed rounded-lg cursor-pointer`}>
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <img src="/upload.svg" alt="" />

                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drag your file here,</span> <span className="text-[]">or browse</span></p>
                                        <p className="text-xs text-[#BAC3D2]">supports: JPEG, PNG, PDF not more than 3MB</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="flex items-center justify-center gap-2 max-w-md my-4">
                <Button className='!px-10 !bg-white !text-black' title="Skip" onClick={() => setState(0)} />
                <Button className='!px-10' title="Submit" onClick={() => setState(2)} />
            </div>
        </div>
    )
}

export default SectionTwo