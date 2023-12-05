import { useRef, Dispatch, SetStateAction } from "react";
import { Button, Input } from "../../components"

interface Props {
    setCodeEmail: Dispatch<SetStateAction<boolean>>
}

const EnterVerificationCodeEmail = ({ setCodeEmail }: Props) => {
    const formInput = useRef<HTMLInputElement>(null);
    return (

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

                <p className="text-xs md:text-sm mt-2">Kindly ensure the email above is your correct official email</p>
                <div className="flex items-center gap-3">

                    <p className="text-xs md:text-sm my-1 text-[#1D8EE6] cursor-pointer" onClick={()=> setCodeEmail(false)}>Resend Code</p>
                    <p className="text-[#E01507] cursor-pointer">Cancel</p>
                </div>
                <div className='flex items-center justify-end  mr-4 gap-3 mt-[20%] my-5'>

                    <Button loading className="!px-8" onClick={() => 'handleSubmit'} title="Verify" />
                </div>
            </div>
        </form>
    )
}

export default EnterVerificationCodeEmail