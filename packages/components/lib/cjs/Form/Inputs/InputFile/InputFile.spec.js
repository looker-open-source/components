"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ = require(".");

test('displays input text and button', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.InputFile, {
    handleFile: jest.fn()
  }));
  expect(_react.screen.getByText('Upload File')).toBeVisible();
});
test('button text prop changes button text', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.InputFile, {
    handleFile: jest.fn(),
    buttonText: "ButtonTest"
  }));
  expect(_react.screen.getByText('ButtonTest')).toBeVisible();
});
test('should allow user to choose a file and calls handleFile on selection', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
  var handleFileMock, file, input;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          handleFileMock = jest.fn();
          (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.InputFile, {
            handleFile: handleFileMock
          }));
          file = new File(['testing'], 'testing.json', {
            type: 'application/JSON'
          });
          input = _react.screen.getByTestId('input-file');

          _react.fireEvent.change(input, {
            target: {
              files: [file]
            }
          });

          expect(handleFileMock).toBeCalledTimes(1);
          expect(handleFileMock).toHaveBeenCalledWith(file);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
test('should show file name in textbox once file uploads', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
  var file, input, text;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.InputFile, {
            handleFile: jest.fn()
          }));
          file = new File(['testing'], 'testing.json', {
            type: 'application/JSON'
          });
          input = _react.screen.getByTestId('input-file');
          text = _react.screen.getByRole('textbox');

          _react.fireEvent.change(input, {
            target: {
              files: [file]
            }
          });

          expect(text).toHaveValue('testing.json');

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
//# sourceMappingURL=InputFile.spec.js.map