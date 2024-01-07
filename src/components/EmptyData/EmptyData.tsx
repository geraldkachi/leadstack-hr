interface Props {
    title: string
    subtitle: string
}
const EmptyData = ({title, subtitle}: Props) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center">
                <img src="/edu.svg" alt="" />
                <div className="text-lg md:text-xl text-center dark:text-[#ffffff]">{title}</div>
                <div className="text-[#98A1B0] text-[13px]">{subtitle}</div>
            </div>
        </div>
    )
}

export default EmptyData
