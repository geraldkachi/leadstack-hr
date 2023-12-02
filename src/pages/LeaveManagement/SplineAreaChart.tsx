import ReactApexChart from 'react-apexcharts';

const SplineAreaChart = () => {
    const chartOptions = {
        chart: {
            type: 'area',
            stacked: false,
        },
        xaxis: {
            categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 90, 100],
            },
        },
    };

    const chartSeries = [
        {
            name: 'Series 1',
            data: [30, 40, 45, 50, 49],
        },
        // {
        //     name: 'Series 2',
        //     data: [20, 25, 30, 35, 40],
        // },
    ];
    return (
        <div className="h-full bg-white rounded-lg mt-5">
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={350}
            />
        </div>
    )
}

export default SplineAreaChart