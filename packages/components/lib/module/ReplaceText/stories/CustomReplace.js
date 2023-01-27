

import React from 'react';
import { ReplaceText } from '../ReplaceText';
export default function CustomReplace() {
  return React.createElement(ReplaceText, {
    match: "che",
    replace: props => React.createElement("em", props)
  }, "Cheddar cheese");
}
//# sourceMappingURL=CustomReplace.js.map