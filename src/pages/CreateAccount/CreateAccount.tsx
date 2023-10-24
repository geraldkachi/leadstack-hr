import { useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
import Stepper from "./Stepper";

import CreateAccountForm2 from "./CrreateAccountForm2";
import CreateAccountForm3 from "./CreateAccountForm3";

const CreateAccount = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="grid md:grid-cols-5 h-screen">
      <div className="col-span-2 hidden md:block p-10 place-content-center">
        {/* <Stepper {...{ currentStep, setCurrentStep }} /> */}
        <div className="relative col-span-2 place-content-center p-0 bg-[url(/signupimg.svg)] bg-contain bg-no-repeat w-full text-white h-full">
          <div className="absolute bottom-36 p-5 pr-16 text-2xl">
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
          </div>
        </div>
      </div>

      <div className="col-span-3 flex-col flex-1 p-3 flex justify-between relative">
        <div className="text-black flex items-center justify-end">bars</div>
        <div>
          {currentStep === 1 && <CreateAccountForm {...{ setCurrentStep }} />}
          {currentStep === 2 && <CreateAccountForm2 {...{ setCurrentStep }} />}
          {currentStep === 3 && <CreateAccountForm3 {...{ setCurrentStep }} />}
          {currentStep === 4 && <CreateAccountForm />}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreateAccount;
