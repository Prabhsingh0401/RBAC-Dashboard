import {
    Card,
    CardBody,
    CardHeader,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Hours in Office",
        data: [160, 180, 150, 170, 200, 190, 180, 160, 175, 185], // Example total hours for each month
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        title: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false, // Disable labels for X-axis
        },
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
      },
      yaxis: {
        labels: {
          show: false, // Disable labels for Y-axis
        },
      },
      grid: {
        show: false,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  
  export default function PerformanceGraph() {
    return (
      <Card className="lg:w-[35vw] w-[80vw] bg-white/30 backdrop-blur-lg rounded-[20px] shadow-lg">
        <CardHeader
          floated={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none shadow-none"
        >
          <h2 className="text-lg font-semibold text-gray-800 ml-3">Monthly Activity</h2>
        </CardHeader>
        <CardBody className="px-2 pb-0 mt-[-5vh] lg:mt-[-7vh]">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }
  