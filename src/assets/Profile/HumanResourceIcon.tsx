
import { SVGProps } from "react"
type Props = {
  index?: boolean;
} & SVGProps<SVGSVGElement>;
const HumanResourceIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#272848"
      fillRule="evenodd"
      d="M2.333 4.252c-.644 0-1.166.522-1.166 1.167v.965c0 .515.338.97.831 1.117l4.332 1.3c.437.131.903.131 1.34 0l4.332-1.3c.493-.148.831-.602.831-1.117v-.965c0-.645-.522-1.167-1.166-1.167H2.333Zm5.105 2a.437.437 0 1 0-.875 0v1a.438.438 0 0 0 .875 0v-1Z"
      clipRule="evenodd"
    />
    <path
      fill="#272848"
      fillRule="evenodd"
      d="M1.217 8.093v2.326a2.77 2.77 0 0 0 2.77 2.77h6.029a2.77 2.77 0 0 0 2.77-2.77V8.09a2.04 2.04 0 0 1-.532.248l-4.332 1.3c-.601.18-1.242.18-1.844 0l-4.331-1.3a2.04 2.04 0 0 1-.53-.246Zm.035-1.273 5.75.974 5.747-.973c-.13.321-.4.576-.747.68l-4.331 1.3a2.333 2.333 0 0 1-1.341 0L1.998 7.5a1.167 1.167 0 0 1-.746-.68Zm5.75 1.849Z"
      clipRule="evenodd"
      opacity={0.3}
    />
    <path
      stroke="#272848"
      strokeWidth={0.875}
      d="M8.945 4.25v-.833c0-.645-.522-1.167-1.166-1.167H6.223c-.644 0-1.167.522-1.167 1.167v.833"
    />
  </svg>
)
export default HumanResourceIcon
