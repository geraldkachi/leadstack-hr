import { useRef } from "react";
import { Button, Input } from "../../components"

const JobHistory = () => {
    const formInput = useRef<HTMLInputElement>(null);

    return (
        <>
            <div className="grid lg:grid-cols-2 h-max gap-x-8 mb">
                <div className="bg-white p-4 md:p-8 rounded-lg">
                    <div className="text-[#7C8091] mb-5">Job History <span className="text-[E01507]"></span></div>
                    <form>
                        <div className="grid lg:grid-cols-1 gap-x-8 mb">
                            <div>
                                <div className="grid md:grid-cols-2 gap-x-2">
                                    <Input
                                        label="Date"
                                        ref={formInput}
                                        className="mb-1"
                                        type="email"
                                        name="email"
                                        placeholder="hr@tch.com"
                                    />
                                    <Input
                                        label="Unit"
                                        ref={formInput}
                                        className="mb-1"
                                        type="text"
                                        name="text"
                                        placeholder="Sister"
                                    />
                                </div>
                                <Input
                                    label="Email Address"
                                    ref={formInput}
                                    className="mb-1"
                                    type="email"
                                    name="email"
                                    placeholder="hr@tch.com"
                                />
                                <Input
                                    label="Employee No"
                                    ref={formInput}
                                    className="mb-1"
                                    type="email"
                                    name="email"
                                    placeholder="EMP-2987"
                                />

                                <div className="grid md:grid-cols-2 gap-x-2">
                                    <Input
                                        label="Grade"
                                        ref={formInput}
                                        className="mb-1"
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="Level 5"
                                    />
                                    <Input
                                        label="Date of Employment"
                                        ref={formInput}
                                        className="mb-1"
                                        type="date"
                                        name="text"
                                        placeholder="Chooose date"
                                    />
                                    <Input
                                        label="Salary"
                                        ref={formInput}
                                        className="mb-1"
                                        type="text"
                                        name="state"
                                        placeholder="NGN 450,000"
                                    />
                                    <Input
                                        label="Pay Schedule"
                                        ref={formInput}
                                        className="mb-1"
                                        type="text"
                                        name="year"
                                        placeholder="Monthly"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-end mt-6 gap-x-1 my-4">
                            {/* <Button className='!px-8' title='Edit' prefixIcon={<EditProfileIcon />} onClick={() => null} /> */}
                        </div>
                    </form>
                </div>
                {/* half */}
                <div className="bg-white p-4 md:p-8 rounded-lg h-max">
                    <div className="border border-[#DEDFEC] p-4 rounded-2xl">
                        <div className="text-[#7C8091]">Job History <span className="text-[E01507]"></span></div>
                        <div className="rounded-lg my-5">
                            <div className="hover:bg-[#1D8EE60D] hover:border-[#1D8EE6]  bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-x-2">
                                    <div className="flex items-center gap-x-2">
                                    </div>
                                    <div>
                                        <div className="text-[13px] text-[#272848]">Federal Govt. College, Ogun <span className="text-[#94A0B4] text-[10px]">2003 - 2009</span> </div>
                                        <div className="text-[#94A0B4] text-[10px] ">University  • <span>BSc.</span></div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-2">
                                    <img src="/edithistory.svg" alt="" />

                                    <img src="/uploaddelete.svg" className="cursor-pointer" alt=""
                                    // onClick={() => setModalDelPop(true)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg my-5">
                            <div className="hover:bg-[#1D8EE60D] hover:border-[#1D8EE6]  bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-x-2">
                                    <div className="flex items-center gap-x-2">
                                    </div>
                                    <div>
                                        <div className="text-[13px] text-[#272848]">University of Lagos, Akoka <span className="text-[#94A0B4] text-[10px]">2003 - 20012</span> </div>
                                        <div className="text-[#94A0B4] text-[10px] ">University  • <span>BSc.</span></div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-2">
                                    <img src="/edithistory.svg" alt="" />

                                    <img src="/uploaddelete.svg" className="cursor-pointer" alt=""
                                    // onClick={() => setModalDelPop(true)}
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="flex items-center justify-end mt-6">
                            <Button
                                type="button"
                                className="!bg-white !text-[#535768] !px-8 "
                                title="Skip"
                                // onClick={() => useAuth.setState({ activeTab: 1 })}
                            />
                            <Button
                                type="button"
                                className="!bg-[#1D8EE6] !text-white !px-8 "
                                title="Save & Continue"
                                // onClick={() => useAuth.setState({ activeTab: 3 })}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end mt-6">

                    </div>
                </div>

            </div>






            {/* <Modal
open={modalDelPop}
onCancel={() => setModalDelPop(false)}
footer={null}
centered
maskClosable={false}
closable
afterClose={() => setModalDelPop(false)}
width={500}
>
<div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
<div className='flex items-center justify-center'>

<img src="/empskip.svg" alt="" />
</div>

<div className="py-3">
<p className='text-xl text-[#0D1227] mt-3'>Delete Field</p>

<p className='text-base text-[#535768] mt-1'>Are you sure want to delete this field ? </p>
</div>


<div className="flex flex-row items-center justify-end mt-10">
<Button className='!px-8 !bg-white !text-[#0D1227]' title='Cancel' onClick={() => setModalDelPop(false)} />
<Button className='!px-8 !bg-[#E01507] ' title='Yes' onClick={() => {
setModalDel(true)
setModalDelPop(false)
}} />
</div>
</div>
</Modal>

<Modal
open={modalDel}
onCancel={() => setModalDel(false)}
footer={null}
centered
maskClosable={false}
closable
afterClose={() => setModalDel(false)}
width={500}
>
<div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
<div className='flex items-center justify-center'>

<img src="/success-check.svg" alt="" />
</div>

<div className="py-3">
<p className='text-xl text-[#0D1227] mt-3'>Data Deleted</p>
</div>


<div className="flex flex-row items-center justify-end mt-10">
<Button className='!px-8  ' title='Got it' onClick={() => setModalDel(false)} />
</div>
</div>
</Modal>


<Modal
open={modalSuccessEmp}
onCancel={() => setModalSuccessEmp(false)}
footer={null}
centered
maskClosable={false}
closable
afterClose={() => setModalSuccessEmp(false)}
width={500}
>
<div className='grid grid-cols-1 items-center justify- text-center p-8 w-full'>
<div className='flex items-center justify-center'>

<img src="/employeesuccess.svg" alt="" />
</div>

<div>
<p className='text-xl text-[#0D1227] mt-3'>Employee onboarding successfully
completed</p>

<p className='text-base text-[#535768] mt-1'>Kindly ask the employee to check their email for their login credentials. </p>
</div>


<div className="flex flex-row items-center justify-between mt-10 gap-28">
<div></div>
<Button className='!px-8' title='Got it' onClick={() => navigate('/dashboard')} />
</div>
</div>
</Modal> */}
        </>
    )
}

export default JobHistory