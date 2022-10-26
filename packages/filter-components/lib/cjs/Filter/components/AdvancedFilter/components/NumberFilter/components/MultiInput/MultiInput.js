"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiInputInternal = exports.MultiInput = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _components = require("@looker/components");

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireWildcard(require("react"));

var _filter_styles = require("../../../../../../utils/filter_styles");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var validate = function validate(value) {
  return value !== '' && !isNaN(Number(value));
};

var MultiInputInternal = function MultiInputInternal(_ref) {
  var className = _ref.className,
      item = _ref.item,
      onChange = _ref.onChange,
      width = _ref.width,
      placeholder = _ref.placeholder,
      validationMessage = _ref.validationMessage;
  var ref = (0, _react.useRef)(null);
  var values = item.value.map(String);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var handleChange = function handleChange(newValues) {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      value: newValues.map(_filterExpressions.getNumberFromString)
    });
  };

  (0, _react.useEffect)(function () {
    return function () {
      if (validate(inputValue) && !document.body.contains(ref.current)) {
        handleChange([].concat((0, _toConsumableArray2["default"])(values), [inputValue]));
      }
    };
  }, [inputValue, values]);
  return _react["default"].createElement(_components.InputChips, {
    ref: ref,
    width: width || _filter_styles.multiInputWidth,
    className: className,
    placeholder: placeholder,
    values: values,
    onChange: handleChange,
    inputValue: inputValue,
    onInputChange: setInputValue,
    validate: validate,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    noErrorIcon: true
  });
};

exports.MultiInputInternal = MultiInputInternal;
var MultiInput = (0, _styledComponents["default"])(MultiInputInternal).withConfig({
  displayName: "MultiInput",
  componentId: "sc-4quccd-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _filter_styles.inputPlacementStyle);
exports.MultiInput = MultiInput;
//# sourceMappingURL=MultiInput.js.map