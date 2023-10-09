let _ = t => t,
  _t;
const _excluded = ["openOnFocus", "openOnClick", "onChange", "value", "defaultValue", "onClose", "onOpen", "id", "shouldRenderListInline"],
  _excluded2 = ["ref"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import isMatch from 'lodash/isMatch';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../../utils';
import { useFocusManagement } from '../utils/useFocusManagement';
import { reducer, useReducerMachine, ComboboxActionType } from '../utils/state';
import { ComboboxContext, defaultData } from '../ComboboxContext';
import { getComboboxText } from '../utils/getComboboxText';
import { useComboboxRefs } from '../utils/useComboboxRefs';
import { useComboboxToggle } from '../utils/useComboboxToggle';
import { useScrollState } from '../utils/useScrollState';
import { ComboboxWrapper } from '../ComboboxWrapper';
export const ComboboxInternal = forwardRef((_ref, forwardedRef) => {
  let {
      openOnFocus = false,
      openOnClick = true,
      onChange,
      value,
      defaultValue,
      onClose,
      onOpen,
      id: propsID,
      shouldRenderListInline
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const initialValue = value || defaultValue;
  const initialData = initialValue ? {
    inputValue: getComboboxText(initialValue),
    option: initialValue
  } : {};
  const [state, data, transition] = useReducerMachine(reducer, _objectSpread(_objectSpread({}, defaultData), initialData), {}, shouldRenderListInline);
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
    shouldRenderListInline,
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
export const Combobox = styled(ComboboxInternal).attrs(({
  display: _display = 'flex',
  flexDirection,
  shouldRenderListInline
}) => ({
  display: _display,
  flexDirection: flexDirection || shouldRenderListInline && 'column'
})).withConfig({
  displayName: "Combobox",
  componentId: "sc-cyiezv-0"
})(_t || (_t = _``));
//# sourceMappingURL=Combobox.js.map