import { FormEvent, KeyboardEventHandler, useState } from "react";
import "./styles.css"

const InvisteUsersForm = () => {
    const [tags, setTags] = useState<string[]>([]);
    const addTag = (e: FormEvent<KeyboardEventHandler<HTMLInputElement>>) => {
        //@ts-ignoret
        if (e.key === "Enter") {
            if ((e.target as HTMLInputElement).value.length > 0) {
                e.preventDefault();
                setTags([...tags, (e.target as HTMLInputElement).value]);
                (e.target as HTMLInputElement).value = "";
            }
        }
    };
    const removeTag = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTags([])
    }
    return (

        <form className='bg-white p-1 h-1/2 rounded-md' onSubmit={HandleSubmit}>

            <label className="block text-[#0D1227] mt-5">Employee Email Address</label>
            <div className="tag-container">
                {tags.map((tag, index) => {
                    return (
                        <div key={index} className="tag">
                            {tag} <span className="text-[#516CF5] font-bold" onClick={() => removeTag(tag)}>x</span>
                        </div>
                    );
                })}

                {/* <Input required className="input" type="email" placeholder="Type or paste email addresses and press `Enter`..." onKeyDown={addTag} /> */}
                <div className="w-full">
                    {/* @ts-ignore */}
                    <input type="email" placeholder="Type or paste email addresses and press `Enter`..." onKeyDown={addTag} />
                </div>
            </div>
            <div className="my-3 flex items-center gap-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 12C20.5376 12 23 14.4624 23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12ZM17.5 13.9992L17.4101 14.0073C17.206 14.0443 17.0451 14.2053 17.0081 14.4094L17 14.4992L16.9996 16.9992L14.4977 17L14.4078 17.0081C14.2037 17.0451 14.0427 17.206 14.0057 17.4101L13.9977 17.5L14.0057 17.5899C14.0427 17.794 14.2037 17.9549 14.4078 17.9919L14.4977 18L17.0007 17.9992L17.0011 20.5035L17.0092 20.5934C17.0462 20.7975 17.2071 20.9584 17.4112 20.9954L17.5011 21.0035L17.591 20.9954C17.7951 20.9584 17.956 20.7975 17.9931 20.5934L18.0011 20.5035L18.0007 17.9992L20.5046 18L20.5944 17.9919C20.7985 17.9549 20.9595 17.794 20.9965 17.5899L21.0046 17.5L20.9965 17.4101C20.9595 17.206 20.7985 17.0451 20.5944 17.0081L20.5046 17L17.9996 16.9992L18 14.4992L17.9919 14.4094C17.9549 14.2053 17.794 14.0443 17.5899 14.0073L17.5 13.9992ZM14.254 10C15.0886 10 15.817 10.4543 16.2054 11.1292C15.672 11.2368 15.1631 11.4096 14.6865 11.6388C14.5649 11.551 14.4154 11.5 14.254 11.5H9.75193C9.33771 11.5 9.00193 11.8358 9.00193 12.25V16.499C9.00193 17.9099 9.97558 19.0934 11.2876 19.4142C11.4604 19.9798 11.7097 20.5128 12.0226 21.0012L12.003 21C9.51712 21 7.50193 18.9848 7.50193 16.499V12.25C7.50193 11.0074 8.50929 10 9.75193 10H14.254ZM7.40645 10.0003C7.01178 10.4116 6.72427 10.9266 6.58881 11.5003L4.25 11.5C3.83579 11.5 3.5 11.8358 3.5 12.25V14.9988C3.5 16.3802 4.61984 17.5 6.00124 17.5C6.20123 17.5 6.39574 17.4765 6.58216 17.4322C6.66687 17.9361 6.82156 18.4167 7.03487 18.864C6.70577 18.953 6.35899 19 6.00124 19C3.79142 19 2 17.2086 2 14.9988V12.25C2 11.0591 2.92516 10.0844 4.09595 10.0052L4.25 10L7.40645 10.0003ZM19.75 10C20.9926 10 22 11.0074 22 12.25L22.0008 12.8104C20.8328 11.6891 19.2469 11 17.5 11L17.2548 11.0045C17.101 10.6291 16.8767 10.2892 16.5995 10.0003L19.75 10ZM18.5 4C19.8807 4 21 5.11929 21 6.5C21 7.88071 19.8807 9 18.5 9C17.1193 9 16 7.88071 16 6.5C16 5.11929 17.1193 4 18.5 4ZM12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3ZM5.5 4C6.88071 4 8 5.11929 8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4ZM18.5 5.5C17.9477 5.5 17.5 5.94772 17.5 6.5C17.5 7.05228 17.9477 7.5 18.5 7.5C19.0523 7.5 19.5 7.05228 19.5 6.5C19.5 5.94772 19.0523 5.5 18.5 5.5ZM12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5ZM5.5 5.5C4.94772 5.5 4.5 5.94772 4.5 6.5C4.5 7.05228 4.94772 7.5 5.5 7.5C6.05228 7.5 6.5 7.05228 6.5 6.5C6.5 5.94772 6.05228 5.5 5.5 5.5Z" fill="#535768" />
                </svg>

                <span>Invite “Anyone”</span>
            </div>
            <div className="flex items-center justify-end mt-5">
                {/* <Button type="submit" size='md'>Send Invite</Button> */}
            </div>
        </form>
    )
}

export default InvisteUsersForm