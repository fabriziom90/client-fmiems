import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";

const PieChart = ({ months, visible }) => {
  const [series, setSeries] = useState([]);
  const reversedMonths = [...months].reverse();

  useEffect(() => {
    const updateData = () => {
      const options = {
        labels: setLabels(),
        colors: setColors(),
      };
      const values = setValues();

      setChartData({ options: options, series: values });
    };
    updateData();
  }, [visible]);

  const setValues = () => {
    const incomesValues = reversedMonths.map((item) => {
      return item.incomes.reduce((prev, curr) => {
        prev = prev + curr.value;

        return parseFloat(prev.toFixed(2));
      }, 0);
    });

    const totalIncomes = incomesValues.reduce(
      (prev, curr) => (prev = prev + curr)
    );

    const exitsValues = reversedMonths.map((item) => {
      return item.exits.reduce((prev, curr) => {
        prev = prev + curr.value;

        return parseFloat(prev.toFixed(2));
      }, 0);
    });

    const totalExits = exitsValues.reduce((prev, curr) => (prev = prev + curr));

    let totalTaxes;
    let percTaxes;

    let totals;
    if (visible) {
      totalTaxes = incomesValues.reduce(
        (prev, curr) => (prev = prev + curr * 0.7)
      );

      totals = totalIncomes + totalExits + totalTaxes;
      percTaxes = (totalTaxes * 100) / totals;
    } else {
      totals = totalIncomes + totalExits;
    }

    const percIncomes = (totalIncomes * 100) / totals;
    const percExits = (totalExits * 100) / totals;

    let returns;
    visible
      ? (returns = [percIncomes, percExits, percTaxes])
      : (returns = [percIncomes, percExits]);

    return returns;
  };

  const setLabels = () => {
    let labels;
    visible
      ? (labels = ["Entrate", "Uscite", "Tasse"])
      : (labels = ["Entrate", "Uscite"]);
    return labels;
  };

  const setColors = () => {
    let colors;
    visible
      ? (colors = ["#198754", "#DC3545", "#FFC107"])
      : (colors = ["#198754", "#DC3545"]);
    return colors;
  };

  const [chartData, setChartData] = useState({
    options: {
      labels: setLabels(),
      colors: setColors(),
    },
    series: setValues(),
  });

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="pie"
    />
  );
};

export default PieChart;
