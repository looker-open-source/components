"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Core = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@looker/components");

var _partial = _interopRequireDefault(require("lodash/partial"));

var _curry = _interopRequireDefault(require("lodash/curry"));

var _Checkbox = require("../../Checkbox");

var _TickDensity = require("./TickDensity");

var _Range = require("./Range");

var _has = _interopRequireDefault(require("lodash/has"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Core = function Core(_ref) {
  var onAxisChange = _ref.onAxisChange,
      axisConfig = _ref.axisConfig;

  var _useState = (0, _react.useState)('1'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      group = _useState2[0],
      setGroup = _useState2[1];

  var handleLabelChange = (0, _curry["default"])(function (i, axis, e) {
    var _ref2 = e.target,
        value = _ref2.value;
    onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
      label: value.length ? value : false
    }));
  });
  return _react["default"].createElement(_react["default"].Fragment, null, axisConfig.length > 1 && _react["default"].createElement(_components.ButtonToggle, {
    value: group,
    onChange: setGroup
  }, axisConfig.map(function (_, i) {
    return _react["default"].createElement(_components.ButtonItem, {
      key: i
    }, String(i + 1));
  })), axisConfig.map(function (axis, i) {
    return String(i + 1) === group && _react["default"].createElement(_components.SpaceVertical, {
      key: i
    }, (0, _has["default"])(axis, 'label') && _react["default"].createElement(_components.FieldText, {
      label: "Label",
      value: typeof axis.label === 'string' ? axis.label : '',
      onChange: handleLabelChange(i)(axis)
    }), (0, _has["default"])(axis, 'reversed') && _react["default"].createElement(_Checkbox.Checkbox, {
      label: "Reverse",
      checked: axis.reversed,
      onChange: function onChange(checked) {
        return onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
          reversed: checked
        }));
      }
    }), (0, _has["default"])(axis, 'gridlines') && _react["default"].createElement(_Checkbox.Checkbox, {
      label: "Render Gridlines",
      checked: axis.gridlines,
      onChange: function onChange(checked) {
        return onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
          gridlines: checked
        }));
      }
    }), (0, _has["default"])(axis, 'values') && _react["default"].createElement(_Checkbox.Checkbox, {
      label: "Show Values",
      checked: axis.values,
      onChange: function onChange(checked) {
        return onAxisChange(i, _objectSpread(_objectSpread({}, axis), {}, {
          values: checked
        }));
      }
    }), (0, _has["default"])(axis, 'tick_density') && _react["default"].createElement(_TickDensity.TickDensity, {
      axis: axis,
      onAxisChange: (0, _partial["default"])(onAxisChange, i)
    }), (0, _has["default"])(axis, 'range') && _react["default"].createElement(_Range.Range, {
      axis: axis,
      onAxisChange: (0, _partial["default"])(onAxisChange, i)
    }));
  }));
};

exports.Core = Core;
//# sourceMappingURL=Core.js.map