import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["handleFile", "buttonText"];

import React from 'react';
import { InputFile } from '../';
export default function ButtonText(props) {
  const {
      handleFile = () => {
      },
      buttonText = 'Browse local files'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputFile, _extends({
    handleFile: handleFile,
    buttonText: buttonText
  }, restProps));
}
//# sourceMappingURL=ButtonText.js.map