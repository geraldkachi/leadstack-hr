import BarChart from "./BarChart"
import DonutChart from "./DonutChart"
import SplineAreaChart from "./SplineAreaChart"

const data = [
  {
    title: 'Jese Leos',
    leaves: "20 Leaves",
  },
  {
    title: 'Jese Leos',
    leaves: "5 Leaves",
  },
  {
    title: 'Jese Leos',
    leaves: "4 Leaves",
  },
  {
    title: 'Jese Leos',
    leaves: "0 Leaves",
  },
  {
    title: 'Jese Leos',
    leaves: "3 Leaves",
  }
]
const Overview = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-8 md:gap-4">
        <div className="md:col-span-6 gap-2 h-max">
          <div className="flex items-center justify-between py-3">
            <span className="tex dark:text-[#ffffff]">Leave Summary</span>

            <span></span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-3 h-max">
            <a className="col-span-1 flex flex-col items-start bg-white dark:bg-[#242728] rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
              <div className="text-lg md:text-4xl dark:text-[#ffffff] text-[rgb(13,18,39)]">234</div>
              <div className="flex items-center my-3">
                <div className="h-4 w-4 rounded-full bg-[#1D8EE6]"></div>
                <span className="text-sm text-[#7C8091] ml-2">Total</span>
              </div>
            </a>
            <a className="col-span-1 flex flex-col items-start bg-white dark:bg-[#242728] rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
              <div className="text-lg md:text-4xl dark:text-[#ffffff] text-[rgb(13,18,39)]">20</div>
              <div className="flex items-center my-3">
                <div className="h-4 w-4 rounded-full bg-[#FFB240]"></div>
                <span className="text-sm text-[#7C8091] ml-2">Pending</span>
              </div>
            </a>
            <a className="col-span-1 flex flex-col items-start bg-white dark:bg-[#242728] rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
              <div className="text-lg md:text-4xl dark:text-[#ffffff] text-[rgb(13,18,39)]">160</div>
              <div className="flex items-center my-3">
                <div className="h-4 w-4 rounded-full bg-[#1EAA79]"></div>
                <span className="text-sm text-[#7C8091] ml-2">Approved</span>
              </div>
            </a>
            <a className="col-span-1 flex flex-col items-start bg-white dark:bg-[#242728] rounded-md shadow md:flex- md:max-w-xl hover:bg-slate-50 p-4 md:p-5">
              <div className="text-lg md:text-4xl dark:text-[#ffffff] text-[rgb(13,18,39)]">84</div>

              <div className="flex items-center my-3">
                <div className="h-4 w-4 rounded-full bg-[#FF5A4F]"></div>
                <span className="text-sm text-[#7C8091] ml-2">Rejected</span>
              </div>
            </a>

          </div>

          <div className="flex items-center justify-between py-3">
            <span className="tex dark:text-[#ffffff]">By Leave Type</span>

            <span></span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-3 h-max">
            <a className="relative col-span-1 flex flex-col items-center bg-white dark:bg-[#242729] rounded-md shadow md:flex-row md:max-w-xl hover:bg-slate-50">
              <div className="absolute top-0 right-0 m-1 text-xs bg-[#1EAA7933] text-[#1EAA79] rounded-[4px] px-1 py-[2px] w-max">Active</div>
              <div className="w-full md:w-max p-4 h-full flex items-center justify-center rounded-s-xl bg-[#fff7ec]">
                16 <br />
                days
              </div>

              <div className="col-span-1 flex flex-col justify-between p-4 leading-norma w-full">
                {/* <div className=" flex items-center justify-between">

                  <span></span>
                </div> */}
                <h5 className="flex items-center mb-2 text-2xl dark:text-[#ffffff] font-bold tracking-tight whitespace-nowrap">Casual &nbsp;<img src="/casualicon.svg" alt="" /> </h5>
                <p className="mb-3 font-normal text-[#7C8091] text-[10px] md:text-sm wh whitespace-nowrap">Currently on:</p>
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                </div>
              </div>
            </a>

            <a className="relative flex flex-col items-center bg-white dark:bg-[#242729] rounded-md shadow md:flex-row md:max-w-xl hover:bg-slate-50">
            <div className="absolute top-0 right-0 m-1 text-xs bg-[#E0150733] text-[#E01507] rounded-[4px] px-1 py-[2px] w-max">Inactive</div>

              <div className="w-full md:w-max p-4 h-full flex items-center justify-center rounded-s-xl bg-[#D6F5F3]">
                20 <br />
                days
              </div>

              <div className="flex flex-col justify-between p-4 leading-norma w-full">
                <h5 className="mb-2 text-2xl dark:text-[#ffffff] font-bold tracking-tight whitespace-nowrap">Annual 🎉</h5>
                <p className="mb-3 font-normal text-[#7C8091] text-[10px] md:text-sm wh whitespace-nowrap">Currently on:</p>

                <div className="mt-5 text-xs  text-[#BFBFBF]">No one is currently on this leave</div>
              </div>
            </a>

            <a className="relative col-span-1 flex flex-col items-center bg-white dark:bg-[#242729] rounded-md shadow md:flex-row md:max-w-xl hover:bg-slate-50">
            <div className="absolute top-0 right-0 m-1 text-xs bg-[#1EAA7933] text-[#1EAA79] rounded-[4px] px-1 py-[2px] w-max">Active</div>

              <div className="w-full md:w-max p-4 h-full flex items-center justify-center rounded-s-xl bg-[#D1E3FF]">
                90 <br />
                days
              </div>

              <div className="flex flex-col justify-between p-4 leading-norma w-full">
                <h5 className="flex items-center mb-2 text-2xl dark:text-[#ffffff] font-bold tracking-tight whitespace-nowrap">Maternity  &nbsp;<img src="/casualicon.svg" alt="" /></h5>
                <p className="mb-3 font-normal text-[#7C8091] text-[10px] md:text-sm wh whitespace-nowrap">Currently on:</p>
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                  <img className="w-10 h-10 rounded-full" src="/asian-face.svg" alt="" />
                </div>
              </div>
            </a>
          </div>


          <div className="grid lg:grid-cols-2 gap-8 my-4">
            <DonutChart />
            <div className="rounded-lg bg-white dark:bg-[#242729] p-3">
              {data.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 p-2">
                  <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full" src="/face.svg" alt="" />
                    <div className="font-medium">
                      <div className="text-sm text-gray-500 dark:text-[#ffffff]">{item.title}</div>
                      {/* <div className="text-sm text-gray-500">Joined in August 2014</div> */}
                    </div>
                  </div>
                  <span className="text-sm text-[#0D1227] dark:text-[#ffffff]">{item.leaves}</span>
                </div>
              ))}
            </div>
          </div>

          <BarChart />

          <div className="flex items-center justify-between gap-4 my-3 md:my-8">
            <span className="text-xl text-[#0D1227] font-semibold leading-[27.24px]">Leave Trends</span>

            <span></span>
          </div>


          <SplineAreaChart />

        </div>
        <div className="md:col-span-2">
          <div className="rounded-lg bg-white dark:bg-[#242729] p-3">
            {data.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 p-2">
                <div className="flex items-center gap-3">
                  <img className="w-10 h-10 rounded-full" src="/face.svg" alt="" />
                  <div className="font-medium">
                    <div className="text-sm text-gray-500 dark:text-[#ffffff]">{item.title}</div>
                    {/* <div className="text-sm text-gray-500">Joined in August 2014</div> */}
                  </div>
                </div>
                <span className="text-sm text-[#0D1227] dark:text-[#ffffff]">{item.leaves}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}
// https://github.com/leadstacks/leadstackhr_frontend.git
// https://github.com/geraldkachi/leadstack-hr.git

export default Overview

{/* <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="Base__Svg-sc-ta5t7f-0 icon--stroke"><line x1="1.75" y1="2.75" x2="14.25" y2="2.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></line><line x1="1.75" y1="7.75" x2="14.25" y2="7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></line><line x1="1.75" y1="12.75" x2="14.25" y2="12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></line></svg> */ }
// _deolahhhh  ticktik
