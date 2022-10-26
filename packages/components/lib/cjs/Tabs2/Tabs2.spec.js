"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("jest-styled-components");

require("@testing-library/jest-dom/extend-expect");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Tabs = require("./Tabs2.stories");

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

var Basic = function Basic(args) {
  return _react["default"].createElement(_.Tabs2, (0, _extends2["default"])({
    ripple: false
  }, args), _react["default"].createElement(_.Tab2, {
    id: "cats",
    label: "Cats"
  }, "Here's awesome story about cats"), _react["default"].createElement(_.Tab2, {
    id: "dogs",
    label: "Dogs"
  }, "Cats are way better than dogs. Go to other tab"), _react["default"].createElement(_.Tab2, {
    label: "Fish"
  }, "Are kinda smelly"), _react["default"].createElement(_.Tab2, {
    disabled: true,
    label: "Human"
  }, "Humans tab is disabled"));
};

describe('Tabs2', function () {
  test('basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getAllByRole('tab')).toHaveLength(4);
    expect(_react2.screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
  });
  test('clicking on tab opens correct panel', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(_react2.screen.queryByText('Are kinda smelly')).not.toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Fish'));

    expect(_react2.screen.queryByText("Here's awesome story about cats")).not.toBeInTheDocument();
    expect(_react2.screen.getByText('Are kinda smelly')).toBeInTheDocument();
  });
  test('defaultTabId', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      defaultTabId: "dogs"
    }));
    expect(_react2.screen.getByText('Cats are way better than dogs. Go to other tab')).toBeInTheDocument();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(_react2.screen.queryByText('Humans tab is disabled')).not.toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Human'));

    expect(_react2.screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(_react2.screen.queryByText('Humans tab is disabled')).not.toBeInTheDocument();
  });
  test('no defaultTabId should display first tab that is not disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByText("Here's awesome story about cats")).toBeInTheDocument();
    expect(_react2.screen.queryByText('not available')).not.toBeInTheDocument();
  });
  test('no defaultTabId should not revert to first tab after state change', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tabs.StateChanges, null));

    _react2.fireEvent.click(_react2.screen.getByText('Tab 2'));

    var textfield = _react2.screen.getByRole('textbox');

    _userEvent["default"].type(textfield, 'test');

    expect(textfield).toBeInTheDocument();
  });
  test('Distributed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, {
      distributed: true
    }));
    expect(_react2.screen.getByText('Cats').closest('div')).toHaveStyleRule('grid-auto-columns: 1fr');
  });

  var Controlled = function Controlled() {
    var _useState = (0, _react.useState)('cats'),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        currentTabId = _useState2[0],
        setTabId = _useState2[1];

    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "The current selected tab is: ", currentTabId), _react["default"].createElement("button", {
      onClick: function onClick() {
        return setTabId('cats');
      }
    }, "Switch to Cats"), _react["default"].createElement("button", {
      onClick: function onClick() {
        return setTabId('dogs');
      }
    }, "Switch to Dogs"), _react["default"].createElement(_.Tabs2, {
      tabId: currentTabId,
      onTabChange: setTabId
    }, _react["default"].createElement(_.Tab2, {
      id: "cats",
      label: "Cats"
    }, "Here's awesome story about cats"), _react["default"].createElement(_.Tab2, {
      id: "dogs",
      label: "Dogs"
    }, "Cats are way better than dogs. Go to other tab")));
  };

  test('controlled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Controlled, null));
    expect(_react2.screen.getByText("Here's awesome story about cats")).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Switch to Dogs'));

    expect(_react2.screen.getByText('Cats are way better than dogs. Go to other tab')).toBeInTheDocument();
  });
  test('validates controlled vs uncontrolled prop combinations', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tabs2, {
      tabId: "3"
    }, _react["default"].createElement(_.Tab2, {
      id: "tab",
      label: "Tab"
    }, "A single Tab")));
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tabs2, {
      onTabChange: "3"
    }, _react["default"].createElement(_.Tab2, {
      id: "tab",
      label: "Tab"
    }, "A single Tab")));
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tabs2, {
      tabId: "3",
      defaultTabId: "5"
    }, _react["default"].createElement(_.Tab2, {
      id: "tab",
      label: "Tab"
    }, "A single Tab")));
  });
  describe('ripple effect', function () {
    test('default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));

      var tabs = _react2.screen.getByText('Cats').closest('button');

      expect(tabs).not.toHaveClass('bg-on fg-in');
      expect(tabs).toHaveStyle({
        '--ripple-color': '#6C43E0',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0'
      });
      tabs && _react2.fireEvent.focus(tabs);
      expect(tabs).toHaveClass('bg-on');
      tabs && _react2.fireEvent.mouseDown(tabs);
      expect(tabs).toHaveClass('bg-on fg-in');
      tabs && _react2.fireEvent.mouseUp(tabs);
      runTimers();
      expect(tabs).toHaveClass('bg-on fg-out');
      runTimers();
      expect(tabs).toHaveClass('bg-on');
      tabs && _react2.fireEvent.blur(tabs);
      expect(tabs).not.toHaveClass('bg-on fg-in');
    });
  });
});
//# sourceMappingURL=Tabs2.spec.js.map