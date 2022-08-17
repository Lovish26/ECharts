import React, { useContext } from "react";
import ReactECharts from "echarts-for-react";
import scatterPlotContext from "../context/ScatterPlotData/scatterPlotContext";

const ScatterPlot = () => {
  const context = useContext(scatterPlotContext);
  const { scatterPlotData } = context;

  const options = {
    xAxis: {
      name: "Color Intensity",
      nameLocation: "middle",
      nameTextStyle: {
        fontWeight: 500,
        fontSize: "16px",
        padding: [20, 0, 0, 0],
      },
      type: "value",
      scale: "true",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: "Hue",
      nameLocation: "middle",
      nameTextStyle: {
        fontWeight: 500,
        fontSize: "16px",
        padding: [0, 0, 20, 0],
      },
      type: "value",
      scale: "true",
    },
    series: [
      {
        data: scatterPlotData,

        type: "scatter",
        smooth: true,
        color: "#ae3ec9",
      },
    ],
  };

  return (
    <>
      <div className="title">Scatter Plot Chart</div>
      <div className="wrapper">
        <ReactECharts option={options} />
      </div>
    </>
  );
};

export default ScatterPlot;
