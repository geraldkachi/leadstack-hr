import { ReactNode } from "react";
import { Button } from ".."
interface Props {
    title: string;
    btntxt: string;
    subtitle: string
    children: ReactNode
    onClick: () => void
}
const AppText = ({ title, subtitle, btntxt, children, onClick }: Props) => {
    return (
        <div className="h-full pt-3 md:mr-20">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-lg md:text-2xl">{title}</div>
                    <div className="text-[#98A1B0] text-[13px] ">{subtitle}</div>
                </div>

                <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} {...{ onClick }} title={btntxt} />
            </div>
            {children}
        </div>
    )
}

export default AppText