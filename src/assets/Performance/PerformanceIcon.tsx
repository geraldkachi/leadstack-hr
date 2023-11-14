import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;
const PerformanceIcon = ({ index, ...props }: Props) => (
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
      d="M12.5 15.856c0 .742.962 1.033 1.374.416l4.515-6.773a.75.75 0 0 0-.624-1.166h-3.598v-4.19c0-.742-.963-1.033-1.374-.416L8.277 10.5a.75.75 0 0 0 .624 1.166H12.5v4.19Z"
      clipRule="evenodd"
    />
    <path
      fill={index ? "#fff" : "#535768"}
      fillRule="evenodd"
      d="M2.5 5.416c0-.69.56-1.25 1.25-1.25h4.167a1.25 1.25 0 0 1 0 2.5H3.75c-.69 0-1.25-.56-1.25-1.25Zm0 10c0-.69.56-1.25 1.25-1.25h4.167a1.25 1.25 0 0 1 0 2.5H3.75c-.69 0-1.25-.56-1.25-1.25Zm-.417-6.25a1.25 1.25 0 1 0 0 2.5h3.334a1.25 1.25 0 1 0 0-2.5H2.083Z"
      clipRule="evenodd"
      opacity={0.3}
    />
  </svg>
)
export default PerformanceIcon
