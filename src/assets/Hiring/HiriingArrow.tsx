
import { SVGProps } from "react"
type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;const HiriingArrow =({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
    //   fill="#0D1227"
    fill={index ? "#ffffff" : "#0D1227"}
      d="M14.41 6.91a.833.833 0 1 1 1.18 1.18l-5 5a.833.833 0 0 1-1.153.024l-5-4.583a.833.833 0 1 1 1.126-1.228l4.412 4.044 4.436-4.436Z"
    />
  </svg>
)
export default HiriingArrow
