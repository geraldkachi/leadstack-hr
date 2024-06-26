/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as yup from 'yup';
import { FormEvent, useRef, useState } from "react";
import { Button, Input, PasswordMe } from "../../components"
import { useNavigate } from "react-router-dom";
// interface Props {
//     setCurrentStep?: Dispatch<SetStateAction<number>>
//   }
export const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Must contain at least 1 uppercase letter')
    .matches(/[0-9]/, 'Must contain at least 1 number')
    .required('Password is required'),
});
const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Must contain at least 1 uppercase letter')
    .matches(/[0-9]/, 'Must contain at least 1 number')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    // @ts-ignore
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    // .required('Confirm Password is required'),
});

const emailSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const formInput = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const onFinish = (e: FormEvent) => {
    e.preventDefault();

    const values: {
      email: string;
      password: string;
    } = {
      // @ts-ignore
      email: e.target['email'].value,
      // @ts-ignore
      password: e.target['password'].value
    };

    console.log(values, 'values')
    navigate('/dashboard')

    schema
      .validate(values)
      .then(() => {
    //     // @ts-ignore
        // mutation.mutate(values);
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          // toast.error(e.message);
          setError(e.message);

        }
      });
  };




  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate email using Yup schema
    emailSchema
      .validate({ email: newEmail })
      .then(() => {
        setError('');
      })
      .catch((validationError) => {
        setError(validationError.errors[0]);
      });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate password using Yup schema
    passwordSchema
      // .validate({ password: newPassword, confirmPassword })
      .validate({ password: newPassword })
      .then(() => {
        setPasswordError('');
      })
      .catch((validationError) => {
        setPasswordError(validationError.errors[0]);
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white px-4 py-8 md:p-8 rounded-[19.095px] ">
      <div className="text-[#535768] text-base md:text-[19.09px] leading-6 font-normal mt-2 mb-12">
        Enter the email address and password associated with your HR account.
      </div>

      <form action="" className="w-full" onSubmit={onFinish}>
        <div className="grid grid-col-1">
          <Input
            label="Email Address"
            ref={formInput}
            className="mb-1"
            value={email}
            type="email"
            name="email"
            placeholder="hr@techworld.com"
            helptext={error ? error : ''}
            inputType={error ? "error" : "default"}
            onChange={handleEmailChange}
          />

          {/* <Input inputClassName="border-b border-[#C5C5C5]" type="text" placeholder="Email here..." value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="" LeadingIcon={() => <></>} /> */}
        </div>

        <Input
          label="Password"
          ref={formInput}
          className="mb-1"
          value={password}
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="techworldvibe"
          inputClassName="pe-10"
          helptext={passwordError ? passwordError : ''}
          inputType={passwordError ? "error" : "default"}
          onChange={handlePasswordChange}
          TrailingIcon={() => (
            <PasswordMe
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
        />
        <div className="mt-2 text-xs">Forgot Password? <span className="text-[#1D8EE6] text-xs cursor-pointer" onClick={() => navigate('/forgot-password')}> Retrieve Here</span></div>


        <div className="flex items-center justify-between my-14">
          <div className="text-sm md:text-[14.321px]">
            Don&apos;t have an account? <span className="text-[#1D8EE6] cursor-pointer" onClick={() => navigate('/')}>Sign Up</span>
          </div>

          <Button
            type="submit"
            // disabled={!error && !passwordError}
            className="!bg-[#1D8EE6] !text-white !px-8"
            onClick={() => navigate('/dashboard')}
            title="Continue"
          />
        </div>


        <div className="text-center mt-6 text-sm">
          Having issues signing  in? <span className="text-[#1D8EE6] cursor-pointer" onClick={() => navigate('/')}>Click here</span>
        </div>
      </form>

      <div></div>
    </div>
  )
}

export default LoginForm