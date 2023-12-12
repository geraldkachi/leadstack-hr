import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

const Spinner = () =>
    <div className=" flex items-center justify-center px-10 py-[2px]">
        <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin border-[#ffffff]" />
    </div>

type Props = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    icon?: string;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'secondary-outline';
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    children?: ReactNode
};

const variants = {
    primary: 'bg-[#3699FF] text-white hover:bg-blue-2 border-none hover:bg-[#0080ff] text-xs md:text-sm py-3 md:py-2 px-2 md:px-6',
    secondary: 'bg-red text-white hover:bg-red-1 border-none',
    link: 'bg-none text-blue hover:bg-white-azure border-none',
    outline:
        'bg-white text-blue hover:bg-white-azure border-blue disabled:border-grey-beau',
    "secondary-outline":
        'bg-transparent text-red hover:bg-red hover:text-white border-red disabled:border-grey-beau'
};

const sizes = {
    sm: 'text-xs md:text-sm py-3 md:py-2 px-2 md:px-6 min-w-40',
    md: 'p-2 px-10 -w-152',
    lg: 'p-3 px-10 -w-196'
};


const Button = ({
    children,
    loading,
    disabled,
    title,
    className,
    size = 'lg',
    type = 'button',
    variant = 'primary',
    prefixIcon = null,
    suffixIcon = null,
    ...rest
}: Props) => {
    return (
        <button {...rest}
            type={type}
            disabled={disabled || loading}
            className={`flex items-center text-xs md:text-sm py-3 md:py-2 px-2 md:px-6 hover:bg-[#0080ff] rounded-[4px] disabled:bg-grey border disabled:text-gray-50 whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className} ${loading && 'py-3 md:py-4 px-8 md:px-12 bg-[#EEF5FC] text-[#ABBED1]'}`}>
            {prefixIcon && (<> {prefixIcon}&nbsp;&nbsp;</>)}
            {loading ? <Spinner /> : <>{title || children}</>}
            {suffixIcon && (<> &nbsp;&nbsp;{suffixIcon}</>)}
        </button>
    )
}

export default Button
