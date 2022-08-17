import ScatterPlotContext from "./scatterPlotContext";
import wineData from "../../Wine-Data.json";

const ScatterPlotState = (props) => {
  // Fetch and store the Color Intensity and Hue values in array
  const scatterPlotData = wineData.map((item) => {
    return [item["Color intensity"], item.Hue];
  });
  return (
    <ScatterPlotContext.Provider
      value={{
        scatterPlotData,
      }}
    >
      {props.children}
    </ScatterPlotContext.Provider>
  );
};

export default ScatterPlotState;
