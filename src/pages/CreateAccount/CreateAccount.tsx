import { useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
// import Stepper from "./Stepper";

import CreateAccountForm2 from "./CrreateAccountForm2";
import CreateAccountForm3 from "./CreateAccountForm3";
import EnterVerificationCode from "./EnterVerificationCode";
import EnterVerificationCodeEmail from "./EnterVerificationCodeEmail";

const CreateAccount = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const noOfSteps = 5
  const arrayOfSteps = [...Array(noOfSteps)];
  const completedSteps = currentStep;

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="col-span-1 hidden md:block p-10 place-content-center">
        {/* <Stepper {...{ currentStep, setCurrentStep }} /> */}
        <div className="relative col-span-2 place-content-center p-0 bg-[url(/signupimg.svg)] bg-contain bg-no-repeat w-full text-white h-full">
          <img src="/reg-logo.svg" className="top-[20%] left-[10%] pt-10 pl-8" alt="" />
          <div className="absolute bottom-36 p-5 pr-16 text-2xl w-full">
            {currentStep === 1 &&
              "Great employees are not born, they are made... by HR!"}
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
            {currentStep === 4 && (
              <p>
                Start managing your HR needs with ease. <br />
                Create your account now.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="col-span- flex-col flex-1 p-3 flex justify-between relative">
        <div className="text-black flex flex-row items-center justify-end">
          <div className="stepper-div flex items-center my-3">
            {arrayOfSteps.map((_, index) => {
              const isStepCompleted = index <= currentStep;
              return (
                <div
                  key={index}
                  className={`step h-1 w-10 mr-2 ${isStepCompleted ? 'step--completed text-blue-600' : ''}`}
                  {...(isStepCompleted
                    ? { onClick: () => handleStepClick(index) }
                    : {})}
                ></div>
              );
            })}
          </div>
          <p className="stepper-count  text-xs">
            Step <span className='completed-count text-red-500'>{completedSteps}</span> of {noOfSteps}
          </p>
        </div>

        <div className="md:mx-28">
          {currentStep === 1 && <CreateAccountForm {...{ setCurrentStep }} />}
          {currentStep === 2 && <CreateAccountForm2 {...{ setCurrentStep }} />}
          {currentStep === 3 && <CreateAccountForm3 {...{ setCurrentStep }} />}
          {currentStep === 4 && <EnterVerificationCode {...{ setCurrentStep }} />}
          {currentStep === 5 && <EnterVerificationCodeEmail {...{ setCurrentStep }} />}
        </div>

        <div className="flex items-end justify-end">
          {currentStep === 4 &&
            <div className="hidden md:flex items-center text-center justify-between ml-52 mr-32">
              <div className="relative bg-[url('/bglightbulb.svg')] bg-no-repeat bg-cover p-10 text-xs text-white text-centers mt-4 rounded-2xl w-auto ml-20">
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
