"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Basic = exports.AlwaysVisible = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _PageSize = require("./PageSize");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Template = function Template(args) {
  return _react["default"].createElement(_PageSize.PageSize, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  onChange: function onChange(value) {
    return alert("You chose ".concat(value, " per page"));
  },
  total: 100,
  value: 100
};

var AlwaysVisible = function AlwaysVisible() {
  var _useState = (0, _react.useState)(100),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return _react["default"].createElement(_PageSize.PageSize, {
    alwaysVisible: true,
    total: 3,
    value: value,
    onChange: setValue
  });
};

exports.AlwaysVisible = AlwaysVisible;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PageSize.PageSize,
  title: 'PageSize'
};
exports["default"] = _default;
//# sourceMappingURL=PageSize.stories.js.map