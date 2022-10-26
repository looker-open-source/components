"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

require("@testing-library/jest-dom/extend-expect");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Tab = require("./Tab");

var _TabList = require("./TabList");

var _TabPanel = require("./TabPanel");

var _TabPanels = require("./TabPanels");

var _Tabs = require("./Tabs");

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

var TabsComponent = function TabsComponent() {
  return _react["default"].createElement(_Tabs.Tabs, null, _react["default"].createElement(_TabList.TabList, null, _react["default"].createElement(_Tab.Tab, null, "tab1"), _react["default"].createElement(_Tab.Tab, null, "tab2"), _react["default"].createElement(_Tab.Tab, {
    disabled: true
  }, "tab3")), _react["default"].createElement(_TabPanels.TabPanels, null, _react["default"].createElement(_TabPanel.TabPanel, null, "this is tab1 content"), _react["default"].createElement(_TabPanel.TabPanel, null, "this is tab2 content"), _react["default"].createElement(_TabPanel.TabPanel, null, "this is the disable tab-panel")));
};

describe('Tabs', function () {
  test('shows the correct number of navigation tabs', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabsComponent, null));
    expect(_react2.screen.getAllByRole('tab')).toHaveLength(3);
  });
  test('starts with Tab at index 0 opened', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabsComponent, null));
    expect(_react2.screen.getByText('this is tab1 content')).toBeInTheDocument();
  });
  test('clicking on tab opens correct panel', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabsComponent, null));
    expect(_react2.screen.getByText('this is tab1 content')).toBeInTheDocument();
    expect(_react2.screen.queryByText('this is tab2 content')).not.toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('tab2'));

    expect(_react2.screen.queryByText('this is tab1 content')).not.toBeInTheDocument();
    expect(_react2.screen.getByText('this is tab2 content')).toBeInTheDocument();
  });
  test('clicking on disable tab does not change panel', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabsComponent, null));
    expect(_react2.screen.getByText('this is tab1 content')).toBeInTheDocument();
    expect(_react2.screen.queryByText('this is the disable tab-panel')).not.toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('tab3'));

    expect(_react2.screen.getByText('this is tab1 content')).toBeInTheDocument();
    expect(_react2.screen.queryByText('this is the disable tab-panel')).not.toBeInTheDocument();
  });

  var TabHooks = function TabHooks() {
    var tab = (0, _Tabs.useTabs)();
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_TabList.TabList, tab, _react["default"].createElement(_Tab.Tab, null, "Tab Hook 1"), _react["default"].createElement(_Tab.Tab, null, "Tab Hook 2")), _react["default"].createElement(_TabPanels.TabPanels, tab, _react["default"].createElement(_TabPanel.TabPanel, null, "1 this is the panel of tab hook 1"), _react["default"].createElement(_TabPanel.TabPanel, null, "2 this is the panel of tab hook 2")));
  };

  test('hooks working', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabHooks, null));
    expect(_react2.screen.getByText('1 this is the panel of tab hook 1')).toBeInTheDocument();
    expect(_react2.screen.queryByText('2 this is the panel of tab hook 2')).not.toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Tab Hook 2'));

    expect(_react2.screen.queryByText('1 this is the panel of tab hook 1')).not.toBeInTheDocument();
    expect(_react2.screen.getByText('2 this is the panel of tab hook 2')).toBeInTheDocument();
  });
  test('Tab keyboard navigation', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabsComponent, null));

    var tab1 = _react2.screen.getByText('tab1').closest('button');

    tab1 && tab1.focus();
    expect(tab1).toHaveFocus();
    tab1 && _react2.fireEvent.keyDown(tab1, {
      code: 39,
      key: 'ArrowRight'
    });
    expect(_react2.screen.getByText('tab2').closest('button')).toHaveFocus();
  });
  test('Tab has type attribute', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabsComponent, null));

    var tab1 = _react2.screen.getByText('tab1').closest('button');

    tab1 && _react2.fireEvent.click(tab1);
    expect(tab1).toHaveAttribute('type', 'button');
  });
  describe('ripple effect', function () {
    test('default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(TabsComponent, null));

      var tabs = _react2.screen.getByText('tab1').closest('button');

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
//# sourceMappingURL=Tabs.spec.js.map