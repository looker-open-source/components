const _excluded = ["onChange"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
import { getHasValue } from '../Field/useFloatingLabel';
import { useFormContext } from '../../Form';
import { Tooltip } from '../../../Tooltip';
import { useID, useTranslation } from '../../../utils';
import { InputTimeSelect } from '../../Inputs/InputTimeSelect';
import { VisuallyHidden } from '../../../VisuallyHidden';
export const FieldTimeSelect = styled(forwardRef((props, ref) => {
  const validationMessage = useFormContext(props);
  const id = useID(props.id);
  const _omitFieldProps = omitFieldProps(props),
    {
      onChange: propsOnChange
    } = _omitFieldProps,
    fieldProps = _objectWithoutProperties(_omitFieldProps, _excluded);
  const [formatError, setFormatError] = useState('');
  const {
    t
  } = useTranslation('FieldTimeSelect');
  const onChange = value => {
    propsOnChange === null || propsOnChange === void 0 ? void 0 : propsOnChange(value);
    if (value) {
      setFormatError('');
    } else {
      setFormatError(t('Please use format HHMM'));
    }
  };
  const onBlur = () => {
    setFormatError('');
  };
  const errorMessage = formatError ? {
    message: formatError,
    type: 'error'
  } : validationMessage;
  return React.createElement(FloatingLabelField, _extends({
    "data-testid": "FieldSelectMultiId"
  }, pickFieldProps(props), {
    id: id,
    hasValue: getHasValue(props)
  }), React.createElement(Tooltip, {
    placement: "top-end",
    content: formatError,
    isOpen: true,
    canClose: () => false
  }, React.createElement("div", null, React.createElement(VisuallyHidden, {
    "aria-live": "polite"
  }, formatError), React.createElement(InputTimeSelect, _extends({}, fieldProps, {
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    validationType: errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.type,
    ref: ref,
    onChange: onChange,
    onBlur: onBlur
  })))));
})).withConfig({
  displayName: "FieldTimeSelect",
  componentId: "sc-18cfbnj-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldTimeSelect.js.map