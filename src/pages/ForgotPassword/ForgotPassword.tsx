import ForgotPasswordForm from "./ForgotPasswordForm"

const ForgotPassword = () => {
    return (
        <div className="grid md:grid-cols-2 h-screen bg-[#F2F5F9] relative">
            <div className=" hidden md:block p-10 place-content-center">
                {/* <Stepper {...{ currentStep, setCurrentStep }} /> */}
                <div className="relative col-span-2 place-content-center p-0  bg-contain bg-no-repeat w-full text-white h-full">
                    <img src="/login-logo.svg" className=" pt-10" alt="" />

                    <p className="text-[64px] mt-20 text-[#0A2E65] whitespace-nowrap font-extrabold">Forgot Password?</p>
                    <p className="text-[#535768] text-lg">No worries! We even forget our birthday sometimes 😂.
                        We&apos;ßll send you reset instructions.</p>

                    <div className=" bottom-36 p-5 pr-16 text-2xl">

                    </div>
                    {/* <img src="/forgot-password.svg" alt="" /> */}
                </div>

            </div>

            <div className="flex-col flex-1 flex mx-auto md:m-10 justify-center md:justify-between relative w-full">
                <div></div>
                <div className="mx-3">
                    <ForgotPasswordForm />
                </div>
                <div></div>
            </div>
            <div className="absolute bottom-0 hidden md:block z-10">
                <img src="/forgot-password.svg"  className="md:h-80"  alt="" />
            </div>
        </div>
    )
}

export default ForgotPassword