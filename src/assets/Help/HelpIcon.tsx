import { SVGProps } from "react"
type Props = {
    index: boolean;
    bottom?: boolean
} & SVGProps<SVGSVGElement>;

const HelpIcon = ({ index,bottom, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={9.999} r={8.333} 
    fill={index ? (bottom ? "#535768" : "#fff" ) : ( bottom ? "#1D8EE6" : "#065373")}
    opacity={0.3} />
    <path
      fill={index ? (bottom ? "#535768" : "#fff" ) : ( bottom ? "#1D8EE6" : "#065373")}
      fillRule="evenodd"
      d="M8.826 11.008v1.383h1.05c2.117 0 3.78-1.628 3.78-3.728 0-2.1-1.663-3.727-3.78-3.727-2.118 0-3.763 1.627-3.763 3.727h1.488c0-1.33.927-2.345 2.275-2.345 1.33 0 2.292 1.015 2.292 2.345 0 1.33-.962 2.345-2.292 2.345h-1.05ZM10 13.334A.833.833 0 1 0 10 15a.833.833 0 0 0 0-1.667Z"
      clipRule="evenodd"
    />
  </svg>
)
export default HelpIcon
