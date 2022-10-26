"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeSlider = exports.InternalRangeSlider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _indexOf = _interopRequireDefault(require("lodash/indexOf"));

var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

var _partial = _interopRequireDefault(require("lodash/partial"));

var _map = _interopRequireDefault(require("lodash/map"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _utils = require("../../../utils");

var _precisionUtils = require("./precisionUtils");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sort = function sort(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
};

var findClosestIndex = function findClosestIndex(value, newPoint) {
  var closestIndex = (0, _sortBy["default"])(value.map(function (p, i) {
    return {
      distance: Math.abs(p - newPoint),
      index: i
    };
  }), 'distance')[0].index;
  return closestIndex;
};

var createNewValue = function createNewValue(value, newPoint, focusedIndex) {
  var indexToReplace = focusedIndex === undefined ? findClosestIndex(value, newPoint) : focusedIndex;
  var newValue = Object.assign([], value, (0, _defineProperty2["default"])({}, indexToReplace, newPoint));
  return sort(newValue);
};

var roundToStep = function roundToStep(min, max, step, newPoint) {
  var stepPrecision = (0, _precisionUtils.getPrecision)(step);
  var roundedPoint = (0, _precisionUtils.precisionRound)((newPoint - min) / step * step + min, stepPrecision);
  return Math.max(Math.min(roundedPoint, max), min);
};

var calculatePointValue = function calculatePointValue(mouseX, containerRect, min, max, step) {
  var mousePosition = mouseX - containerRect.left;
  var possibleValueRange = max - min;
  var newPoint = mousePosition / containerRect.width * possibleValueRange + min;
  return roundToStep(min, max, step, newPoint);
};

var boundValueProp = function boundValueProp(min, max, value) {
  return (0, _map["default"])(value || [min, max], function (point) {
    var boundedPoint = Math.max(Math.min(point, max), min);

    if (boundedPoint !== point) {
      console.warn("<RangeSlider />: The value '".concat(point, "' falls outside the possible range (MIN: ").concat(min, ", MAX: ").concat(max, "). Please adjust min and max props accordingly."));
    }

    return boundedPoint;
  });
};

var InternalRangeSlider = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      id = _ref.id,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 10 : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      valueFromProps = _ref.value,
      defaultValueProp = _ref.defaultValue,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$readOnly = _ref.readOnly,
      readOnlyProp = _ref$readOnly === void 0 ? false : _ref$readOnly,
      ariaLabelledby = _ref['aria-labelledby'],
      ariaDescribedby = _ref['aria-describedby'],
      name = _ref.name;

  var _useTranslation = (0, _utils.useTranslation)('RangeSlider'),
      t = _useTranslation.t;

  var valuePropMin = valueFromProps === null || valueFromProps === void 0 ? void 0 : valueFromProps[0];
  var valuePropMax = valueFromProps === null || valueFromProps === void 0 ? void 0 : valueFromProps[1];
  var valueProp = (0, _react.useMemo)(function () {
    if (valuePropMin === undefined || valuePropMax === undefined) {
      return undefined;
    }

    return [valuePropMin, valuePropMax];
  }, [valuePropMin, valuePropMax]);
  var unintentionalReadOnly = (0, _utils.useReadOnlyWarn)('RangeSlider', valueProp, onChange);
  var readOnly = readOnlyProp || unintentionalReadOnly;

  var _useState = (0, _react.useState)(function () {
    var boundedValue = boundValueProp(min, max, valueProp || defaultValueProp);
    return sort(boundedValue);
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      valueState = _useState2[0],
      setValue = _useState2[1];

  var valueMin = valueState[0];
  var valueMax = valueState[1];
  var value = (0, _react.useMemo)(function () {
    return [valueMin, valueMax];
  }, [valueMin, valueMax]);

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      containerRef = _useState4[0],
      setContainerRef = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      focusedThumb = _useState6[0],
      setFocusedThumb = _useState6[1];

  var _useMeasuredElement = (0, _utils.useMeasuredElement)(containerRef),
      _useMeasuredElement2 = (0, _slicedToArray2["default"])(_useMeasuredElement, 2),
      containerRect = _useMeasuredElement2[0],
      refreshDomRect = _useMeasuredElement2[1];

  var _useMouseDragPosition = (0, _utils.useMouseDragPosition)(containerRef),
      mousePos = _useMouseDragPosition.mousePos,
      isMouseDown = _useMouseDragPosition.isMouseDown;

  var previousIsMouseDown = (0, _utils.usePreviousValue)(isMouseDown);
  var minThumbRef = (0, _react.useRef)(null);
  var maxThumbRef = (0, _react.useRef)(null);

  var _value = (0, _slicedToArray2["default"])(value, 2),
      minValue = _value[0],
      maxValue = _value[1];

  var minPos = (minValue - min) / (max - min) * containerRect.width;
  var maxPos = (maxValue - min) / (max - min) * containerRect.width;
  var fillWidth = maxPos - minPos;
  var roundSliderValue = (0, _partial["default"])(roundToStep, min, max, step);
  var focusChangedPoint = (0, _react.useCallback)(function (newValue, newPoint) {
    var indexToFocus = (0, _indexOf["default"])(newValue, newPoint);
    var thumbRefs = [minThumbRef, maxThumbRef];
    var refToFocus = thumbRefs[indexToFocus];
    setFocusedThumb(indexToFocus);
    refToFocus.current && refToFocus.current.focus();
  }, []);

  var incrementPoint = function incrementPoint(point) {
    var stepMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return point + step * stepMultiplier;
  };

  var decrementPoint = function decrementPoint(point) {
    var stepMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return point - step * stepMultiplier;
  };

  var handleKeyboardNav = function handleKeyboardNav(e) {
    if (!disabled && !readOnly) {
      if ((0, _startsWith["default"])(e.key, 'Arrow') && focusedThumb !== undefined) {
        e.preventDefault();
        var unfocusedThumb = focusedThumb === 0 ? 1 : 0;
        var mutationFn = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? incrementPoint : decrementPoint;
        var newPoint = roundSliderValue(mutationFn(value[focusedThumb], e.shiftKey ? 10 : 1));
        var newValue = sort([newPoint, value[unfocusedThumb]]);
        focusChangedPoint(newValue, newPoint);
        setValue(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
      }
    }
  };

  var focusMinThumb = function focusMinThumb() {
    if (!disabled && !readOnly) {
      setFocusedThumb(0);
    }
  };

  var focusMaxThumb = function focusMaxThumb() {
    if (!disabled && !readOnly) {
      setFocusedThumb(1);
    }
  };

  var handleBlur = function handleBlur() {
    setFocusedThumb(undefined);
  };

  var handleMouseEvent = (0, _react.useCallback)(function (maintainFocus) {
    if (!disabled && !readOnly && mousePos.x) {
      var newPoint = calculatePointValue(mousePos.x, containerRect, min, max, step);
      var newValue = createNewValue(value, newPoint, maintainFocus ? focusedThumb : undefined);
      focusChangedPoint(newValue, newPoint);

      if (!(0, _isEqual["default"])(value, newValue)) {
        setValue(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
      }
    }
  }, [containerRect, disabled, focusChangedPoint, focusedThumb, max, min, mousePos.x, onChange, readOnly, step, value]);
  var handleMouseDown = (0, _react.useMemo)(function () {
    return (0, _partial["default"])(handleMouseEvent, false);
  }, [handleMouseEvent]);
  var handleMouseDrag = (0, _react.useMemo)(function () {
    return (0, _partial["default"])(handleMouseEvent, true);
  }, [handleMouseEvent]);
  (0, _react.useEffect)(function () {
    if (isMouseDown) {
      refreshDomRect();
    }
  }, [isMouseDown, refreshDomRect]);
  (0, _react.useEffect)(function () {
    if (isMouseDown) {
      handleMouseDown();
    }
  }, [isMouseDown, handleMouseDown, containerRect]);
  (0, _react.useEffect)(function () {
    if (isMouseDown && previousIsMouseDown) {
      handleMouseDrag();
    }
  }, [isMouseDown, previousIsMouseDown, handleMouseDrag, mousePos]);
  var previousValueProp = (0, _utils.usePreviousValue)(valueProp);
  (0, _react.useEffect)(function () {
    var boundedValueProp = boundValueProp(min, max, valueProp);

    if (valueProp && !(0, _isEqual["default"])(value, boundedValueProp) && !(0, _isEqual["default"])(valueProp, previousValueProp)) {
      setValue(sort(boundedValueProp));
    }
  }, [valueProp, previousValueProp, value, min, max]);
  (0, _react.useEffect)(function () {
    var boundedValueProp = boundValueProp(min, max, valueProp);

    if (valueProp && !(0, _isEqual["default"])(valueProp, boundedValueProp)) {
      onChange === null || onChange === void 0 ? void 0 : onChange(sort(boundedValueProp));
    }
  }, [valueProp, onChange, min, max]);
  return _react["default"].createElement("div", {
    "data-testid": "range-slider-wrapper",
    onTouchEnd: handleBlur,
    className: className,
    id: id,
    ref: setContainerRef
  }, _react["default"].createElement(SliderTrack, {
    ref: ref,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby
  }, _react["default"].createElement(SliderFill, {
    fillStart: minPos,
    fillWidth: fillWidth,
    disabled: disabled
  }), _react["default"].createElement(ThumbLabel, {
    position: minPos,
    focus: focusedThumb === 0,
    disabled: disabled
  }, minValue), _react["default"].createElement(ThumbLabel, {
    position: maxPos,
    focus: focusedThumb === 1,
    disabled: disabled
  }, maxValue), _react["default"].createElement(Thumb, {
    position: minPos,
    tabIndex: disabled ? '-1' : '0',
    onFocus: focusMinThumb,
    onBlur: handleBlur,
    onKeyDown: handleKeyboardNav,
    ref: minThumbRef,
    disabled: disabled,
    "aria-label": name ? t('Minimum Name', {
      name: name
    }) : t('Minimum Value'),
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-disabled": disabled,
    "aria-valuenow": value[0]
  }), _react["default"].createElement(Thumb, {
    position: maxPos,
    tabIndex: disabled ? '-1' : '0',
    onFocus: focusMaxThumb,
    onBlur: handleBlur,
    onKeyDown: handleKeyboardNav,
    ref: maxThumbRef,
    disabled: disabled,
    "aria-label": name ? t('Maximum Name', {
      name: name
    }) : t('Maximum Value'),
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-disabled": disabled,
    "aria-valuenow": value[1]
  })));
});
exports.InternalRangeSlider = InternalRangeSlider;
InternalRangeSlider.displayName = 'InternalRangeSlider';
var RangeSlider = (0, _styledComponents["default"])(InternalRangeSlider).attrs(function (_ref2) {
  var _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? 'small' : _ref2$fontSize,
      _ref2$lineHeight = _ref2.lineHeight,
      lineHeight = _ref2$lineHeight === void 0 ? 'xsmall' : _ref2$lineHeight;
  return {
    fontSize: fontSize,
    lineHeight: lineHeight
  };
}).withConfig({
  displayName: "RangeSlider",
  componentId: "sc-1w8bpgp-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  padding: 1.5rem 0 0.5rem;\n  touch-action: none;\n  user-select: none;\n"])), _designTokens.reset, _designTokens.space, _designTokens.typography);
exports.RangeSlider = RangeSlider;

var SliderTrack = _styledComponents["default"].div.withConfig({
  displayName: "RangeSlider__SliderTrack",
  componentId: "sc-1w8bpgp-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 2px;\n  height: 4px;\n  position: relative;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui2;
});

var ThumbLabel = _styledComponents["default"].div.withConfig({
  displayName: "RangeSlider__ThumbLabel",
  componentId: "sc-1w8bpgp-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1rem;\n  color: ", ";\n  padding: 0 0.5rem;\n  position: absolute;\n  text-align: center;\n  top: -24px;\n  transform: translateX(", ")\n    translateX(-50%);\n  user-select: none;\n  z-index: ", ";\n"])), function (_ref4) {
  var theme = _ref4.theme,
      focus = _ref4.focus;
  return focus && theme.colors.keyAccent;
}, function (_ref5) {
  var colors = _ref5.theme.colors,
      disabled = _ref5.disabled;
  return disabled ? colors.neutral : colors.key;
}, function (_ref6) {
  var _ref6$position = _ref6.position,
      position = _ref6$position === void 0 ? 0 : _ref6$position;
  return "".concat(position, "px");
}, function (_ref7) {
  var focus = _ref7.focus;
  return focus ? 1 : 0;
});

