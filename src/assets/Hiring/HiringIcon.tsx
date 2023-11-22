import { SVGProps } from "react"
type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;
const HiringIcon = ({ index, ...props }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill={index ? "#ffffff" : "#535768"}
            fillRule="evenodd"
            d="M6.667 2.5H5.333a2 2 0 0 0-2 2v12.667a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V4.5a2 2 0 0 0-2-2h-1.334v.417c0 .69-.56 1.25-1.25 1.25H7.917c-.69 0-1.25-.56-1.25-1.25V2.5Z"
            clipRule="evenodd"
            opacity={0.3}
        />
        <path
            fill={index ? "#ffffff" : "#535768"}
            fillRule="evenodd"
            d="M9.062 13.126c-.2 0-.399-.08-.559-.24L6.906 11.29a.772.772 0 0 1 0-1.118c.32-.32.839-.32 1.118 0l1.038 1.038 2.636-2.635a.772.772 0 0 1 1.118 0c.32.319.32.798 0 1.118L9.62 12.886c-.16.16-.359.24-.559.24ZM10.833 1.667H12a.5.5 0 0 1 .5.5v.667a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.667a.5.5 0 0 1 .5-.5h1.167a.833.833 0 1 1 1.666 0Z"
            clipRule="evenodd"
        />
    </svg>
)
export default HiringIcon
