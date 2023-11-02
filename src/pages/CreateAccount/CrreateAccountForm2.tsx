import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";

const CreateAccountForm2 = ({ setCurrentStep }: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const otpRef = useRef<HTMLInputElement>(null);
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-xl mx-auto px-3">
      
      <svg className='cursor-pointer mb-4' onClick={() => setCurrentStep(3)} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0007 36.6666C29.2054 36.6666 36.6673 29.2047 36.6673 19.9999C36.6673 10.7952 29.2054 3.33325 20.0007 3.33325C10.7959 3.33325 3.33398 10.7952 3.33398 19.9999C3.33398 29.2047 10.7959 36.6666 20.0007 36.6666Z" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.0007 13.3333L13.334 19.9999L20.0007 26.6666" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M26.6673 20H13.334" stroke="#1D8EE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <div className="text-[] mb-12">
        <div className="text-[#0D1227] text-2xl font-bold  md:text-4xl ">
          Register your Company
        </div>
        <div className="text-[#535768] text-base leading-6 font-normal mt-2">
          This is your first step to redefine work in your <br /> organization, kindly
          Fill in the details below to get started{" "}
        </div>
      </div>

      <form action="" className="w-full">
        <div className="grid grid-col-1">
          <Input
            label="Address:"
            ref={formInput}
            type="text"
            name="password"
            placeholder="103, Idowu Taylor, Off Eko Hotel, Victoria Island, Lagos"
          // TrailingIcon={() => (
          //     <PasswordMe
          //         showPassword={showPassword}
          //         setShowPassword={setShowPassword}
          //     />
          // )}
          />

          {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="State"
            ref={formInput}
            type="email"
            name="password"
            placeholder="hr@tch.com"
          />
          <Input
            label="Country"
            ref={formInput}
            type="email"
            name="password"
            placeholder="09039278115"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="State"
            ref={formInput}
            type="email"
            name="password"
            placeholder="hr@tch.com"
          />
          <Input
            label="Country"
            ref={formInput}
            type="email"
            name="password"
            placeholder="09039278115"
          />
        </div>

        <div className="flex items-center justify-between">
        
            <p className="text-base mb-5">By clicking continue, you accept the <span className="text-[#1D8EE6]">Terms of Service</span> and <span className="text-[#1D8EE6]">Privacy Policy of Leadsatck</span></p>

          <Button
            type="button"
            className="!bg-[#1D8EE6] !text-white !px-8 !mb-20"
            onClick={() => {
              setCurrentStep(3)
              // navigate("/dashboard")
            }
            }
            title="Continue"
          />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default CreateAccountForm2;
