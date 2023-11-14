import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;
const ReportsAnalyticsIcon = ({ index, ...props }: Props) => (
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
      d="M3.543 11.666a6.667 6.667 0 1 0 7.29-8.282v8.282h-7.29Z"
      clipRule="evenodd"
      opacity={0.3}
    />
    <path
      fill={index ? "#fff" : "#535768"}
      fillRule="evenodd"
      d="M9.167 9.667V2.5A6.668 6.668 0 0 0 2.55 8.343l6.617 1.324Z"
      clipRule="evenodd"
    />
  </svg>
)
export default ReportsAnalyticsIcon
