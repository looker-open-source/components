import React from 'react';
import { List, ListItem } from '../';

const Item = props => React.createElement(ListItem, props, "blah");

export const ItemsFiller = ({
  count: _count = 10
}) => React.createElement(List, null, [...Array(_count).keys()].map(key => React.createElement(Item, {
  key: key
})));
//# sourceMappingURL=ListHelper.js.map