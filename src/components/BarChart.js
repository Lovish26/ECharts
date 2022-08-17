import React, { useContext } from "react";
import ReactECharts from "echarts-for-react";
import barChartContext from "../context/BarChartData/BarChartContext";

const BarChart = () => {
  const context = useContext(barChartContext);
  const { averageForAlcoholOne, averageForAlcoholTwo, averageForAlcoholThree } =
    context;

  const options = {
    xAxis: {
      name: "Alcohol",
      type: "category",
      data: ["1", "2", "3"],
      nameLocation: "middle",
      nameTextStyle: {
        fontWeight: 500,
        fontSize: "16px",
        padding: [20, 0, 0, 0],
      },
      scale: "true",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: "Malic Acid",
      nameLocation: "middle",
      nameTextStyle: {
        fontWeight: 500,
        fontSize: "16px",
        padding: [0, 0, 30, 0],
      },
      scale: "true",
    },
    series: [
      {
        type: "bar",
        data: [
          {
            value: averageForAlcoholOne,
            itemStyle: {
              color: "#f59f00",
              shadowColor: "#f59f00",
              borderType: "dashed",
              opacity: 0.5,
            },
          },
          {
            value: averageForAlcoholTwo,
            itemStyle: {
              color: "#91cc75",
              shadowColor: "#91cc75",
              borderType: "dashed",
              opacity: 0.5,
            },
          },

          {
            value: averageForAlcoholThree,
            itemStyle: {
              color: "#f03e3e",
              shadowColor: "#f03e3e",
              borderType: "dashed",
              opacity: 0.5,
            },
          },
        ],
        smooth: true,
      },
    ],
  };

  return (
    <>
      <div className="title">Bar Chart</div>
      <div className="wrapper">
        <ReactECharts option={options} />
      </div>
    </>
  );
};

export default BarChart;
