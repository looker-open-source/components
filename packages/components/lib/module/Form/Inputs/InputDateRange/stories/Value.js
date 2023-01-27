

import React, { useState } from 'react';
import { InputDateRange } from '../InputDateRange';
export default function Value() {
  const [value, setValue] = useState({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  });
  return React.createElement(InputDateRange, {
    value: value,
    onChange: setValue
  });
}
//# sourceMappingURL=Value.js.map