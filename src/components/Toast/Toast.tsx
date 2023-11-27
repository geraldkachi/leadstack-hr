import { useEffect } from 'react';

interface Props {
    message: string
    show: boolean
    onClose: () => void
}
const Toast = ({ message, show, onClose }: Props) => {
    useEffect(() => {
        // Automatically close the toast after 6 seconds
        const timeout = setTimeout(() => {
            onClose();
        }, 6000);

        // Clear the timeout when the component is unmounted or toast is closed manually
        return () => clearTimeout(timeout);
    }, [show, onClose]);

    return (
        <div className={`fixed z-[9999px] top-4 right-4 bg-green-200 text-white p-4 px-8 rounded ${show ? 'block' : 'hidden'}`}>
            {message}
        </div>
    );
};

export default Toast;