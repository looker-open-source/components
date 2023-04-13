"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Suggestions;
var _react = _interopRequireDefault(require("react"));
var _FilterCollection = require("../FilterCollection");
var _DashboardFilter = require("../../DashboardFilter");

function Suggestions() {
  var dashboardFilters = [{
    dimension: 'users.state',
    field: {
      suggestable: true,
      suggest_dimension: 'users.state',
      suggest_explore: 'users'
    },
    model: 'testmodel',
    name: 'State',
    title: 'State',
    type: 'field_filter',
    ui_config: {
      type: 'radio_buttons'
    }
  }, {
    dimension: 'users.city',
    field: {
      suggestable: true,
      suggest_dimension: 'users.city',
      suggest_explore: 'users'
    },
    model: 'testmodel',
    name: 'City',
    title: 'City',
    type: 'field_filter',
    ui_config: {
      type: 'radio_buttons'
    },
    listens_to_filters: ['State']
  }];
  var states = ['Alaska', 'Hawaii'];
  var citiesAlaska = ['Anchorage', 'Juneau'];
  var citiesHawaii = ['Honolulu', 'Kona'];
  var sdkMock = {
    ok: function ok(value) {
      return value;
    },
    get: function get(uri, params) {
      var suggestions = [];
      if (uri.includes('users.state')) {
        suggestions = states;
      } else {
        var _params$filters, _params$filters2;
        if (((_params$filters = params.filters) === null || _params$filters === void 0 ? void 0 : _params$filters['users.state']) === 'Alaska') {
          suggestions = citiesAlaska;
        } else if (((_params$filters2 = params.filters) === null || _params$filters2 === void 0 ? void 0 : _params$filters2['users.state']) === 'Hawaii') {
          suggestions = citiesHawaii;
        } else {
          suggestions = [].concat(citiesAlaska, citiesHawaii);
        }
      }
      return {
        suggestions: suggestions
      };
    }
  };
  return _react["default"].createElement(_FilterCollection.FilterCollection, {
    sdk: sdkMock
  }, dashboardFilters.map(function (filter) {
    return _react["default"].createElement(_DashboardFilter.DashboardFilter, {
      filter: filter,
      key: filter.name,
      onChange: function onChange() {
      }
    });
  }));
}
//# sourceMappingURL=Basic.js.map