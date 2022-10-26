"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Range = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _components = require("@looker/components");

var _FieldInfo = require("../../FieldInfo");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Range = function Range(props) {
  var axis = props.axis,
      _props$axis$range = props.axis.range,
      range = _props$axis$range === void 0 ? ['auto', 'auto'] : _props$axis$range,
      onAxisChange = props.onAxisChange;

  var _range = (0, _slicedToArray2["default"])(range, 2),
      yMin = _range[0],
      yMax = _range[1];

  var deriveRangeValue = function deriveRangeValue(e) {
    var _ref = e.target,
        value = _ref.value;

    switch (true) {
      case (0, _visualizationsAdapters.isNumeric)(value):
        return Number(value);

      case value === '-':
        return value;

      default:
        return 'auto';
    }
  };

  var handleMinChange = function handleMinChange(e) {
    onAxisChange(_objectSpread(_objectSpread({}, axis), {}, {
      range: [deriveRangeValue(e), yMax]
    }));
  };

  var handleMaxChange = function handleMaxChange(e) {
    onAxisChange(_objectSpread(_objectSpread({}, axis), {}, {
      range: [yMin, deriveRangeValue(e)]
    }));
  };

  return _react["default"].createElement(_components.Fieldset, {
    inline: true
  }, _react["default"].createElement(_components.FieldText, {
    label: "Y-min",
    value: yMin,
    onChange: handleMinChange,
    detail: _react["default"].createElement(_FieldInfo.FieldInfo, {
      content: "Number or 'auto'"
    })
  }), _react["default"].createElement(_components.FieldText, {
    label: "Y-max",
    value: yMax,
    onChange: handleMaxChange,
    detail: _react["default"].createElement(_FieldInfo.FieldInfo, {
      content: "Number or 'auto'"
    })
  }));
};

exports.Range = Range;
//# sourceMappingURL=Range.js.map