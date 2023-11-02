import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";

const CreateAccountForm3 = ({ setCurrentStep }: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const otpRef = useRef<HTMLInputElement>(null);
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-xl mx-auto px-3">
      <div className="text-center mb-[20px]"> </div>

      <div className="text-[] mb-12">
        <div className="text-[#0D1227] text-2xl font-bold  md:text-4xl ">
          Register your Company
        </div>
        <div className="text-[#535768] text-base leading-6 font-normal mt-2">
          This is your first step to redefine work in your organization, kindly
          Fill in the details below to get started{" "}
        </div>
      </div>

      <form action="" className="w-full">
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First Name"
            ref={formInput}
            type="text"
            name="password"
            placeholder="hr@tch.com"
          />
          <Input
            label="Last Name"
            ref={formInput}
            type="text"
            name="password"
            placeholder="hr@tch.com"
          />

        </div>
        {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}

        <Input
          label="Role"
          ref={formInput}
          type="email"
          name="password"
          placeholder="hr@tch.com"
        />
        <Input
          label="Email"
          ref={formInput}
          type="email"
          name="password"
          placeholder="hr@tch.com"
        />
        <Input
          label="Phone Number"
          ref={formInput}
          type="email"
          name="password"
          placeholder="LordGerald@gmail.com"
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Password"
            ref={formInput}
            type="password"
            name="password"
            placeholder="techworldvibe"
          />
          <Input
            label="Confirm Password"
            ref={formInput}
            type="password"
            name="password"
            placeholder="techworldvibe"
          />
        </div>

        <div className="flex items-center justify- mt-5">
          {/* <img
            src="/linkedinsvg.svg"
            alt="linkedinnsvg"
            className="cursor-pointer"
          /> */}
          <div className="block text-xs text-[#61646B]">
            <div className="flex items-center gap-2 mb-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00033 0.166748C2.78383 0.166748 0.166992 2.78358 0.166992 6.00008C0.166992 9.21658 2.78383 11.8334 6.00033 11.8334C9.21683 11.8334 11.8337 9.21658 11.8337 6.00008C11.8337 2.78358 9.21683 0.166748 6.00033 0.166748ZM4.83424 8.57433L2.66833 6.41308L3.49199 5.58708L4.83308 6.92583L7.92124 3.83767L8.74608 4.6625L4.83424 8.57433Z" fill="#1EAA79" />
              </svg>

              <p>Password must be at least 8 characters long</p>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00033 0.166748C2.78383 0.166748 0.166992 2.78358 0.166992 6.00008C0.166992 9.21658 2.78383 11.8334 6.00033 11.8334C9.21683 11.8334 11.8337 9.21658 11.8337 6.00008C11.8337 2.78358 9.21683 0.166748 6.00033 0.166748ZM4.83424 8.57433L2.66833 6.41308L3.49199 5.58708L4.83308 6.92583L7.92124 3.83767L8.74608 4.6625L4.83424 8.57433Z" fill="#1EAA79" />
              </svg>

              <p>Must contain at least 1 uppercase letter</p>
            </div>

            <div className="flex items-center gap-2 mb-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00033 0.166748C2.78383 0.166748 0.166992 2.78358 0.166992 6.00008C0.166992 9.21658 2.78383 11.8334 6.00033 11.8334C9.21683 11.8334 11.8337 9.21658 11.8337 6.00008C11.8337 2.78358 9.21683 0.166748 6.00033 0.166748ZM4.83424 8.57433L2.66833 6.41308L3.49199 5.58708L4.83308 6.92583L7.92124 3.83767L8.74608 4.6625L4.83424 8.57433Z" fill="#1EAA79" />
              </svg>

              <p>Must contain at least 1 number.</p>
            </div>
          </div>

        </div>

        <div className="!flex !items-center !justify-end">

          <Button
            type="button"
            className="!bg-[#1D8EE6] !text-white !px-8 "
            
            onClick={() => setCurrentStep(4)}
            title="Continue"
            />
            </div>
      </form>

      <div></div>
    </div>
  );
};

export default CreateAccountForm3;
