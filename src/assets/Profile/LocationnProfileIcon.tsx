
import { SVGProps } from "react"
type Props = {
  index?: boolean;
} & SVGProps<SVGSVGElement>;

const LocationnProfileIcon  = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#5E6278"
      d="M12.25 6.334c0 3.203-2.815 5.938-4.322 7.173a1.45 1.45 0 0 1-1.856 0C4.565 12.272 1.75 9.537 1.75 6.334a5.25 5.25 0 1 1 10.5 0Z"
      opacity={0.25}
    />
    <path
      fill="#5E6278"
      d="M8.75 5.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
    />
  </svg>
)
export default LocationnProfileIcon
