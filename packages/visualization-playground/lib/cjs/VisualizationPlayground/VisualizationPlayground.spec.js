"use strict";

var _VisualizationPlayground = require("./VisualizationPlayground");

describe('Utility: setQueryProps', function () {
  it('sets dashboard prop when fetchBy = "dashboard" and tabId = "live"', function () {
    var queryProps = (0, _VisualizationPlayground.setQueryProps)({
      fetchBy: 'dashboard',
      tabId: 'live',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58
    });
    expect(queryProps).toEqual({
      dashboard: 58
    });
  });
  it('sets query prop when fetchBy = "query" and tabId = "live"', function () {
    var queryProps = (0, _VisualizationPlayground.setQueryProps)({
      fetchBy: 'query',
      tabId: 'live',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58
    });
    expect(queryProps).toEqual({
      query: 'qZ3N24'
    });
  });
  it('returns mock query id value when tabId = "mock"', function () {
    var queryProps = (0, _VisualizationPlayground.setQueryProps)({
      fetchBy: 'dashboard',
      tabId: 'mock',
      queryIdentifier: 'qZ3N24',
      dashboardId: 58
    });
    expect(queryProps).toEqual({
      query: 'mock-query-slug'
    });
  });
});
//# sourceMappingURL=VisualizationPlayground.spec.js.map