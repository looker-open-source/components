"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _reactHooks = require("@testing-library/react-hooks");
var _get_number_filter_options = require("./get_number_filter_options");

describe('number filter options', function () {
  it('should only return direct number matches and user attribute match options for parameter filters', function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _get_number_filter_options.useNumberFilterOptions)(true);
      }, {
        wrapper: function wrapper(_ref) {
          var children = _ref.children;
          return _react["default"].createElement(_components.ComponentsProvider, null, children);
        }
      }),
      current = _renderHook.result.current;
    expect(current).toStrictEqual([{
      value: '=',
      label: 'is'
    }, {
      label: 'matches a user attribute',
      value: 'user_attribute'
    }]);
  });
});
//# sourceMappingURL=get_number_filter_options.spec.js.map