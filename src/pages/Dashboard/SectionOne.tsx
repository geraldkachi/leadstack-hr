import { Checkbox } from 'antd';
import { Dispatch, SetStateAction, useEffect } from "react"

import DarkCard from "./DarkCard"
import WhiteCard from "./WhiteCard"
import { Button } from "../../components"
import { useAuth } from '../../hooks';

interface Props {
  setState: Dispatch<SetStateAction<number>>
  setModalColor: Dispatch<SetStateAction<boolean>>
}
const SectionOne = ({ setState, setModalColor }: Props) => {
  const activeFont = useAuth(state => state.activeFont)
  // const [selectedFont, setSelectedFont] = useState(initialFont);

  // Get the saved font from localStorage or set a default
  const initialFont = localStorage.getItem('selectedFont') || activeFont;
  console.log(initialFont)

  useEffect(() => {
    // Save the selected font to localStorage whenever it changes
    localStorage.setItem('selectedFont', (activeFont));
  }, [activeFont]);

  return (
    <div className={`${activeFont}`}>
      <div className="text-[27px] font-bold text-[#091E42] border-b border-gray-200 pb-3 font-">Customize Experience</div>
      {/* {activeFont} */}
      <label className="flex flex-col items-center justify-start py-2 w-max cursor-pointer">
        <span className="py-2 text-xs md:text-base leading-6 font-medium">Upload Logo</span>
        <div className="border border-dashed border-[#DEDFEC] font-medium text-xl md:text-[46.29px] text-center p-4 rounded-md">TH</div>
        <input type="file" className="hidden" />
      </label>

      <div className="flex items-center gap-2 py-2">
        <Checkbox defaultChecked />

        <p className='text-[#60708F] text-sm font-normal'>I don&apos;t have a logo image for now.</p>
      </div>

      <div className='my-2'>
        <div className="text-lg text-[#0D1227]">Default Theme</div>
        <div className="text-[#98A1B0] text-sm font-normal">Customize your UI theme </div>
      </div>
      <div className='flex items-center gap-x-3'>
          <WhiteCard index className='cursor-pointer w-20' />
          {/* <WhiteCard className='cursor-pointer' /> */}
          <DarkCard index className='cursor-pointer w-20' />
      </div>

      <div className="w-full p-1 bg-white sm:p-4">

        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            <li className="py-3 sm:py-3">
              <div className="flex items-center">
                <div className="flex-1 min-w-0 ms-2">
                  <p className="text-sm md:text-base font-semibold text-[#0D1227] truncate">
                    Accent Color
                  </p>
                  <p className="text-xs md:text-sm font-normal text-[#535768] truncate">
                    Choose your accent color
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold gap-x-2">
                  <div className='cursor-pointer' onClick={() => setModalColor(true)}>
                    <img src="/add-color.svg" alt="" />
                  </div>

                  <div className="h-[18px] w-[18px] bg-[#1E63EC] border-[#1E63EC] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#16AF54] border-[#16AF54] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#D20000] border-[#D20000] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#D36500] border-[#D36500] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#8431D9] border-[#8431D9] rounded-full border  cursor-pointer"></div>
                </div>
              </div>
            </li>

            <li className="pt-3 pb-0 sm:py-3">
              <div className="flex items-center gap-3">

                <div className="flex-1 min-w-0 ms-2">
                  <p className="text-sm md:text-base font-semibold text-[#0D1227] truncate">
                    Header Style
                  </p>
                  <p className="text-xs md:text-sm font-normal text-[#535768] truncate">
                    Choose your font style
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold gap-x-2">
                  <div className='cursor-pointer' onClick={() => setModalColor(true)}>
                    <img src="/add-color.svg" alt="" />
                  </div>
                  <div className='cursor-pointer' onClick={() => setModalColor(true)}>
                    <img src="/text-color.svg" alt="" />
                  </div>

                  <div className="h-[18px] w-[18px] bg-[#1E63EC] border-[#1E63EC] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#16AF54] border-[#16AF54] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#D20000] border-[#D20000] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#D36500] border-[#D36500] rounded-full border  cursor-pointer"></div>
                  <div className="h-[18px] w-[18px] bg-[#8431D9] border-[#8431D9] rounded-full border  cursor-pointer"></div>
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-3">
              <div className="flex items-center gap-3">
                {/* <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" />
        </div> */}
                <div className="flex-1 min-w-0 ms-2">
                  <p className="text-sm md:text-base font-semibold text-[#0D1227] truncate">
                    Font Style
                  </p>
                  <p className="text-xs md:text-sm font-normal text-[#535768] truncate">
                    Choose your font style
                  </p>
                </div>
                <div className="inline-flex items-center text-xl gap-x-2 font-medium leading-[22px] text-[#B3B3B3]">
                  <div className='cursor-pointer' onClick={() => setModalColor(true)}></div>

                  <div className={`${activeFont === 'font-noto' && 'text-[#1D8EE6]'} cursor-pointer `} onClick={() => useAuth.setState({ activeFont: 'font-noto' })}>Ag</div>
                  <div className={`${activeFont === 'font-poppins' && 'text-[#1D8EE6]'} cursor-pointer `} onClick={() => useAuth.setState({ activeFont: 'font-poppins' })}>Ag</div>
                  <div className={`${activeFont === 'font-serif' && 'text-[#1D8EE6]'} cursor-pointer `} onClick={() => useAuth.setState({ activeFont: 'font-serif' })}>Ag</div>

                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-3 ">
              <span className="invisible p-2"></span>
            </li>
          </ul>
        </div>
        <div className='flex items-end justify-end mt-10'>
          <Button className='!px-10' title="Submit" onClick={() => setState(1)} />
        </div>
      </div>
    </div>
  )
}

export default SectionOne