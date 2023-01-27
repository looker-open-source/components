
import { buildPivotMeasureName, getDimensionNames, getMeasureNames } from '.';
export const tabularPivotResponse = ({
  data,
  fields,
  pivots
}) => data.map(datum => {
  const formattedDatum = {};
  const dimensionNames = getDimensionNames(fields);
  dimensionNames.forEach(dimensionName => formattedDatum[dimensionName] = datum[dimensionName] && datum[dimensionName].value);
  const measureNames = getMeasureNames(fields);
  measureNames.forEach(measureName => {
    const pivotValues = pivots.map(pivot => pivot.key);
    pivotValues.forEach(pivotValue => {
      formattedDatum[buildPivotMeasureName({
        measureName,
        pivotValue
      })] = datum[measureName] && datum[measureName][pivotValue].value;
    });
  });
  return formattedDatum;
});
//# sourceMappingURL=tabularPivotResponse.js.map