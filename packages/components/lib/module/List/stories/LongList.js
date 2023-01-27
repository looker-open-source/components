

import React from 'react';
import { List } from '../';
import { ListItem, Space } from '../../';
const array3000 = Array.from(Array(3000), (_, i) => String(i));
export default function LongList() {
  return React.createElement(Space, {
    height: 300
  }, React.createElement(List, {
    width: 200
  }, array3000.map((item, i) => React.createElement(ListItem, {
    key: i
  }, i > 0 && i % 30 === 0 ? 'Longlonglonglonglonglonglonglonglonglonglong' : item))), React.createElement("div", null, "Without width on List, windowing plus variable item widths causes the layout to be unstable."));
}
//# sourceMappingURL=LongList.js.map