import { EmailProfileIcon, HumanResourceIcon, LocationnProfileIcon, PhoneProfileIcon } from "../../assets"
import { Breadcrumbs, Button } from "../../components"
import { BreadcrumsbProps } from "../../types"
import Certifications from "./Certifications"
import ContactInfo from "./ContactInfo"
import Education from "./Education"
import EmergencyContact from "./EmergencyContact"
import Employment from "./Employment"
import JobHistory from "./JobHistory"
import NextofKin from "./NextofKin"

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

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


const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Contact Info',
        children: <ContactInfo />,
    },
    {
        key: '2',
        label: 'Employment',
        children: <Employment />,
    },
    {
        key: '3',
        label: 'Education',
        children: <Education />,
    },
    {
        key: '4',
        label: 'Emergency Contact',
        children: <EmergencyContact />,
    },
    {
        key: '5',
        label: 'Emergency Contact',
        children: <EmergencyContact />,
    },
    {
        key: '6',
        label: 'Next of Kin',
        children: <NextofKin />
    },
    {
        key: '7',
        label: 'Job History',
        children: <JobHistory />
    },
    {
        key: '8',
        label: 'Certifications',
        children: <Certifications />
    },
];

const onChange = (key: string) => {
    console.log(key);
};

const Profile = () => {
    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />

                <div className="flex md:items-center justify-between pb-4">

                    <div className="flex">
                        <div className="relative me-4">
                            <img className="w-10 h-10 md:w-[160px] md:h-[160px] rounded-full" src="/profileface.svg" alt="profile image" />
                            <span className="top-0 end-1 md:end-9 absolute w-3.5 h-3.5 md:w-4 md:h-4 bg-[#50CD89] border-2 border-white rounded-full"></span>
                        </div>

                        <div>
                            <div className="text-lg md:text-[19px] flex items-center my-4">Kingsley Okon {" "}<span className="flex items-center text-[#94A0B4] text-base"> <img src="/admin-check.svg" alt="" /> Admin</span></div>

                            <div className="flex items-center gap-3 mt-2 flex-wrap">
                                <div className="text-[#98A1B0] text-[13px] flex items-center gap-x-1">
                                    <HumanResourceIcon />
                                    <span>Human Resource</span>
                                </div>
                                <div className="text-[#98A1B0] text-[13px] flex items-center gap-x-1">
                                    <EmailProfileIcon />
                                    <span>kigsleyokon@tch.com</span>
                                </div>
                                <div className="text-[#98A1B0] text-[13px] flex items-center gap-x-1">
                                    <PhoneProfileIcon />
                                    <span>+234 908 8844 099</span>
                                </div>
                                <div className="text-[#98A1B0] text-[13px] flex items-center gap-x-1">
                                    <LocationnProfileIcon />
                                    <span>Ikeja, Lagos</span>
                                </div>
                            </div>


                            {<div className="flex items-center gap-4 mt-2 flex-wrap font-roboto">
                                {box.map((item, i) => (
                                    <div className="border border-dashed border-[#E4E6EF] p-2 md:p-3 rounded" key={i}>
                                        <div className="text-lg md:text-xl font-black">{item.title}</div>
                                        <div className="text-[#94A0B4] text-sm  ">{item.subtitle}</div>
                                    </div>
                                ))}
                            </div>}
                        </div>
                    </div>

                    <div>
                        <Button className='!px-8' title='Update Info' onClick={() => {
                            // setDeclineRequest(true)
                            // setAcceptRequest(false)
                        }} />
                    </div>

                    {/* <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Post New Job" /> */}
                </div>





                <div className="no-scrollbar">
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    {/* <Tabs
                        data={[
                            {
                                label: 'Contact Info',
                                content: (
                                    <ContactInfo />
                                )
                            },
                            {
                                label: 'Employment',
                                content: (
                                    <Employment />
                                )
                            },
                            {
                                label: 'Education',
                                content: (
                                    <Education />
                                )
                            },
                            {
                                label: 'Emergency Contact',
                                content: (
                                    <EmergencyContact />
                                )
                            },
                            {
                                label: 'Next of Kin',
                                content: (
                                    <NextofKin />
                                )
                            },
                            {
                                label: 'Job History',
                                content: (
                                    <JobHistory />
                                )
                            },
                            {
                                label: 'Certifications',
                                content: (
                                    <Certifications />
                                )
                            }
                        ]}
                    /> */}
                </div>
            </div>
        </div>
    )
}
export default Profile