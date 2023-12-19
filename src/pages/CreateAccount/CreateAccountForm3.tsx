import * as yup from 'yup';
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Input, PasswordMe } from "../../components";
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Must contain at least 1 uppercase letter')
    .matches(/[0-9]/, 'Must contain at least 1 number')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});


const passwordSchema1Uppercase = yup.object().shape({
  password: yup
    .string()
    .matches(/[A-Z]/, 'Must contain at least 1 uppercase letter')
    // .matches(/[0-9]/, 'Must contain at least 1 number')
    .required('Password is required'),
    confirmPassword: yup
    .string()
    // .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
const passwordSchema1Number = yup.object().shape({
  password: yup
    .string()
    .matches(/[0-9]/, 'Must contain at least 1 number')
    .required('Password is required'),
    confirmPassword: yup
    .string()
    // .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Must contain at least 1 uppercase letter')
    .matches(/[0-9]/, 'Must contain at least 1 number')
    .required('Password is required'),
});

const emailSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>
}
const CreateAccountForm3 = ({ setCurrentStep }: Props) => {
  const navigate = useNavigate();
  const createAccount = useAuth(state => state.createAccount)
  const firstName = useAuth(state => state.createAccount.firstName)
  const lastName = useAuth(state => state.createAccount.lastName)
  const role = useAuth(state => state.createAccount.role)
  const email = useAuth(state => state.createAccount.email)
  const phoneNumber = useAuth(state => state.createAccount.phoneNumber)
  const password = useAuth(state => state.createAccount.password)
  const confirmPassword = useAuth(state => state.createAccount.confirmPassword)

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [password1Uppercase, setpassword1Uppercase] = useState<boolean>(false);
  const [password1UppercaseConfirm, setpassword1UppercaseConfirm] = useState<boolean>(false);
  const [password1NumberConfirm, setpassword1NumberConfirm] = useState<boolean>(false);
  const [password1Number, setpassword1Number] = useState<boolean>(false);

  const [passwordIcon, setPasswordIcon] = useState('');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('');



  const checkDisabled = !firstName || !lastName || !role || !email || !phoneNumber || !password || !confirmPassword || (password !== confirmPassword) || passwordIcon || confirmPasswordIcon

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        firstName: String(e.target.value)
      }
    })
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        lastName: String(e.target.value)
      }
    })
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        role: String(e.target.value)
      }
    })
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        email: String(e.target.value)
      }
    })
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      createAccount: {
        ...createAccount,
        phoneNumber: String(e.target.value)
      }
    })
  };

  const handlePasswordChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    useAuth.setState({
      createAccount: {
        ...createAccount,
        password: String(newPassword)
      }
    })
    try {
      await passwordSchema1Uppercase.validate({ password: newPassword, confirmPassword }, { abortEarly: false });
      setpassword1Uppercase(true)
      setpassword1UppercaseConfirm(true)
    } catch (validationError) {
      setpassword1Uppercase(false)
      setpassword1UppercaseConfirm(false)
    }
      // number
      try {
        await passwordSchema1Number.validate({ password: newPassword, confirmPassword }, { abortEarly: false });
        setpassword1Number(true)
        setpassword1NumberConfirm(true)
      } catch (validationError) {
        setpassword1Number(false)
        setpassword1NumberConfirm(false)
      }
    try {
      await passwordSchema.validate({ password: newPassword, confirmPassword }, { abortEarly: false });
      // If validation succeeds, set icon color to green
      setPasswordIcon('');
    } catch (validationError) {
      // If validation fails, set icon color to red
      setPasswordIcon(validationError.errors[0]);
    }

  };

  const handlePasswordConfirmChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    useAuth.setState({
      createAccount: {
        ...createAccount,
        confirmPassword: String(newConfirmPassword)
      }
    })

    try {
      await passwordSchema1Uppercase.validate({ password: newConfirmPassword, confirmPassword }, { abortEarly: false });
      setpassword1Uppercase(true)
      setpassword1UppercaseConfirm(true)
    } catch (validationError) {
      setpassword1Uppercase(false)
      setpassword1UppercaseConfirm(false)
    }
    // number
    try {
      await passwordSchema1Number.validate({ password: newConfirmPassword, confirmPassword }, { abortEarly: false });
      setpassword1Number(true)
      setpassword1NumberConfirm(true)
    } catch (validationError) {
      setpassword1Number(false)
      setpassword1NumberConfirm(false)
    }
    try {
      await passwordSchema.validate({ password: newConfirmPassword, confirmPassword }, { abortEarly: false });
      // If validation succeeds, set icon color to green
      setConfirmPasswordIcon('');
    } catch (validationError) {
      // If validation fails, set icon color to red
      setConfirmPasswordIcon(validationError.errors[0]);
    }
  };

  const mutation = useMutation("custmerLogin", {
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (e: unknown) => {
      if (e instanceof Error) {
        // toast.error(e.message);
      }
    }
  });

  const formInput = useRef<HTMLInputElement>(null);

  const onFinish = (e: FormEvent) => {
    e.preventDefault();

    const values: {
      phoneNumber: string;
      password: string;
    } = {
      phoneNumber,
      password
      // phoneNumber: e.target['phoneNumber'].value,
      // password: e.target['password'].value
    };

    schema
      .validate(values)
      .then(() => {
        // @ts-ignore
        mutation.mutate(values);
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          // toast.error(e.message);
        }
      });
  };

  const nextStep = () => {
    if (firstName || lastName || role || email || phoneNumber || password || confirmPassword) {
      setCurrentStep(3)
    }
  }

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

      <form action="" className="w-full" onSubmit={onFinish}>
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="First Name"
            ref={formInput}
            className="mb-1"
            value={firstName}
            type="text"
            onChange={handleFirstName}
            name="first name"
            placeholder="First Name"
          />
          <Input
            label="Last Name"
            ref={formInput}
            value={lastName}
            className="mb-1"
            type="text"
            onChange={handleLastName}
            name="last name"
            placeholder="hr@tch.com"
          />

        </div>
        {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}

        <Input
          label="Role"
          ref={formInput}
          className="mb-1"
          value={role}
          type="text"
          name="role"
          onChange={handleRoleChange}
          placeholder="hr@tch.com"
        />
        <Input
          label="Email"
          ref={formInput}
          value={email}
          className="mb-1"
          type="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="hr@tch.com"
        />
        <Input
          label="Phone Number"
          ref={formInput}
          value={phoneNumber}
          className="mb-1"
          type="text"
          onChange={handlePhoneChange}
          name="phone number"
          placeholder="090********"
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Password"
            ref={formInput}
            className="mb-1"
            value={password}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder=""
            helptext={passwordIcon ? passwordIcon : ''}
            inputType={passwordIcon ? "error" : "default"}
            onChange={handlePasswordChange}
            TrailingIcon={() => (
              <PasswordMe
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}
          />
          <Input
            label="Confirm Password"
            ref={formInput}
            className="mb-1"
            value={confirmPassword}
            type={showPasswordConfirm ? "text" : "password"}
            name="password"
            placeholder=""
            helptext={confirmPasswordIcon ? confirmPasswordIcon : ''}
            inputType={confirmPasswordIcon ? "error" : "default"}
            onChange={handlePasswordConfirmChange}
            TrailingIcon={() => (
              <PasswordMe
                showPassword={showPasswordConfirm}
                setShowPassword={setShowPasswordConfirm}
              />
            )}
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
              {/* {(password !== confirmPassword || (password.length < 8 && confirmPassword.length < 8) || (password.length == 0 && confirmPassword.length == 0)) ? */}
              {((password.length < 8 || confirmPassword.length < 8)) ?
                <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                :
                <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              }

              <p>Password must be at least 8 characters long</p>
            </div>
            <div className="flex items-center gap-2 mb-1">

              {/* {!password1UppercaseConfirm ===   true && "yes"} */}
              {(password1Uppercase && password1UppercaseConfirm)  ?
                 <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
               </svg>
                :
                <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              }

              <p>Must contain at least 1 uppercase letter</p>
            </div>

            <div className="flex items-center gap-2 mb-1">
              {password1Number && password1NumberConfirm ?
                <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
                :
                <svg className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              }

              <p>Must contain at least 1 number.</p>
            </div>
          </div>

        </div>

        <div className="!flex !items-center !justify-end mt-5 mb-10 md:mb-[unset]">

          <Button
            type="button"
            className="!px-8 "
            disabled={checkDisabled}
            onClick={nextStep}
            title="Continue"
          />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default CreateAccountForm3;
