const _excluded = ["accept", "buttonText", "className", "handleFile", "onChange", "onClick", "placeholder"];
let _ = t => t,
  _t,
  _t2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Space } from '../../../Layout/Space';
import { InputText } from '../InputText';
import { ButtonOutline } from '../../../Button/ButtonOutline';
import { omitAriaAndValidationProps, pickAriaAndValidationProps } from '../ariaProps';
const HiddenFileInput = styled.input.attrs(() => ({
  'data-testid': 'input-file',
  type: 'file'
})).withConfig({
  displayName: "InputFile__HiddenFileInput",
  componentId: "sc-1469vmt-0"
})(_t || (_t = _`
  display: none;
`));
export const InputFile = styled(_ref => {
  let {
      accept = '',
      buttonText = 'Upload File',
      className,
      handleFile,
      onChange,
      onClick,
      placeholder
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const [fileName, setFileName] = useState('');
  const hiddenFileInput = useRef(null);
  const ariaProps = pickAriaAndValidationProps(restProps);
  const buttonOutlineProps = omitAriaAndValidationProps(restProps);
  const handleClick = event => {
    var _hiddenFileInput$curr;
    onClick && onClick(event);
    hiddenFileInput === null || hiddenFileInput === void 0 || (_hiddenFileInput$curr = hiddenFileInput.current) === null || _hiddenFileInput$curr === void 0 ? void 0 : _hiddenFileInput$curr.click();
  };
  const handleChange = event => {
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
    if (!event.target.files) {
      console.warn('There was a problem uploading the file.');
      return;
    }
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
    setFileName(fileUploaded.name);
  };
  return React.createElement(Space, {
    className: className
  }, React.createElement(InputText, _extends({
    placeholder: placeholder,
    value: fileName,
    readOnly: true
  }, ariaProps)), React.createElement(ButtonOutline, _extends({
    onClick: handleClick
  }, buttonOutlineProps, {
    type: "button"
  }), buttonText), React.createElement(HiddenFileInput, {
    onChange: handleChange,
    ref: hiddenFileInput,
    accept: accept
  }));
}).withConfig({
  displayName: "InputFile",
  componentId: "sc-1469vmt-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=InputFile.js.map