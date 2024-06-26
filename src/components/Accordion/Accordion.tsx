import { MutableRefObject, ReactNode, useRef, useState } from "react";
// import CollapseIcon from "../../assets/svg/CollapseIcon";
// import PlusIcon from "../../assets/svg/PlusIcon";

// import PlusIcon from "../assets/svg/PlusIcon";
// import CollapseIcon from "../assets/svg/CollapseIcon";

type AccordionProps = {
    heading: string | ReactNode;
    children: ReactNode;
    showHeader?: boolean;
    open?: boolean;
    activeClass?: string;
    otherClasses?: string;
};

function Accordion({
    heading,
    showHeader = true,
    open = false,
    children,
    activeClass = "",
    otherClasses,
}: AccordionProps) {
    const [openAccordion, setopenAccordion] = useState(false);

    const toggleAccordion = () => {
        setopenAccordion(!openAccordion);
    };
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    return (
        <div
            className={`relative bg-transparent  w-full mx-auto mb-1 rounded-xl  ${openAccordion ? activeClass : "bg-[#1D8EE6]"
                } ${otherClasses || ""}`}
                onClick={toggleAccordion}
        >
            {showHeader && (
                <div
                    className={` ${open || openAccordion
                        ? "w-full "
                        : "text-center"
                        //   : "border shadow-[0px_8px_22px_rgba(151,143,175,0.08)]"
                        } w-full
                        `}
                >
                    <div
                        onClick={toggleAccordion}
                        className={`flex items-start justify-between gap-2 rounded-xl px-6 py-3 cursor-pointer text-xs
                        !text-[#535768] truncate bg-transparent`}
                    >
                        <span className="font-medium text-xs text-[#716C81]">
                            {heading}{" "}
                        </span>

                        <button type="button">
                            {/* {open || openAccordion && ( */}
                                <svg className={`${open || openAccordion ? 'rotate-180' : "rotate-0"}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4108 6.91091C14.7362 6.58547 15.2639 6.58547 15.5893 6.91091C15.9147 7.23634 15.9147 7.76398 15.5893 8.08942L10.5893 13.0894C10.2738 13.4049 9.76582 13.4159 9.43694 13.1145L4.43694 8.53112C4.09767 8.22013 4.07475 7.69299 4.38575 7.35372C4.69674 7.01446 5.22388 6.99154 5.56314 7.30253L9.97498 11.3467L14.4108 6.91091Z" fill="#0D1227" />
                                </svg>
                            {/*  ) } */}
                        </button>
                    </div>
                </div>
            )}
            <div
                ref={ref}
                style={{
                    maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
                }}
                className={`relative overflow-hidden transition-all duration-[.8s]`}>
                <div className="px-">{children}</div>
            </div>
        </div>
    );
}

export default Accordion;
// i am the best
//  i can do it all alone
// iGod is always with me
// today is my day
// i am a wining
