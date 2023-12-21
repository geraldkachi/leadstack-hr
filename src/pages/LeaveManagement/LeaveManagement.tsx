import { Modal } from "antd"
import { Breadcrumbs, Button, Tabs } from "../../components"
import { BreadcrumsbProps } from "../../types/types"
import Calender from "./Calender"
import History from "./History"
import Holidays from "./Holidays"
import LeaveType from "./LeaveType"
import Overview from "./Overview"
import Requests from "./Requests"
import { useState } from "react"
import CreateNewLeaveType from "./CreateNewLeaveType"

const bread: BreadcrumsbProps[] = [
    {
        name: 'Dashboard',
        url: 'dashboard'
    },
    {
        name: 'Employee',
        url: "employees"
    },
    {
        name: 'Overview',
        url: "overview"
    }
]
const data = [
    {
        label: 'Overview',
        content: (
            <>
                <Overview />
            </>
        )
    },
    {
        label: 'Leave Type',
        content: (
            <>
                <LeaveType />
            </>
        )
    },
    {
        label: 'Requests',
        content: (
            <>
                <Requests />
            </>
        )
    },
    {
        label: 'History',
        content: (
            <>
                <History />
            </>
        )
    },
    {
        label: 'Calender',
        content: (
            <>
                <Calender />
            </>
        )
    },
    {
        label: 'Holidays',
        content: (
            <>
                <Holidays />
            </>
        )
    }
]

const LeaveManagement = () => {
    const [modalDetails, setModalDetails] = useState<boolean>(false);
    // const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    const [acceptRequest, setAcceptRequest] = useState(false)
    const [modalSuccessDecline, setModalSuccessDecline] = useState(false)

    const [declineRequest, setDeclineRequest] = useState(false)
    const [modalSuccessDeclineRequest, setModalSuccessDeclineRequests] = useState(false)

    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />
                <div className="block space-y-3 md:space-y-0 md:flex items-start justify-between gap-4 mt-3">
                    <div>
                        <div className="text-lg md:text-2xl">Leave Management</div>
                        <div className="text-[#98A1B0] text-[13px] ">Efficiently track, manage, and approve employee leaves</div>
                    </div>

                    <Button className='flex items-center rounded-lg !text-white pr-8' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Create New Leave Type" onClick={() => setModalDetails(true)} />
                </div>
            </div>

            {/* <div className="px-4 md:px-8 flex items-center justify-end">
        {data.map((_, idx) => <>
            <span key={idx} className={`${data[activeTab].label && 'border-b w-4 p-1 bg-[#1D8E6]'}"text border-b border-[#1D8EE6] w-4 p-2 bg-[#1D8EE6]"`}>{data[activeTab].label}</span>
        </>)}
    </div> */}
            <div className="mt-3  pb-36">
                <Tabs data={data} />
            </div>

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
                    <CreateNewLeaveType {...{ setModalDetails, setAcceptRequest, setDeclineRequest }} />
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

export default LeaveManagement