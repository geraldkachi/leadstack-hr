import { useRef, Dispatch, SetStateAction, useState } from "react";
import { Button, Input } from "../../components"

interface Props {
    setCodeEmail: Dispatch<SetStateAction<boolean>>
}

const EnterVerificationCodeEmail = ({ setCodeEmail }: Props) => {
    const [email, setEmail] = useState('')
    const formInput = useRef<HTMLInputElement>(null);
    return (

        <form action="" className="w-full">
            <div className="grid grid-col-1">
                <Input
                    label="Enter Email"
                    ref={formInput}
                    value={email}
                    className="mb-1"
                    type="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="hr@tch.com"
                />

                <p className="text-xs md:text-sm mt-2">Kindly ensure the email above is your correct official email</p>
                <div className="flex items-center gap-3 mt-3">

                    <p className="text-xs md:text-sm my-1 text-[#1D8EE6] cursor-pointer" onClick={()=> setCodeEmail(false)}>Resend Code</p>
                    <p className="text-[#E01507] cursor-pointer" onClick={()=> setCodeEmail(false)}>Cancel</p>
                </div>
                <div className='flex items-center justify-end  mr-4 gap-3 mt-[20%] my-5'>

                    <Button disabled={!email} className="!px-8" onClick={() => 'handleSubmit'} title="Verify" />
                </div>
            </div>
        </form>
    )
}

export default EnterVerificationCodeEmail