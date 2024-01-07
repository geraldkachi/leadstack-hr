import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useAuth } from '../../hooks';
const DonutChart = () => {
  const theme = useAuth(state => state.theme)
  const [chartData] = useState({
    options: {
      chart: {
        type: 'donut',
        foreColor: theme === 'dark' && '#ffffff',
        height: 42,
        toolbar: {
          show: true
        },
      },
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
    series: [30, 40, 45, 50, 49],
  });

  // const updateChartData = () => {
  //   // Example: Update chart data with new values
  //   const newSeries = [20, 30, 35, 40, 39];
  //   setChartData({ ...chartData, series: newSeries });
  // };

  return (
    <div className="h-full bg-white dark:bg-[#242729] rounded-lg">
      <div className="flex items-center justify-between gap-3 my-2 p-4">
      <span className="text-sm dark:text-[#ffffff]">Leave Type Distribution</span>

      </div>

      {/* @ts-ignore */}
      <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={350} />
      {/* <button onClick={updateChartData}>Update Chart</button> */}
    </div>
  );
};

export default DonutChart;
