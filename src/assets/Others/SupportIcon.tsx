import { SVGProps } from "react"
const SupportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={67}
    height={67}
    fill="none"
    {...props}
  >
    <circle cx={33.5} cy={33.5} r={33.5} fill="#3698FE" fillOpacity={0.1} />
    <circle cx={33.5} cy={33.5} r={28.289} fill="#3699FF" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.978}
      d="M34.246 40.944v-8.933M34.246 27.544v-1.489"
    />
  </svg>
)
export default SupportIcon
