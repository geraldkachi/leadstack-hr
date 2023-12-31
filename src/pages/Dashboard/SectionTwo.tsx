import { Dispatch, SetStateAction, useState } from "react"

import { Button, Input } from "../../components"
interface Props {
    setState: Dispatch<SetStateAction<number>>
}
const SectionTwo = ({ setState }: Props) => {
    const [register, setRegister] = useState(false)
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
        <div className="dark:bg-[#161819]">
            <img src="/back-icon.svg" alt='' className='cursor-pointer mb-4' onClick={() => setState(0)} />

            <div className="text-[27px] text-[#091E42] border-b border-gray-200 pb-3">Registration Info.</div>

            <div className='flex items-center justify-center md:justify-start gap-x-4 py-6 relative'>
                <div className="relative">
                    {!register && (<img src="/register-check.svg" className="absolute top-2 right-0 px-2 ps-2" alt="" />)}
                    <div className={`${!register && '!border-[#1D8EE6]'} cursor-pointer border border-[#DEDFEC] rounded-xl flex flex-col items-center justify-center h-28 md:h-40 p-2 sm:p-4 md:p-10`} onClick={() => setRegister(false)}>
                        <img src="/unregistered.svg" alt="unregistered" />
                        <div className="mt-4">{" "}&nbsp; Registered &nbsp;</div>
                    </div>
                </div>
                <div className="relative">
                    {register && (<img src="/register-check.svg" className="absolute top-2 right-0 px-2 ps-2" alt="" />)}
                    <div className={`${register && '!border-[#1D8EE6]'} cursor-pointer border border-[#DEDFEC] rounded-xl flex flex-col items-center justify-center h-28 md:h-40 p-2 sm:p-4 md:p-10`} onClick={() => setRegister(true)}>
                        <img src="/unregistered.svg" alt="unregistered" />
                        <div className="mt-4">UnRegistered</div>
                    </div>
                </div>
            </div>

            <div className={`${register ? 'ease-in-out' : 'ease-in-out'}`}>
                {!register && (
                    <>
                        <div className="max-w-md">
                            <Input label='RC Number' placeholder='1234567RC' className="mb-3" />
                        </div>
                        {/* upload stuffs */}

                        <div className="upload max-w-md">
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-32 md:h-48 border-2 border[#DEDFEC] border-dashed rounded-lg cursor-pointer`}>
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <img src="/upload.svg" alt="" />

                                        <p className="mb-2 text-xs md:text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drag your file here,</span> <span className="text-[]">or browse</span></p>
                                        <p className="text-[10px] sm:text-xs text-[#BAC3D2]">supports: JPEG, PNG, PDF not more than 3MB</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                        {/* Display the selected file name */}
                        <div className="rounded-lg my-5">
                            {selectedFile &&
                                <div className="bg-[#72bf8b0d] border-[#1de653f1]  bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-x-2">
                                        <div className="flex items-center gap-x-2">
                                        </div>
                                        <div>
                                            {selectedFile && <div className="text-[13px] text-[#272848]">img.{selectedFile.name}</div>}
                                            <div className="text-[#94A0B4] text-[10px] ">100%  • <span>Click to View</span></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-x-2">

                                        <img src="/uploaddelete.svg" className="cursor-pointer" alt="" onClick={() => setSelectedFile(null)} />
                                    </div>
                                </div>
                            }
                        </div>
                        </div>
                        {/* {selectedFile && <p className='flex items-center gap-3 mt-3'>Selected File: {selectedFile.name}  <img src="/register-check.svg" alt="" /> </p>} */}
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
