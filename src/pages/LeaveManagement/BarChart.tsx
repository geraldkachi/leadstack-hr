import Chart from "react-apexcharts";
import { useAuth } from "../../hooks";

const BarChart = () => {
    const theme = useAuth(state => state.theme)
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
                            bar: {
                                horizontal: true,
                                // endingShape: "rounded",
                                // borderRadius: 5,
                                // columnWidth: '100%'
                            },
                        },
                    },
                },
            ],

            plotOptions: {
                bar: {
                    horizontal: false, //horizontal bar chart
                    //   endingShape: "rounded",
                    // borderRadius: 10,
                    columnWidth: "50%",
                    stacked: true,
                    toolbar: {
                        show: true
                      },
                },
            },
            chart: {
                id: "basic-bar",
                width: "100%",
                stacked: true,
                foreColor: theme === 'dark' && '#ffffff',
                animations: {
                    enabled: false, //no animations
                    speed: 100,
                },
            },
            colors: ["#989BDC", "#E4E5F6", "#4C50C2"],
            dataLabels: {
                enabled: true,
                position: "top",
                formatter: (val: string) => val,
                // formatter: function (val: string) {
                //   return val;
                // },
                horizontal: true,
                offsetX: 0,
                style: {
                    fontSize: "10px",
                    colors: ["#ffffff"],
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                // categories: overall?.data.map((i: { staffName: string }) => i.staffName),
                categories: ["Technical", "Sales", "Marketing", "Finance", "Human Resource", "Design", "Data Analyst", "QA", "Web flow", 'Mobile Developer', 'AI']
            },
            // legend: {
            //     position: 'right',
            //     offsetY: 40
            //   },
        },
        series: [
            {
                name: "Annual Leave",
                data: [20, 30, 0, 20, 100, 60, 70, 54,88, 91, 100],
                // data: overall?.data.map((i: { percent: string }) => i.percent),
            },
            {
                name: "Casual Leave",
                data: [2, 30, 40, 20,100, 60, 70, 54, 52, 43, 100],
                // data: overall?.data.map((i: { percent: string }) => i.percent),
            },
            {
                name: "Casual Leave",
                data: [20, 0, 40, 20, 100, 60, 70, 54, 10, 23, 100],
                // data: overall?.data.map((i: { percent: string }) => i.percent),
            },
        ],
    };
    return (
        <div className="h-full bg-white dark:bg-[#242729] rounded-lg">
            <div className="text-sm font-medium p-4 text-[#535768] dark:text-[#ffffff]">Leave patterns by Departments</div>

            {/* @ts-ignore */}
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="100%"
                //   height={"40%"}
                height={350}

            />
        </div>
    )
}

export default BarChart
