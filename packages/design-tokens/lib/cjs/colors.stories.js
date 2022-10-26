"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GroupedByOutput = exports.AllColors = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _src = require("../../components/src");

var _theme = require("./theme");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CELL_SIZE = '3rem';
var sortedColorsArray = (0, _sortBy["default"])(Object.entries(_theme.theme.colors), 0);

var AllColors = function AllColors() {
  var colors = sortedColorsArray.map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        name = _ref2[0],
        color = _ref2[1];

    return {
      color: color,
      label: "".concat(name, " - ").concat(color)
    };
  });
  return _react["default"].createElement(MiniSwatches, null, colors);
};

exports.AllColors = AllColors;

var GroupedByOutput = function GroupedByOutput() {
  var grouped = {};
  sortedColorsArray.forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        name = _ref4[0],
        color = _ref4[1];

    if (grouped[color]) {
      grouped[color] = [].concat((0, _toConsumableArray2["default"])(grouped[color]), [name]);
    } else {
      grouped[String(color)] = [name];
    }
  });
  var colors = Object.entries(grouped).map(function (_ref5) {
    var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        color = _ref6[0],
        entries = _ref6[1];

    var labels = entries.map(function (label, index) {
      return _react["default"].createElement(_react.Fragment, {
        key: index
      }, label, " ", _react["default"].createElement("br", null));
    });
    return {
      color: color,
      label: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("strong", null, color), _react["default"].createElement("br", null), labels)
    };
  });
  return _react["default"].createElement(MiniSwatches, null, colors);
};

exports.GroupedByOutput = GroupedByOutput;
GroupedByOutput.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  title: 'Design Tokens / Colors'
};
exports["default"] = _default;

var GridLayout = _styledComponents["default"].div.withConfig({
  displayName: "colorsstories__GridLayout",
  componentId: "sc-aevhof-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(", ", 1fr));\n  padding: 1rem;\n"])), CELL_SIZE);

var CircleSwatch = _styledComponents["default"].div.withConfig({
  displayName: "colorsstories__CircleSwatch",
  componentId: "sc-aevhof-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: ", ";\n  display: flex;\n  height: 3rem;\n  justify-content: space-between;\n  padding: ", ";\n  width: 3rem;\n"])), function (_ref7) {
  var color = _ref7.color;
  return color;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.elevations.plus3;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.space.u1;
});

var MiniSwatches = function MiniSwatches(_ref10) {
  var children = _ref10.children;
  var colorSwatches = children.map(function (_ref11, index) {
    var label = _ref11.label,
        color = _ref11.color;
    return _react["default"].createElement(_src.Tooltip, {
      key: index,
      content: label,
      textAlign: "left"
    }, _react["default"].createElement(CircleSwatch, {
      color: color
    }));
  });
  return _react["default"].createElement(GridLayout, null, colorSwatches);
};
//# sourceMappingURL=colors.stories.js.map