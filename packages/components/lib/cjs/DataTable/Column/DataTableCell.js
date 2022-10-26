"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableCell = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Layout = require("../../Layout");

var _Text = require("../../Text");

var _Truncate = require("../../Truncate");

var _utils = require("../../utils");

var _columnSize = require("./columnSize");

var _FocusableCell = require("./FocusableCell");

var _templateObject;

var _excluded = ["children", "description", "indicator", "onBlur", "onKeyUp", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTableCellLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      description = _ref.description,
      indicator = _ref.indicator,
      onBlur = _ref.onBlur,
      onKeyUp = _ref.onKeyUp,
      size = _ref.size,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var focusVisibleProps = (0, _utils.useFocusVisible)({
    onBlur: onBlur,
    onKeyUp: onKeyUp
  });
  var content = size && size !== 'nowrap' ? _react["default"].createElement(_Truncate.Truncate, null, children) : children;
  var ref = (0, _react.useRef)(null);
  var forkedRef = (0, _utils.useForkedRef)(ref, forwardedRef);
  (0, _react.useEffect)(function () {
    var _ref$current;

    var element = ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelectorAll('a, button, input');

    if (element) {
      element.forEach(function (activeElement) {
        return activeElement.setAttribute('tabIndex', '-1');
      });
    }
  });

  if (description) {
    content = _react["default"].createElement(_Layout.SpaceVertical, {
      gap: "u05",
      align: "stretch"
    }, _react["default"].createElement("span", null, content), description && _react["default"].createElement(_Text.Paragraph, {
      fontSize: "xsmall",
      color: "text1",
      truncate: true
    }, _react["default"].createElement(_Truncate.Truncate, null, description)));

    if (indicator) {
      content = _react["default"].createElement(_Layout.Space, {
        gap: "u4"
      }, indicator, content);
    }
  } else if (indicator) {
    content = _react["default"].createElement(_Layout.Space, {
      gap: "u4"
    }, indicator, _react["default"].createElement(_Truncate.Truncate, null, content));
  }

  return _react["default"].createElement(_FocusableCell.FocusableCell, (0, _extends2["default"])({
    ref: forkedRef
  }, focusVisibleProps, props), content);
});
DataTableCellLayout.displayName = 'DataTableCellLayout';
var DataTableCell = (0, _styledComponents["default"])(DataTableCellLayout).withConfig({
  displayName: "DataTableCell",
  componentId: "sc-1sdic09-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _columnSize.columnSize);
exports.DataTableCell = DataTableCell;
//# sourceMappingURL=DataTableCell.js.map