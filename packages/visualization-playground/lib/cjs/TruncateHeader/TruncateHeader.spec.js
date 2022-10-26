"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _TruncateHeader = require("./TruncateHeader");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

afterEach(function () {
  jest.resetAllMocks();
});
describe('TruncateHeader', function () {
  var handleConfigChange = jest.fn();
  it('hidden when truncate_header is unsupported', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TruncateHeader.TruncateHeader, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    })),
        container = _renderWithTheme.container;

    expect(container).toBeEmptyDOMElement();
  });
  it('toggles truncate_header', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TruncateHeader.TruncateHeader, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
        truncate_header: true
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Truncate header'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      truncate_header: false
    }));
  });
});
//# sourceMappingURL=TruncateHeader.spec.js.map