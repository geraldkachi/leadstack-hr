import { Breadcrumbs } from "../../components"
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
        url: "employees/job-portal"
    },
]
const box = [
    {
        title: 'Level 3',
        subtitle: 'Grade'
    },
    {
        title: '2.5yrs',
        subtitle: 'Hire Date - 18-05-2021 '
    },
    {
        title: '10',
        subtitle: 'Commendations'
    },
]

const Profile = () => {
    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />

                <div className="flex items-center justify-between">
                    <div className="relative me-4">
                        <img className="w-10 h-10 md:w-[160px] md:h-[160px] rounded-full" src="/profileface.svg" alt="profile image" />
                        <span className="top-0 end-1 md:end-9 absolute w-3.5 h-3.5 md:w-4 md:h-4 bg-[#50CD89] border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                        <div className="text-lg md:text-2xl">Recruitment</div>
                        <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
                    </div>

                    {/* <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Post New Job" /> */}
                </div>

                {<div className="flex items-center gap-x-4">
                    {box.map((item, i) => (
                        <div className="border border-dashed border-[#E4E6EF] p-2 md:p-4 rounded" key={i}>
                            <div className="text-lg md:text-2xl font-black">{item.title}</div>
                            <div className="text-[#94A0B4] text-sm  ">{item.subtitle}</div>
                        </div>
                    ))}
                </div>}


                <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#FFF7E7] rounded-md border-dashed border border-[#FFA800] md:mr-56">
                    <img src="/cautionsign.svg" alt="caution" />
                    <div>
                        <div className='text-[#3F4254] font-bold text-base'>ATTENTION!!!</div>
                        <div className='text-[#7E8299] text-sm md:text-base'>Kindly note that job posted is automatically moved to the archive after the expiration dateKindly note that job posted is automatically moved to the archive after the expiration date</div>
                    </div>
                </div>

                {/* <Input LeadingIcon={() => <>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5034 13.2383L11.2118 10.9979L11.1581 10.9162C11.0582 10.8168 10.9217 10.7608 10.7791 10.7608C10.6366 10.7608 10.5 10.8168 10.4002 10.9162C8.45266 12.7029 5.45177 12.8 3.38768 11.1431C1.32358 9.48627 0.836787 6.58956 2.25013 4.3741C3.66348 2.15863 6.53839 1.31188 8.96824 2.39541C11.3981 3.47894 12.6289 6.15651 11.8444 8.65238C11.7879 8.83269 11.834 9.02877 11.9655 9.16676C12.097 9.30475 12.2937 9.36369 12.4817 9.32138C12.6697 9.27906 12.8203 9.14192 12.8768 8.96161C13.8146 5.99975 12.3982 2.81235 9.54375 1.46136C6.68934 0.110359 3.25357 1.0012 1.45904 3.5576C-0.335479 6.11399 0.0497939 9.56875 2.36563 11.687C4.68146 13.8052 8.23286 13.9512 10.7224 12.0306L12.7514 14.0143C12.961 14.2183 13.2998 14.2183 13.5093 14.0143C13.7187 13.8075 13.7187 13.4744 13.5093 13.2675L13.5034 13.2383Z" fill="#667085" />
                    </svg>
                </>}
                    TrailingIcon={() => <><img src="/filtersearch.svg" alt="" /></>}
                    type="search"
                    placeholder="Search Employee by name, role, ID or any related keywords" /> */}
            </div>
        </div>
    )
}
export default Profile