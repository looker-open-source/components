

import React from 'react';
import { Box, Truncate } from '../..';
export default function Description() {
  return React.createElement(Box, {
    maxWidth: 500
  }, React.createElement(Truncate, {
    description: "This is pretty cheesy \uD83E\uDDC0"
  }, React.createElement("strong", null, "Hover over text to see the description:"), " Cheese is delicious."));
}
//# sourceMappingURL=Description.js.map