import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';

// import BackClose from '../assets/BackClose';

type Types = 'right' | 'left' | 'top' | 'bottom';

interface Props {
	header?: string;
	open?: boolean;
	position?: Types;
	hasBack?: boolean;
	subheader?: string;
	hasClose?: boolean;
	goBack?: () => void;
	children?: ReactNode;
	cancelIcon?: JSX.Element;
	backIcon?: JSX.Element;
	close: Dispatch<SetStateAction<boolean>>;
}
const Drawer = (props: Props) => {
	const {
		open,
		close,
		header,
		goBack,
		children,
		backIcon,
		// subheader,
		position = 'right',
		cancelIcon,
	} = props;

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'visible';
		};
	}, [open]);

	return (
		<div className="mx-auto overflow-y-scroll">
			{open && (
				<div
					className={`mx-auto fixed overflow-hidden bg-black bg-opacity-40 z-40 inset-0 transform ease-in-out m-auto
          `}
				>
					<section
						className={`w-screen max-w-max ${
							position === 'right' ? 'right-0' : 'left-0'
						} absolute bg-white h-full ${
							position === 'right' ? 'rounded-l-2xl' : 'rounded-r-0'
						} shadow-xl duration-500 ease-in-out transition-all transform translate-x-0`}
					>
						<div className="relative flex flex-col space-y-3 overflow-y-scroll h-full">
							<div
								className={`flex items-center p-5 justify-between ${
									backIcon ? 'px-5 py-5' : ''
								}`}
							>
								<span className="cursor-pointer" onClick={goBack}>
									{backIcon}
								</span>
								<span className="cursor-pointer" onClick={() => close(false)}>
									{cancelIcon && cancelIcon}
								</span>
							</div>
							<h1 className="px-5 font-bold text-2xl mt-2 flex -items-center justify-between">
								{header}
							</h1>
							<div className="m-4">{children}</div>
						</div>
					</section>
					<section
						className=" w-screen h-full cursor-pointer"
						onClick={() => close(false)}
					></section>
				</div>
			)}
		</div>
	);
};

export default Drawer;
