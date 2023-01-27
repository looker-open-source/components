import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { SelectMulti } from '..';
export default function Basic(props) {
  return React.createElement(SelectMulti, _extends({
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }, {
      value: 'Mascarpone'
    }, {
      value: 'Brie'
    }, {
      value: 'Mozzarella'
    }, {
      value: 'Cotija'
    }, {
      value: 'Pepperjack'
    }],
    placeholder: "Cheeses",
    flex: 1
  }, props));
}
//# sourceMappingURL=Basic.js.map