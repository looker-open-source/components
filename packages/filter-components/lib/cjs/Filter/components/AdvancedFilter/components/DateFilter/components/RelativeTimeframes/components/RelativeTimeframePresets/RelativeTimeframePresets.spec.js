"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _relative_timeframe_types = require("../../../../types/relative_timeframe_types");

var _RelativeTimeframePresets = require("./RelativeTimeframePresets");

describe('RelativeTimeframePresets', function () {
  it('renders a preset and calls onPresetChange', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RelativeTimeframePresets.RelativeTimeframePresets, {
      value: _relative_timeframe_types.AllPresetTimeframes.Last14,
      onPresetChange: onChangeMock
    }));

    var item = _react2.screen.getByText('Last 14 Days');

    expect(item).toBeInTheDocument();

    _react2.fireEvent.click(item);

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"Last 14 Days\",\n        ],\n      ]\n    ");
  });
});
//# sourceMappingURL=RelativeTimeframePresets.spec.js.map