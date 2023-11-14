import { useEffect, useRef, useState } from 'react';
interface Props {
    data: {
        label: string
        content: JSX.Element
    }[]
}
 const Tabs = ({data}: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

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

  const Render = () => data[activeTabIndex].content

  return (
    <div>
      <div className="relative">
        <div className="flex space-x- border-b">
          {data.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`${activeTabIndex === idx && ""} pt-2 pb-3 px-4 text-[#1D8EE6] text-sm leading-[19.6px]`}
                onClick={() => setActiveTabIndex(idx)}
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
      <div className="py-4">
        <Render />
      </div>
    </div>
  );
}
export default Tabs