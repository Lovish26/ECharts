import React from "react";
import ReactECharts from "echarts-for-react";
import wineData from "../Wine-Data.json";

const BarChart = () => {
  let wineDataForAlcoholOne, wineDataForAlcoholTwo, wineDataForAlcoholThree;
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0;
  let averageForAlcoholOne, averageForAlcoholTwo, averageForAlcoholThree;

  // -------------------------------
  // Average Malic Acid  for Alcohol 1
  // -------------------------------
  wineDataForAlcoholOne = wineData.filter((item) => {
    if (item.Alcohol === 1) {
      return item["Malic Acid"];
    }
    return 0;
  });
  wineDataForAlcoholOne.forEach(function (item) {
    sum1 += item["Malic Acid"];
  });
  averageForAlcoholOne = sum1 / wineDataForAlcoholOne.length;

  // -------------------------------
  // Average Malic Acid for Alcohol 2
  // -------------------------------
  wineDataForAlcoholTwo = wineData.filter((item) => {
    if (item.Alcohol === 2) {
      return item["Malic Acid"];
    }
    return 0;
  });
  wineDataForAlcoholTwo.forEach(function (item) {
    sum2 += item["Malic Acid"];
  });
  averageForAlcoholTwo = sum2 / wineDataForAlcoholTwo.length;

  // -------------------------------
  // Average Malic Acid for Alcohol-3
  // -------------------------------
  wineDataForAlcoholThree = wineData.filter((item) => {
    if (item.Alcohol === 3) {
      return item["Malic Acid"];
    }
    return 0;
  });
  wineDataForAlcoholThree.forEach(function (item) {
    sum3 += item["Malic Acid"];
  });
  averageForAlcoholThree = sum3 / wineDataForAlcoholThree.length;

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
