

import React from 'react';
import { PopoverContent } from '../..';
import { ConstitutionShort } from '../../../../fixtures/Constitution';
export default function CustomPadding() {
  return React.createElement(PopoverContent, {
    pb: 'u3',
    pt: 'u8',
    px: 'u3'
  }, React.createElement(ConstitutionShort, null));
}
//# sourceMappingURL=CustomPadding.js.map