

import { userAttributeToString } from '../user_attribute/user_attribute_to_string';
import nullItemToString from '../to_string/null_item_to_string';
import { treeToString } from '../tree/tree_to_string';
import { isDateTime } from './is_date_time';
import { zeroPad2, zeroPad4 } from './zero_pad';
import { hasTimeFilterDateTimeModel } from './date_conversions';
const datetime = (date, showTime) => {
  if (!date) return 'Invalid Date';
  const {
    year,
    month,
    day,
    hour,
    minute
  } = date;
  let result = String(zeroPad4(year));
  result += month ? `/${zeroPad2(month)}` : '';
  result += day ? `/${zeroPad2(day)}` : '';
  if (showTime) {
    result += hour !== undefined ? ` ${zeroPad2(hour)}` : '';
    result += minute !== undefined ? `:${zeroPad2(minute)}` : '';
  }
  return result;
};
const beforeAfter = (item, showTime) => {
  const {
    type,
    range,
    date,
    fromnow,
    unit
  } = item;
  if (range === 'absolute') {
    return `${type} ${datetime(date, showTime)}`;
  }
  const fromNowAgoText = fromnow ? 'from now' : 'ago';
  return unit === 'now' ? `${type} 0 minutes ${fromNowAgoText}` : `${type} ${intervalToString(item)} ${fromNowAgoText}`;
};
const dateRange = ({
  start,
  end
}, showTime) => `${datetime(start, showTime)} to ${datetime(end, showTime)}`;
const thisRange = ({
  startInterval,
  endInterval
}) => `this ${startInterval} to ${endInterval}`;
const intervalToString = ({
  value,
  unit
}) => `${value} ${unit}`;
const typeAndUnitToString = ({
  type,
  unit
}) => `${type} ${unit}`;
const yearToString = ({
  year
}) => `${zeroPad4(year)}`;
const monthToString = ({
  year,
  month
}) => `${zeroPad4(year)}-${zeroPad2(month)}`;
const dayToString = ({
  day
}) => `${day}`;
const on = ({
  date
}, showTime) => `${datetime(date, showTime && hasTimeFilterDateTimeModel(date))}`;
const relative = ({
  startInterval,
  intervalType,
  endInterval
}) => `${intervalToString(startInterval)} ${intervalType} for ${intervalToString(endInterval)}`;
const pastToString = item => `${intervalToString(item)}${item.complete ? ' ago for ' + intervalToString(item) : ''}`;
const pastAgoToString = item => `${intervalToString(item)} ago`;
const notNullToString = () => `not null`;
const filterToStringMap = {
  null: nullItemToString,
  notnull: notNullToString,
  past: pastToString,
  pastAgo: pastAgoToString,
  this: typeAndUnitToString,
  next: typeAndUnitToString,
  last: typeAndUnitToString,
  year: yearToString,
  month: monthToString,
  day: dayToString,
  before: beforeAfter,
  after: beforeAfter,
  range: dateRange,
  thisRange,
  on,
  relative,
  anyvalue: () => '',
  user_attribute: userAttributeToString
};

const dateToString = showTime => item => {
  const toStringFunction = filterToStringMap[item.type];
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item, showTime)) || '';
};

export const dateFilterToString = (root, type) => treeToString(root, dateToString(isDateTime(type)));
//# sourceMappingURL=date_filter_to_string.js.map