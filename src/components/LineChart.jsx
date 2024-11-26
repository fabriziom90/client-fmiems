import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const Chart = ({ months, type }) => {
  const reversedMonths = [...months].reverse();
  const monthsNames = reversedMonths.map((item) => {
    return item.month.substring(0, 3);
  });

  const setValues = () => {
    let graphValues;
    if (type === 1) {
      const incomesValues = reversedMonths.map((item) => {
        return item.incomes.reduce((prev, curr) => {
          prev = prev + curr.value;

          return parseFloat(prev.toFixed(2));
        }, 0);
      });

      graphValues = [
        {
          name: "Entrate",
          type: "line",
          data: incomesValues,
        },
      ];
    } else if (type === 2) {
      const exitsValues = reversedMonths.map((item) => {
        return item.exits.reduce((prev, curr) => {
          prev = prev + curr.value;

          return parseFloat(prev.toFixed(2));
        }, 0);
      });

      graphValues = [
        {
          name: "Uscite",
          type: "line",
          data: exitsValues,
        },
      ];
    } else {
      const incomesValues = reversedMonths.map((item) => {
        return item.incomes.reduce((prev, curr) => {
          prev = prev + curr.value;

          return parseFloat(prev.toFixed(2));
        }, 0);
      });

      const exitsValues = reversedMonths.map((item) => {
        return item.exits.reduce((prev, curr) => {
          prev = prev + curr.value;

          return parseFloat(prev.toFixed(2));
        }, 0);
      });

      graphValues = [
        {
          name: "Entrate",
          type: "line",
          data: incomesValues,
        },
        {
          name: "Uscite",
          type: "line",
          data: exitsValues,
        },
      ];
    }

    return graphValues;
  };

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "Line",
        id: "chart",
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: monthsNames,
      },
      colors: ["#198754", "#DC3545"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      legend: {
        // position: '',
        width: 400,
        // position: 'top',
      },
    },
    series: setValues(),
  });

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="line"
    />
  );
};

export default Chart;
