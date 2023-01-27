"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyValueList = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("@looker/components");
var _utils = require("../utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var renderKeyValueList = function renderKeyValueList(o, i18n) {
  var t = i18n.t;
  var collection = Object.entries(o);
  var renderValueByType = function renderValueByType(v) {
    switch ((0, _typeof2["default"])(v)) {
      case 'object':
        return v === null ? t('null') : renderKeyValueList(v, i18n);
      case 'boolean':
        return v ? t('true') : t('false');
      case 'undefined':
        return t('undefined');
      default:
        return v;
    }
  };
  return _react["default"].createElement(DL, null, collection.map(function (pair) {
    var _pair = (0, _slicedToArray2["default"])(pair, 2),
      key = _pair[0],
      value = _pair[1];
    return _react["default"].createElement(ListRow, {
      key: key
    }, _react["default"].createElement(DT, null, _react["default"].createElement(_components.Truncate, null, key)), _react["default"].createElement(DD, null, renderValueByType(value)));
  }));
};
var ListRow = _styledComponents["default"].div.withConfig({
  displayName: "KeyValueList__ListRow",
  componentId: "sc-o6y831-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-top: 1px solid ", ";\n  padding: ", " 0;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.ui2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.xsmall;
});
var DD = _styledComponents["default"].dd.withConfig({
  displayName: "KeyValueList__DD",
  componentId: "sc-o6y831-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  line-height: ", ";\n  margin: 0;\n  margin-left: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeights.large;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.space.xlarge;
});
var DL = _styledComponents["default"].dl.withConfig({
  displayName: "KeyValueList__DL",
  componentId: "sc-o6y831-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0;\n  ", " & {\n    margin-top: ", ";\n  }\n"])), DD, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.xsmall;
});
var DT = _styledComponents["default"].dt.withConfig({
  displayName: "KeyValueList__DT",
  componentId: "sc-o6y831-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 1px;\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  margin: 0;\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.ui4;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.fontSizes.small;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.fontWeights.semiBold;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.lineHeights.small;
});
var KeyValueList = function KeyValueList(_ref11) {
  var value = _ref11.value;
  var i18n = (0, _utils.useTranslation)('KeyValueList');
  return renderKeyValueList(value, i18n);
};
exports.KeyValueList = KeyValueList;
//# sourceMappingURL=KeyValueList.js.map