import { Dispatch, SetStateAction, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>
}
const CreateAccountForm = ({setCurrentStep}: Props) => {
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
        <div className="grid grid-col-1">
          <Input
            label="Organization Name"
            className="mb-1"
            ref={formInput}
            type="text"
            name="password"
            placeholder="The Creative Hemisphere"
          />

          {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
        </div>

        <Input
          label="Official Email"
          ref={formInput}
          className="mb-1"
          type="email"
          name="password"
          placeholder="hr@tch.com"
        />
        <Input
          label="Official Phone Number"
          ref={formInput}
          className="mb-1"
          type="email"
          name="password"
          placeholder="09039278115"
        />
        <Input
          label="Company website"
          ref={formInput}
          className="mb-1"
          type="email"
          name="password"
          placeholder="LordGerald@gmail.com"
        />

        <div className="flex items-center justify-between mt-3">
          <img
            src="/linkedinsvg.svg"
            alt="linkedinnsvg"
            className="cursor-pointer"
          />

          <Button
            type="button"
            className="!bg-[rgb(29,142,230)] !text-white !px-8"
            onClick={() => {
                setCurrentStep(1)
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
