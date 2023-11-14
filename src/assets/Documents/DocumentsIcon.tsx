import { SVGProps } from "react"
type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;

const DocumentsIcon = ({ index, ...props }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill={index ? "#fff" : "#535768"}
            fillRule="evenodd"
            d="M2.5 16A1.5 1.5 0 0 0 4 17.5h13.667a1.5 1.5 0 0 0 1.5-1.5V7.335a1.5 1.5 0 0 0-1.5-1.5h-8.5l-2.061-2.06a1.5 1.5 0 0 0-1.06-.44H4a1.5 1.5 0 0 0-1.5 1.5v11.167Z"
            clipRule="evenodd"
            opacity={0.3}
        />
        <path
            fill={index ? "#fff" : "#535768"}
            fillRule="evenodd"
            d="M.833 14.333a1.5 1.5 0 0 0 1.5 1.5H16a1.5 1.5 0 0 0 1.5-1.5V5.666a1.5 1.5 0 0 0-1.5-1.5H7.5l-2.06-2.06a1.5 1.5 0 0 0-1.061-.44H2.333a1.5 1.5 0 0 0-1.5 1.5v11.167Z"
            clipRule="evenodd"
        />
    </svg>
)
export default DocumentsIcon
