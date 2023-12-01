import { useRef, useState } from "react";
import { Button, Input, PasswordMe } from "../../components"
import { Modal } from "antd";

const PasswordResetForm = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordNew, setShowPasswordNew] = useState(false)
    const formInput = useRef<HTMLInputElement>(null);

    console.log(modalOpen)

    return (
        <div className="w-full max-w-xl mx-auto px-3">
            <div className="text-center mb-[28px]"> </div>

            <form action="" className="w-full">
                <div className="grid grid-col-1">
                    <p className="text-[36px] my-2 text-[#0A2E65] whitespace-nowrap font-extrabold">Enter OTP</p>
                    <Input
                        label="Enter Password"
                        ref={formInput}
                        className="mb-1"
                        type="password"
                        name="password"
                        placeholder="techworldvibe"
                    TrailingIcon={() => (
                        <PasswordMe
                            showPassword={showPasswordNew}
                            setShowPassword={setShowPasswordNew}
                        />
                    )}
                    />
                    <Input
                        label="Confirm Password"
                        ref={formInput}
                        type="password"
                        name="password"
                        placeholder="techworldvibe"
                        TrailingIcon={() => (
                            <PasswordMe
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        )}
                    />


                    <div className="mt-2 text-xs">Didn’t receive the Code? <span className="text-[#1D8EE6] text-xs cursor-pointer" onClick={() => "navigate('/forgot-password')"}> Resend Code</span></div>

                </div>



                <div className="flex items-center justify-end mt-10 gap-2">

                    <Button
                        type="button"
                        className="!bg-[#1D8EE6] !text-white !px-8"
                        onClick={() => setModalOpen(true)}
                        title="Continue"
                    />
                </div>


            </form>

            <Modal
                onCancel={() => setModalOpen(false)}
                footer={null}
                centered
                maskClosable={false}
                closable={false}
                afterClose={() => setModalOpen(false)}
            >
                {/* <Modal show={stateNewTask} closeModal={setStateNewTask}> */}
                <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
                    <div className='flex items-center justify-center'>

                        <img src="/success-check.svg" alt="" />
                    </div>

                    <div>
                        <p className='text-xl text-[#0D1227] mt-3'>Password Reset Successful</p>

                        <p className='text-base text-[#535768] mt-1'>Kindly proceed to your dashboard</p>
                    </div>


                    <div className="flex flex-row items-center justify-between mt-10 gap-28">
                        <div></div>
                        <Button className='!px-8' title='Proceed' onClick={() => setModalOpen(false)} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PasswordResetForm