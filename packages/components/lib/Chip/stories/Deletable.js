import React from 'react';
import { Chip } from '../Chip';
export default function Deletable() {
  return React.createElement(Chip, {
    onDelete: () => {
      alert('Deletable');
    }
  }, "Deletable");
}
//# sourceMappingURL=Deletable.js.map