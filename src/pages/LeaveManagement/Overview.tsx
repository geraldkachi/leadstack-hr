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
      <div className="grid lg:grid-cols-2">
        <DonutChart />
        <div>
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between gap-4 bg-white rounded-lg p-4">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                <div className="font-medium">
                  <div className="text-sm text-gray-500">{item.title}</div>
                  {/* <div className="text-sm text-gray-500">Joined in August 2014</div> */}
                </div>
              </div>
              <span className="text-sm text-[#0D1227]">{item.leaves}</span>
            </div>
          ))}
        </div>
      </div>
      <BarChart />
      <SplineAreaChart />
    </div>
  )
}

export default Overview

{/* <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="Base__Svg-sc-ta5t7f-0 icon--stroke"><line x1="1.75" y1="2.75" x2="14.25" y2="2.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></line><line x1="1.75" y1="7.75" x2="14.25" y2="7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></line><line x1="1.75" y1="12.75" x2="14.25" y2="12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></line></svg> */ }