import { Dropdown } from "antd"
import type { MenuProps } from 'antd';
import { Button } from "../../components";

const CardHire = () => {
    // dropdown list
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (<span onClick={() => (true)} className="flex items-center gap-x-3"><img src="/share-pop.svg" alt="" />Share</span>)
        },
        {
            key: '2',
            label: (<span onClick={() => (true)} className="flex items-center gap-x-3"> <img src="/action-eye.svg" alt="" /> View Details</span>),
        },
        {
            key: '3',
            label: (<span onClick={() => (true)} className="flex items-center gap-x-3"> <img src="/archive-hire.svg" alt="" /> Archive</span>),
        },
    ];

    return (
        <div>
            <a href="#" className="flex gap-2 items p-1 bg-white border border-gray-200 rounded-lg shadow whitespace-nowrap w-full">
                <img className="object-cover w-14 rounded-t-lg h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/cardi.svg" alt="" />
                <div className="flex flex-col justify-between p-3 leading-normal w-full">
                    <div>
                        <div className="flex items-center justify-between gap-3 w-full mb-2">
                            <div className="flex items-center my-1 sm:gap-1">
                                <h5 className=" text-sm md:text-sm font-bold tracking-tight text-[#0D1227] mr-1">Full Stack Developer...</h5>
                                <Button className="!bg-[#1EAA7933] !text-[#1EAA79] !p-1 text-[10px]" title="Active" />
                            </div>
                            <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                                <a onClick={(e) => e.preventDefault()}>
                                    <img src="/action-table.svg" className="p-1 w-full" alt="" />
                                </a>
                            </Dropdown>
                        </div>
                        <div className="flex items-center whitespace-nowrap">
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] md:text-x">
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-2"><img src="/briefcase.svg" alt="" /> 0 - 2 Years</p>
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-2"><img src="/graduate.svg" alt="" /> Html, Python, CSS</p>
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-2"><img src="/credit-card-hire.svg" alt="" /> 200k - 350k</p>
                                <p className="mb-1 font-normal text-[#AFB1B6] flex items-center gap-2"><img src="/credit-card-hire.svg" alt="" /> Full time</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] md:text-x mt-2">
                        <p className="font-normal text-[#AFB1B6] flex items-center gap-2">20 Applicants</p>
                        <p className="font-normal text-[#FF3B30] flex items-center gap-2"><img src="/time-circle.svg" alt="" /> Expiry Date: Oct 31, 2023</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardHire