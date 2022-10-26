"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

require("@testing-library/jest-dom/extend-expect");

var _react = require("@testing-library/react");

require("jest-styled-components");

var _react2 = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _Button = require("../Button");

var _Popover = require("./Popover");

var _Layout = require("./Layout");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SimpleContent = _react2["default"].createElement("div", null, "simple content");

describe('Popover', function () {
  afterEach(function () {
    var root = document.getElementById('modal-root');

    if (root) {
      document.body.removeChild(root);
    }
  });
  test('Accessibility', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Popover.Popover, {
      id: "a11y",
      content: _react2["default"].createElement(_Layout.PopoverLayout, {
        header: "Header text",
        footer: true
      }, "content")
    }, _react2["default"].createElement(_Button.Button, null, "Open")));

    var openPopover = _react.screen.getByText('Open');

    _react.fireEvent.click(openPopover);

    expect(_react.screen.getByText('Header text')).toBeInTheDocument();
    expect(_react.screen.getByRole('dialog')).toBeInTheDocument();
    expect(_react.screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'a11y-heading');
    expect(_react.screen.getByText('Header text')).toHaveAttribute('id', 'a11y-heading');

    _react.fireEvent.click(document);
  });
  test('cloneElement style opens and closes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Popover.Popover, {
      content: SimpleContent
    }, _react2["default"].createElement("button", null, "Test")));
    expect(_react.screen.queryByText('simple content')).not.toBeInTheDocument();

    var trigger = _react.screen.getByText('Test');

    _react.fireEvent.click(trigger);

    expect(_react.screen.getByText('simple content')).toBeInTheDocument();

    _react.fireEvent.click(trigger);

    expect(_react.screen.queryByText('simple content')).not.toBeInTheDocument();
  });
  test('renderProps style expanded opens and closes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Popover.Popover, {
      content: SimpleContent
    }, function (popoverProps) {
      return _react2["default"].createElement("button", popoverProps, "Test");
    }));
    expect(_react.screen.queryByText('simple content')).not.toBeInTheDocument();

    var trigger = _react.screen.getByText('Test');

    _react.fireEvent.click(trigger);

    expect(_react.screen.getByText('simple content')).toBeInTheDocument();

    _react.fireEvent.click(trigger);

    expect(_react.screen.queryByText('simple content')).not.toBeInTheDocument();
  });
  test('preventDefault works on trigger 2nd click', function () {
    var mockFormSubmit = jest.fn(function (e) {
      return e.preventDefault();
    });
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement("form", {
      onSubmit: mockFormSubmit
    }, _react2["default"].createElement(_Popover.Popover, {
      content: SimpleContent
    }, _react2["default"].createElement("button", null, "Test"))));

    var trigger = _react.screen.getByText('Test');

    _react.fireEvent.click(trigger);

    _react.fireEvent.click(trigger);

    expect(mockFormSubmit).not.toHaveBeenCalled();
  });
  test('stopPropagation works - event on container is not called', function () {
    var mockContainerOnClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement("div", {
      onClick: mockContainerOnClick
    }, _react2["default"].createElement(_Popover.Popover, {
      content: SimpleContent
    }, _react2["default"].createElement("button", null, "Test"))));

    var trigger = _react.screen.getByText('Test');

    _react.fireEvent.click(trigger);

    expect(_react.screen.getByText('simple content')).toBeInTheDocument();
    expect(mockContainerOnClick).not.toHaveBeenCalled();

    _react.fireEvent.click(document);
  });
  test('Open popover does not cancel event on "dismissal click"', function () {
    var doThing = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_Popover.Popover, {
      content: SimpleContent
    }, _react2["default"].createElement("button", null, "Instant Click")), _react2["default"].createElement("a", {
      onClick: doThing
    }, "Do thing...")));

    var trigger = _react.screen.getByText('Instant Click');

    _react.fireEvent.click(trigger);

    var closer = _react.screen.getByText('Do thing...');

    _react.fireEvent.click(closer);

    expect(_react.screen.queryByText('simple content')).not.toBeInTheDocument();
    expect(doThing).toBeCalledTimes(1);
  });
  test('With cancelClickOutside = true, open popover cancels 1st click event', function () {
    var doThing = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement(_Popover.Popover, {
      content: SimpleContent,
      cancelClickOutside: true
    }, _react2["default"].createElement("button", null, "Instant Click")), _react2["default"].createElement("a", {
      onClick: doThing
    }, "Do thing...")));

    var trigger = _react.screen.getByText('Instant Click');

    _react.fireEvent.click(trigger);

    var closer = _react.screen.getByText('Do thing...');

    _react.fireEvent.click(closer);

    expect(_react.screen.queryByText('simple content')).not.toBeInTheDocument();
    expect(doThing).toBeCalledTimes(0);
  });
  test('Popover trigger is shown/hidden on hover of hoverDisclosureRef', function () {
    var Component = function Component() {
      var hoverRef = (0, _react2.useRef)(null);
      return _react2["default"].createElement("div", {
        ref: hoverRef
      }, _react2["default"].createElement(_Popover.Popover, {
        content: SimpleContent,
        hoverDisclosureRef: hoverRef
      }, _react2["default"].createElement(_Button.Button, null, "Instant Click")), "Some text in the div");
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(Component, null));

    var trigger = _react.screen.queryByText('Instant Click');

    var div = _react.screen.getByText('Some text in the div');

    expect(trigger).not.toBeInTheDocument();
    (0, _react.fireEvent)(div, new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true
    }));

    var triggerNew = _react.screen.getByText('Instant Click');

    expect(_react.screen.queryByText('simple content')).not.toBeInTheDocument();

    _react.fireEvent.click(triggerNew);

    expect(_react.screen.getByText('simple content')).toBeInTheDocument();

    _react.fireEvent.click(document);
  });
});
//# sourceMappingURL=Popover.spec.js.map