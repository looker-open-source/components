"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _designTokens = require("@looker/design-tokens");

var _componentsTestUtils = require("@looker/components-test-utils");

var _MessageBar = require("./MessageBar");

describe('MessageBar', function () {
  test('controlled component', function () {
    var handleDismiss = jest.fn();

    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
      onPrimaryClick: handleDismiss,
      visible: true
    }, "Message text")),
        rerender = _renderWithTheme.rerender;

    expect(_react2.screen.getByText('Message text')).toBeInTheDocument();
    expect(handleDismiss).not.toHaveBeenCalled();
    var dismissButton = _react2.screen.getByText('Dismiss Inform').closest('button') || document.createElement('button');

    _react2.fireEvent.click(dismissButton);

    expect(handleDismiss).toHaveBeenCalledTimes(1);
    expect(_react2.screen.getByText('Message text')).toBeInTheDocument();
    rerender((0, _componentsTestUtils.withThemeProvider)(_react["default"].createElement(_MessageBar.MessageBar, {
      onPrimaryClick: handleDismiss,
      visible: false
    }, "Message text")));
    expect(_react2.screen.queryByText('Message text')).not.toBeInTheDocument();
  });
  describe('action buttons', function () {
    test('renders standard Dismiss button by default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, null, "Message text"));
      expect(_react2.screen.getByText('Message text')).toBeInTheDocument();
      var dismissButton = _react2.screen.getByText('Dismiss Inform').closest('button') || document.createElement('button');

      _react2.fireEvent.click(dismissButton);

      expect(_react2.screen.queryByText('Message text')).not.toBeInTheDocument();
    });
    test('hides the dismiss button', function () {
      var _renderWithTheme2 = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, null, "Message text")),
          rerender = _renderWithTheme2.rerender;

      expect(_react2.screen.getByText('Dismiss Inform')).toBeInTheDocument();
      rerender((0, _componentsTestUtils.withThemeProvider)(_react["default"].createElement(_MessageBar.MessageBar, {
        noActions: true
      }, "Message text")));
      expect(_react2.screen.queryByText('Dismiss Inform')).not.toBeInTheDocument();
    });
    test('accepts a text label to customize primaryAction', function () {
      var handlePrimaryClick = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        primaryAction: "Take the red pill",
        onPrimaryClick: handlePrimaryClick
      }, "Do you want to know what the matrix is?"));

      var primaryButton = _react2.screen.getByText('Take the red pill');

      expect(primaryButton).toBeInTheDocument();
      expect(_react2.screen.getByText('Do you want to know what the matrix is?')).toBeInTheDocument();
      expect(_react2.screen.queryByText('Dismiss Inform')).not.toBeInTheDocument();

      _react2.fireEvent.click(primaryButton);

      expect(handlePrimaryClick).toBeCalledTimes(1);
      expect(_react2.screen.queryByText('Do you want to know what the matrix is?')).not.toBeInTheDocument();
    });
    test('accepts a text label to customize secondaryAction', function () {
      var handleSecondaryClick = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        secondaryAction: "Take the blue pill",
        onSecondaryClick: handleSecondaryClick
      }, "Do you want to know what the matrix is?"));

      var secondaryButton = _react2.screen.getByText('Take the blue pill');

      expect(secondaryButton).toBeInTheDocument();
      expect(_react2.screen.getByText('Do you want to know what the matrix is?')).toBeInTheDocument();

      _react2.fireEvent.click(secondaryButton);

      expect(handleSecondaryClick).toBeCalledTimes(1);
      expect(_react2.screen.queryByText('Do you want to know what the matrix is?')).not.toBeInTheDocument();
    });
    test('renders custom JSX Button elements for primary and secondary actions', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        intent: "inform",
        primaryAction: _react["default"].createElement("button", null, "Take the red pill"),
        secondaryAction: _react["default"].createElement("button", null, "Take the blue pill")
      }, "Message text"));
      expect(_react2.screen.getByText('Take the red pill')).toBeInTheDocument();
      expect(_react2.screen.getByText('Take the blue pill')).toBeInTheDocument();
      expect(_react2.screen.queryByText('Dismiss Inform')).not.toBeInTheDocument();
    });
    test('renders secondaryButton next to default Dismiss button', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        intent: "inform",
        secondaryAction: _react["default"].createElement("button", null, "secondary action")
      }, "Message text"));
      expect(_react2.screen.getByText('secondary action')).toBeInTheDocument();
      expect(_react2.screen.getByText('Dismiss Inform')).toBeInTheDocument();
    });
  });
  describe('intent styling', function () {
    test('Warn MessageBar', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        intent: "warn"
      }, "Warn"));
      expect(_react2.screen.getByText('Dismiss Warning')).toBeInTheDocument();
      expect(_react2.screen.getByTitle('Warning').closest('svg')).toHaveStyle("color: ".concat(_designTokens.theme.colors.warn));
    });
    test('Error MessageBar', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        intent: "critical",
        id: "test-message-bar"
      }, "Error"));
      expect(_react2.screen.getByText('Dismiss Error')).toBeInTheDocument();
      expect(_react2.screen.getByTitle('Error').closest('svg')).toHaveStyle("color: ".concat(_designTokens.theme.colors.critical));
      expect(_react2.screen.getByRole('status')).toHaveStyleRule('background-color', _designTokens.theme.colors.criticalAccent);
    });
    test('Info MessageBar', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        intent: "inform",
        id: "test-message-bar"
      }, "Inform"));
      expect(_react2.screen.getByText('Dismiss Inform')).toBeInTheDocument();
      expect(_react2.screen.getByTitle('Inform').closest('svg')).toHaveStyle("color: ".concat(_designTokens.theme.colors.inform));
    });
    test('Confirmation MessageBar', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_MessageBar.MessageBar, {
        intent: "positive",
        id: "test-message-bar"
      }, "Confirmation"));
      expect(_react2.screen.getByText('Dismiss Success')).toBeInTheDocument();
      expect(_react2.screen.getByTitle('Success').closest('svg')).toHaveStyle("color: ".concat(_designTokens.theme.colors.positive));
    });
  });
});
//# sourceMappingURL=MessageBar.spec.js.map