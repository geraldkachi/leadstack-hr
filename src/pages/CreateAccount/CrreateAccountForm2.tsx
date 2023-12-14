import { Dispatch, SetStateAction, useState, } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { Checkbox } from "antd";
import { useAuth } from "../../hooks";

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>
}
const CreateAccountForm2 = ({ setCurrentStep }: Props) => {
  const [check, setCheck] = useState(false);
  const createAccount = useAuth(state => state.createAccount)
  const address = useAuth(state => state.createAccount.address)
  const state = useAuth(state => state.createAccount.state)
  const industry = useAuth(state => state.createAccount.industry)
  const country = useAuth(state => state.createAccount.country)
  const employeeSize = useAuth(state => state.createAccount.employeeSize)

  const checkDisabled = !address || !state || !country || !industry || !employeeSize || !check

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        address: String(e.target.value)
      }
    })
  };

  const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        state: String(e.target.value)
      }
    })
  };
 
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        country: String(e.target.value)
      }
    })
  };
  const handleIndustry = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        industry: String(e.target.value)
      }
    })
  };
 
  const handleEmployeeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        employeeSize: String(e.target.value)
      }
    })
  };
 

  const nextStep = () => {
    if(address || state || country || industry || employeeSize) {
      setCurrentStep(2)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <img src="/back-icon.svg" alt='' className='cursor-pointer mb-4' onClick={() => setCurrentStep(0)} />

      <div className="text-[] mb-12">
        <div className="text-[#0D1227] text-2xl font-bold  md:text-4xl ">
          Register your Company
        </div>
        <div className="text-[#535768] text-sm md:text-base leading-6 font-normal mt-2">
          This is your first step to redefine work in your <br /> organization, kindly
          Fill in the details below to get started{" "}
        </div>
      </div>

      <form action="" className="w-full">
        <div className="grid grid-col-1">
          <Input
            label="Address:"
            value={address}
            className="mb-1"
            type="text"
            onChange={handleAddress}
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
            value={state}
            className="mb-1"
            type="text"
            onChange={handleState}
            name="password"
            placeholder="State"
          />
          <Input
            label="Country"
            value={country}
            className="mb-1"
            type="text"
            onChange={handleCountry}
            name="country"
            placeholder="country"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* <Input
            label="State"
            className="mb-1"
            type="text"
            name="password"
            placeholder="hr@tch.com"
          />
          <Input
            label="Country"
            className="mb-1"
            type="text"
            name="password"
            placeholder="09039278115"
          /> */}
          <Input
            label="Industry"
            value={industry}
            className="mb-1"
            type="text"
            onChange={handleIndustry}
            name="Industry"
            placeholder="industry"
          />
          <Input
            label="Employee Size"
            value={employeeSize}
            className="mb-1"
            type="text"
            name="Employee Size"
            onChange={handleEmployeeSize}
            placeholder="Employee Size"
          />
        </div>

        <div className="flex items-start justify-between gap-3 mt-5">
          <Checkbox value={check} onChange={e => setCheck(e.target.checked)} />
 
          <p className="text-xs md:text-sm leading-6">By clicking continue, you accept the <span className="text-[#1D8EE6]">Terms of Service</span> and <span className="text-[#1D8EE6] whitespace-nowrap">Privacy Policy of Leadsatck</span></p>
        </div>
        <div className="flex items-end justify-end gap-3 mt-5">
          <Button
            type="button"
            disabled={checkDisabled}
            className=" !text-white !px-8"
            onClick={nextStep}
            title="Continue"
          />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default CreateAccountForm2;
