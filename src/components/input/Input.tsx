{/* <form className="flex items-center">   
    <label className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
            </svg>
        </div>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search Mockups, Logos, Design Templates..." required />
        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
            </svg>
        </button>
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
</form> 

	className={`relative  flex items-center w-full rounded-[4px] overflow-hidden border border-[#DEDFE focus-within:border-[#DEDEC] disabled:bg-grey read-only:bg-grey 
                borderrrrr-${col()}
                ${(disabled || readOnly) && 'bg-grey border-none'
					}`}

*/}

import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type Props = {
	label?: string;
	tooltip?: string;
	helptext?: string;
	inputClassName?: string;
	LeadingIcon?: () => JSX.Element;
	TrailingIcon?: () => JSX.Element;
	// innerRef?: any;
	inputType?: 'default' | 'success' | 'warning' | 'error';
	inputClass?: string;
	labelClass?: string;
	labelicon?: boolean;
};

export default function Input(
	props: DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> &
		Props
) {
	const {
		id,
		label,
		tooltip,
		disabled,
		readOnly,
		helptext,
		// innerRef,
		className,
		LeadingIcon,
		TrailingIcon,
		inputClassName,
		inputType = 'default'
	} = props;

	const col = () => {
		let color= `red-600` ;

		if (inputType === 'success') {
			color = 'green-500';
		} else if (inputType === 'warning') {
			color = 'yellow-500';
		} else if (inputType === 'error') {
			color = 'red-500';
		}

		return color;
	};

	return (
		<div className={`bg-  ${className}`}>
			{label && (
				<label
					className="my-1 text-[#0D1227] leading-[19.6px] flex items-center text-left text-xs md:text-sm font-semibold"
					htmlFor={id}
				>
					{label}
				{tooltip && (
						<span className='text-black'>
						
							{/* <Icon
								icon="info-circle"
								{...labelIconProps}
								className={`inline-block ml-2 ${labelIconProps?.className}`}
							/> */}
						</span>
					)}
				</label>
			)}
			<div
				className={`relative w-full flex items-center overflow-hidden  focus-within:border-[#DEDEC disabled:bg-grey read-only:bg-grey
                ${(disabled || readOnly) && 'bg-grey border-none'
					}`}
			>
				{LeadingIcon && (
					<span className="ml-2 absolute ">
						<LeadingIcon />
					</span>
				)}
				<input
					// {...innerRef}
					{...props}
					// className={`text-base p-2 flex-grow min-w-64 focus:outline-none focus:ring focus:border-blue-100`}
					// className={`${LeadingIcon && 'ps-10'} ${TrailingIcon && 'pe-0 me-0'} border-${col()} border w-full p-3 rounded-[4px] focus:outline-[#3699FF] placeholder:text-base placeholder:font-normal placeholder:leading-6 ${inputClassName}`}
					className={`${LeadingIcon && 'ps-10'} ${TrailingIcon && 'pe-0 me-0'} border-${col()} border w-full p-3 rounded-[4px] focus:outline-[#1D8EE6] placeholder:text-base placeholder:font-normal placeholder:text-[#B2B7C2] placeholder:leading-6 ${inputClassName}`}
				/>
				{TrailingIcon && (
					<span className="absolute inset-y-0 end-0 flex items-center pe-1 cursor-pointer">
						<TrailingIcon />
					</span>
				)}
			</div>
			{helptext && (
				<small className={`text-xs my-2 text-${col()}`}>{helptext}</small>
			)}
		</div>
	);
}
