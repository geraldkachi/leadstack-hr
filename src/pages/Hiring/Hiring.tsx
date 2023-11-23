import { Button, Tabs } from "../../components"

const Hiring = () => {
  return (
    <div className="h-full pt-3">
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
                <a href="#" className="flex flex-col gap-2 items p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/cardi.svg" alt="" />
                  <div className="flex flex-col  p-4 leading-normal">
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">Full Stack Developer...</h5>
                    <div className="flex items-center justify-between whitespace-nowrap">
                      <p className="mb-3 font-normal text-gray-700 text-sm">20 Applicants</p>
                      <p className="mb-3 font-normal text-gray-700 text-sm">Expiry Date: Oct 31, 2023</p>
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