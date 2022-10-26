import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["accept", "buttonText", "className", "handleFile", "onChange", "onClick", "placeholder", "type"];

let _ = t => t,
    _t,
    _t2;

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
    placeholder,
    type
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const [fileName, setFileName] = useState('');
  const hiddenFileInput = useRef(null);
  const ariaProps = pickAriaAndValidationProps(restProps);
  const buttonOutlineProps = omitAriaAndValidationProps(restProps);

  const handleClick = event => {
    var _hiddenFileInput$curr;

    onClick && onClick(event);
    hiddenFileInput === null || hiddenFileInput === void 0 ? void 0 : (_hiddenFileInput$curr = hiddenFileInput.current) === null || _hiddenFileInput$curr === void 0 ? void 0 : _hiddenFileInput$curr.click();
  };

  const handleChange = event => {
    onChange && onChange(event);

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
  }, buttonOutlineProps), buttonText), React.createElement(HiddenFileInput, {
    onChange: handleChange,
    ref: hiddenFileInput,
    accept: accept
  }));
}).withConfig({
  displayName: "InputFile",
  componentId: "sc-1469vmt-1"
})(_t2 || (_t2 = _``));
//# sourceMappingURL=InputFile.js.map