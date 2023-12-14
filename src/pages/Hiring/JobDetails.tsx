import ShareImmg from "./share.svg"
const JobDetails = () => {
    return (
        <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
                <div className="relative flex items-center bg-[#1E1E1E] text-white bg-['linear-gradient(90deg, #1E1E1E 55.35%, #000 66.4%)] px-3 sm:px-8 py-6 sm:py-10 gap-4 rounded-lg">
                    <span className="text-2xl md:text-[38.45px]">WE ARE HIRING</span>

                    <img src="/hire-bell.svg" className="absolute right-0 -bottom-1 sm:bottom-0 pr-10 w-24 h-24 sm:w-[unset] sm:h-[unset]" alt="" />
                </div>



            <div>
                <div className="text-lg font-medium my-5">Job Description</div>
                <div className="text-base my-5">
                    We are looking for a skilled Full Stack Developer to join our team and help us create and maintain cutting-edge software solutions.
                </div>
                <div className="text-lg font-medium">Responsibility</div>
                <ol className="list-decimal ml-10 text-[#61646B] text-base">
                    <li>Collaborate with cross-functional teams to understand project requirements and deliver high-quality software solutions.</li>
                    <li>Design and develop user-friendly and visually appealing front-end applications.</li>
                    <li>Create responsive web applications that work seamlessly on desktop and mobile devices.</li>
                    <li>Develop back-end components and server-side logic to ensure optimal system functionality.</li>
                    <li>Integrate external services and APIs into applications as needed.</li>
                    <li>Optimize applications for maximum speed and scalability.</li>
                    <li>Implement security and data protection in applications.</li>
                    {/* <li></li>
                    <li></li>
                    <li></li>
                    <li></li> */}
                </ol>

                <div className="text-lg font-medium mt-3">Responsibility</div>
                <ol className="list-decimal ml-10 text-[#61646B] text-base">
                    <li>Proven experience as a Full Stack Developer or similar role.</li>
                    <li>Proficiency in front-end technologies, including HTML, CSS, JavaScript, and related frameworks (e.g., React, Angular, or Vue).</li>
                    <li>Strong experience in back-end technologies, such as Node.js, Python, Ruby, or Java.</li>
                    <li>Experience with database systems (SQL and NoSQL databases).</li>
                    <li>Knowledge of web servers and cloud computing platforms.</li>
                    <li>Familiarity with Git and version control systems.</li>
                    <li>Strong problem-solving skills and attention to detail.</li>
                    <li>Excellent communication and teamwork skills.</li>
                    {/* <li></li>
                    <li></li>
                    <li></li> */}
                </ol>
                <div className="text-lg font-medium mt-3">Required Skills</div>
                <div className="text-base text-[#61646B] font-medium mt-3">JavaScript, CSS, React, Angular, Java & any cloud-based programming language will be an additional</div>


                <div className="text-lg font-medium mt-3">Share Openings</div>
                    <img src={ShareImmg} className="mt-3" alt="" />
            </div>
            </div>



        </div>
    )
}

export default JobDetails