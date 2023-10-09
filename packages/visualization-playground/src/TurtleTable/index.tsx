/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react';
import type {
  Fields,
  SDKRecord,
  CommonCartesianProperties,
  Pivots,
} from '@looker/visualizations-adapters';
import { Table, Sparkline } from '@looker/visualizations';
import { DEFAULT_HEIGHT } from '@looker/visualizations-adapters';
import { MessageBar } from '@looker/components';

export type TurtleProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  levels?: number;
  fields: Fields;
  data: SDKRecord[];
  config: CommonCartesianProperties;
  pivots: Pivots;
};

const nestSparklines = (data: SDKRecord[], dataKey: string) => {
  const transformedData = data.reduce<SDKRecord[]>((acc, d) => {
    const [parentDimension, ...measurePairs] = Object.entries(d);

    const nonPivotedData: SDKRecord[] = measurePairs.map(([_, value], i) => {
      return { item: i, [dataKey]: value };
    });

    return [
      ...acc,
      {
        [parentDimension[0]]: parentDimension[1],
        [dataKey]: () => (
          <Sparkline
            height={75}
            data={nonPivotedData}
            fields={{
              measures: [{ name: dataKey }],
              dimensions: [],
            }}
          />
        ),
      },
    ];
  }, []);

  return transformedData;
};

export const TurtleTable = ({
  height = DEFAULT_HEIGHT * 2,
  width,
  fields,
  data,
  config,
  pivots,
}: TurtleProps) => {
  if (
    fields.pivots?.length !== 1 ||
    fields.dimensions.length !== 1 ||
    fields.measures.length === 1
  ) {
    return (
      <MessageBar intent="critical" noActions>
        Turtle Table: Please select one dimension, one measure, and one pivot to
        render this visualization.
      </MessageBar>
    );
  }

  const NESTED_DATA_KEY = 'nestedData';

  const nestedData = nestSparklines(data, NESTED_DATA_KEY);

  return (
    <Table
      fields={{
        measures: [{ name: NESTED_DATA_KEY, label: 'Orders Count By Quarter' }],
        dimensions: fields.dimensions,
        pivots: [],
      }}
      config={config}
      data={nestedData}
      pivots={pivots}
      width={width}
      height={height}
    />
  );
};
