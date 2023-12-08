import { SVGProps } from "react"
type Props = {
  index: boolean;
  bottom: boolean;
} & SVGProps<SVGSVGElement>;

const DashboardIcon = ({ index,bottom, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill={index ? (bottom ? "#535768" : "#fff" ) : ( bottom ? "#1D8EE6" : "#065373")}
      fillRule="evenodd"
      d="M1.457 3.914A2 2 0 0 0 .5 5.621v6.878a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V5.621a2 2 0 0 0-.957-1.707L8.52.234a1 1 0 0 0-1.042 0l-6.022 3.68ZM6.5 7.833a1 1 0 0 0-1 1v2.166a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8.833a1 1 0 0 0-1-1h-3Z"
      clipRule="evenodd"
    />
  </svg>
)
export default DashboardIcon
