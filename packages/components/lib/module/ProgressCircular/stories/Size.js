
import React from 'react';
import { ProgressCircular } from '../ProgressCircular';
import { Space } from '../../Layout';
export default function Size() {
  return React.createElement(Space, {
    justify: "center"
  }, React.createElement(ProgressCircular, {
    size: "xsmall"
  }), React.createElement(ProgressCircular, {
    size: "small"
  }), React.createElement(ProgressCircular, {
    size: "medium"
  }), React.createElement(ProgressCircular, null));
}
//# sourceMappingURL=Size.js.map