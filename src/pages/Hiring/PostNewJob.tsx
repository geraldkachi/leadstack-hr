import { useState } from "react";
import { ReactSelect } from "../../components";
import { ValueType } from 'react-select';

const PostNewJob = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [selectedOption, setSelectedOption] = useState<
        ValueType<{ value: string; label: string }>
    >(null);
    const handleChange = (selected) => {
        setSelectedOption(selected);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Access the selected file from the event
        const file = event.target.files?.[0];

        // Do something with the selected file (e.g., store it in state)
        //@ts-ignore
        setSelectedFile(file);

        // You can also perform additional actions, such as uploading the file to a server
        // Example: uploadFileToServer(file);
    };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
                <div className="upload max-w-md">
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-32 md:h-48 border-2 border[#DEDFEC] border-dashed rounded-lg cursor-pointer`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <img src="/upload.svg" alt="" />

                                <p className="mb-2 text-xs md:text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Drag your file here,</span> <span className="text-[]">or browse</span></p>
                                <p className="text-[10px] sm:text-xs text-[#BAC3D2]">supports: JPEG, PNG, PDF not more than 3MB</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
                    {/* Display the selected file name */}
                    <div className="rounded-lg my-5">
                        {selectedFile &&
                            <div className="bg-[#72bf8b0d] border-[#1de653f1]  bg-white border border-d rounded-lg p-3 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-x-2">
                                    <div className="flex items-center gap-x-2">
                                    </div>
                                    <div>
                                        {selectedFile && <div className="text-[13px] text-[#272848]">img.{selectedFile.name}</div>}
                                        <div className="text-[#94A0B4] text-[10px] ">100%  • <span>Click to View</span></div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-2">

                                    <img src="/uploaddelete.svg" className="cursor-pointer" alt="" onClick={() => setSelectedFile(null)} />
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <ReactSelect label="Options" options={options} placeholder="Select Options Now!!" value={selectedOption} onChange={handleChange}  required/>

            </div>
            <div className="md:col-span-2"></div>
        </div>
    )
}

export default PostNewJob