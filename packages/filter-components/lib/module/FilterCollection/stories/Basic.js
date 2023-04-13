

import React from 'react';
import { FilterCollection } from '../FilterCollection';
import { DashboardFilter } from '../../DashboardFilter';
export default function Suggestions() {
  const dashboardFilters = [{
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
  const states = ['Alaska', 'Hawaii'];
  const citiesAlaska = ['Anchorage', 'Juneau'];
  const citiesHawaii = ['Honolulu', 'Kona'];
  const sdkMock = {
    ok: value => value,
    get: (uri, params) => {
      let suggestions = [];
      if (uri.includes('users.state')) {
        suggestions = states;
      } else {
        var _params$filters, _params$filters2;
        if (((_params$filters = params.filters) === null || _params$filters === void 0 ? void 0 : _params$filters['users.state']) === 'Alaska') {
          suggestions = citiesAlaska;
        } else if (((_params$filters2 = params.filters) === null || _params$filters2 === void 0 ? void 0 : _params$filters2['users.state']) === 'Hawaii') {
          suggestions = citiesHawaii;
        } else {
          suggestions = [...citiesAlaska, ...citiesHawaii];
        }
      }
      return {
        suggestions
      };
    }
  };
  return React.createElement(FilterCollection, {
    sdk: sdkMock
  }, dashboardFilters.map(filter => React.createElement(DashboardFilter, {
    filter: filter,
    key: filter.name,
    onChange: () => {
    }
  })));
}
//# sourceMappingURL=Basic.js.map