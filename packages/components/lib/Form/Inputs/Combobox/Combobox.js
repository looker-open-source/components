import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["openOnFocus", "openOnClick", "onChange", "value", "defaultValue", "onClose", "onOpen", "id"],
      _excluded2 = ["ref"],
      _excluded3 = ["isVisible"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import isMatch from 'lodash/isMatch';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { Box2 } from '../../../Layout';
import { useFocusManagement } from './utils/useFocusManagement';
import { reducer, useReducerMachine, ComboboxActionType } from './utils/state';
import { ComboboxContext, defaultData } from './ComboboxContext';
import { getComboboxText } from './utils/getComboboxText';
import { useComboboxRefs } from './utils/useComboboxRefs';
import { useComboboxToggle } from './utils/useComboboxToggle';
import { useScrollState } from './utils/useScrollState';
export const ComboboxInternal = forwardRef((_ref, forwardedRef) => {
  let {
    openOnFocus = false,
    openOnClick = true,
    onChange,
    value,
    defaultValue,
    onClose,
    onOpen,
    id: propsID
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const initialValue = value || defaultValue;
  const initialData = initialValue ? {
    inputValue: getComboboxText(initialValue),
    option: initialValue
  } : {};
  const [state, data, transition] = useReducerMachine(reducer, _objectSpread(_objectSpread({}, defaultData), initialData), {});
  const {
    lastActionType,
    option
  } = data;

  if (value !== undefined && (!option || !isMatch(option, value))) {
    transition && transition(ComboboxActionType.SELECT_SILENT, {
      option: value
    });
  }

  const focusManagement = useFocusManagement(lastActionType);
  const id = useID(propsID);
  const isVisible = useComboboxToggle(state, option, onOpen, onClose);

  const _useComboboxRefs = useComboboxRefs(forwardedRef),
        {
    ref
  } = _useComboboxRefs,
        commonRefs = _objectWithoutProperties(_useComboboxRefs, _excluded2);

  const scrollState = useScrollState();

  const context = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, commonRefs), focusManagement), scrollState), {}, {
    data,
    id,
    isVisible,
    onChange,
    openOnClick,
    openOnFocus,
    state,
    transition
  });

  return React.createElement(ComboboxContext.Provider, {
    value: context
  }, React.createElement(ComboboxWrapper, _extends({
    id: id
  }, rest, {
    isVisible: isVisible,
    ref: ref,
    role: rest.role
  })));
});
ComboboxInternal.displayName = 'ComboboxInternal';
export const ComboboxWrapper = forwardRef((_ref2, ref) => {
  let {
    isVisible
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded3);

  return React.createElement(Box2, _extends({}, rest, {
    ref: ref,
    role: rest.role ? rest.role : 'combobox',
    "aria-haspopup": "true",
    "aria-owns": isVisible ? `listbox-${rest.id}` : undefined,
    "aria-label": `${rest.wrapperAriaLabel || ''} combobox`,
    "aria-expanded": isVisible
  }));
});
ComboboxWrapper.displayName = 'ComboboxWrapper';
export const Combobox = styled(ComboboxInternal).attrs(({
  display: _display = 'flex'
}) => ({
  display: _display
})).withConfig({
  displayName: "Combobox",
  componentId: "sc-1xpy5b5-0"
})(_t || (_t = _``));
//# sourceMappingURL=Combobox.js.map