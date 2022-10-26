import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["onSelectRange", "selectedRange", "viewMonth"];
import React, { useState } from 'react';
import { Calendar } from '../..';
export default function Range(_ref) {
  let {
    onSelectRange,
    selectedRange,
    viewMonth: viewMonthProp = new Date('Mon Feb 07, 2022')
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [range, setRange] = useState(selectedRange);

  const handleSelect = newRange => {
    onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(newRange);
    setRange(newRange);
  };

  const [viewMonth, setViewMonth] = useState(viewMonthProp);
  return React.createElement(Calendar, {
    isRange: true,
    onSelectRange: handleSelect,
    selectedRange: range,
    viewMonth: viewMonth,
    onMonthChange: setViewMonth
  });
}
//# sourceMappingURL=Range.js.map