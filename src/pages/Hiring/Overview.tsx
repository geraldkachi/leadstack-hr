import { BreadcrumsbProps } from "../../types"
import CardOverview from "./CardOverview"
import CurveGraph from "./CurveGraph"
import { useState } from "react";
import { format } from "date-fns";
import { Dropdown, Modal, Table, Tag } from "antd"
import { AlignType } from "rc-table/lib/interface";
import type { TableRowSelection } from 'antd/es/table/interface';
import { Button, Input, Breadcrumbs } from "../../components";
import type { MenuProps } from 'antd';
import { Link, useNavigate } from "react-router-dom";
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}
const dataSide = [
    {
        title: 'Jese Leos',
        leaves: "20 Leaves",
    },
    {
        title: 'Jese Leos',
        leaves: "5 Leaves",
    },
    {
        title: 'Jese Leos',
        leaves: "4 Leaves",
    },
    {
        title: 'Jese Leos',
        leaves: "0 Leaves",
    },
    {
        title: 'Jese Leos',
        leaves: "3 Leaves",
    }
]

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
const Overview = () => {
    const navigate = useNavigate()

    const [modalDetails, setModalDetails] = useState<boolean>(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    const [acceptRequest, setAcceptRequest] = useState(false)
    const [modalSuccessDecline, setModalSuccessDecline] = useState(false)

    const [declineRequest, setDeclineRequest] = useState(false)
    const [modalSuccessDeclineRequest, setModalSuccessDeclineRequests] = useState(false)


    // dropdown list
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (<span onClick={() => setModalDetails(true)} className="flex items-center gap-x-3"> <img src="/action-eye.svg" alt="" /> View Details</span>),
        },
        {
            key: '2',
            label: (<span onClick={() => setAcceptRequest(true)} className="flex items-center gap-x-3"> <img src="/action-check.svg" alt="" /> Delette</span>),
        },
    ];

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    const data: DataType[] = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }

    // const dataSource: ColumnsType<DataType> = [
    const dataSource: DataType[] = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '3',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '4',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const columns = [
        {
            title: "Leave Type",
            // dataIndex: 'startTime',
            render: (val: { createdAt: string }) => (
                <span
                    // onClick={() => navigate(`/history/${val?.id}`)}
                    onClick={() => null}
                    className="cursor-pointer capitalize whitespace-nowrap"
                >{`${val?.createdAt
                    ? format(new Date(val?.createdAt), "dd MMMM yyyy, hh:mm a")
                    : "Gerald Kachi"
                    }`}</span>
            ),
            width: "10%",
            align: "center" as AlignType,
        },
        {
            title: "Leave Description",
            dataIndex: "creator",
            width: "30%",
            align: "center" as AlignType,
            render: () => (
                <span
                    onClick={() => null}
                    className="cursor-pointer capitalize whitespace-nowrap"
                >{`Samuel Ikoojo`}</span>
            ),
        },
        {
            title: "No of Days",
            render: () => (
                <span
                    onClick={() => null}
                    className="cursor-pointer capitalize whitespace-nowrap"
                >{`3`}</span>
            ),
            width: "10%",
            align: "center" as AlignType,
        },
        {
            title: "Entitlement ",
            render: () => (
                <span
                    onClick={() => null}
                    className="cursor-pointer capitalize whitespace-nowrap"
                >{`Employee `}</span>
            ),
            width: "20%",
            align: "center" as AlignType,
        },
        {
            title: "Status",
            render: (val: string) => (
                <span
                    onClick={() => null}
                    className="cursor-pointer capitalize whitespace-nowrap"
                >
                    <Tag color={val ? "green" : "red"}>{val ? "active" : "Inactive"}</Tag>
                </span>
            ),
            width: "20%",
            align: "center" as AlignType,
        },
        {
            title: "Policy ",
            render: () => (
                <span
                    onClick={() => null}
                    className="cursor-pointer capitalize whitespace-nowrap"
                >{`No `}</span>
            ),
            width: "10%",
            align: "center" as AlignType,
        },
        {
            title: "Action",
            render: () => (
                <span onClick={() => null} className="cursor-pointer capitalize whitespace-nowrap ">
                    <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                        <a onClick={(e) => e.preventDefault()}>
                            <img src="/action-table.svg" className="p-1" alt="" />
                        </a>
                    </Dropdown>
                </span>
            ),
            width: "10%",
            align: "center" as AlignType,
        },
    ];
    const locale = {
        emptyText: (
            <span>
                <div className="my-3 flex flex-col items-center justify-center pb-10">
                    <img src="/no-record.svg" alt="no-record" />

                    <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Add Employee" onClick={() => null} />
                </div>
            </span>
        )
    };

    return (
        <div className="h-full pt-3 ">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />

                <div className="flex items-center justify-between gap-x-3">
                    <div>
                        <div className="text-lg md:text-2xl">Recruitment</div>
                        <div className="text-[#98A1B0] text-[13px] ">Track and manage organization activities. </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to='/settings'>
                            <img className="p-2 rounded-[4px] border border-[#1D8EE6]" src="/settings-icon.svg" alt="" />
                        </Link>
                        <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Post New Job" onClick={() => navigate('/hiring/create-new-job')} />
                    </div>              </div>
                <div className="bg-[#F5F6FA] px-4 md:px-8"></div>
            </div>
            <div className="bg-[#F5F6FA] px-4 md:px-8">

                <CardOverview />
                <div className="grid xl:grid-cols-8 gap-4 mb-5">
                    <div className="md:col-span-6 gap-2 h-max">
                        <CurveGraph />
                    </div>
                    <div className="md:col-span-2">
                        <div className="rounded-lg bg-white p-3">
                            {dataSide.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between gap-4 p-2">
                                    <div className="flex items-center gap-3">
                                        <img className="w-10 h-10 rounded-full" src="/face.svg" alt="" />
                                        <div className="font-medium">
                                            <div className="text-sm text-gray-500">{item.title}</div>
                                            {/* <div className="text-sm text-gray-500">Joined in August 2014</div> */}
                                        </div>
                                    </div>
                                    <span className="text-sm text-[#0D1227]">{item.leaves}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Input LeadingIcon={() => <>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5034 13.2383L11.2118 10.9979L11.1581 10.9162C11.0582 10.8168 10.9217 10.7608 10.7791 10.7608C10.6366 10.7608 10.5 10.8168 10.4002 10.9162C8.45266 12.7029 5.45177 12.8 3.38768 11.1431C1.32358 9.48627 0.836787 6.58956 2.25013 4.3741C3.66348 2.15863 6.53839 1.31188 8.96824 2.39541C11.3981 3.47894 12.6289 6.15651 11.8444 8.65238C11.7879 8.83269 11.834 9.02877 11.9655 9.16676C12.097 9.30475 12.2937 9.36369 12.4817 9.32138C12.6697 9.27906 12.8203 9.14192 12.8768 8.96161C13.8146 5.99975 12.3982 2.81235 9.54375 1.46136C6.68934 0.110359 3.25357 1.0012 1.45904 3.5576C-0.335479 6.11399 0.0497939 9.56875 2.36563 11.687C4.68146 13.8052 8.23286 13.9512 10.7224 12.0306L12.7514 14.0143C12.961 14.2183 13.2998 14.2183 13.5093 14.0143C13.7187 13.8075 13.7187 13.4744 13.5093 13.2675L13.5034 13.2383Z" fill="#667085" />
                    </svg>
                </>}
                    TrailingIcon={() => <>
                        {/* <div className="flex items-center gap-x-3 mr-20">
                      <Button prefixIcon={<ActionCheck index="#ffffff" />} className='!px-8 bg-[#1EAA79]' title='Approve' onClick={() => {
                          setAcceptRequest(true)
                      }} />
                      <Button prefixIcon={<ActionDecline index="#ffffff" />} className='!px-8 !bg-[#E01507] ' title='Decline' onClick={() => {
                          setDeclineRequest(true)
                      }} />
                  </div> */}
                        <img className="cursor-pointer" src="/filtersearch.svg" alt="" />
                    </>}
                    type="search"
                    placeholder="Search Employee by name, role, ID or any related keywords" />

                <div className="border border-[#DEDFEC] rounded-md overflow-x-scroll mt-2 ">
                    <Table
                        size="large"
                        {...{ locale }}
                        // rowSelection={{
                        //   type: selectionType,
                        //   ...rowSelection,
                        // }}
                        // loading={isLoading || isFetching}
                        columns={columns}
                        {...{ dataSource }}
                        // dataSource={data?.data?.standup}
                        pagination={{
                            position: ["bottomRight"],
                            //   current: page,
                            //   total: data?.data?.count,
                        }}
                        {...{ rowSelection }}
                    />
                </div>
            </div>

            {/* Modal */}
            <Modal
                open={modalDetails}
                onCancel={() => setModalDetails(false)}
                footer={null}
                centered
                maskClosable={false}
                closable
                afterClose={() => setModalDetails(false)}
                width={600}
            >
                <div className='grid md:grid-cols-1 p-4 md:p-8 h-[650px] overflow-y-scroll no-scrollbar'>
                    {/* <EmployeesDetails {...{ setModalDetails, setAcceptRequest, setDeclineRequest }} /> */}
                </div>
            </Modal>


            {/* Accept Request and Decline */}
            {/* Accepted and Success */}
            <Modal
                open={modalSuccessDecline}
                onCancel={() => setModalSuccessDecline(false)}
                footer={null}
                centered
                maskClosable={false}
                closable
                afterClose={() => setModalSuccessDecline(false)}
                width={500}
            >
                <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
                    <div className='flex items-center justify-center'>

                        <img src="/success-check.svg" alt="" />
                    </div>

                    <div>
                        <p className='text-xl text-[#0D1227] mt-3'>Employee Successfully Added</p>
                    </div>


                    <div className="flex flex-row items-center justify-between mt-10 gap-28">
                        <div></div>
                        <Button className='!px-8' title='Got it' onClick={() => {
                            setModalSuccessDecline(false)
                        }} />
                    </div>
                </div>

            </Modal>


            <Modal
                open={acceptRequest}
                onCancel={() => setAcceptRequest(false)}
                footer={null}
                centered
                maskClosable={false}
                closable
                afterClose={() => setAcceptRequest(false)}
                width={500}
            >
                <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
                    <div className='flex items-center justify-center'>

                        <img src="/empskip.svg" alt="" />
                    </div>

                    <div className="py-3">
                        <p className='text-xl text-[#0D1227] mt-3'>Accept Request</p>

                        <p className='text-base text-[#535768] mt-1'>Are you sure you want continue with this action?</p>
                    </div>


                    <div className="flex flex-row items-center justify-end mt-10">
                        <Button className='!px-8 !bg-white !text-[#0D1227]' title='Cancel' onClick={() => {
                            // setDeclineRequest(true)
                            setAcceptRequest(false)
                        }} />
                        <Button className='!px-8 ' title='Yes' onClick={() => {
                            setAcceptRequest(false)
                            setModalSuccessDecline(true)
                        }} />
                    </div>
                </div>
            </Modal>

            {/* Cancel Requst */}
            <Modal
                open={declineRequest}
                onCancel={() => setDeclineRequest(false)}
                footer={null}
                centered
                maskClosable={false}
                closable
                afterClose={() => setDeclineRequest(false)}
                width={500}
            >
                <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
                    <div className='flex items-center justify-center'>

                        <img src="/empskip.svg" alt="" />
                    </div>

                    <div className="py-3">
                        <p className='text-xl text-[#0D1227] mt-3'>Decline Request</p>

                        <p className='text-base text-[#535768] mt-1'>Are you sure you want continue with this action?</p>
                    </div>


                    <div className="flex flex-row items-center justify-end mt-10">
                        <Button className='!px-8 !bg-white !text-[#0D1227]' title='Cancel' onClick={() => {
                            setDeclineRequest(false)
                            // setModalSuccessDeclineRequests(true)
                        }} />
                        <Button className='!px-8 !bg-[#E01507] ' title='Yes' onClick={() => {
                            setDeclineRequest(false)
                            setModalSuccessDeclineRequests(true)
                        }} />
                    </div>
                </div>
            </Modal>

            {/* Request Decline Successful */}
            <Modal
                open={modalSuccessDeclineRequest}
                onCancel={() => setModalSuccessDeclineRequests(false)}
                footer={null}
                centered
                maskClosable={false}
                closable
                afterClose={() => setModalSuccessDeclineRequests(false)}
                width={500}
            >
                <div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
                    <div className='flex items-center justify-center'>

                        <img src="/success-check.svg" alt="" />
                    </div>

                    <div>
                        <p className='text-xl text-[#0D1227] mt-3 text-center'>Employee Onboarding Request <br /> Declined</p>
                    </div>

                    <div className="flex flex-row items-center justify-between mt-10 gap-28">
                        <div></div>
                        <Button className='!px-8' title='Got it' onClick={() => {
                            setModalSuccessDeclineRequests(false)
                        }} />
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default Overview