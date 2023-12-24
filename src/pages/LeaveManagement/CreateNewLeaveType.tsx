import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button, Input } from "../../components"
interface Props {
    setModalDetails: Dispatch<SetStateAction<boolean>>
    setAcceptRequest: Dispatch<SetStateAction<boolean>>
    setDeclineRequest: Dispatch<SetStateAction<boolean>>
}
const CreateNewLeaveType = ({ setModalDetails, setAcceptRequest, setDeclineRequest }: Props) => {
    const formInput = useRef<HTMLInputElement>(null);
    const [article, setArticle] = useState<string>(``)


    return (
        <form>
            <div className="bg-white rounded-lg">
                <div className="text-base md:text-[27px] whitespace-nowrap mb-4 text-[#091E42]">New Leave Type</div>
                {/* <div className=" md:text-lg whitespace-nowrap mb-4 text-[#7C8091]">Bio Data</div> */}

                <div className="">
                    <div className="">
                        <Input
                            label="Leave Type"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="type"
                            placeholder="Leave Type"
                        />
                        <div className="py-2 bg-white">
                            <label htmlFor="editor" className="my-1 text-[#0D1227] leading-[19.6px] flex items-center text-left text-xs md:text-sm font-semibold">Leave Description</label>
                            <textarea id="editor" value={article} onChange={(e) => setArticle(e.target.value)} rows={4} className="block w-full rounded-[4px] focus:outline-[#1D8EE6] placeholder:text-base placeholder:font-normal placeholder:text-[#B2B7C2] placeholder:leading-6 px-0 text-sm text-gray-800 bg-white border border-gray-400 focus:ring-0  ring-blue-600" placeholder="Write an article..." required></textarea>
                        </div>
                        <Input
                            label="Eligible"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="password"
                            placeholder=""
                        />
                        <Input
                            label="No of Days"
                            ref={formInput}
                            className="mb-1"
                            type="date"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Leave Rollover"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="password"
                            placeholder="Accountant"
                        />
                        {/* <Input
                            label="Email Address"
                            ref={formInput}
                            className="mb-1"
                            type="email"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Gender"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="password"
                            placeholder="hr@tch.com"
                        /> */}
                    </div>
                    <Input
                        label="Contact Address"
                        ref={formInput}
                        className="mb-1"
                        type="address"
                        name="address"
                        placeholder="12, Adetokunbo Street, VI"
                    />
                   
                    <div className="flex items-center justify-between mt-6">
                        {/* <img src="/detail-facial.svg" alt="" /> */}
                        <div />
                        <div className="flex items-center justify-end gap-x-4 mt-6">
                            <Button
                                type="button"
                                className="!bg-white !border !px-8 flex item-center !text-black"
                                title="Cancel"
                                // onClick={() => useAuth.setState({ activeTab: 0 })}
                                onClick={() => {
                                    setModalDetails(false)
                                    setDeclineRequest(true)
                                }}
                                // suffixIcon={<> <img src="/action-decline.svg" alt="" /></>}
                            />
                            <Button
                                type="button"
                                className="!bg-[#1D8EE6] !text-white !px-8 flex items-center"
                                title="Create"
                                // suffixIcon={<> <img src="/decline-check.svg" alt="" /></>}
                                onClick={() => {
                                    setModalDetails(false)
                                    setAcceptRequest(true)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreateNewLeaveType