import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "className", "disabled", "onItemClick", "options", "value"];
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { inputHeightNumber } from '../Form/Inputs/height';
import { simpleLayoutCSS } from '../Layout/utils/simple';
import { useForkedRef } from '../utils';
import { ButtonSetContext } from './ButtonSetContext';
import { ButtonItem } from './ButtonItem';
export const ButtonSetLayout = forwardRef((_ref, forwardedRef) => {
  let {
    children,
    className,
    disabled,
    onItemClick,
    options,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (children && options) {
    console.warn('Use children or options but not both at the same time.');
  }

  const context = {
    disabled,
    onItemClick,
    value
  };
  const [isWrapping, setIsWrapping] = useState(false);
  const timeoutRef = useRef();
  const measureRef = useCallback(node => {
    if (node) {
      const {
        height
      } = node.getBoundingClientRect();

      const getIsWrapping = () => {
        const firstItem = node.childNodes[0];
        const rowHeight = firstItem ? firstItem.getBoundingClientRect().height : inputHeightNumber;

        if (height >= rowHeight * 2) {
          setIsWrapping(true);
        } else {
          setIsWrapping(false);
        }
      };

      if (height > 0) {
        getIsWrapping();
      } else {
        timeoutRef.current = setTimeout(getIsWrapping, 10);
      }
    } else if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [options]);
  const ref = useForkedRef(measureRef, forwardedRef);
  const optionItems = options && options.map(({
    disabled,
    label,
    value
  }) => {
    return React.createElement(ButtonItem, {
      key: value,
      disabled: disabled,
      value: value
    }, label || value);
  });
  return React.createElement(ButtonSetContext.Provider, {
    value: context
  }, React.createElement("div", _extends({
    role: "group",
    className: `${isWrapping ? 'wrapping ' : ''}${className}`,
    ref: ref
  }, props), children || optionItems));
});
ButtonSetLayout.displayName = 'ButtonSetLayout';
export const ButtonSet = styled(ButtonSetLayout).withConfig({
  displayName: "ButtonSet",
  componentId: "sc-b1ia7f-0"
})(_t || (_t = _`
  ${0}
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  font-size: ${0};
  text-align: center;
`), simpleLayoutCSS, ({
  theme
}) => theme.fontSizes.small);
//# sourceMappingURL=ButtonSet.js.map