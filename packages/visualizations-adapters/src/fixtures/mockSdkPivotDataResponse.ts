/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

export const mockSdkPivotDataResponse = [
  {
    'orders.created_date': {
      value: '2019-12-22',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-22&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-22',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-22',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 79.5,
        rendered: '$79.50',
      },
      complete: {
        value: null,
      },
      pending: {
        value: 116.99236842105259,
        rendered: '$116.99',
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: null,
      },
      pending: {
        value: 38,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-21',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-21&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-21',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-21',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: null,
      },
      pending: {
        value: 80.47117647058822,
        rendered: '$80.47',
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: null,
      },
      pending: {
        value: 51,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-20',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-20&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-20',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-20',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: null,
      },
      pending: {
        value: 97.7078947368421,
        rendered: '$97.71',
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: null,
      },
      pending: {
        value: 38,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-19',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-19&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-19',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-19',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 310.56,
        rendered: '$310.56',
      },
      complete: {
        value: null,
      },
      pending: {
        value: 104.16499999999998,
        rendered: '$104.16',
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: null,
      },
      pending: {
        value: 48,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-18',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-18&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-18',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-18',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 71.39,
        rendered: '$71.39',
      },
      pending: {
        value: 90.92627906976743,
        rendered: '$90.93',
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 2,
      },
      pending: {
        value: 43,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-17',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-17&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-17',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-17',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 107,
        rendered: '$107.00',
        filterable_value: '107.0',
      },
      pending: {
        value: 119.0036842105263,
        rendered: '$119.00',
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 1,
      },
      pending: {
        value: 38,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-16',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-16&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-16',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-16',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 65,
        rendered: '$65.00',
        filterable_value: '65.0',
      },
      complete: {
        value: 71.02,
        rendered: '$71.02',
      },
      pending: {
        value: 114.37400000000001,
        rendered: '$114.37',
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 6,
      },
      pending: {
        value: 25,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-15',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-15&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-15',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-15',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 120,
        rendered: '$120.00',
        filterable_value: '120.0',
      },
      complete: {
        value: 76.65,
        rendered: '$76.65',
      },
      pending: {
        value: 148.03,
        rendered: '$148.03',
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 4,
      },
      pending: {
        value: 33,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-14',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-14&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-14',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-14',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 174,
        rendered: '$174.00',
        filterable_value: '174.0',
      },
      complete: {
        value: 171.02249999999998,
        rendered: '$171.02',
      },
      pending: {
        value: 102.17967741935483,
        rendered: '$102.18',
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 4,
      },
      pending: {
        value: 31,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-13',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-13&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-13',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-13',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 84.30000000000001,
        rendered: '$84.30',
      },
      complete: {
        value: 127.52799999999999,
        rendered: '$127.53',
      },
      pending: {
        value: 95.09295454545453,
        rendered: '$95.09',
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 5,
      },
      pending: {
        value: 44,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-12',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-12&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-12',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-12',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 19.99,
        rendered: '$19.99',
      },
      complete: {
        value: 108.08777777777777,
        rendered: '$108.09',
      },
      pending: {
        value: 86.7785714285714,
        rendered: '$86.78',
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 9,
      },
      pending: {
        value: 35,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-11',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-11&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-11',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-11',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 79.21666666666667,
        rendered: '$79.22',
      },
      pending: {
        value: 131.85166666666666,
        rendered: '$131.85',
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 6,
      },
      pending: {
        value: 42,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-10',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-10&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-10',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-10',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 58.33375,
        rendered: '$58.33',
      },
      pending: {
        value: 109.37230769230766,
        rendered: '$109.37',
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 8,
      },
      pending: {
        value: 39,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-09',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-09&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-09',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-09',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 83.87,
        rendered: '$83.87',
      },
      complete: {
        value: 136.6574468085106,
        rendered: '$136.66',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 47,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-08',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-08&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-08',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-08',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 120.43404255319146,
        rendered: '$120.43',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 47,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-07',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-07&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-07',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-07',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 127.61088888888891,
        rendered: '$127.61',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 45,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-06',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-06&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-06',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-06',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 103.395,
        rendered: '$103.40',
      },
      complete: {
        value: 93.45299999999996,
        rendered: '$93.45',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 2,
      },
      complete: {
        value: 50,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-05',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-05&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-05',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-05',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 85.02099999999997,
        rendered: '$85.02',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 50,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-04',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-04&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-04',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-04',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 44.364999999999995,
        rendered: '$44.36',
      },
      complete: {
        value: 92.29944444444443,
        rendered: '$92.30',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 2,
      },
      complete: {
        value: 54,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-03',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-03&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-03',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-03',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 109.81473684210523,
        rendered: '$109.81',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 38,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-02',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-02&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-02',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-02',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 111.47687499999996,
        rendered: '$111.48',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 48,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-12-01',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-12-01&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-12-01',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-12-01',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 97.1532258064516,
        rendered: '$97.15',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 31,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-30',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-30&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-30',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-30',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 90.44428571428568,
        rendered: '$90.44',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 49,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-29',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-29&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-29',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-29',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 91.495,
        rendered: '$91.50',
      },
      complete: {
        value: 108.90716666666664,
        rendered: '$108.91',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 2,
      },
      complete: {
        value: 60,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-28',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-28&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-28',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-28',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 64.83,
        rendered: '$64.83',
      },
      complete: {
        value: 84.70666666666662,
        rendered: '$84.71',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 45,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-27',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-27&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-27',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-27',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 96.99000000000001,
        rendered: '$96.99',
      },
      complete: {
        value: 89.42079999999999,
        rendered: '$89.42',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 2,
      },
      complete: {
        value: 50,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-26',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-26&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-26',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-26',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 92.00523809523808,
        rendered: '$92.01',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 42,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-25',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-25&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-25',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-25',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 52.964999999999996,
        rendered: '$52.96',
      },
      complete: {
        value: 103.55268292682925,
        rendered: '$103.55',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 2,
      },
      complete: {
        value: 41,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-24',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-24&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-24',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-24',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 82.67454545454544,
        rendered: '$82.67',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 33,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-23',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-23&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-23',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-23',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 98.13210526315785,
        rendered: '$98.13',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 38,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-22',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-22&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-22',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-22',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 293,
        rendered: '$293.00',
        filterable_value: '293.0',
      },
      complete: {
        value: 106.25599999999994,
        rendered: '$106.26',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 45,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-21',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-21&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-21',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-21',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 121.01069767441858,
        rendered: '$121.01',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 43,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-20',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-20&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-20',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-20',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 126.95642857142857,
        rendered: '$126.96',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 42,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-19',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-19&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-19',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-19',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 52.49,
        rendered: '$52.49',
      },
      complete: {
        value: 123.23520833333329,
        rendered: '$123.24',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 48,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-18',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-18&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-18',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-18',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 273,
        rendered: '$273.00',
        filterable_value: '273.0',
      },
      complete: {
        value: 113.53083333333332,
        rendered: '$113.53',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 48,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-17',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-17&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-17',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-17',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 116,
        rendered: '$116.00',
        filterable_value: '116.0',
      },
      complete: {
        value: 111.84268292682921,
        rendered: '$111.84',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 41,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-16',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-16&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-16',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-16',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 123,
        rendered: '$123.00',
        filterable_value: '123.0',
      },
      complete: {
        value: 88.91285714285713,
        rendered: '$88.91',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 42,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-15',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-15&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-15',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-15',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 154.4,
        rendered: '$154.40',
      },
      complete: {
        value: 100.75879999999998,
        rendered: '$100.76',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 50,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-14',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-14&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-14',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-14',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 114.84,
        rendered: '$114.84',
      },
      complete: {
        value: 110.0205,
        rendered: '$110.02',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 40,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-13',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-13&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-13',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-13',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 128.1103846153846,
        rendered: '$128.11',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 26,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-12',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-12&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-12',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-12',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 117.05852941176468,
        rendered: '$117.06',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 34,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-11',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-11&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-11',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-11',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 109.87953488372088,
        rendered: '$109.88',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 43,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-10',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-10&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-10',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-10',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 86.82583333333332,
        rendered: '$86.83',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 36,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-09',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-09&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-09',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-09',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 288.685,
        rendered: '$288.69',
      },
      complete: {
        value: 89.5720588235294,
        rendered: '$89.57',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 2,
      },
      complete: {
        value: 34,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-08',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-08&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-08',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-08',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 91.42219512195122,
        rendered: '$91.42',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 41,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-07',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-07&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-07',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-07',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: 9.99,
        rendered: '$9.99',
      },
      complete: {
        value: 108.71428571428568,
        rendered: '$108.71',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: 1,
      },
      complete: {
        value: 35,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-06',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-06&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-06',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-06',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 112.34017857142854,
        rendered: '$112.34',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 56,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-05',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-05&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-05',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-05',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 108.52186046511625,
        rendered: '$108.52',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 43,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-04',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-04&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-04',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-04',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 115.54488888888883,
        rendered: '$115.54',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 45,
      },
      pending: {
        value: null,
      },
    },
  },
  {
    'orders.created_date': {
      value: '2019-11-03',
      links: [
        {
          label: 'by Created Time',
          label_prefix: 'by',
          label_value: 'Created Time',
          url:
            '/explore/thelook/orders?fields=orders.created_time,orders.average_total_amount_of_order_usd,orders.count,orders.status&pivots=orders.status&f[orders.created_date]=2019-11-03&sorts=orders.created_date desc&limit=500',
          type: 'drill',
          type_label: 'Drill into 2019-11-03',
          type_label_prefix: 'Drill into',
          type_label_value: '2019-11-03',
        },
      ],
    },
    'orders.average_total_amount_of_order_usd': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 96.43651162790694,
        rendered: '$96.44',
      },
      pending: {
        value: null,
      },
    },
    'orders.count': {
      cancelled: {
        value: null,
      },
      complete: {
        value: 43,
      },
      pending: {
        value: null,
      },
    },
  },
]
