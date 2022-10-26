import React from 'react';
import { ChipButton } from '../..';
export default function Deletable() {
  return React.createElement(ChipButton, {
    onDelete: () => alert('Deletable')
  }, "Deletable");
}
//# sourceMappingURL=Deletable.js.map