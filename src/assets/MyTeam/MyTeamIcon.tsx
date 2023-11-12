import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;
const MyTeamIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={index ? "#fff" : "#535768"}
      d="M14.608 6.475a.616.616 0 0 0-.175 0 2.395 2.395 0 0 1-2.316-2.4 2.41 2.41 0 0 1 4.816 0 2.408 2.408 0 0 1-2.325 2.4ZM17.325 12.25c-.933.625-2.242.858-3.45.7a5.44 5.44 0 0 0 .492-2.242 5.12 5.12 0 0 0-.534-2.316c1.234-.167 2.542.066 3.484.691 1.316.867 1.316 2.292.008 3.167ZM5.367 6.475a.616.616 0 0 1 .175 0 2.395 2.395 0 0 0 2.316-2.4 2.41 2.41 0 0 0-4.816 0 2.408 2.408 0 0 0 2.325 2.4ZM5.458 10.708c0 .809.175 1.575.492 2.267-1.175.125-2.4-.125-3.3-.717-1.317-.875-1.317-2.3 0-3.175.892-.6 2.15-.841 3.333-.708a5.298 5.298 0 0 0-.525 2.333Z"
      opacity={0.4}
    />
    <path
        fill={index ? "#fff" : "#535768"}
      d="M10.1 13.225a.945.945 0 0 0-.217 0 2.854 2.854 0 0 1-2.758-2.858 2.866 2.866 0 1 1 5.733 0 2.848 2.848 0 0 1-2.758 2.858ZM7.392 14.95c-1.259.842-1.259 2.225 0 3.059 1.433.958 3.783.958 5.216 0 1.259-.842 1.259-2.226 0-3.059-1.425-.958-3.775-.958-5.216 0Z"
    />
  </svg>
)
export default MyTeamIcon