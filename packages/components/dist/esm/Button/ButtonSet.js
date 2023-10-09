let _ = t => t,
  _t;
const _excluded = ["children", "className", "disabled", "onItemClick", "options", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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