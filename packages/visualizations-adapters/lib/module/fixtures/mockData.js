

export const mockData = [{
  'orders.count': 87,
  'orders.average_total_amount_of_order_usd': 88,
  'orders.created_date': '2019-12-19',
  'users.state': 'Oregon'
}, {
  'orders.count': 3087,
  'orders.average_total_amount_of_order_usd': 1088,
  'orders.created_date': '2019-12-22',
  'users.state': 'California'
}, {
  'orders.count': 2515,
  'orders.average_total_amount_of_order_usd': 1069,
  'orders.created_date': '2019-12-23',
  'users.state': 'California'
}];
export const mockDataWithNull = [{
  'orders.count': 3087,
  'orders.average_total_amount_of_order_usd': 1088,
  'orders.created_date': '2019-12-22',
  'users.state': 'California'
}, {
  'orders.count': 2087,
  'orders.average_total_amount_of_order_usd': 88,
  'orders.created_date': '2019-12-22',
  'users.state': 'California'
}, {
  'orders.count': null,
  'orders.average_total_amount_of_order_usd': null,
  'orders.created_date': '2019-12-22',
  'users.state': 'California'
}, {
  'orders.count': 3087,
  'orders.average_total_amount_of_order_usd': 88,
  'orders.created_date': '2019-12-22',
  'users.state': 'California'
}, {
  'orders.count': 2515,
  'orders.average_total_amount_of_order_usd': 1069,
  'orders.created_date': '2019-12-22',
  'users.state': 'California'
}];
export const mockTotals = {
  'orders.average_total_amount_of_order_usd': 2245,
  'orders.count': 5689
};
export const mockRawTotals = {
  'orders.average_total_amount_of_order_usd': {
    value: 2245
  },
  'orders.count': {
    value: 5689
  }
};
export const mockNestedRawTotals = {
  'history.count': {
    '2022-08': {
      value: null
    },
    '2022-09': {
      value: 101
    },
    '2022-10': {
      value: 45
    },
    $$$_row_total_$$$: {
      value: 146
    }
  }
};
export const mockNestedTotals = {
  '2022-08 - history.count': null,
  '2022-09 - history.count': 101,
  '2022-10 - history.count': 45,
  '$$$_row_total_$$$ - history.count': 146
};
export const mockDataWithRowTotals = [{
  'dashboard.title': null,
  '2022-08 - history.count': null,
  '2022-09 - history.count': 89,
  '2022-10 - history.count': 39,
  '$$$_row_total_$$$ - history.count': 128
}, {
  'dashboard.title': 'First Dashboard',
  '2022-08 - history.count': null,
  '2022-09 - history.count': 12,
  '2022-10 - history.count': null,
  '$$$_row_total_$$$ - history.count': 12
}];
export const mockPivotedData = [{
  'users.city': 'New York',
  'f - orders.count': 838,
  'm - orders.count': 640,
  'male - orders.count': null
}, {
  'users.city': 'Los Angeles',
  'f - orders.count': 386,
  'm - orders.count': 352,
  'male - orders.count': null
}, {
  'users.city': 'Chicago',
  'f - orders.count': 229,
  'm - orders.count': 235,
  'male - orders.count': null
}];
//# sourceMappingURL=mockData.js.map