// import { useState } from "react";
import LoginForm from "./LoginForm";
// import LoginForm2 from "./LoginForm2";

const Login = () => {
    // const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <div className="grid md:grid-cols-2 h-screen bg-[#F2F5F9]">
            <div className=" hidden md:block p-10 place-content-center">
                {/* <Stepper {...{ currentStep, setCurrentStep }} /> */}
                <div className="relative col-span-2 place-content-center p-0  bg-contain bg-no-repeat w-full text-white h-full">
                    <img src="/login-logo.svg" className=" pt-10" alt="" />

                    <p className="text-[64px] mt-20 text-[#0A2E65] whitespace-nowrap font-extrabold">Welcome back ✌ ️</p>
                    <p className="text-[#535768] text-lg">"HR is all about people. And people are complicated. We reduce the complications"</p>

                    <div className=" bottom-36 p-5 pr-16 text-2xl">

                    </div>
                    {/* {currentStep === 1 && */}
                        <img src="/login-img1.svg" alt="" />
                    {/* } */}
                </div>

            </div>

            <div className="flex-col flex-1 flex mx-auto md:m-20 md:justify-between relative">
                <div></div>
                <div className="mb-32 p-8 rounded-[19.095px] bg-white ">
                    {/* {currentStep === 1 && <LoginForm  />} */}
                    { <LoginForm  />}
                </div>
               <div></div>
            </div>
        </div>
    )
}

export default Login