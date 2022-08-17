import React from "react";
import ReactDOM from "react-dom/client";
import ScatterPlotState from "./context/ScatterPlotData/scatterPlotState";
import App from "./App";
import BarChartState from "./context/BarChartData/barChartState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScatterPlotState>
      <BarChartState>
        <App />
      </BarChartState>
    </ScatterPlotState>
  </React.StrictMode>
);
