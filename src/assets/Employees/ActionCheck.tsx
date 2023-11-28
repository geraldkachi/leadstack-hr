
import { SVGProps } from "react";
type Props = {
  index: string;
} & SVGProps<SVGSVGElement>;

const ActionCheck = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <rect
      width={21.066}
      height={21.066}
      x={0.935}
      y={0.934}
      stroke={index}
      strokeWidth={1.5}
      rx={10.533}
    />
    <path
      stroke={index}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.373 11.425 3.08 3.08 6.161-6.16"
    />
  </svg>
)
export default ActionCheck