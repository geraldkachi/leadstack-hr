import { Dispatch, SetStateAction, useRef } from "react";
import { Button, Input } from "../../components"
interface Props {
    setModalDetails: Dispatch<SetStateAction<boolean>>
    setAcceptRequest: Dispatch<SetStateAction<boolean>>
    setDeclineRequest: Dispatch<SetStateAction<boolean>>
}
const EmployeesDetails = ({ setModalDetails, setAcceptRequest, setDeclineRequest }: Props) => {
    const formInput = useRef<HTMLInputElement>(null);

    return (
        <form>
            <div className="bg-white rounded-lg">
                <div className="text-base md:text-[27px] whitespace-nowrap mb-4 text-[#091E42]">Employee’s Details</div>
                <div className=" md:text-lg whitespace-nowrap mb-4 text-[#7C8091]">Bio Data</div>

                <div className="">
                    <div className="grid grid-cols-2 gap-x-2">
                        <Input
                            label="First Name"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Last Name"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Date of Birth"
                            ref={formInput}
                            className="mb-1"
                            type="date"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Role"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="password"
                            placeholder="Accountant"
                        />
                        <Input
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
                        />
                    </div>
                    <Input
                        label="Contact Address"
                        ref={formInput}
                        className="mb-1"
                        type="address"
                        name="address"
                        placeholder="12, Adetokunbo Street, VI"
                    />
                    <div className="grid grid-cols-2 gap-x-2">
                        <Input
                            label="LGA"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="state"
                            placeholder="Eti-Osa"
                        />
                        <Input
                            label="State"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="state"
                            placeholder="Lagos"
                        />
                        <Input
                            label="Country"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="text"
                            placeholder="Nigeria"
                        />
                        <Input
                            label="Phone Number"
                            ref={formInput}
                            className="mb-1"
                            type="text"
                            name="number"
                            placeholder="7012 346 1293"
                        />

                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <img src="/detail-facial.svg" alt="" />
                        <div className="flex items-center justify-end gap-x-4 mt-6">
                            <Button
                                type="button"
                                className="!bg-white !border !border-[#E01507] !text-[#E01507] !px-8 flex item-center"
                                title="Decline"
                                // onClick={() => useAuth.setState({ activeTab: 0 })}
                                onClick={() => {
                                    setModalDetails(false)
                                    setDeclineRequest(true)
                                }}
                                suffixIcon={<> <img src="/action-decline.svg" alt="" /></>}
                            />
                            <Button
                                type="button"
                                className="!bg-[#1D8EE6] !text-white !px-8 flex items-center"
                                title="Approve"
                                suffixIcon={<> <img src="/decline-check.svg" alt="" /></>}
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

export default EmployeesDetails