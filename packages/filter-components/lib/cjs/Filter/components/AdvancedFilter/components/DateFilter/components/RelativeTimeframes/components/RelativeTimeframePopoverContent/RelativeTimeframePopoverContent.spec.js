"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _RelativeTimeframePopoverContent = require("./RelativeTimeframePopoverContent");

describe('RelativeTimeframePopoverContent', function () {
  var realDateNow = Date.now.bind(global.Date);
  beforeEach(function () {
    global.Date.now = jest.fn(function () {
      return 1479427200000;
    });
  });
  afterEach(function () {
    global.Date.now = realDateNow;
  });
  it('renders a RelativeTimeframePopoverContent with custom timeframe', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_RelativeTimeframePopoverContent.RelativeTimeframePopoverContent, {
      value: {
        from: new Date(2018, 1, 1),
        to: new Date(2018, 12, 31)
      },
      onCustomChange: jest.fn(),
      onPresetChange: jest.fn(),
      onNav: jest.fn()
    }));

    var inputs = _react.screen.getAllByRole('textbox');

    expect(inputs[0]).toHaveValue('2018/02/01');
    expect(inputs[1]).toHaveValue('2019/01/31');
  });
});
//# sourceMappingURL=RelativeTimeframePopoverContent.spec.js.map