"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Label = require("../../Label");

var _Checkbox = require("./Checkbox");

var _useMixedStateCheckbox = require("./useMixedStateCheckbox");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FormDemo = function FormDemo() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      parentState = _useState2[0],
      setParentState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      appleState = _useState4[0],
      setAppleState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      bananaState = _useState6[0],
      setBananaState = _useState6[1];

  var handleAppleChange = function handleAppleChange() {
    return setAppleState(!appleState);
  };

  var handleBananaChange = function handleBananaChange() {
    return setBananaState(!bananaState);
  };

  var fruitTree = {
    parent: {
      setState: setParentState,
      state: parentState
    },
    children: [{
      setState: setAppleState,
      state: appleState
    }, {
      setState: setBananaState,
      state: bananaState
    }]
  };
  var handleParentChange = (0, _useMixedStateCheckbox.useMixedStateCheckbox)(fruitTree);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Checkbox.Checkbox, {
    id: "fruit-parent",
    name: "fruit",
    value: "all-fruit",
    onChange: handleParentChange,
    checked: parentState
  }), _react["default"].createElement(_Label.Label, {
    htmlFor: "fruit-parent",
    fontSize: "medium"
  }, "All Fruit"), _react["default"].createElement(_Checkbox.Checkbox, {
    id: "fruit-apple",
    name: "fruit",
    value: "apple",
    onChange: handleAppleChange,
    checked: appleState
  }), _react["default"].createElement(_Label.Label, {
    htmlFor: "fruit-apple",
    fontSize: "large"
  }, "Apple"), _react["default"].createElement(_Checkbox.Checkbox, {
    id: "fruit-banana",
    name: "fruit",
    value: "apple",
    onChange: handleBananaChange,
    checked: bananaState
  }), _react["default"].createElement(_Label.Label, {
    htmlFor: "fruit-banana",
    fontSize: "large"
  }, "Banana"));
};

test('Parent element receives `checked="mixed"` state when some (but not all) children are checked', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(FormDemo, null));

  var parent = _react2.screen.getByLabelText('All Fruit');

  var child = _react2.screen.getByLabelText('Apple');

  var parentAttr = parent.attributes.getNamedItem('aria-checked');
  var childAttr = child.attributes.getNamedItem('aria-checked');
  expect(parentAttr.value).toEqual('false');
  expect(childAttr.value).toEqual('false');

  _react2.fireEvent.click(child);

  expect(parentAttr.value).toEqual('mixed');
  expect(childAttr.value).toEqual('true');
});
test('Parent element receives `checked="true"` state all children are checked', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(FormDemo, null));

  var parent = _react2.screen.getByLabelText('All Fruit');

  var child1 = _react2.screen.getByLabelText('Apple');

  var child2 = _react2.screen.getByLabelText('Banana');

  var parentAttr = parent.attributes.getNamedItem('aria-checked');
  var child1Attr = child1.attributes.getNamedItem('aria-checked');
  var child2Attr = child2.attributes.getNamedItem('aria-checked');
  expect(parentAttr.value).toEqual('false');
  expect(child1Attr.value).toEqual('false');
  expect(child2Attr.value).toEqual('false');

  _react2.fireEvent.click(child1);

  _react2.fireEvent.click(child2);

  expect(parentAttr.value).toEqual('true');
  expect(child1Attr.value).toEqual('true');
  expect(child2Attr.value).toEqual('true');
});
test('Clicking Parent element toggles all children', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(FormDemo, null));

  var parent = _react2.screen.getByLabelText('All Fruit');

  var child1 = _react2.screen.getByLabelText('Apple');

  var child2 = _react2.screen.getByLabelText('Banana');

  var parentAttr = parent.attributes.getNamedItem('aria-checked');
  var child1Attr = child1.attributes.getNamedItem('aria-checked');
  var child2Attr = child2.attributes.getNamedItem('aria-checked');
  expect(parentAttr.value).toEqual('false');
  expect(child1Attr.value).toEqual('false');
  expect(child2Attr.value).toEqual('false');

  _react2.fireEvent.click(parent);

  expect(parentAttr.value).toEqual('true');
  expect(child1Attr.value).toEqual('true');
  expect(child2Attr.value).toEqual('true');
});
//# sourceMappingURL=useMixedStateCheckbox.spec.js.map