"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeToComponent = exports.componentsMap = void 0;

var _DateFilter = require("../components/AdvancedFilter/components/DateFilter");

var _LocationFilter = require("../components/AdvancedFilter/components/LocationFilter");

var _NumberFilter = require("../components/AdvancedFilter/components/NumberFilter");

var _StringFilter = require("../components/AdvancedFilter/components/StringFilter");

var _TierFilter = require("../components/AdvancedFilter/components/TierFilter");

var componentsMap = {
  date: _DateFilter.DateFilter,
  date_time: _DateFilter.DateFilter,
  number: _NumberFilter.NumberFilter,
  string: _StringFilter.StringFilter,
  tier: _TierFilter.TierFilter,
  location: _LocationFilter.LocationFilter
};
exports.componentsMap = componentsMap;

var typeToComponent = function typeToComponent(type) {
  return componentsMap[type];
};

exports.typeToComponent = typeToComponent;
//# sourceMappingURL=type_to_component.js.map