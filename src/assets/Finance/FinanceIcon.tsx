
import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;
const FinanceIcon = ({ index, ...props }: Props) => (
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
      d="M5.667 13.334a1.5 1.5 0 0 0-1.5 1.5v1.167a1.5 1.5 0 0 0 1.5 1.5H6A1.5 1.5 0 0 0 7.5 16v-1.167a1.5 1.5 0 0 0-1.5-1.5h-.333Zm8.333 0a1.5 1.5 0 0 0-1.5 1.5v1.167a1.5 1.5 0 0 0 1.5 1.5h.333a1.5 1.5 0 0 0 1.5-1.5v-1.167a1.5 1.5 0 0 0-1.5-1.5H14Z"
      clipRule="evenodd"
      opacity={0.3}
    />
    <path
      fill={index ? "#fff" : "#535768"}
      fillRule="evenodd"
      d="M4.5 3.334a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2h-11Zm8.417 9.167a2.917 2.917 0 1 0 0-5.834 2.917 2.917 0 0 0 0 5.834Zm1.25-2.917a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM5.833 6.667A.833.833 0 0 0 5 7.501v1.666a.833.833 0 1 0 1.667 0V7.501a.833.833 0 0 0-.834-.834Z"
      clipRule="evenodd"
    />
  </svg>
)
export default FinanceIcon
