import { useRef,  Dispatch, SetStateAction,} from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>
}
const CreateAccountForm2 = ({ setCurrentStep }: Props) => {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState<string>("");
  // const otpRef = useRef<HTMLInputElement>(null);
  const formInput = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full max-w-xl mx-auto px-3">
      <img src="/back-icon.svg" alt='' className='cursor-pointer mb-4' onClick={() => setCurrentStep(1)} />

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
