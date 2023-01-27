"use strict";

var _useNormalizedPivotLabels = require("./useNormalizedPivotLabels");
var _i18n = require("./i18n");
var _reactHooks = require("@testing-library/react-hooks");

describe('useNormalizedPivotLabels', function () {
  (0, _i18n.i18nInit)();
  it('Derives a pivot label from capitalizing the key value by default', function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _useNormalizedPivotLabels.useNormalizedPivotLabels)([{
          key: 'cancelled',
          is_total: false,
          data: {},
          labels: {
            'orders.status': 'Canceled'
          }
        }]);
      }),
      result = _renderHook.result;
    expect(result.current).toEqual([expect.objectContaining({
      label: 'Cancelled'
    })]);
  });
  it('Sets the label to "Row Total" when is_total is true', function () {
    var _renderHook2 = (0, _reactHooks.renderHook)(function () {
        return (0, _useNormalizedPivotLabels.useNormalizedPivotLabels)([{
          key: 'cancelled',
          is_total: true,
          data: {},
          labels: {
            'orders.status': 'Canceled'
          }
        }]);
      }),
      result = _renderHook2.result;
    expect(result.current).toEqual([expect.objectContaining({
      label: 'Row Total'
    })]);
  });
});
//# sourceMappingURL=useNormalizedPivotLabels.spec.js.map