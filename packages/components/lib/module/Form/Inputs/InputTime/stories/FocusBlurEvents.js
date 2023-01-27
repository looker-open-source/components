import _extends from "@babel/runtime/helpers/extends";

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