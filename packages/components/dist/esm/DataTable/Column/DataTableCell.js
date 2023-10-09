let _ = t => t,
  _t;
const _excluded = ["children", "description", "indicator", "onBlur", "onKeyUp", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Space, SpaceVertical } from '../../Layout';
import { Paragraph } from '../../Text';
import { Truncate } from '../../Truncate';
import { useFocusVisible, useForkedRef } from '../../utils';
import { columnSize } from './columnSize';
import { FocusableCell } from './FocusableCell';
const DataTableCellLayout = forwardRef((_ref, forwardedRef) => {
  let {
      children,
      description,
      indicator,
      onBlur,
      onKeyUp,
      size
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const focusVisibleProps = useFocusVisible({
    onBlur,
    onKeyUp
  });
  let content = size && size !== 'nowrap' ? React.createElement(Truncate, null, children) : children;
  const ref = useRef(null);
  const forkedRef = useForkedRef(ref, forwardedRef);
  useEffect(() => {
    var _ref$current;
    const element = ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelectorAll('a, button, input');
    if (element) {
      element.forEach(activeElement => activeElement.setAttribute('tabIndex', '-1'));
    }
  });
  if (description) {
    content = React.createElement(SpaceVertical, {
      gap: "u05",
      align: "stretch"
    }, React.createElement("span", null, content), description && React.createElement(Paragraph, {
      fontSize: "xsmall",
      color: "text1",
      truncate: true
    }, React.createElement(Truncate, null, description)));
    if (indicator) {
      content = React.createElement(Space, {
        gap: "u4"
      }, indicator, content);
    }
  } else if (indicator) {
    content = React.createElement(Space, {
      gap: "u4"
    }, indicator, React.createElement(Truncate, null, content));
  }
  return React.createElement(FocusableCell, _extends({
    ref: forkedRef
  }, focusVisibleProps, props), content);
});
DataTableCellLayout.displayName = 'DataTableCellLayout';
export const DataTableCell = styled(DataTableCellLayout).withConfig({
  displayName: "DataTableCell",
  componentId: "sc-1sdic09-0"
})(_t || (_t = _`
  ${0}
`), columnSize);
//# sourceMappingURL=DataTableCell.js.map