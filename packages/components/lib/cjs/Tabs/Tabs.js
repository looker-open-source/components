"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;
exports.useTabs = useTabs;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useTabs(props) {
  var defaultIndex = props && props.defaultIndex || 0;
  var onChange = props && props.onChange;
  var isControlled = props && props.isControlled || false;

  var _useState = (0, _react.useState)(defaultIndex),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  return {
    onSelectTab: function onSelectTab(index) {
      onChange && onChange(index);

      if (!isControlled) {
        setSelectedIndex(index);
      }
    },
    selectedIndex: isControlled && props ? props.controlledIndex : selectedIndex
  };
}

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      controlledIndex = _ref.index,
      defaultIndex = _ref.defaultIndex,
      onChange = _ref.onChange;

  var _useRef = (0, _react.useRef)(controlledIndex !== undefined),
      isControlled = _useRef.current;

  if (!isControlled && controlledIndex !== undefined) {
    console.warn('Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.');
  }

  if (isControlled && controlledIndex === undefined) {
    console.warn('Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.');
  }

  var tabs = useTabs({
    controlledIndex: controlledIndex,
    defaultIndex: defaultIndex,
    isControlled: isControlled,
    onChange: onChange
  });

  var clonedChildren = _react.Children.map(children, function (child) {
    return (0, _react.cloneElement)(child, tabs);
  });

  return _react["default"].createElement(_react["default"].Fragment, null, clonedChildren);
};

exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map