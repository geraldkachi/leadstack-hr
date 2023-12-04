// import { useState } from "react";
import LoginForm from "./LoginForm";
// import LoginForm2 from "./LoginForm2";

const Login = () => {
    // const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <div className="relative">
            <div className="grid lg:grid-cols-2 h-screen bg-[#F2F5F9] z-50 ">
                <div className=" hidden lg:block p-10 place-content-center">
                    {/* <Stepper {...{ currentStep, setCurrentStep }} /> */}
                    <div className="relative col-span-2 place-content-center p-0  bg-contain bg-no-repeat w-full text-white h-full z-50">
                        <img src="/login-logo.svg" className=" pt-10" alt="" />

                        <p className="text-[64px] mt-20 text-[#0A2E65] whitespace-nowrap font-extrabold">Welcome back ✌ ️</p>
                        <p className="text-[#535768] text-lg">"HR is all about people. And people are complicated. We reduce the complications"</p>

                        {/* {currentStep === 1 && */}
                        {/* } */}
                    </div>

                </div>

                <div className="flex-col flex-1 flex mx-auto md:m-10 justify-center md:justify-between relative">
                    <div></div>
                    <div className="mx-3">
                        {/* {currentStep === 1 && <LoginForm  />} */}
                        {<LoginForm />}
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="absolute bottom-0 hidden md:block z-10">
                <img src="/login-img1.svg" className="md:h-80" alt="" />
            </div>
        </div>
    )
}

export default Login