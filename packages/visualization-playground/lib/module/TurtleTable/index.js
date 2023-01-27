

import React from 'react';
import { Table, Sparkline } from '@looker/visualizations';
import { DEFAULT_HEIGHT } from '@looker/visualizations-adapters';
import { MessageBar } from '@looker/components';
const nestSparklines = (data, dataKey) => {
  const transformedData = data.reduce((acc, d) => {
    const [parentDimension, ...measurePairs] = Object.entries(d);
    const nonPivotedData = measurePairs.map(([_, value], i) => {
      return {
        item: i,
        [dataKey]: value
      };
    });
    return [...acc, {
      [parentDimension[0]]: parentDimension[1],
      [dataKey]: () => React.createElement(Sparkline, {
        height: 75,
        data: nonPivotedData,
        fields: {
          measures: [{
            name: dataKey
          }],
          dimensions: []
        }
      })
    }];
  }, []);
  return transformedData;
};
export const TurtleTable = ({
  height: _height = DEFAULT_HEIGHT * 2,
  width,
  fields,
  data,
  config,
  pivots
}) => {
  var _fields$pivots;
  if (((_fields$pivots = fields.pivots) === null || _fields$pivots === void 0 ? void 0 : _fields$pivots.length) !== 1 || fields.dimensions.length !== 1 || fields.measures.length === 1) {
    return React.createElement(MessageBar, {
      intent: "critical",
      noActions: true
    }, "Turtle Table: Please select one dimension, one measure, and one pivot to render this visualization.");
  }
  const NESTED_DATA_KEY = 'nestedData';
  const nestedData = nestSparklines(data, NESTED_DATA_KEY);
  return React.createElement(Table, {
    fields: {
      measures: [{
        name: NESTED_DATA_KEY,
        label: 'Orders Count By Quarter'
      }],
      dimensions: fields.dimensions,
      pivots: []
    },
    config: config,
    data: nestedData,
    pivots: pivots,
    width: width,
    height: _height
  });
};
//# sourceMappingURL=index.js.map