import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["formattedValue", "fields", "valueFormat"];

import { isNumeric } from '@looker/visualizations-adapters';
import { Text } from '@visx/text';
import numeral from 'numeral';
import React from 'react';
import { formatDateLabel } from '../utils';
export const MAX_TICK_LABEL_LENGTH = 20;
export const Tick = _ref => {
  let {
      formattedValue,
      fields,
      valueFormat
    } = _ref,
    tickProps = _objectWithoutProperties(_ref, _excluded);
  const isNumericTick = isNumeric(formattedValue);
  const label = formatDateLabel({
    dateString: formattedValue || '',
    fields
  });
  const renderedLabel = label.length > MAX_TICK_LABEL_LENGTH ? `${label.slice(0, MAX_TICK_LABEL_LENGTH).trim()}\u2026` : label;
  return React.createElement(Text, tickProps, valueFormat && isNumericTick ? numeral(formattedValue).format(valueFormat) : renderedLabel);
};
//# sourceMappingURL=Tick.js.map