import { useRef } from "react";
import { Button, Input } from "../../components"

const EnterVerificationCodeEmail = ({ setCurrentStep }: any) => {
    const formInput= useRef<HTMLInputElement>(null);
    return (
        <div className="w-full max-w-xl mx-auto py-3 flex flex-col justify-between">
            {/* <img src="" alt="" /> */}
            <div>

                <svg className='cursor-pointer mb-4' onClick={() => setCurrentStep(4)} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0007 36.6666C29.2054 36.6666 36.6673 29.2047 36.6673 19.9999C36.6673 10.7952 29.2054 3.33325 20.0007 3.33325C10.7959 3.33325 3.33398 10.7952 3.33398 19.9999C3.33398 29.2047 10.7959 36.6666 20.0007 36.6666Z" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.0007 13.3333L13.334 19.9999L20.0007 26.6666" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.6673 20H13.334" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div className="text-[] mb-12">
                    <div className="text-[#0D1227] text-2xl font-bold  md:text-4xl ">
                        Enter Verification Code
                    </div>
                    <div className="text-[#535768] text-base leading-6 font-normal mt-2">
                        We have just sent a verification code to hr@tch.com
                    </div>
                </div>

                <form action="" className="w-full">
                    <div className="grid grid-col-1">
                        <Input 
                        label="Enter Email"
                        ref={formInput}
                        type="email"
                        name="email"
                        placeholder="hr@tch.com"
                        />

                        <p className="text-xs md:text-sm">
                        Kindly ensure the email above is your correct official email                         </p>
                        <div className="flex items-center gap-3">

                        <p className="text-xs md:text-sm my-1 text-[#1D8EE6] cursor-pointer">Resend Code</p>
                        <p className="text-[#E01507] cursor-pointer">Cancel</p>
                        </div>
                        <div className='flex items-center justify-end  mr-4 gap-3 mt-[20%] my-5'>

                            <Button loading className="!px-8" onClick={() => 'handleSubmit'} title="Verify" />
                        </div>
                        {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EnterVerificationCodeEmail