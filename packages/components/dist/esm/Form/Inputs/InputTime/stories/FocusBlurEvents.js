function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { InputTime } from '..';
import { Space, Paragraph } from '../../../..';
export default function FocusBlurEvents(props) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return React.createElement(Space, null, React.createElement(InputTime, _extends({
    onFocus: handleFocus,
    onBlur: handleBlur
  }, props)), isFocused && React.createElement(Paragraph, {
    color: "green"
  }, "FOCUSED!!"));
}
//# sourceMappingURL=FocusBlurEvents.js.map