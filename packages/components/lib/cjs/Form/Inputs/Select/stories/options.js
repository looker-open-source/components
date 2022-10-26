"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsWithGroups = exports.options5 = exports.options4 = exports.options3 = exports.options2 = exports.options = exports.optionGroup = exports.iconOptions = exports.cheeseOptions = void 0;

var _material = require("@styled-icons/material");

var _react = _interopRequireDefault(require("react"));

var options = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}, {
  label: 'Pineapples',
  value: '4'
}, {
  label: 'Kiwis',
  value: '5'
}];
exports.options = options;
var options2 = [{
  label: 'Apples2',
  value: '12'
}, {
  label: 'Bananas2',
  value: '22'
}, {
  label: 'Oranges2',
  value: '32'
}, {
  label: 'Pineapples2',
  value: '42'
}, {
  label: 'Kiwis2',
  value: '52'
}];
exports.options2 = options2;
var options3 = [{
  label: 'Apples3',
  value: '13'
}, {
  label: 'Bananas3',
  value: '23'
}, {
  label: 'Oranges3',
  value: '33'
}, {
  label: 'Pineapples3',
  value: '43'
}, {
  label: 'Kiwis3',
  value: '53'
}];
exports.options3 = options3;
var options4 = [{
  label: 'Apples4',
  value: '14'
}, {
  label: 'Bananas4',
  value: '24'
}, {
  label: 'Oranges4',
  value: '34'
}, {
  label: 'Pineapples4',
  value: '44'
}, {
  label: 'Kiwis4',
  value: '54'
}];
exports.options4 = options4;
var options5 = [{
  label: 'Apples5',
  value: '15'
}, {
  label: 'Bananas5',
  value: '25'
}, {
  label: 'Oranges5',
  value: '35'
}, {
  label: 'Pineapples5',
  value: '45'
}, {
  label: 'Kiwis5',
  value: '55'
}];
exports.options5 = options5;
var optionGroup = {
  label: 'CARS',
  options: [{
    description: 'Great resale value',
    label: 'Honda',
    value: 'honda'
  }, {
    description: 'Most popular make',
    label: 'Toyota',
    value: 'toyota'
  }]
};
exports.optionGroup = optionGroup;
var optionsWithGroups = [{
  options: options
}, optionGroup, {
  options: options2
}, {
  options: options3
}, {
  options: options4
}, {
  options: options5
}];
exports.optionsWithGroups = optionsWithGroups;
var cheeseOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Swiss',
  value: 'swiss'
}];
exports.cheeseOptions = cheeseOptions;
var iconOptions = [{
  icon: _react["default"].createElement(_material.AutoGraph, null),
  label: 'Area',
  value: 'area'
}, {
  label: 'ChartNoIcon',
  value: 'noicon'
}, {
  icon: _react["default"].createElement(_material.AutoGraph, null),
  label: 'Bar',
  value: 'bar'
}, {
  icon: _react["default"].createElement(_material.AutoGraph, null),
  label: 'Box Plot',
  value: 'boxplot'
}, {
  icon: _react["default"].createElement(_material.BarChart, null),
  label: 'Column',
  value: 'column'
}, {
  icon: _react["default"].createElement(_material.MultilineChart, null),
  label: 'Custom',
  value: 'custom'
}, {
  icon: _react["default"].createElement(_material.DonutLarge, null),
  label: 'Donut',
  value: 'donut'
}, {
  icon: _react["default"].createElement(_material.FilterList, null),
  label: 'Funnel',
  value: 'funnel'
}, {
  icon: _react["default"].createElement(_material.ShowChart, null),
  label: 'Line',
  value: 'line'
}, {
  icon: _react["default"].createElement(_material.Map, null),
  label: 'Map',
  value: 'map'
}, {
  icon: _react["default"].createElement(_material.PieChart, null),
  label: 'Pie',
  value: 'pie'
}, {
  icon: _react["default"].createElement(_material.BubbleChart, null),
  label: 'Scatter Plot',
  value: 'scatterplot'
}, {
  icon: _react["default"].createElement(_material.Toc, null),
  label: 'Single Record',
  value: 'singlerecord'
}, {
  icon: _react["default"].createElement(_material.Looks6, null),
  label: 'Single Value',
  value: 'singlevalue'
}, {
  icon: _react["default"].createElement(_material.TableChart, null),
  label: 'Table',
  value: 'table'
}, {
  icon: _react["default"].createElement(_material.AutoGraph, null),
  label: 'Timeline',
  value: 'timeline'
}, {
  icon: _react["default"].createElement(_material.WaterfallChart, null),
  label: 'Waterfall',
  value: 'waterfall'
}, {
  icon: _react["default"].createElement(_material.LineStyle, null),
  label: 'Word Cloud',
  value: 'wordcloud'
}];
exports.iconOptions = iconOptions;
//# sourceMappingURL=options.js.map