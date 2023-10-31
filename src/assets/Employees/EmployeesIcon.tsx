import { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const EmployeesIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={index ? "#ffffff" : "#535768"}
      fillRule="evenodd"
      d="M4.167 5.833a3.333 3.333 0 1 0 6.666 0 3.333 3.333 0 0 0-6.666 0ZM12.5 9.167a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
      clipRule="evenodd"
      opacity={0.3}
    />
    <path
      fill={index ? "#ffffff" : "#535768"}
      fillRule="evenodd"
      d="M7.486 10.834c-3.934 0-7.162 2.022-7.485 5.999-.018.216.396.667.605.667h13.766c.626 0 .636-.504.626-.666-.244-4.09-3.522-6-7.512-6Zm12.06 6.666h-3.213c0-1.876-.62-3.607-1.665-5 2.838.032 5.156 1.467 5.33 4.5.008.122 0 .5-.451.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default EmployeesIcon;
