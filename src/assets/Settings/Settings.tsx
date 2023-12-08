
import { SVGProps } from "react"
type Props = {
    index: boolean;
} & SVGProps<SVGSVGElement>;

const Settings = ({ index, ...props }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={index ? "#535768" : "#1D8EE6"}
            d="M18.79 9.75h.128a2.25 2.25 0 0 1 0 4.5h-.064a.488.488 0 0 0-.447.295.488.488 0 0 0 .089.54l.045.044a2.25 2.25 0 1 1-3.183 3.184l-.04-.04a.49.49 0 0 0-.545-.094.486.486 0 0 0-.295.444v.127a2.25 2.25 0 0 1-4.5 0 .524.524 0 0 0-.363-.514.485.485 0 0 0-.532.092l-.044.044a2.25 2.25 0 1 1-3.184-3.182l.04-.04a.49.49 0 0 0 .094-.545.487.487 0 0 0-.444-.295h-.127a2.25 2.25 0 0 1 0-4.5.524.524 0 0 0 .514-.363.485.485 0 0 0-.092-.532l-.045-.044a2.25 2.25 0 1 1 3.183-3.184l.04.04c.142.139.355.177.537.097l.108-.023a.486.486 0 0 0 .255-.423V5.25a2.25 2.25 0 1 1 4.5 0v.065c0 .194.117.37.303.449.182.08.395.042.532-.092l.044-.045a2.25 2.25 0 1 1 3.184 3.183l-.04.04a.488.488 0 0 0-.097.537l.023.108a.486.486 0 0 0 .424.255Z"
            opacity={0.3}
        />
        <path
            fill={index ? "#535768" : "#1D8EE6"}
            fillRule="evenodd"
            d="M12.168 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clipRule="evenodd"
        />
    </svg>
)
export default Settings
