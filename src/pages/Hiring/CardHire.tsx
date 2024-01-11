import { Dropdown } from "antd"
import type { MenuProps } from 'antd';
import { Button } from "../../components";
import { format } from 'date-fns';
import { Link } from "react-router-dom";

const formattedDate = format(new Date(2023, 9, 31), 'MMMM dd, yyyy');

interface Props {
    applicants: number,
    years: number,
    staff: string,
    position: string,
}
const CardHire = ({applicants, position, staff, years}: Props) => {
    // dropdown list
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (<Link to="/hiring/1" onClick={() => (true)} className="flex items-center gap-x-3"> <img src="/action-eye.svg" alt="" /> View Details</Link>),
        },
        {
            key: '2',
            label: (<span onClick={() => (true)} className="flex items-center gap-x-3"><img src="/share-pop.svg" alt="" />Share</span>)
        },
        // {
        //     key: '3',
        //     label: (<span onClick={() => (true)} className="flex items-center gap-x-3"> <img src="/archive-hire.svg" alt="" /> Archive</span>),
        // },
    ];

    return (
        <>
            <div className="flex gap-2 items p-1 bg-white dark:bg-[#292929] border border-gray-200 rounded-lg shadow whitespace-nowrap w-full h-max">
                <img className="object-cover w-14 rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/cardi.svg" alt="" />
                <div className="flex flex-col justify-between p-3 leading-normal w-full">
                    <div>
                        <div className="flex items-center justify-between gap-2 w-full mb-2">
                            <div className="flex items-center my-1 sm:gap-1">
                                <h5 className=" text-sm md:text-sm font-bold tracking-tight text-[#0D1227] dark:text-[#ffffff] mr-1">{position}</h5>
                                <Button className="!bg-[#1EAA7933] !text-[#1EAA79] !p-1 text-sm" title="Active" />
                            </div>
                            <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                                <a onClick={(e) => e.preventDefault()}>
                                    <img src="/action-table.svg" className="p-1 w-full" alt="" />
                                </a>
                            </Dropdown>
                        </div>
                        <div className="flex items-center whitespace-nowrap">
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs md:text-x">
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/briefcase.svg" alt="" /> 0 - {years} Years</p>
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/graduate.svg" alt="" /> Html, Python, CSS</p>
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/credit-card-hire.svg" alt="" /> 200k - 350k</p>
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2"><img src="/credit-card-hire.svg" alt="" />{staff}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs md:text-x mt-2">
                        <p className="font-normal text-[#AFB1B6] flex items-center gap-1 md:gap-2">{applicants} Applicants</p>
                        <p className="font-normal text-[#FF3B30] flex items-center gap-1 md:gap-2"><img src="/time-circle.svg" alt="" /> Expiry Date: {formattedDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardHire
