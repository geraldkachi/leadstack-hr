// import { useState } from "react"
// import { Button, Input } from ".."

const CustomerSupport = () => {
    // const [message, setMessage] = useState<string>('')
    // const [phone, setPhone] = useState<string>('')
    return (
        <div className="flex flex-col items-start justify-start list-none bottom-24 opacity-100 absolute  right-4 md:right-10 md-right20 bg-white  transition-all shadow-3xl rounded-md min-w-[350px] md:max-w-[350px] z-20 ">
            <div className="tet rounded-t-lg bg-[#3699FF] p-8  w-full"></div>
            {/* <Input type="text" label="Message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Drop your complains here! Thanks" className="mt-5 w-full" />
            <Input type="text" label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Drop your Phone Numbere here! Thanks" className="mt-5 w-full" />
        <Button type="submit" className="w-full mt-5">Send</Button> */}

            <div className="w-full p-4">
                Chat  Bot
            </div>
            <div className="tet rounded-b-lg bg-[#ffffffff] p-8  w-full"></div>
        </div>
    )
}

export default CustomerSupport