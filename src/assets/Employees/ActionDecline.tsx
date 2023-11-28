
import { SVGProps } from "react";
type Props = {
  index: string;
} & SVGProps<SVGSVGElement>;

const ActionDecline = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={10}
      stroke={index}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <path
      stroke={index}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.07 4.93 4.928 19.072"
    />
  </svg>
)
export default ActionDecline
