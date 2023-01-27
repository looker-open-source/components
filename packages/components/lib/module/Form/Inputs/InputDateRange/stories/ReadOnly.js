

import React, { useState } from 'react';
import { InputDateRange } from '../InputDateRange';
export default function ReadOnly() {
  const [value, setValue] = useState({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  });
  return React.createElement(InputDateRange, {
    readOnly: true,
    value: value,
    onChange: setValue
  });
}
//# sourceMappingURL=ReadOnly.js.map