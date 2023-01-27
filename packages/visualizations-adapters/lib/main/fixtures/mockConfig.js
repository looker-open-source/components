"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockTableConfig = exports.mockScatterConfig = exports.mockPieConfig = exports.mockLineConfig = exports.mockBarConfig = void 0;

var mockBarConfig = {
  type: 'bar',
  positioning: 'grouped',
  legend: {
    position: 'bottom'
  },
  series: [{
    color: '#ffcccc',
    visible: true
  }, {
    color: '#00ffcc',
    visible: true
  }],
  x_axis: [{
    reversed: false,
    label: 'Orders',
    values: true,
    gridlines: true
  }],
  y_axis: [{
    label: false,
    values: true,
    gridlines: true,
    range: ['auto', 'auto']
  }]
};
exports.mockBarConfig = mockBarConfig;
var mockPieConfig = {
  type: 'pie',
  legend: {
    position: 'bottom',
    value: 'label',
    type: 'legend'
  },
  series: [{
    color: '#fa8072'
  }]
};
exports.mockPieConfig = mockPieConfig;
var mockLineConfig = {
  type: 'line',
  legend: {
    position: 'bottom'
  },
  series: [{
    color: '#ff0000',
    style: 'filled'
  }, {
    color: '#00FF00',
    shape: 'diamond'
  }],
  y_axis: [{
    range: ['auto', 'auto']
  }]
};
exports.mockLineConfig = mockLineConfig;
var mockTableConfig = {
  type: 'table'
};
exports.mockTableConfig = mockTableConfig;
var mockScatterConfig = {
  type: 'scatter'
};
exports.mockScatterConfig = mockScatterConfig;
//# sourceMappingURL=mockConfig.js.map