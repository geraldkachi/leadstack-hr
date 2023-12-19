import { Dispatch, SetStateAction } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { useAuth } from "../../hooks";

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>
}
const CreateAccountForm = ({setCurrentStep}: Props) => {
  // const navigate = useNavigate();
  const createAccount = useAuth(state => state.createAccount)
  const organizationName = useAuth(state => state.createAccount.organizationName)
  const officialEmail = useAuth(state => state.createAccount.officialEmail)
  const officialPhoneNumber = useAuth(state => state.createAccount.officialPhoneNumber)
  const companyWebsite = useAuth(state => state.createAccount.companyWebsite)

  const checkDisabled = !organizationName || !officialEmail || !officialPhoneNumber || !companyWebsite

  const handleOrganizationName = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        organizationName: String(e.target.value)
      }
    })
  };

  const handleOfficialEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        officialEmail: String(e.target.value)
      }
    })
  };

  const handleOfficialPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        officialPhoneNumber: Number(e.target.value)
      }
    })
  };

  const handleCompanyWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        companyWebsite: String(e.target.value)
      }
    })
  };

  return (
    <div className="w-full max-w-xl mx-auto">

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
            value={organizationName}
            type="text"
            name="companyName"
            onChange={handleOrganizationName}
            // sOrganization Name"
            placeholder="The Creative Hemisphere"
          />

          {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
        </div>

        <Input
          label="Official Email"
          className="mb-1"
          value={officialEmail}
          type="email"
          name="email"
          onChange={handleOfficialEmail}
          // sOfficial email"
          placeholder="hr@tch.com"
        />
        <Input
          label="Official Phone Number"
          className="mb-1"
          value={officialPhoneNumber}
          type="text"
          name="phone"
          onChange={handleOfficialPhoneNumber}
          // sOfficial phone"
          placeholder="09039278115"
        />
        <Input
          label="Company website"
          className="mb-1"
          value={companyWebsite}
          type="url"
          name="url"
          onChange={handleCompanyWebsite}
          // scompany Website"
          placeholder="LordGerald@gmail.com"
        />

        <div className="flex items-center justify-between mt-8">
          <img
            src="/linkedinsvg.svg"
            alt="linkedinnsvg"
            className="cursor-pointer"
          />

          <Button
            type="button"
            disabled={checkDisabled}
            className="!text-white !px-16"
            onClick={() => {
              if(organizationName || officialEmail || officialPhoneNumber || companyWebsite) {
                setCurrentStep(1)
              } else {
                setCurrentStep(0)
              }
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
