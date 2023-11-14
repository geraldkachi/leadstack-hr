import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;
const TrainingIcon = ({ index, ...props }: Props) => (
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
      d="M4.333 2.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-.5Zm4.167 0a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-.5Z"
      clipRule="evenodd"
    />
    <rect
      width={2.5}
      height={15}
      x={11.231}
      y={3.27}
      fill={index ? "#fff" : "#535768"}
      opacity={0.3}
      rx={1}
      transform="rotate(-19 11.231 3.27)"
    />
  </svg>
)
export default TrainingIcon
