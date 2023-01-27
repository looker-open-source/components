

export const mockBarConfig = {
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
export const mockPieConfig = {
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
export const mockLineConfig = {
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
export const mockTableConfig = {
  type: 'table'
};
export const mockScatterConfig = {
  type: 'scatter'
};
//# sourceMappingURL=mockConfig.js.map