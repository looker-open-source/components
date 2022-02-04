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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/en-US'
import type { I18nStateWithDates } from '../../utils'
import { en as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Add',
    Remove: 'Remove',
  },
  before_after_units: {
    'days ago': 'days ago',
    'days from now': 'days from now',
    'fiscal quarter from now': 'fiscal quarter from now',
    'fiscal quarters ago': 'fiscal quarters ago',
    'fiscal years ago': 'fiscal years ago',
    'fiscal years from now': 'fiscal years from now',
    'hours ago': 'hours ago',
    'hours from now': 'hours from now',
    'minutes ago': 'minutes ago',
    'minutes from now': 'minutes from now',
    'months ago': 'months ago',
    'months from now': 'months from now',
    now: 'now',
    'quarters ago': 'quarters ago',
    'quarters from now': 'quarters from now',
    'seconds ago': 'seconds ago',
    'seconds from now': 'seconds from now',
    'weeks ago': 'weeks ago',
    'weeks from now': 'weeks from now',
    'years ago': 'years ago',
    'years from now': 'years from now',
  },
  BeforeAfter: {
    absolute: '(absolute)',
    relative: '(relative)',
  },
  Between: {
    AND: 'AND',
  },
  date_units: {
    day: 'day',
    days: 'days',
    'fiscal quarter': 'fiscal quarter',
    'fiscal quarters': 'fiscal quarters',
    'fiscal year': 'fiscal year',
    'fiscal years': 'fiscal years',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    month: 'month',
    months: 'months',
    quarter: 'quarter',
    quarters: 'quarters',
    second: 'second',
    seconds: 'seconds',
    week: 'week',
    weeks: 'weeks',
    year: 'year',
    years: 'years',
  },
  get_date_filter_options: {
    is: 'is',
    'is any time': 'is any time',
    'is before': 'is before',
    'is in range': 'is in range',
    'is in the last': 'is in the last',
    'is in the month': 'is in the month',
    'is in the year': 'is in the year',
    'is next': 'is next',
    'is not null': 'is not null',
    'is null': 'is null',
    'is on or after': 'is on or after',
    'is on the day': 'is on the day',
    'is previous': 'is previous',
    'is this': 'is this',
  },
  get_filter_options: {
    'matches advanced': 'matches (advanced)',
  },
  get_location_filter_options: {
    Box: 'Box',
    Circle: 'Circle',
    Location: 'Location',
    feet: 'feet',
    'is anywhere': 'is anywhere',
    'is not null': 'is not null',
    'is null': 'is null',
    kilometers: 'kilometers',
    meters: 'meters',
    miles: 'miles',
  },
  get_number_filter_options: {
    exclusive: '(exclusive)',
    inclusive: '[inclusive]',
    is: 'is',
    'is between': 'is between',
    'is greater': 'is >',
    'is greater equal': 'is >=',
    'is less': 'is <',
    'is less equal': 'is <=',
    'is not': 'is not',
    'is not between': 'is not between',
    'is not null': 'is not null',
    'is null': 'is null',
    'left exclusive': '(left-exclusive]',
    'right exclusive': '[right-exclusive)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Last 14 Days',
    'Last 180 Days': 'Last 180 Days',
    'Last 28 Days': 'Last 28 Days',
    'Last 30 Days': 'Last 30 Days',
    'Last 365 Days': 'Last 365 Days',
    'Last 7 Days': 'Last 7 Days',
    'Last 90 Days': 'Last 90 Days',
    'Previous Month': 'Previous Month',
    'Previous Quarter': 'Previous Quarter',
    'Previous Week': 'Previous Week',
    'Previous Year': 'Previous Year',
    'This Month': 'This Month',
    'This Quarter': 'This Quarter',
    'This Week': 'This Week',
    'This Year': 'This Year',
    Today: 'Today',
    'Year To Date': 'Year To Date',
    Yesterday: 'Yesterday',
  },
  get_string_filter_options: {
    contains: 'contains',
    'doesnt contain': "doesn't contain",
    'doesnt end with': "doesn't end with",
    'doesnt start with': "doesn't start with",
    'ends with': 'ends with',
    is: 'is',
    'is blank': 'is blank',
    'is not': 'is not',
    'is not blank': 'is not blank',
    'is not null': 'is not null',
    'is null': 'is null',
    'starts with': 'starts with',
  },
  get_tier_filter_options: {
    is: 'is',
    'is any value': 'is any value',
    'is not': 'is not',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'matches a user attribute',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'any value',
  },
  OperatorLabel: {
    AND: 'AND',
    OR: 'OR',
  },
  past_units: {
    'complete days': 'complete days',
    'complete fiscal quarters': 'complete fiscal quarters',
    'complete fiscal years': 'complete fiscal years',
    'complete hours': 'complete hours',
    'complete minutes': 'complete minutes',
    'complete months': 'complete months',
    'complete quarters': 'complete quarters',
    'complete seconds': 'complete seconds',
    'complete weeks': 'complete weeks',
    'complete years': 'complete years',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Clear all',
    Remove: 'Remove',
    Toggle: 'Toggle',
  },
  Relative: {
    ago: 'ago',
    'from now': 'from now',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Choose a Timeframe',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Custom',
    Presets: 'Presets',
  },
  RelativeTimeframePresets: {
    More: 'More',
  },
  use_filters_errors: {
    'Invalid value': 'Invalid value',
    'No value is set for your user attribute':
      'No value is set for your user attribute',
    'Selection required': 'Selection required',
  },
  use_option_filtering: {
    'No values': 'No values',
    'No values match': 'No values match',
  },
  use_placeholder: {
    'any value': 'any value',
  },
  use_suggestable: {
    'Error loading suggestions': 'Error loading suggestions',
  },
  use_validation_message: {
    'Value required': 'Value required',
  },
}

export const en: I18nStateWithDates = {
  dateLocale,
  locale: 'en',
  resources: { en: merge(resources, expressionLocale.resources.en) },
}
