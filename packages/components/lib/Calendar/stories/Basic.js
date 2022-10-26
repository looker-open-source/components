import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["onSelectDate", "selectedDate", "viewMonth"];
import React, { useState } from 'react';
import { Calendar } from '../..';
export default function Basic(_ref) {
  let {
    onSelectDate,
    selectedDate,
    viewMonth: viewMonthProp = new Date('Jul 1, 2021')
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const [date, setDate] = useState(selectedDate);

  const handleSelect = newDate => {
    onSelectDate === null || onSelectDate === void 0 ? void 0 : onSelectDate(newDate);
    setDate(newDate);
  };

  const [viewMonth, setViewMonth] = useState(viewMonthProp);
  return React.createElement(Calendar, _extends({}, args, {
    onSelectDate: handleSelect,
    selectedDate: date,
    viewMonth: viewMonth,
    onMonthChange: setViewMonth
  }));
}
//# sourceMappingURL=Basic.js.map