import BarChartContext from "./BarChartContext";
import wineData from "../../Wine-Data.json";

const BarChartState = (props) => {
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

  return (
    <BarChartContext.Provider
      value={{
        averageForAlcoholOne,
        averageForAlcoholTwo,
        averageForAlcoholThree,
      }}
    >
      {props.children}
    </BarChartContext.Provider>
  );
};

export default BarChartState;
