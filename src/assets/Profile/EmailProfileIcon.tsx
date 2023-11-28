
import { SVGProps } from "react"
type Props = {
  index?: boolean;
} & SVGProps<SVGSVGElement>;
const EmailProfileIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#5E6278"
      fillRule="evenodd"
      d="M7 2.333a4.667 4.667 0 1 0 2.074 8.848.583.583 0 0 1 .519 1.045 5.833 5.833 0 1 1 3.24-5.227v.006c0 .158 0 .818-.212 1.455-.108.325-.285.686-.583.97-.312.299-.73.486-1.246.486a.583.583 0 0 1 0-1.167.591.591 0 0 0 .44-.162c.112-.107.209-.274.282-.496.15-.45.153-.95.153-1.092A4.667 4.667 0 0 0 7 2.333Z"
      clipRule="evenodd"
      opacity={0.25}
    />
    <path
      fill="#5E6278"
      fillRule="evenodd"
      d="M8.75 7a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm.438 1.93a2.917 2.917 0 1 1-.438-4.262.583.583 0 0 1 1.167 0c0 1.489.003 2.575.167 3.297.08.353.184.543.282.642.077.079.19.144.426.144a.583.583 0 1 1 0 1.166c-.494 0-.928-.154-1.26-.494a1.916 1.916 0 0 1-.344-.493Z"
      clipRule="evenodd"
    />
  </svg>
)
export default EmailProfileIcon
