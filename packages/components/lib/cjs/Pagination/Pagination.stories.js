"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Text = require("../Text");

var _Pagination = require("./Pagination");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Basic = function Basic() {
  var _useState = (0, _react.useState)(1),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Text.Paragraph, null, "You're currently viewing page ".concat(currentPage)), _react["default"].createElement(_Pagination.Pagination, {
    current: currentPage,
    pages: 10,
    onChange: setCurrentPage
  }));
};

exports.Basic = Basic;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Pagination.Pagination,
  title: 'Pagination'
};
exports["default"] = _default;
//# sourceMappingURL=Pagination.stories.js.map