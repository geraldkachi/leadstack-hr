
import { SVGProps } from "react"
type Props = {
  index?: boolean;
} & SVGProps<SVGSVGElement>;
const PhoneProfileIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#272848"
      stroke="#272848"
      strokeWidth={0.875}
      d="M11.12 12.732c-1.14 1.14-4.06.068-6.521-2.393-2.462-2.461-3.533-5.381-2.393-6.521l.75-.75c.519-.519 1.373-.505 1.908.03l1.162 1.163c.535.535.55 1.389.031 1.907l-.161.16a.777.777 0 0 0-.047 1.047c.25.304.52.607.814.9.293.293.596.563.9.814a.777.777 0 0 0 1.046-.047l.16-.161c.519-.519 1.373-.505 1.908.03l1.162 1.163c.536.535.55 1.389.031 1.907l-.75.75Z"
      opacity={0.3}
    />
    <path
      stroke="#272848"
      strokeLinecap="round"
      strokeWidth={0.875}
      d="M10.28 6.188a2.906 2.906 0 0 0-.636-.955 2.908 2.908 0 0 0-.895-.611M8.75 2.637a5.809 5.809 0 0 1 2.134 1.36c.64.64 1.1 1.391 1.38 2.192"
    />
  </svg>
)
export default PhoneProfileIcon
