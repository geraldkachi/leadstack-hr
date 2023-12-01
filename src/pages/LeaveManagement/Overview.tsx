import BarChart from "./BarChart"
import DonutChart from "./DonutChart"

const Overview = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-2">
            <DonutChart />
        </div>
        <BarChart />
    </div>
  )
}

export default Overview