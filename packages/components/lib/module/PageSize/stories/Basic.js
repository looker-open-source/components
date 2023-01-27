

import React from 'react';
import { PageSize } from '..';
export default function Basic() {
  return React.createElement(PageSize, {
    total: 100,
    value: 100,
    onChange: value => alert(`You chose ${value} per page`)
  });
}
//# sourceMappingURL=Basic.js.map