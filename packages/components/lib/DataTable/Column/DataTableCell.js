import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "description", "indicator", "onBlur", "onKeyUp", "size"];
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

    const element = ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelectorAll('a, button, input');

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