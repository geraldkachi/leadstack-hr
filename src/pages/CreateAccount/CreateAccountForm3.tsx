import { Dispatch, SetStateAction, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>
}
const CreateAccountForm3 = ({ setCurrentStep }: Props) => {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState<string>("");
  // const otpRef = useRef<HTMLInputElement>(null);
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-xl mx-auto px-3">

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
            className="mb-1"
            type="text"
            name="password"
            placeholder="hr@tch.com"
          />
          <Input
            label="Last Name"
            ref={formInput}
            className="mb-1"
            type="text"
            name="password"
            placeholder="hr@tch.com"
          />

        </div>
        {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}

        <Input
          label="Role"
          ref={formInput}
          className="mb-1"
          type="email"
          name="password"
          placeholder="hr@tch.com"
        />
        <Input
          label="Email"
          ref={formInput}
          className="mb-1"
          type="email"
          name="password"
          placeholder="hr@tch.com"
        />
        <Input
          label="Phone Number"
          ref={formInput}
          className="mb-1"
          type="email"
          name="password"
          placeholder="LordGerald@gmail.com"
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Password"
            ref={formInput}
            className="mb-1"
            type="password"
            name="password"
            placeholder="techworldvibe"
          />
          <Input
            label="Confirm Password"
            ref={formInput}
            className="mb-1"
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
              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>

              <p>Password must be at least 8 characters long</p>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>

              <p>Must contain at least 1 uppercase letter</p>
            </div>

            <div className="flex items-center gap-2 mb-1">
              <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>

              <p>Must contain at least 1 number.</p>
            </div>
          </div>

        </div>

        <div className="!flex !items-center !justify-end">

          <Button
            type="button"
            className="!bg-[#1D8EE6] !text-white !px-8 "

            onClick={() => setCurrentStep(3)}
            title="Continue"
          />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default CreateAccountForm3;