var Thumb = _styledComponents["default"].div.withConfig({
  displayName: "RangeSlider__Thumb",
  componentId: "sc-1w8bpgp-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border: 3px solid\n    ", ";\n  border-radius: 100%;\n  cursor: pointer;\n  height: 16px;\n  margin-left: -8px;\n  position: absolute;\n  top: -6px;\n  transform: translateX(", ");\n  width: 16px;\n  &:focus {\n    border-width: ", ";\n    outline: none;\n    z-index: 1;\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.field;
}, function (_ref9) {
  var colors = _ref9.theme.colors,
      disabled = _ref9.disabled;
  return disabled ? colors.neutral : colors.key;
}, function (_ref10) {
  var _ref10$position = _ref10.position,
      position = _ref10$position === void 0 ? 0 : _ref10$position;
  return "".concat(position, "px");
}, function (_ref11) {
  var disabled = _ref11.disabled;
  return disabled ? '3px' : '5px';
});

var SliderFill = _styledComponents["default"].div.withConfig({
  displayName: "RangeSlider__SliderFill",
  componentId: "sc-1w8bpgp-4"
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  height: 100%;\n  left: ", "px;\n  position: absolute;\n  width: ", "px;\n"])), function (_ref12) {
  var colors = _ref12.theme.colors,
      disabled = _ref12.disabled;
  return disabled ? colors.neutral : colors.key;
}, function (_ref13) {
  var fillStart = _ref13.fillStart;
  return fillStart;
}, function (_ref14) {
  var fillWidth = _ref14.fillWidth;
  return fillWidth;
});
//# sourceMappingURL=RangeSlider.js.map