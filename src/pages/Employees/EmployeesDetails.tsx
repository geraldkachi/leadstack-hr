import { Dispatch, SetStateAction, useRef } from "react";
import { Button, Input } from "../../components"
interface Props {
    setModalDetails: Dispatch<SetStateAction<boolean>>
}
const EmployeesDetails = ({setModalDetails}: Props) => {
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
                            type="text"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Last Name"
                            ref={formInput}
                            type="text"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Date of Birth"
                            ref={formInput}
                            type="date"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Role"
                            ref={formInput}
                            type="text"
                            name="password"
                            placeholder="Accountant"
                        />
                        <Input
                            label="Email Address"
                            ref={formInput}
                            type="email"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                        <Input
                            label="Gender"
                            ref={formInput}
                            type="text"
                            name="password"
                            placeholder="hr@tch.com"
                        />
                    </div>
                    <Input
                        label="Contact Address"
                        ref={formInput}
                        type="address"
                        name="address"
                        placeholder="12, Adetokunbo Street, VI"
                    />
                    <div className="grid grid-cols-2 gap-x-2">
                        <Input
                            label="LGA"
                            ref={formInput}
                            type="text"
                            name="state"
                            placeholder="Eti-Osa"
                        />
                        <Input
                            label="State"
                            ref={formInput}
                            type="text"
                            name="state"
                            placeholder="Lagos"
                        />
                        <Input
                            label="Country"
                            ref={formInput}
                            type="text"
                            name="text"
                            placeholder="Nigeria"
                        />
                        <Input
                            label="Phone Number"
                            ref={formInput}
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
                            suffixIcon={<> <img src="/action-decline.svg" alt="" /></>}
                            />
                        <Button
                            type="button"
                            className="!bg-[#1D8EE6] !text-white !px-8 flex items-center"
                            title="Approve"
                            suffixIcon={<> <img src="/decline-check.svg" alt="" /></>}
                            onClick={() => setModalDetails(false)}
                            />
                            </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EmployeesDetails