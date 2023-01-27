

import React from 'react';
import { Select } from '..';
export default function Windowing() {
  const options1k = Array.from(Array(1000), (_, index) => ({
    value: `${index}`
  }));
  return React.createElement(Select, {
    maxWidth: 400,
    placeholder: "So many options...",
    options: options1k
  });
}
//# sourceMappingURL=Windowing.js.map