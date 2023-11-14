import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;
const LeaveManagementIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={index ? "#fff" : "#535768"}
      d="M5.833 4.079V17.5H4.167v-15h5v1.579H5.833Z"
      opacity={0.3}
    />
    <path
      fill={index ? "#fff" : "#535768"}
      fillRule="evenodd"
      d="M8.678 1.909a1 1 0 0 0-1.178.984v14.215a1 1 0 0 0 1.178.984l6.334-1.148a1 1 0 0 0 .821-.984V4.04a1 1 0 0 0-.821-.983L8.678 1.909Zm1.253 8.846c.575 0 1.041-.507 1.041-1.132 0-.626-.466-1.133-1.041-1.133-.576 0-1.042.507-1.042 1.133 0 .625.466 1.132 1.042 1.132Z"
      clipRule="evenodd"
    />
  </svg>
)
export default LeaveManagementIcon
