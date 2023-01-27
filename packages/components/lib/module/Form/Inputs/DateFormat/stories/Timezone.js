

import React from 'react';
import { DateFormat } from '../DateFormat';
export default function Format() {
  return React.createElement(DateFormat, {
    timeZone: "Pacific/Auckland"
  }, new Date(Date.parse('05 May 2020 12:00 UTC')));
}
//# sourceMappingURL=Timezone.js.map