
import { SVGProps } from "react"
type Props = {
  index?: boolean;
} & SVGProps<SVGSVGElement>;

const EditProfileIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.666 1.332H10c3.333 0 4.666 1.333 4.666 4.667v4c0 3.333-1.333 4.666-4.666 4.666H6c-3.333 0-4.667-1.333-4.667-4.666V8.665"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m5.307 2.014 5.253 5.253c.2.2.4.593.44.88l.287 2.006c.106.727-.407 1.234-1.134 1.134L8.147 11c-.28-.04-.674-.24-.88-.44L2.013 5.307c-.906-.907-1.333-1.96 0-3.294 1.334-1.333 2.387-.906 3.294 0Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6.06 2.768A4.763 4.763 0 0 1 2.767 6.06"
    />
  </svg>
)
export default EditProfileIcon
