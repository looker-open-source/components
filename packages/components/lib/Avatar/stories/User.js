import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Box2, AvatarUser } from '../..';
export default function User() {
  const data = {
    avatar_url: 'https://github.com/looker-open-source/components/blob/1b708b472d974987e80c30bbbb286911a438542a/packages/components/test-assets/cheese.png?raw=true',
    first_name: 'Cheddar',
    last_name: 'Cheese'
  };

  const noImageData = _objectSpread(_objectSpread({}, data), {}, {
    avatar_url: null
  });

  return React.createElement(Box2, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }, React.createElement(AvatarUser, {
    user: data
  }), React.createElement(AvatarUser, {
    user: noImageData
  }));
}
//# sourceMappingURL=User.js.map