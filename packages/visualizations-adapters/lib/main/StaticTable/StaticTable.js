"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _components = require("@looker/components");
var _templateObject;
var StaticTable = function StaticTable(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$fields = _ref.fields,
    fields = _ref$fields === void 0 ? {
      dimensions: [],
      measures: []
    } : _ref$fields,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 'auto' : _ref$width;
  if (!data.length) {
    return null;
  }
  var measureLabels = (0, _toConsumableArray2["default"])(fields.measures).map(function (f) {
    return [f.name, f.view_label];
  });
  var dimensionLabels = (0, _toConsumableArray2["default"])(fields.dimensions).map(function (f) {
    return [f.name, f.label_short];
  });
  var fieldLabels = Object.fromEntries([].concat((0, _toConsumableArray2["default"])(dimensionLabels), (0, _toConsumableArray2["default"])(measureLabels)));
  var formattedData = data.map(function (d) {
    return Object.fromEntries(
    Object.entries(d).map(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      return [key, value];
    }));
  });
  var resultKeys = Array.isArray(data) ? Object.keys(data[0]) : Object.keys(data);
  return _react["default"].createElement(_components.Table, {
    width: width === 'auto' ? '100%' : "".concat(width, "px"),
    "data-testid": "table-chart"
  }, _react["default"].createElement(_components.TableHead, null, _react["default"].createElement(_components.TableRow, null, _react["default"].createElement(_components.TableHeaderCell, null), resultKeys.map(function (key) {
    return _react["default"].createElement(StyledTableHeaderCell, {
      key: key,
      width: "auto"
    }, fieldLabels[key]);
  }))), _react["default"].createElement(_components.TableBody, null, Array.isArray(data) && formattedData.map(function (obj, i) {
    return _react["default"].createElement(_components.TableRow, {
      key: i
    }, _react["default"].createElement(_components.TableDataCell, {
      textAlign: "right",
      color: "text1",
      width: "1px",
      pr: "small"
    }, i + 1), resultKeys.map(function (key) {
      var val = obj[key];
      var valHelper = val;
      if (typeof val === 'function') {
        valHelper = val();
      } else if (Object(val) === val) {
        valHelper = JSON.stringify(val);
      }
      return _react["default"].createElement(_components.TableDataCell, {
        key: key
      }, valHelper);
    }));
  })));
};
exports.StaticTable = StaticTable;
var StyledTableHeaderCell = (0, _styledComponents["default"])(_components.TableHeaderCell).withConfig({
  displayName: "StaticTable__StyledTableHeaderCell",
  componentId: "sc-15kcil2-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  &:first-child {\n    max-width: 0;\n    min-width: 0;\n  }\n"])));
//# sourceMappingURL=StaticTable.js.map