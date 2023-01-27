import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["handleFile", "placeholder"];

import React from 'react';
import { InputFile } from '../';
export default function Placeholder(props) {
  const {
      handleFile = () => {
      },
      placeholder = 'Select a file to upload'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputFile, _extends({
    handleFile: handleFile,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=Placeholder.js.map