function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Sparkline } from '@looker/visualizations-visx';
import { Table } from '@looker/visualizations-table';
import { Visualization } from '../Visualization';
import { mockPivotedQuery } from '@looker/visualizations-adapters';
export default {
  component: Visualization,
  title: 'Visualizations/Stories/TurtleTable'
};
const NESTED_DATA_KEY = 'orderCount';
const ROW_HEIGHT = 75;
const nestSparklines = data => {
  return data.reduce((acc, d) => {
    const [parentDimension, ...measurePairs] = Object.entries(d);
    const nonPivotedData = measurePairs.map(([_, value], i) => {
      return {
        entry: i,
        [NESTED_DATA_KEY]: value
      };
    });
    return [...acc, {
      [parentDimension[0]]: parentDimension[1],
      [NESTED_DATA_KEY]: () => React.createElement(Sparkline, {
        height: ROW_HEIGHT,
        data: nonPivotedData,
        fields: {
          measures: [{
            name: NESTED_DATA_KEY
          }],
          dimensions: []
        }
      })
    }];
  }, []);
};
const TurtleTableComponent = ({
  fields,
  data,
  config,
  pivots,
  height
}) => {
  const nestedData = nestSparklines(data);
  return React.createElement(Table, {
    height: height,
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
    defaultRowHeight: ROW_HEIGHT
  });
};
const Template = () => {
  return React.createElement(Visualization, _extends({}, mockPivotedQuery, {
    height: 600,
    chartTypeMap: {
      turtle_table: TurtleTableComponent
    },
    config: {
      type: 'turtle_table'
    }
  }));
};
export const TurtleTable = Template.bind({});
//# sourceMappingURL=TurtleTable.stories.js.map