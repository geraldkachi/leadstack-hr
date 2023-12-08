import { useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
// import Stepper from "./Stepper";

import CreateAccountForm2 from "./CrreateAccountForm2";
import CreateAccountForm3 from "./CreateAccountForm3";
import EnterVerificationCode from "./EnterVerificationCode";

const CreateAccount = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const noOfSteps = 4
  const arrayOfSteps: number[] = [...Array(noOfSteps)];
  const completedSteps = currentStep + 1;

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="col-span-1 hidden md:block p-10 place-content-center">
        {/* <Stepper {...{ currentStep, setCurrentStep }} /> */}
        <div className="relative p-0 bg-[url(/signupimg.svg)] bg-contain bg-no-repeat w-full text-white h-full ">
          <img src="/reg-logo.svg" className="top-[20%] left-[10%] pt-10 pl-8" alt="" />
          <div className="absolute bottom-36 p-5 pr-16 text-2xl w-full">
            {currentStep === 0 &&
              "Great employees are not born, they are made... by HR!"}
            {currentStep === 1 && (
              <p>
                Start managing your HR needs with ease. <br />
                Create your account now.
              </p>
            )}
            {currentStep === 2 && (
              <p>
                Start managing your HR needs with ease. <br />
                Create your account now.
              </p>
            )}
            {currentStep === 3 && (
              <p>
                Start managing your HR needs with ease. <br />
                Create your account now.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="col-span- flex-col flex-1 p-3 flex justify-between relative">
        <div className="text-[#94A0B4] flex flex-row items-center justify-end mx-2 md:mx-10">
          <div className="stepper-div flex items-center my-3">
            {arrayOfSteps.map((_, index) => {
              const isStepCompleted = index <= currentStep;
              return (
                <div
                  key={index}
                  className={`step rounded-sm h-1 w-10 mr-2 bg-[#DEDFEC]  ${isStepCompleted && 'step--completed cursor-pointer !bg-[#1D8EE6]'}`}
                  {...(isStepCompleted
                    ? { onClick: () => handleStepClick(index) }
                    : {})}
                ></div>
              );
            })}
          </div>
          <p className="stepper-count text-[#94A0B4] text-xs">
            Step <span className={`completed-count text-[#272848]`}>{completedSteps}</span> of {noOfSteps}
          </p>
        </div>

        <div className="md:mx-28">
          {currentStep === 0 && <CreateAccountForm {...{ setCurrentStep }} />}
          {currentStep === 1 && <CreateAccountForm2 {...{ setCurrentStep }} />}
          {currentStep === 2 && <CreateAccountForm3 {...{ setCurrentStep }} />}
          {currentStep === 3 && <EnterVerificationCode {...{ setCurrentStep }} />}
        </div>

        <div className="flex items-end justify-end w-max h-max">
          {currentStep === 4 &&
            <div className="hidden md:flex items-center text-center justify-between ml-52 mr-32">
              <div className="relative bg-[url('/bglightbulb.svg')] bg-no-repeat bg-cover p-10 text-xs text-white text-centers mt-4 rounded-2xl w-max ml-20 overflow-hidden">
                <img src="/lightbulb.svg" className='absolute -top-3 left-1 ' alt="" />
                <img src="/cancel-lightbulb.svg" className='absolute top-2 right-1 p-1' alt="" />
                OTPs have a limited validity period. Enter the OTP promptly to ensure a smooth verification process. Delayed entries may result in expiration and require generating a new OTP.
              </div>
            </div>}

          {currentStep === 5 &&
            <div className="hidden md:flex items-center text-center justify-between mr-32">
              <img src="/verify-bulb.svg" alt="" />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
