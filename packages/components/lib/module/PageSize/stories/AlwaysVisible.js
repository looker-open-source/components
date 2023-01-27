

import React, { useState } from 'react';
import { PageSize } from '..';
export default function AlwaysVisible() {
  const [value, setValue] = useState(100);
  return React.createElement(PageSize, {
    alwaysVisible: true,
    total: 3,
    value: value,
    onChange: setValue
  });
}
//# sourceMappingURL=AlwaysVisible.js.map