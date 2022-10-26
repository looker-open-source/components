import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["openOnFocus", "openOnClick", "onChange", "values", "defaultValues", "onClose", "onOpen", "id"],
      _excluded2 = ["ref"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import every from 'lodash/every';
import isMatch from 'lodash/isMatch';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFocusManagement } from './utils/useFocusManagement';
import { reducerMulti, useReducerMachine, ComboboxActionType } from './utils/state';
import { ComboboxMultiContext, defaultMultiData } from './ComboboxContext';
import { ComboboxWrapper } from './Combobox';
import { useComboboxRefs } from './utils/useComboboxRefs';
import { useComboboxToggle } from './utils/useComboboxToggle';
import { useScrollState } from './utils/useScrollState';

function compareOptions(optionsA, optionsB) {
  return every(optionsA, optionA => optionsB.find(optionB => isMatch(optionA, optionB)));
}

export const ComboboxMultiInternal = forwardRef((_ref, forwardedRef) => {
  let {
    openOnFocus = false,
    openOnClick = true,
    onChange,
    values,
    defaultValues,
    onClose,
    onOpen,
    id: propsID
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const initialValues = values || defaultValues;
  const initialData = {
    options: initialValues || []
  };
  const [state, data, transition] = useReducerMachine(reducerMulti, _objectSpread(_objectSpread({}, defaultMultiData), initialData), {
    inputValues: [],
    options: []
  });
  const {
    lastActionType,
    options
  } = data;

  if (values !== undefined && (options.length !== values.length || !compareOptions(options, values))) {
    transition && transition(ComboboxActionType.SELECT_SILENT, {
      options: values
    });
  }

  const focusManagement = useFocusManagement(lastActionType);
  const id = useID(propsID);
  const isVisible = useComboboxToggle(state, options, onOpen, onClose);

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

  return React.createElement(ComboboxMultiContext.Provider, {
    value: context
  }, React.createElement(ComboboxWrapper, _extends({
    id: id
  }, rest, {
    isVisible: isVisible,
    ref: ref
  })));
});
ComboboxMultiInternal.displayName = 'ComboboxMultiInternal';
export const ComboboxMulti = styled(ComboboxMultiInternal).attrs(({
  display: _display = 'flex'
}) => ({
  display: _display
})).withConfig({
  displayName: "ComboboxMulti",
  componentId: "sc-1okouq3-0"
})(_t || (_t = _``));
//# sourceMappingURL=ComboboxMulti.js.map