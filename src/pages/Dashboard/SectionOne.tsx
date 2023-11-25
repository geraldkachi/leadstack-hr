import { Checkbox } from 'antd';
import { Dispatch, SetStateAction } from "react"

import DarkCard from "./DarkCard"
import WhiteCard from "./WhiteCard"
import { Button } from "../../components"

interface Props {
  setState: Dispatch<SetStateAction<number>>
}
const SectionOne = ({ setState }: Props) => {
  return (
    <>
      <div className="text-[27px] font-bold text-[#091E42] border-b border-gray-200 pb-3">Customize Experience</div>

      <div className="flex flex-col items-center justify-start py-2 w-max cursor-pointer">
        <span className="py-2 text-base leading-6 font-medium">Upload Logo</span>
        <div className="border border-dashed border-[#DEDFEC] font-medium text-[46.29px] text-center p-4 rounded-md">TH</div>
      </div>

      <div className="flex items-center gap-2 py-2">
        <Checkbox defaultChecked />

        <p className='text-[#60708F] text-sm font-normal'>I dona&apos;t have a logo image for now.</p>
      </div>

        <div className='my-2'>
          <div className="text-lg text-[#0D1227]">Default Theme</div>
          <div className="text-[#98A1B0] text-sm font-normal">Customize your UI theme </div>
        </div>
      <div className='flex items-center gap-x-3'>
        <div>
          <WhiteCard />
        </div>
        <div>
          <DarkCard />
        </div>
      </div>

      <div className="w-full p-1 bg-white sm:p-4">

        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            <li className="py-3 sm:py-3">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-2">
                  <p className="text-sm md:text-lg font-semibold text-[#0D1227] truncate">
                    Accent Color
                  </p>
                  <p className="text-xs md:text-sm font-normal text-[#535768] truncate">
                    Choose your accent color
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  {/* <svg width="184" height="24" viewBox="0 0 184 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#7C8091" />
                    <path d="M7.875 12H16.125" stroke="#7C8091" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 7.875V16.125" stroke="#7C8091" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="44" cy="12" r="11.5" stroke="#1E63EC" />
                    <circle cx="44" cy="12" r="9" fill="#1E63EC" />
                    <circle cx="76" cy="12" r="12" fill="#16AF54" />
                    <circle cx="108" cy="12" r="12" fill="#D20000" />
                    <circle cx="140" cy="12" r="12" fill="#D36500" />
                    <circle cx="172" cy="12" r="12" fill="#8431D9" />
                  </svg> */}

                </div>
              </div>
            </li>

            <li className="pt-3 pb-0 sm:py-3">
              <div className="flex items-center ">

                <div className="flex-1 min-w-0 ms-2">
                  <p className="text-sm md:text-lg font-semibold text-[#0D1227] truncate">
                    Header StyleÍ
                  </p>
                  <p className="text-xs md:text-sm font-normal text-[#535768] truncate">
                    Choose your font style
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold">
                  <div className="h-[18px] w-[18px] bg-[#1E63EC] rounded-full"></div>
                  <div className="h-[18px] w-[18px] bg-[#16AF54] rounded-full"></div>
                  <div className="h-[18px] w-[18px] bg-red-600 rounded-full"></div>
                  <div className="h-[18px] w-[18px] bg-[] rounded-full"></div>

                  {/* <svg width="216" height="24" viewBox="0 0 216 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11.5" stroke="#1E63EC" />
                    <circle cx="12" cy="12" r="8.5" fill="white" stroke="#DEDFEC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37 2C35.3431 2 34 3.34315 34 5V19C34 20.6569 35.3431 22 37 22H41C42.6569 22 44 20.6569 44 19V5C44 3.34315 42.6569 2 41 2H37ZM39 19C39.5523 19 40 18.5523 40 18C40 17.4477 39.5523 17 39 17C38.4477 17 38 17.4477 38 18C38 18.5523 38.4477 19 39 19Z" fill="#2A2D7C" />
                    <path opacity="0.3" d="M45.5 15.6602C45.5 15.997 45.8908 16.183 46.1522 15.9707L52.0347 11.1923C53.2332 10.0256 53.2461 8.10407 52.0634 6.92135L49.2219 4.07985C48.4882 3.34614 47.4672 3.07098 46.5181 3.25792C45.8451 3.3905 45.5 4.07909 45.5 4.76512V15.6602Z" fill="#2A2D7C" />
                    <path opacity="0.3" d="M45.8695 18.1324C45.6357 18.3223 45.5 18.6074 45.5 18.9086V21.0001C45.5 21.5524 45.9477 22.0001 46.5 22.0001H51C52.6569 22.0001 54 20.657 54 19.0002V14.2027C54 13.4251 53.597 12.7415 52.9884 12.3496L45.8695 18.1324Z" fill="#2A2D7C" />
                    <circle cx="76" cy="12" r="11.5" fill="#1E63EC" stroke="#1E63EC" />
                    <circle cx="76" cy="12" r="9" fill="#1E63EC" />
                    <circle opacity="0.3" cx="108" cy="12" r="12" fill="#16AF54" />
                    <circle opacity="0.3" cx="140" cy="12" r="12" fill="#D20000" />
                    <circle opacity="0.3" cx="172" cy="12" r="12" fill="#D36500" />
                    <circle opacity="0.3" cx="204" cy="12" r="12" fill="#8431D9" />
                  </svg> */}

                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-3">
              <div className="flex items-center ">
                {/* <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" />
        </div> */}
                <div className="flex-1 min-w-0 ms-2">
                  <p className="text-sm md:text-lg font-semibold text-[#0D1227] truncate">
                    Font Style
                  </p>
                  <p className="text-xs md:text-sm font-normal text-[#535768] truncate">
                    Choose your font style
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  <svg width="117" height="30" viewBox="0 0 117 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1 22.5L8.76 18.38H3.66L2.32 22.5H0L5.02 8.16H7.42L12.42 22.5H10.1ZM6.86 12.48C6.82 12.32 6.75333 12.1 6.66 11.82C6.58 11.5267 6.5 11.2267 6.42 10.92C6.34 10.6 6.26667 10.3333 6.2 10.12C6.14667 10.4133 6.08 10.7067 6 11C5.92 11.2933 5.84667 11.5667 5.78 11.82C5.71333 12.0733 5.65333 12.2933 5.6 12.48L4.28 16.5H8.18L6.86 12.48ZM17.4614 11.52C18.1147 11.52 18.6947 11.6533 19.2014 11.92C19.7214 12.1867 20.1614 12.5933 20.5214 13.14H20.6014L20.8414 11.72H22.6214V22.64C22.6214 23.6533 22.4481 24.5067 22.1014 25.2C21.7547 25.8933 21.2281 26.4133 20.5214 26.76C19.8147 27.12 18.9214 27.3 17.8414 27.3C17.0947 27.3 16.4147 27.2467 15.8014 27.14C15.2014 27.0333 14.6414 26.8667 14.1214 26.64V24.78C14.4681 24.9667 14.8414 25.12 15.2414 25.24C15.6414 25.3733 16.0614 25.4667 16.5014 25.52C16.9547 25.5867 17.4214 25.62 17.9014 25.62C18.7281 25.62 19.3614 25.3667 19.8014 24.86C20.2547 24.3667 20.4814 23.6667 20.4814 22.76V22.4C20.4814 22.2267 20.4881 22 20.5014 21.72C20.5147 21.4267 20.5281 21.2133 20.5414 21.08H20.4614C20.1281 21.64 19.7081 22.0533 19.2014 22.32C18.7081 22.5733 18.1214 22.7 17.4414 22.7C16.1881 22.7 15.2014 22.2133 14.4814 21.24C13.7614 20.2533 13.4014 18.8867 13.4014 17.14C13.4014 15.9667 13.5614 14.9667 13.8814 14.14C14.2147 13.3 14.6814 12.6533 15.2814 12.2C15.8947 11.7467 16.6214 11.52 17.4614 11.52ZM17.9814 13.28C17.4747 13.28 17.0481 13.4333 16.7014 13.74C16.3547 14.0333 16.0881 14.4667 15.9014 15.04C15.7281 15.6133 15.6414 16.32 15.6414 17.16C15.6414 18.4133 15.8414 19.3667 16.2414 20.02C16.6414 20.6733 17.2281 21 18.0014 21C18.4547 21 18.8414 20.9333 19.1614 20.8C19.4814 20.6667 19.7414 20.46 19.9414 20.18C20.1547 19.9 20.3081 19.5467 20.4014 19.12C20.5081 18.68 20.5614 18.1533 20.5614 17.54V17.14C20.5614 16.22 20.4681 15.48 20.2814 14.92C20.1081 14.3467 19.8281 13.9333 19.4414 13.68C19.0681 13.4133 18.5814 13.28 17.9814 13.28Z" fill="#1D8EE6" />
                    <path opacity="0.3" d="M53.88 19.16H48.06L47.06 22H44.68L49.66 8.08H52.3L57.28 22H54.88L53.88 19.16ZM53.24 17.3L50.98 10.84L48.7 17.3H53.24ZM63.8853 10.8C64.7386 10.8 65.492 10.9733 66.1453 11.32C66.812 11.6533 67.332 12.0733 67.7053 12.58V10.98H70.0053V22.18C70.0053 23.1933 69.792 24.0933 69.3653 24.88C68.9386 25.68 68.3186 26.3067 67.5053 26.76C66.7053 27.2133 65.7453 27.44 64.6253 27.44C63.132 27.44 61.892 27.0867 60.9053 26.38C59.9186 25.6867 59.3586 24.74 59.2253 23.54H61.4853C61.6586 24.1133 62.0253 24.5733 62.5853 24.92C63.1586 25.28 63.8386 25.46 64.6253 25.46C65.5453 25.46 66.2853 25.18 66.8453 24.62C67.4186 24.06 67.7053 23.2467 67.7053 22.18V20.34C67.3186 20.86 66.792 21.3 66.1253 21.66C65.472 22.0067 64.7253 22.18 63.8853 22.18C62.9253 22.18 62.0453 21.94 61.2453 21.46C60.4586 20.9667 59.832 20.2867 59.3653 19.42C58.912 18.54 58.6853 17.5467 58.6853 16.44C58.6853 15.3333 58.912 14.3533 59.3653 13.5C59.832 12.6467 60.4586 11.9867 61.2453 11.52C62.0453 11.04 62.9253 10.8 63.8853 10.8ZM67.7053 16.48C67.7053 15.72 67.5453 15.06 67.2253 14.5C66.9186 13.94 66.512 13.5133 66.0053 13.22C65.4986 12.9267 64.952 12.78 64.3653 12.78C63.7786 12.78 63.232 12.9267 62.7253 13.22C62.2186 13.5 61.8053 13.92 61.4853 14.48C61.1786 15.0267 61.0253 15.68 61.0253 16.44C61.0253 17.2 61.1786 17.8667 61.4853 18.44C61.8053 19.0133 62.2186 19.4533 62.7253 19.76C63.2453 20.0533 63.792 20.2 64.3653 20.2C64.952 20.2 65.4986 20.0533 66.0053 19.76C66.512 19.4667 66.9186 19.04 67.2253 18.48C67.5453 17.9067 67.7053 17.24 67.7053 16.48Z" fill="black" />
                    <path opacity="0.3" d="M90.82 19.98L96.08 5.96H98.46L103.92 19.98H101.86L99.9 15H94.72L92.9 19.98H90.82ZM99.52 13.44L97.52 8.62C97.36 8.26 97.44 7.76 97.44 7.36H97.08C97.08 7.76 97.16 8.26 97.02 8.62L95.02 13.44H99.52ZM112.971 18.98C112.211 19.82 111.131 20.32 109.771 20.32C106.851 20.32 104.791 17.92 104.791 14.94C104.791 11.96 106.851 9.7 109.771 9.7C111.111 9.7 112.191 10.16 112.931 10.94C113.351 11.38 113.491 12.18 113.711 12.76L114.031 12.64C113.831 12.06 113.511 11.36 113.471 10.76L113.431 10H115.191V20.28C115.171 23 113.871 25 110.151 25C107.131 25 105.371 23.54 105.271 21.14H107.071C107.151 22.94 108.911 23.34 109.951 23.34C112.491 23.34 113.431 22.08 113.431 20.2C113.431 19.8 113.431 19.48 113.451 19.16C113.491 18.56 113.831 17.86 114.011 17.32L113.691 17.2C113.491 17.74 113.351 18.54 112.971 18.98ZM106.531 14.96C106.531 17 107.691 18.64 109.911 18.64C112.011 18.64 113.171 17.16 113.271 15.26V14.68C113.171 12.8 112.011 11.38 109.911 11.38C107.691 11.38 106.531 12.94 106.531 14.96Z" fill="black" />
                  </svg>

                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='flex items-end justify-end mt-10'>
          <Button className='!px-10' title="Submit" onClick={() => setState(1)} />
        </div>
      </div>
    </>
  )
}

export default SectionOne