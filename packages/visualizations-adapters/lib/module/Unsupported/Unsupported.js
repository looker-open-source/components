

import React from 'react';
import { Debug } from '../Debug';

export const Unsupported = ({
  data: _data = [{
    '': []
  }],
  fields,
  config
}) => {
  return React.createElement(Debug, {
    ok: true,
    data: _data,
    error: {
      message: `Unsupported visualization type: ${config.type}`
    },
    fields: fields,
    config: config
  });
};
//# sourceMappingURL=Unsupported.js.map