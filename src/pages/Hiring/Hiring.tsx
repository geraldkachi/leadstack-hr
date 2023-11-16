import { Button, Tabs } from "../../components"

const Hiring = () => {
  return (
    <div className="h-full pt-3 md:mr-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg md:text-2xl">Recruitment</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>

        <Button className='flex items-center rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Post New Job" />
      </div>


      <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#FFF7E7] rounded-md border-dashed border border-[#FFA800] md:mr-56">
        <img src="/cautionsign.svg" alt="caution" />
        <div>
          <div className='text-[#3F4254] font-bold text-base'>ATTENTION!!!</div>
          <div className='text-[#7E8299] text-sm md:text-base'>Kindly note that job posted is automatically moved to the archive after the expiration dateKindly note that job posted is automatically moved to the archive after the expiration date</div>
        </div>
      </div>


      <Tabs
        data={[
          {
            label: 'Active',
            content: (
              <>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                  <div>
                    <img src="/cardi.svg" alt="" />
                  </div>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>


                <a href="#" className="flex flex-col items-center p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm ">
                  <img className="object-cover w-full" src="/cardi.svg" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">Full Stack Developer...</h5>
                    <div className="flex items-center justify-between">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">20 Applicants</p>
                    </div>
                  </div>
                </a>


              </>
            )
          },
          {
            label: 'Archive',
            content: (
              <>
                "Archive"
              </>
            )
          },
          {
            label: 'Scheduled post',
            content: (
              <>
                "Scheduled post"
              </>
            )
          }
        ]}
      />
    </div>
  )
}

export default Hiring