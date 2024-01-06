import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

const OtpForm = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('');
  const inputStyle = {
    width: "60px",
    height: "60px",
    border: `1px solid #DEDFEC`,
    borderRadius: "4px",
    fontSize: "16px",
    marginRight: "20px",
  };

  return (
    <div className="w-full max-w-xl mx-auto px-3">
      <div className="text-center mb-[28px]"> </div>

      <form action="" className="w-full">
        <div className="grid grid-col-1">
          <p className="text-[36px] my-2 text-[#0A2E65] whitespace-nowrap font-extrabold">Enter OTP</p>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            containerStyle={""}
            inputStyle={inputStyle}
            renderInput={(props) => <input {...props} />}
            inputType='password'
          />

          <div className="mt-2 text-xs">Didn&apos;t receive the Code? <span className="text-[#1D8EE6] text-xs cursor-pointer" onClick={() => "navigate('/forgot-password')"}> Resend Code</span></div>

        </div>



        <div className="flex items-center justify-end mt-10 gap-2">

          <Button
            type="button"
            className="!bg-[#1D8EE6] !text-white !px-8"
            onClick={() => navigate('/dashboard')}
            title="Verify"
          />
        </div>


        {/* <div className="text-center mt-6">
          Still having issues signing  in?<span className="text-[#1D8EE6] cursor-pointer" onClick={() => navigate('/')}>Click here</span>
        </div> */}
      </form>

      <div className="hidden md:flex items-center text-center justify-between mt-16">
        <div className="relative bg-[url('/bglightbulb.svg')] bg-no-repeat bg-cover p-10 text-xs text-white text-centers mt-4 rounded-2xl w-auto ml-20">
          <img src="/lightbulb.svg" className='absolute -top-3 left-1 ' alt="" />
          <img src="/cancel-lightbulb.svg" className='absolute top-2 right-1 p-1' alt="" />
          OTPs have a limited validity period. Enter the OTP promptly to ensure a smooth verification process. Delayed entries may result in expiration and require generating a new OTP.
        </div>
      </div>
    </div>
  )
}

export default OtpForm
