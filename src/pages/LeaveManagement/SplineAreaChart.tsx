import ReactApexChart from 'react-apexcharts';

const SplineAreaChart = () => {
    const state = {
        options: {
            responsive: [
                {
                    breakpoint: 1000,
                    yaxis: {
                        // categories: overall?.data.map((i: { staffName: string }) => i.staffName),
                        categories: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 1000]
                    },
                    options: {
                        plotOptions: {
                            area: {
                                horizontal: true,
                                // endingShape: "rounded",
                                // borderRadius: 5,
                                columnWidth: '100%'
                            },
                        },
                    },
                },
            ],
            plotOptions: {
                area: {
                    horizontal: false, //horizontal bar chart
                    //   endingShape: "rounded",
                    // borderRadius: 10,
                    columnWidth: "50%",
                    stacked: true,
                    toolbar: {
                        show: false
                    },
                },
            },
            chart: {
                type: 'bar',
                stacked: false,
                animations: {
                    enabled: true, //no animations
                    speed: 100,
                },
            },
            colors: ["#F4BE37", "#F8DD9C"],
            dataLabels: {
                enabled: false, //no animations
                position: "top",
                formatter: (val: string) => val,
                horizontal: true,
                offsetX: 0,
                style: {
                    fontSize: "10px",
                    colors: ["transparent"],
                    backgroundColor: ["transparent",],
                    border: "0px solid transparent "
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
            },
            fill: {
                type: 'gradient',
                // gradient: {
                //     shadeIntensity: 1,
                //     opacityFrom: 0.7,
                //     opacityTo: 0.3,
                //     stops: [0, 90, 100],
                // },
            },
        },
        series: [
            {
                name: 'Leaves',
                data: [40, 50, 45, 50, 49, 100, 67, 80, 100, 80, 70, 70, 80, 30],
            },
            // {
            //     name: 'Leaves 2',
            //     data: [20, 25, 30, 35, 40, 30, 40, 45, 50, 49, 100, 67, 16, 100],
            // },
        ],
    }
    return (
        <div className="h-full bg-white rounded-lg mt-5">
            <div className="text-sm font-medium p-4 text-[#535768]">Leave Trends Over Time</div>

            <ReactApexChart
              {/* @ts-ignore */}
                options={state.options}
                series={state.series}
                width="100%"
                type="area"
                height={350}
            />
        </div>
    )
}

export default SplineAreaChart