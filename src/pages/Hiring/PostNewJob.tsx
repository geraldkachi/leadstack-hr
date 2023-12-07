import { useState, useRef } from "react";
import { Button, Input, ReactSelect } from "../../components";
import { ValueType } from 'react-select';

const PostNewJob = () => {
    const formInput = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [article, setArticle] = useState<string>(`We are looking for a skilled Full Stack Developer to join our team and help us create and maintain cutting-edge software solutions. \n  Collaborate with cross-functional teams to understand project requirements and deliver high-quality software solutions.
    Design and develop user-friendly and visually appealing front-end applications.
    Create responsive web applications that work seamlessly on desktop and mobile devices.
    Develop back-end components and server-side logic to ensure optimal system functionality.
    Integrate external services and APIs into applications as needed.
    Optimize applications for maximum speed and scalability.
    Implement security and data protection in applications.
    Perform code reviews and address code-related issues to ensure code quality.
    Stay up to date with industry trends and emerging technologies to drive innovation.
    Troubleshoot, debug, and resolve software defects and issues.`);

    const [selectedOption, setSelectedOption] = useState<
        ValueType<{ value: string; label: string }>
    >(null);
    const handleChange = (selected: ValueType<{ value: string; label: string }>) => {
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

                <div className="bg-white p-4">
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

                    <div className="my-3">
                        <ReactSelect label="Options" options={options} placeholder="Select Options Now!!" value={selectedOption} onChange={handleChange} required />
                    </div>
                    <form>
                        <div className="w-full mb-4 border border-[#AFB1B6] rounded-lg bg-gray-50">
                            <div className="flex items-center justify-between px-3 py-2 border-b">
                                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse ">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                            </svg>
                                            <span className="sr-only">Attach file</span>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                            <span className="sr-only">Embed map</span>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                            </svg>
                                            <span className="sr-only">Upload image</span>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                            </svg>
                                            <span className="sr-only">Format code</span>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                                            </svg>
                                            <span className="sr-only">Add emoji</span>
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                                            </svg>
                                            <span className="sr-only">Add list</span>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                                            </svg>
                                            <span className="sr-only">Settings</span>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                                <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                                            </svg>
                                            <span className="sr-only">Timeline</span>
                                        </button>
                                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                            </svg>
                                            <span className="sr-only">Download</span>
                                        </button>
                                    </div>
                                </div>
                                <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-200">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                                    </svg>
                                    <span className="sr-only">Full screen</span>
                                </button>
                                <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Show full screen
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-white rounded-b-lg">
                                <label htmlFor="editor" className="sr-only">Publish post</label>
                                <textarea id="editor" value={article} onChange={(e) => setArticle(e.target.value)} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0" placeholder="Write an article..." required></textarea>
                            </div>
                        </div>
                        {/* <Button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-whit rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Publish post
                    </Button> */}

                        <div className="my-3">
                            <ReactSelect
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOption
                                unstyled
                                label="Required Skills *" error="" options={options} placeholder="Required Skill" value={selectedOption} onChange={handleChange} required />
                        </div>

                        <div className="grid grid-cols-2 gap-x-2">
                            <Input
                                label="Job Type (Optional)"
                                ref={formInput}
                                className="mb-1"
                                type="text"
                                name="job"
                                placeholder="Part Time"
                            />
                            <Input
                                label="Salary Budget Range (Optional)"
                                ref={formInput}
                                className="mb-1"
                                type="text"
                                name="salary"
                                placeholder="NGN 350,000 - NGN 450,000"
                            />
                        </div>


                        <div className="flex items-center justify-end mt-5 gap-2">
                            <Button className='!px-6' title='Preview' onClick={() => null} />
                            <Button style={{border: '1px solid #1D8EE6'}} className='!px-6 !bg-white !border !border-[#1D8EE6] !text-[#1D8EE6]' title='Save' onClick={() => null} />
                        </div>
                    </form>
                </div>


            </div>
            <div className="md:col-span-2">
                <div className="bg-white p-4">
                    <div className="break-words text-[#0D1227]">
                        <div className="text-lg md:text-2xl"> Configuration</div>
                        <div className="text-[#0D1227] text-[13px] my-2">Drag and Drop on the form area  </div>

                        <div className="flex items-center flex-wrap text-sm gap-2 text-[10px] text-[#AFB1B6]">
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Text Field</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Paragraph</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Video</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Hyper Link</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Images</span>
                            {/* <span className="border p-2"></span> */}
                        </div>
                    </div>

                    <div className="break-words text-[#0D1227]">
                        <div className="text-[#0D1227] text-[13px] my-2">Drag and Drop on the form area  </div>

                        <div className="flex items-center flex-wrap text-sm gap-2 text-[10px] text-[#AFB1B6]">
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Text Field</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Paragraph</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Video</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Hyper Link</span>
                            <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Images</span>
                            {/* <span className="border p-2"></span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PostNewJob