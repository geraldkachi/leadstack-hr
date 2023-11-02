import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";

const CreateAccountForm = ({setCurrentStep}: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const otpRef = useRef<HTMLInputElement>(null);
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-xl mx-auto px-3">
      <div className="text-center mb-[28px]"> </div>

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
        <div className="grid grid-col-1">
          <Input
            label="Organization Name"
            ref={formInput}
            type="text"
            name="password"
            placeholder="The Creative Hemisphere"
            // TrailingIcon={() => (
            //     <PasswordMe
            //         showPassword={showPassword}
            //         setShowPassword={setShowPassword}
            //     />
            // )}
          />

          {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
        </div>

        <Input
          label="Official Email"
          ref={formInput}
          type="email"
          name="password"
          placeholder="hr@tch.com"
        />
        <Input
          label="Official Phone Number"
          ref={formInput}
          type="email"
          name="password"
          placeholder="09039278115"
        />
        <Input
          label="Company website"
          ref={formInput}
          type="email"
          name="password"
          placeholder="LordGerald@gmail.com"
        />

        <div className="flex items-center justify-between">
          <img
            src="/linkedinsvg.svg"
            alt="linkedinnsvg"
            className="cursor-pointer"
          />

          <Button
            type="button"
            className="!bg-[#1D8EE6] !text-white !px-8"
            onClick={() => {
                setCurrentStep(2)
            }
        }
            title="Next"
          />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default CreateAccountForm;
