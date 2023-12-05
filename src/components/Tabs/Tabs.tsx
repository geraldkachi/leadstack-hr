import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks';
interface Props {
  data: {
    label: string
    content: JSX.Element
  }[],
  activeTab?: number
}
const Tabs = ({ data, activeTab = 0 }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tabsRef = useRef<any[]>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    setActiveTabIndex(activeTab)
  }, [activeTab])

  // console.log(activeTab, 'activeTab')
  // console.log(activeTabIndex, 'activeTabIndex')

  const Render = () => data[activeTabIndex].content

  return (
    <div>
      <div className="relative">
        <div className="flex space-x- border-b px-4 md:px-5">
          {data.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`${activeTabIndex === idx && "!text-[#1D8EE6]"} pt-2 pb-3 text-[#AFB1B6] px-3 md:px-4 text-xs md:text-sm leading-[19.6px] flex items-center whitespace-nowrap`}
                onClick={() => {
                  setActiveTabIndex(idx)
                  useAuth.setState({ activeTab: idx })
                }}
              >
                {tab.label}  
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-[#1D8EE6] transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4 bg-[#F5F6FA] p-4 md:px-8 pb-72">
        <Render />
      </div>
    </div>
  );
}
export default Tabs