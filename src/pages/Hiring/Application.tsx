import { Breadcrumbs, Button } from "../../components"
interface BreadcrumsbProps {
    url?: string
    name?: string
}
const bread: BreadcrumsbProps[] = [
    {
        name: 'Home',
        url: 'dashboard'
    },
    {
        name: 'Recruitment & Hiring',
        url: "employees/overview"
    },
]

const Application = () => {
  return (
    <div className="h-full pt-3 ">
    <div className="px-4 md:px-8">
        <Breadcrumbs {...{ bread }} />

        <div className="flex items-center justify-between">
            <div>
                <div className="text-lg md:text-2xl">Recruitment</div>
                <div className="text-[#98A1B0] text-[13px] ">Track and manage organization activities. </div>
            </div>

            <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Post New Job" />
        </div>
        <div className="bg-[#F5F6FA] px-4 md:px-8"></div>
    </div>

</div>
  )
}

export default Application