

export const mockFields = {
  measures: [{
    is_numeric: true,
    label: 'Orders Count',
    label_short: 'Count',
    name: 'orders.count',
    sortable: true,
    sorted: {
      desc: true,
      sort_index: 0
    },
    type: 'count_distinct',
    view: 'orders',
    view_label: 'Orders',
    value_format: null
  }, {
    is_numeric: true,
    label: 'Orders Average Total Amount of Order USD',
    label_short: 'Average Total Amount of Order USD',
    name: 'orders.average_total_amount_of_order_usd',
    sortable: true,
    type: 'average',
    view: 'orders',
    view_label: 'Orders',
    value_format: '$#,##0.00'
  }],
  dimensions: [{
    is_filter: false,
    is_fiscal: false,
    is_numeric: false,
    is_timeframe: true,
    label: 'Orders Created Date',
    label_short: 'Created Date',
    name: 'orders.created_date',
    sortable: true,
    type: 'date_date',
    view: 'orders',
    view_label: 'Orders',
    value_format: null
  }, {
    is_filter: false,
    is_fiscal: false,
    is_numeric: false,
    is_timeframe: true,
    label: 'Users State',
    label_short: 'State',
    name: 'users.state',
    sortable: true,
    type: 'string',
    view: 'users',
    view_label: 'Users',
    value_format: null
  }],
  pivots: []
};
export const mockFieldsRowTotals = {
  measures: [{
    is_numeric: true,
    label: 'History Count',
    label_short: '2022-08',
    name: '2022-08 - history.count',
    sortable: true,
    type: 'count',
    value_format: null,
    view: 'history',
    view_label: 'History',
    sorted: {
      sort_index: 0,
      desc: true,
      pivot_index: 0
    },
    pivoted_label: 'History Count: 2022-08'
  }, {
    is_numeric: true,
    label: 'History Count',
    label_short: '2022-09',
    name: '2022-09 - history.count',
    sortable: true,
    type: 'count',
    value_format: null,
    view: 'history',
    view_label: 'History',
    sorted: {
      sort_index: 0,
      desc: true,
      pivot_index: 0
    },
    pivoted_label: 'History Count: 2022-09'
  }, {
    is_numeric: true,
    label: 'History Count',
    label_short: '2022-10',
    name: '2022-10 - history.count',
    sortable: true,
    type: 'count',
    value_format: null,
    view: 'history',
    view_label: 'History',
    sorted: {
      sort_index: 0,
      desc: true,
      pivot_index: 0
    },
    pivoted_label: 'History Count: 2022-10'
  }, {
    is_numeric: true,
    label: 'History Count',
    label_short: 'Row Total',
    name: '$$$_row_total_$$$ - history.count',
    sortable: true,
    type: 'count',
    value_format: null,
    view: 'history',
    view_label: 'History',
    sorted: {
      sort_index: 0,
      desc: true,
      pivot_index: 0
    },
    pivoted_label: 'History Count: Row Total'
  }],
  dimensions: [{
    is_filter: false,
    is_numeric: false,
    label: 'Dashboard Title',
    label_short: 'Title',
    name: 'dashboard.title',
    sortable: true,
    type: 'string',
    value_format: null,
    view: 'dashboard',
    view_label: 'Dashboard',
    is_fiscal: false,
    is_timeframe: false
  }],
  pivots: [{
    is_numeric: false,
    label: 'History Completed Month',
    label_short: 'Completed Month',
    name: 'history.completed_month',
    sortable: true,
    type: 'date_month',
    value_format: null,
    view: 'history',
    view_label: 'History',
    is_fiscal: false,
    is_filter: false,
    is_timeframe: true,
    sorted: {
      sort_index: 1,
      desc: false
    }
  }]
};
export const mockPivotedFields = {
  measures: [{
    is_numeric: true,
    label: 'Orders Count',
    label_short: 'F',
    name: 'f - orders.count',
    sortable: true,
    type: 'count',
    value_format: null,
    view: 'orders',
    view_label: 'Orders',
    sorted: {
      sort_index: 0,
      desc: true,
      pivot_index: 0
    },
    pivot_key: 'f',
    pivoted_label: 'Orders Count: F'
  }, {
    is_numeric: true,
    label: 'Orders Count',
    label_short: 'M',
    name: 'm - orders.count',
    sortable: true,
    type: 'count',
    value_format: null,
    view: 'orders',
    view_label: 'Orders',
    sorted: {
      sort_index: 0,
      desc: true,
      pivot_index: 0
    },
    pivot_key: 'm',
    pivoted_label: 'Orders Count: M'
  }, {
    is_numeric: true,
    label: 'Orders Count',
    label_short: 'Male',
    name: 'male - orders.count',
    sortable: true,
    type: 'count',
    value_format: null,
    view: 'orders',
    view_label: 'Orders',
    sorted: {
      sort_index: 0,
      desc: true,
      pivot_index: 0
    },
    pivot_key: 'male',
    pivoted_label: 'Orders Count: Male'
  }],
  dimensions: [{
    is_numeric: false,
    label: 'Users City',
    label_short: 'City',
    name: 'users.city',
    sortable: true,
    type: 'string',
    value_format: null,
    view: 'users',
    view_label: 'Users',
    is_filter: false,
    is_fiscal: false,
    is_timeframe: false
  }],
  pivots: [{
    is_filter: false,
    is_numeric: false,
    label: 'Users Gender',
    label_short: 'Gender',
    name: 'users.gender',
    sortable: true,
    type: 'string',
    value_format: null,
    view: 'users',
    view_label: 'Users',
    is_fiscal: false,
    is_timeframe: false,
    sorted: {
      sort_index: 1,
      desc: false
    }
  }]
};
//# sourceMappingURL=mockFields.js.map