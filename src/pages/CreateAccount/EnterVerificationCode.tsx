import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { Modal } from 'antd';
import EnterVerificationCodeEmail from './EnterVerificationCodeEmail';
interface Props {
    setCurrentStep: Dispatch<SetStateAction<number>>
}
const EnterVerificationCode = ({ setCurrentStep }: Props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()
    const [otp, setOtp] = useState('');
    const [accountStatus, setAccountStatus] = useState('no')
    const [isAccountVerified, setAccountVerified] = useState(false);
    const [isAccountVerifying, setAccountVerifying] = useState(false);
    const [isResendModalOpen, setIsResendModalOpen] = useState(false);
    const [codeEmail, setCodeEmail] = useState(false);

    const inputStyle = {
        width: "60px",
        height: "60px",
        border: `1px solid #DEDFEC`,
        borderRadius: "4px",
        fontSize: "16px",
        marginRight: "20px",
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(otp);
        setAccountVerifying(true)
        setAccountVerified(false)
        // navigate("/login")
        setModalOpen(true)

        const timeOutPromise = new Promise(resolve => {
            setTimeout(resolve, 2000);
        })
        Promise.all([timeOutPromise]).then(() => {
            setAccountStatus('yes');
        })
    };


    // const toggleVerifyingModal = () => {
    //     setAccountVerifying(!isAccountVerifying)
    // }
    // const toggleVerifiedModal = () => {
    //     setAccountVerified(!isAccountVerified)
    // }

    useEffect(() => {
        if (accountStatus === 'yes') {
            setAccountVerifying(false)
            setAccountVerified(true)
        }

    }, [accountStatus])
    const toggleModal = () => {
        setIsResendModalOpen(!isResendModalOpen);
    }
    const handleRedirectToEmailChange = () => {
        // navigate('/forgot/password');
        setCodeEmail(true)
    }
    // const handleNavigateForward = () => {
    //     navigate('/personal/information');
    // }

    return (
        <div className="w-full max-w-xl mx-auto py-3 flex flex-col justify-between">
            {/* <img src="" alt="" /> */}
            <div>
                <img src="/back-icon.svg" alt='' className='cursor-pointer mb-4' onClick={() => setCurrentStep(2)} />

                <div className="text-[] mb-12">
                    <div className="text-[#0D1227] text-2xl font-bold  md:text-4xl ">
                        Enter Verification Code
                    </div>
                    <div className="text-[#535768] text-sm md:text-base leading-6 font-normal mt-2">
                        {codeEmail ? 'We have just sent a verification code to hr@tch.com' : 
                        'We have just sent a verification code to hr@tch.com and +234 70123456789'
                        }
                    </div>
                </div>
                {codeEmail ?
                    <EnterVerificationCodeEmail {...{ setCodeEmail }} /> :
                (
                <form action="" className="w-full">
                    <div className="grid grid-col-1">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            containerStyle={""}
                            inputStyle={inputStyle}
                            renderInput={(props) => <input {...props} />}
                            inputType='password'
                        />

                        <p className="text-xs md:text-sm my-3">
                            Didn&apos;t receive the Code?  <span className="text-[#1D8EE6] cursor-pointer" onClick={toggleModal}>Resend Code</span>
                        </p>
                        <div className='flex items-center justify-end  mr-4 gap-3 mt-[20%] my-5'>
                            <p className='cursor-pointer p-3' onClick={handleRedirectToEmailChange}>Change Email</p>

                            <Button className="!px-8" onClick={handleSubmit} title="Verify" />
                        </div>
                        {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
                    </div>
                </form>
                    )}
            </div>


            {/* <div className="hidden md:flex items-center text-center justify-between ml-32">
                <div className="relative bg-[url('/bglightbulb.svg')] bg-no-repeat bg-cover p-10 text-xs text-white text-centers mt-4 rounded-2xl w-auto ml-20">
                    <img src="/lightbulb.svg" className='absolute -top-3 left-1 ' alt="" />
                    <img src="/cancel-lightbulb.svg" className='absolute top-2 right-1 p-1' alt="" />
                    OTPs have a limited validity period. Enter the OTP promptly to ensure a smooth verification process. Delayed entries may result in expiration and require generating a new OTP.
                </div>
            </div> */}

            {/* <Modal show={}>

            </Modal> */}

            <Modal
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                footer={null}
                centered
                maskClosable={false}
                closable={false}
                afterClose={() => setModalOpen(false)}
                width={400}
            >
                {/* <Modal show={stateNewTask} closeModal={setModalOpen}> */}

                {/* <NewTask {...{ setModalOpen }} /> */}

                <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
                    <div className='flex items-center justify-center'>

                        <img src="/success-check.svg" alt="" />
                    </div>

                    <div>
                        <p className='text-xl text-[#0D1227] mt-3'>Welcome on board</p>

                        <p className='text-base text-[#535768] mt-1'>Kindly proceed to your dashboard</p>
                    </div>


                    <div className="flex flex-row items-center justify-between mt-10 gap-28">
                        <div></div>
                        <Button className='!px-8' title='Proceed' onClick={() => navigate('/login')} />
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default EnterVerificationCode
// https://www.youtube.com/watch?v=kzp3hXDFB64