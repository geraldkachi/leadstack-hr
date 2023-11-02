import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { Modal } from 'antd';

const EnterVerificationCode = ({ setCurrentStep }: any) => {
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()
    const [otp, setOtp] = useState('');
    const [accountStatus, setAccountStatus] = useState('no')
    const [isAccountVerified, setAccountVerified] = useState(false);
    const [isAccountVerifying, setAccountVerifying] = useState(false);
    const [isResendModalOpen, setIsResendModalOpen] = useState(false);

    const inputStyle = {
        width: "60px",
        height: "60px",
        border: `1px solid #DEDFEC`,
        borderRadius: "4px",
        fontSize: "16px",
        marginRight: "20px",
    };

    const handleSubmit = (event: any) => {
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


    const toggleVerifyingModal = () => {
        setAccountVerifying(!isAccountVerifying)
    }
    const toggleVerifiedModal = () => {
        setAccountVerified(!isAccountVerified)
    }

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
        setCurrentStep(5)
    }
    const handleNavigateForward = () => {
        navigate('/personal/information');
    }
    return (
        <div className="w-full max-w-xl mx-auto py-3 flex flex-col justify-between">
            {/* <img src="" alt="" /> */}
            <div>

                <svg className='cursor-pointer mb-4' onClick={() => setCurrentStep(3)} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0007 36.6666C29.2054 36.6666 36.6673 29.2047 36.6673 19.9999C36.6673 10.7952 29.2054 3.33325 20.0007 3.33325C10.7959 3.33325 3.33398 10.7952 3.33398 19.9999C3.33398 29.2047 10.7959 36.6666 20.0007 36.6666Z" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.0007 13.3333L13.334 19.9999L20.0007 26.6666" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.6673 20H13.334" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div className="text-[] mb-12">
                    <div className="text-[#0D1227] text-2xl font-bold  md:text-4xl ">
                        Enter Verification Code
                    </div>
                    <div className="text-[#535768] text-base leading-6 font-normal mt-2">
                        We have just sent a verification code to hr@tch.com and +234 70123456789
                    </div>
                </div>

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
            >
                {/* <Modal show={stateNewTask} closeModal={setModalOpen}> */}

                {/* <NewTask {...{ setModalOpen }} /> */}

                <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
                    <div className='flex items-center justify-center'>

                    <img src="/success-check.svg"  alt="" />
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