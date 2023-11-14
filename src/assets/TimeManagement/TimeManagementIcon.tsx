import { SVGProps } from "react"
type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;

const TimeManagementIcon = ({ index, ...props }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill={index ? "#fff" : "#065373"}
            fillRule="evenodd"
            d="M8.718 6.67a.455.455 0 0 1 .906-.01L10 10.417l2.694 1.54a.44.44 0 0 1-.334.808l-3.628-.99a.5.5 0 0 1-.367-.52l.353-4.585Z"
            clipRule="evenodd"
        />
        <path
            fill={index ? "#fff" : "#065373"}
            fillRule="evenodd"
            d="M5.274 1.308a.5.5 0 0 0-.87.205L3.53 5.186a.5.5 0 0 0 .514.615l3.778-.214a.5.5 0 0 0 .355-.82L7.291 3.71a7.083 7.083 0 1 1-4.528 4.786l-1.605-.45a8.75 8.75 0 1 0 5-5.686l-.884-1.053Z"
            clipRule="evenodd"
            opacity={0.3}
        />
    </svg>
)
export default TimeManagementIcon
