import { useRef, Dispatch, SetStateAction } from "react";
import { Button, Input } from "../../components"

interface Props {
    setCurrentStep: Dispatch<SetStateAction<number>>
  }

const EnterVerificationCodeEmail = ({ setCurrentStep }: Props) => {
    const formInput= useRef<HTMLInputElement>(null);
    return (
        <div className="w-full max-w-xl mx-auto py-3 flex flex-col justify-between">
            {/* <img src="" alt="" /> */}
            <div>
            <img src="/back-icon.svg" alt='' className='cursor-pointer mb-4' onClick={() => setCurrentStep(4)} />

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
                        className="mb-1"
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