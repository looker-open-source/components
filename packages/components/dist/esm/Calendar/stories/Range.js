const _excluded = ["onSelectRange", "selectedRange", "viewMonth"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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