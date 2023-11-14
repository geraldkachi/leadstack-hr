import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;
const SelfServiceIcon = ({ index, ...props }: Props) => (
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
      d="M1.18 4.033c8.135 4.58 11.076 9.675 8.823 15.283-5.816-.95-8.757-6.044-8.824-15.283Z"
      clipRule="evenodd"
      opacity={0.3}
    />
    <path
       fill={index ? "#fff" : "#535768"}
      fillRule="evenodd"
      d="M18.83 4.033c-8.137 4.58-11.078 9.675-8.824 15.283 5.815-.95 8.756-6.044 8.823-15.283Z"
      clipRule="evenodd"
      opacity={0.3}
    />
    <path
       fill={index ? "#fff" : "#535768"}
      fillRule="evenodd"
      d="M10 1.666s-7.133 12.052 0 17.647c6.842-5.595 0-17.647 0-17.647Z"
      clipRule="evenodd"
      opacity={0.3}
    />
  </svg>
)
export default SelfServiceIcon
