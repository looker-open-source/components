"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tierFilterTypes = exports.stringFilterTypes = exports.numberFilterTypes = exports.locationFilterTypes = exports.dateFilterTypes = void 0;
var dateFilterTypes = ['null', 'anyvalue', 'notnull', 'past', 'pastAgo', 'this', 'next', 'last', 'year', 'month', 'before', 'after', 'range', 'thisRange', 'on', 'relative', 'user_attribute', 'day'];
exports.dateFilterTypes = dateFilterTypes;
var numberFilterTypes = ['=', '>', '<', '>=', '<=', 'between', 'null', 'user_attribute'];
exports.numberFilterTypes = numberFilterTypes;
var stringFilterTypes = ['null', 'contains', 'match', 'startsWith', 'endsWith', 'blank', 'user_attribute'];
exports.stringFilterTypes = stringFilterTypes;
var tierFilterTypes = ['anyvalue', 'match', 'user_attribute'];
exports.tierFilterTypes = tierFilterTypes;
var locationFilterTypes = ['location', 'circle', 'box', 'anyvalue', 'null', 'notnull', 'user_attribute'];
exports.locationFilterTypes = locationFilterTypes;
//# sourceMappingURL=filter_type.js.map