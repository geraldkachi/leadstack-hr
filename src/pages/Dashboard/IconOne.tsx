import { SVGProps } from "react"
type Props = {
    index?: boolean | number;
} & SVGProps<SVGSVGElement>;
const IconOne = ({ index, ...props }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill={index ? "#0D1227" : "#535768"}
            fillRule="evenodd"
            d="M4.167 1.666a2.5 2.5 0 0 0-2.5 2.5v11.667a2.5 2.5 0 0 0 2.5 2.5H7.5a2.5 2.5 0 0 0 2.5-2.5V4.166a2.5 2.5 0 0 0-2.5-2.5H4.167Zm1.666 14.167a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
            clipRule="evenodd"
        />
        <path
            fill={index ? "#0D1227" : "#535768"}
            d="M11.25 13.05c0 .281.326.436.543.26l4.903-3.983a2.5 2.5 0 0 0 .023-3.559L14.352 3.4a2.498 2.498 0 0 0-2.254-.685c-.56.11-.848.685-.848 1.256v9.08ZM11.558 15.11a.833.833 0 0 0-.308.647V17.5c0 .46.373.833.833.833h3.75a2.5 2.5 0 0 0 2.5-2.5v-3.998c0-.648-.335-1.217-.843-1.544l-5.932 4.819Z"
            opacity={0.3}
        />
    </svg>
)
export default IconOne
