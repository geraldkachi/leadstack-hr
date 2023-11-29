import React from "react";
import { toast } from "react-toastify";
// import { toastMessage } from "../../entities";
// import { generateId } from "../../utils";
// const id = generateId();

interface PropTypes {
    label?: string;
    value?: string;
    onChange?: () => void;
    placeholder?: string;
    required?: boolean;
    options?: string[] | { name: string; value: string }[];
    disabled?: boolean;
    canNotEdit?: boolean;
    // selectedOption?: string;
    className?: string
}
const Select = ({
    label = "",
    placeholder = "Select",
    value,
    required = true,
    onChange = () => {},
    options = [],
    disabled = false,
    canNotEdit = false,
    // selectedOption,
    className
}: PropTypes) => {
    return (
        <div className={`flex flex-col ${disabled && "opacity-60"}`}>
            <label className="my-1 text-[#0D1227] leading-[19.6px] flex items-center text-left text-sm font-semibold">
                {label}
            </label>
            <div
                onClick={
                    disabled && canNotEdit
                        // ? () => toastMessage("contact support@ezeevoucher.com", "error")
                        ? () => toast.error("error")
                        : () => { }
                }
                className="  text-sm md:text-base"
            >
                <select
                    value={value}
                    defaultValue={value}
                    //   id={id}  
                    disabled={disabled}
                    // @ts-ignore
                    onChange={(e:  React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value) || onChange}
                    className={`${className}  border border-[#DEDFE]  w-full p-3 rounded-[4px] focus:outline-[#3699FF] placeholder:text-[#7C8091] placeholder:text-base placeholder:font-normal placeholder:leading-6 bg-white`}
                    required={required}
                >
                    <option value="" className="text-[#7C8091]" disabled>
                        {placeholder || "Select"}
                    </option>
                    {options.map(
                        (
                            option: string | { name: string; value: string },
                            optionIndex: number
                        ) => (
                            <option
                                // key={`${id}-option_${optionIndex}`}
                                className="p-4 bg-red-600"
                                key={`-option_${optionIndex}`}
                                value={typeof option === "string" ? option : option.value}
                            >
                                {typeof option === "string" ? option : option.name}
                            </option>
                        )
                    )}
                </select>
            </div>
        </div>
    );
};

export default Select;