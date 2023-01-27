

import React from 'react';
import { InputDateRange } from '../InputDateRange';
const noop = () => undefined;
export default function Error() {
  return React.createElement(InputDateRange, {
    value: {},
    onChange: noop,
    validationType: "error"
  });
}
//# sourceMappingURL=Error.js.map