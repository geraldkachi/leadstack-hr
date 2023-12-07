import { FC } from 'react';
import Select, { Props, ValueType, OptionsType, DropdownIndicatorProps, ClearIndicatorProps, MultiValueRemoveProps, components } from 'react-select';
import { ChevronDownIcon } from "../../assets";
import clsx from 'clsx';


interface ReusableSelectProps {
    options: OptionsType<{ value: string; label: string }>;
    onChange: (selected: ValueType<{ value: string; label: string }>) => void;
    value: ValueType<{ value: string; label: string }>;
    placeholder?: string;
    label?: string;
    error?: string;
    required?: boolean;
    name?: string;
}


const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            <ChevronDownIcon />
        </components.DropdownIndicator>
    );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
    return (
        <components.ClearIndicator {...props}>
            {/* <CloseIcon /> */}
        </components.ClearIndicator>
    );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
    return (
        <components.MultiValueRemove {...props}>
            {/* <CloseIcon /> */}
        </components.MultiValueRemove>
    );
};

const controlStyles = {
    base: "border rounded-lg bg-white hover:cursor-pointer",
    focus: "border-primary-600 ring-1 ring-primary-500",
    nonFocus: "border-gray-300 hover:border-gray-400",
};
const placeholderStyles = "text-gray-500 pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
    "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles =
    "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
    "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
    "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1 mt-2 border border-gray-200 bg-white rounded-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
    base: "hover:cursor-pointer px-3 py-2 rounded",
    focus: "bg-gray-100 active:bg-gray-200",
    selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
    "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];
const ReactSelect: FC<ReusableSelectProps> = ({
    options,
    onChange,
    value,
    placeholder = 'Select an option',
    required,
    error,
    name,
    label,
    // ref
    // ...props

}: ReusableSelectProps) => {
    // const [selectedOption, setSelectedOption] = useState(null);
    // const handleChange = (selected) => {
    //     setSelectedOption(selected);
    //   };

    return (
        <div>
            {label && <label className='text-sm mb-1' htmlFor={name}>{label}</label>}
            <br />
            <Select
                // components={{ DropdownIndicator }}
                defaultValue={value}
                value={value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                required={required}
                // isMulti
                // closeMenuOnSelect={false}
                // hideSelectedOptions={false}
                // unstyled
                styles={{
                    input: (base) => ({
                        ...base,
                        "input:focus": {
                            border: 0, // Remove the border
                            boxShadow: 'none', // Remove the box shadow
                            width: 0
                        },
                    }),
                    // On mobile, the label will truncate automatically, so we want to
                    // override that behaviour.
                    multiValueLabel: (base) => ({
                        ...base,
                        whiteSpace: "normal",
                        overflow: "visible",
                    }),
                    control: (base) => ({
                        ...base,
                        transition: "none",
                        // border: 'none', // Remove the border
                        boxShadow: 'none', // Remove the box shadow
                        // padding: 10,
                        // margin: 0,
                        // marginLeft: 0,
                        // border: "0px solid black",
                        fontSize: 13,
                        // backgroundColor: 'white',
                        // outline: 'none'
                    }),
                }}
                components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
                classNames={{
                    control: ({ isFocused }) =>
                        clsx(
                            isFocused ? controlStyles.focus : controlStyles.nonFocus,
                            controlStyles.base,
                        ),
                    placeholder: () => placeholderStyles,
                    input: () => selectInputStyles,
                    valueContainer: () => valueContainerStyles,
                    singleValue: () => singleValueStyles,
                    multiValue: () => multiValueStyles,
                    multiValueLabel: () => multiValueLabelStyles,
                    multiValueRemove: () => multiValueRemoveStyles,
                    indicatorsContainer: () => indicatorsContainerStyles,
                    clearIndicator: () => clearIndicatorStyles,
                    indicatorSeparator: () => indicatorSeparatorStyles,
                    dropdownIndicator: () => dropdownIndicatorStyles,
                    menu: () => menuStyles,
                    groupHeading: () => groupHeadingStyles,
                    option: ({ isFocused, isSelected }) =>
                        clsx(
                            isFocused && optionStyles.focus,
                            isSelected && optionStyles.selected,
                            optionStyles.base,
                        ),
                    noOptionsMessage: () => noOptionsMessageStyles,
                }}
            // @ts-ignore
            // {...props}
            />
            {error && (<span className="text-[10px]">{error}</span>)}
        </div>
    )
}

export default ReactSelect






//     return (
//         <div>
//             {label && <label htmlFor={name}>{label}</label>}
//             <br />
//             <Select
//                 {...{ onChange }}
//                 id={name}
//                 {...{ value }}
//                 {...{ name }}
//                 defaultValue={value}
//                 {...{ required }}
//                 // {....{placeholder}}
//             classNamePrefix="react-select"
//             options={options}
//                 // {...{ ref }}

//             // isMulti
//             // closeMenuOnSelect={false}
//             // hideSelectedOptions={false}
//             // unstyled
//             styles={{
//                 input: (base) => ({
//                     ...base,
//                     "input:focus": {
//                         boxShadow: "none",
//                     },
//                 }),
//                 // On mobile, the label will truncate automatically, so we want to
//                 // override that behaviour.
//                 multiValueLabel: (base) => ({
//                     ...base,
//                     whiteSpace: "normal",
//                     overflow: "visible",
//                 }),
//                 control: (base) => ({
//                     ...base,
//                     transition: "none",
//                 }),
//             }}
//             components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
//             // classNames={{
//             //     control: ({ isFocused, error }) =>
//             //         clsx(
//             //             isFocused ? controlStyles.focus : controlStyles.nonFocus,
//             //             controlStyles.base,
//             //             error && error,
//             //         ),
//             //     placeholder: () => placeholderStyles,
//             //     input: () => selectInputStyles,
//             //     valueContainer: () => valueContainerStyles,
//             //     singleValue: () => singleValueStyles,
//             //     multiValue: () => multiValueStyles,
//             //     multiValueLabel: () => multiValueLabelStyles,
//             //     multiValueRemove: () => multiValueRemoveStyles,
//             //     indicatorsContainer: () => indicatorsContainerStyles,
//             //     clearIndicator: () => clearIndicatorStyles,
//             //     indicatorSeparator: () => indicatorSeparatorStyles,
//             //     dropdownIndicator: () => dropdownIndicatorStyles,
//             //     menu: () => menuStyles,
//             //     groupHeading: () => groupHeadingStyles,
//             //     option: ({ isFocused, isSelected }) =>
//             //         clsx(
//             //             isFocused && optionStyles.focus,
//             //             isSelected && optionStyles.selected,
//             //             optionStyles.base,
//             //         ),
//             //     noOptionsMessage: () => noOptionsMessageStyles,
//             // }}
//             // @ts-ignore
//             // {...props}
//             />
//             {/* {error && (<span>{error}</span>)} */}
//         </div>
//     )
// }

// export default ReactSelect