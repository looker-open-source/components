
import i18next from 'i18next';
import defaultTo from 'lodash/defaultTo';
import { describeNull } from '../summary/describe_null';
import { describeUserAttribute } from '../user_attribute/describe_user_attribute';
import { convertToNumber } from './convert_to_number';
import { hasTimeFilterDateTimeModel } from './date_conversions';
import { formatAndDisplayTime, meridiemFrom24HourTime } from './format_time';
import { getMonths } from './get_months';
import { getUnitLabel } from './get_unit_label';
import { isDateTime } from './is_date_time';
import { zeroPad2, zeroPad4 } from './zero_pad';
const describeDateTime = (date, showTime) => {
  if (!date) return 'Invalid Date';
  const {
    year,
    month,
    day,
    hour = 0,
    minute = 0
  } = date;
  let result = String(zeroPad4(year));
  result += month ? `/${zeroPad2(month)}` : '';
  result += day ? `/${zeroPad2(day)}` : '';
  if (showTime) {
    result += ` ${formatAndDisplayTime({
      hour: convertToNumber(hour.toString()),
      minute,
      meridiem: meridiemFrom24HourTime(hour)
    })}`;
  }
  return result;
};
const describeInterval = ({
  value,
  unit,
  complete
}) => {
  const t = i18next.t.bind(i18next);
  const result = t('value complete unitLabel', {
    ns: 'describe_date',
    value,
    complete: complete ? t(' complete', {
      ns: 'describe_date'
    }) : '',
    unitLabel: getUnitLabel(unit, value)
  });
  return result;
};
const describeNotNull = () => {
  const t = i18next.t.bind(i18next);
  return t('is not null', {
    ns: 'describe_date'
  });
};
const past = item => {
  const t = i18next.t.bind(i18next);
  return t('is in the last', {
    ns: 'describe_date',
    describeInterval: describeInterval(item)
  });
};
const describePastAgo = item => {
  const t = i18next.t.bind(i18next);
  return t('is interval ago', {
    ns: 'describe_date',
    interval: describeInterval(item)
  });
};
const describeTypeAndUnit = ({
  type,
  unit
}) => {
  const t = i18next.t.bind(i18next);
  const thisText = t('this', {
    ns: 'describe_date'
  });
  const nextText = t('next', {
    ns: 'describe_date'
  });
  return t('is type unitLabel', {
    ns: 'describe_date',
    type: type === 'this' ? thisText : nextText,
    unitLabel: getUnitLabel(unit)
  });
};
const describeLast = ({
  unit
}) => {
  const t = i18next.t.bind(i18next);
  return t('is previous unitLabel', {
    ns: 'describe_date',
    unitLabel: getUnitLabel(unit)
  });
};
const describeYear = ({
  year
}) => {
  const t = i18next.t.bind(i18next);
  return t('is in the year year', {
    ns: 'describe_date',
    year
  });
};
const describeMonth = ({
  month,
  year
}) => {
  const t = i18next.t.bind(i18next);
  return t('is in month year', {
    ns: 'describe_date',
    month: getMonths()[parseInt(month, 10) - 1],
    year
  });
};
const beforeAfter = (item, showTime) => {
  const t = i18next.t.bind(i18next);
  const {
    type,
    range,
    date,
    fromnow
  } = item;
  const prefix = type === 'after' ? t('is on or after', {
    ns: 'describe_date'
  }) : t('is before', {
    ns: 'describe_date'
  });
  if (range === 'absolute') {
    return t('absolute prefix dateTime', {
      ns: 'describe_date',
      prefix,
      dateTime: describeDateTime(date, showTime)
    });
  }
  const timePassed = fromnow ? t('from now', {
    ns: 'describe_date'
  }) : t('ago', {
    ns: 'describe_date'
  });
  return item.unit === 'now' ? t('prefix now', {
    ns: 'describe_date',
    prefix
  }) : t('prefix interval timePassed', {
    ns: 'describe_date',
    prefix,
    interval: describeInterval(item),
    timePassed
  });
};
const on = ({
  date
}, showTime) => {
  const t = i18next.t.bind(i18next);
  return t('is on dateTime', {
    ns: 'describe_date',
    dateTime: describeDateTime(date, showTime && hasTimeFilterDateTimeModel(date))
  });
};
const describeRange = ({
  start,
  end
}, showTime) => {
  const t = i18next.t.bind(i18next);
  return t('is from dateTimeStart until dateTimeEnd', {
    ns: 'describe_date',
    dateTimeStart: describeDateTime(start, showTime),
    dateTimeEnd: describeDateTime(end, showTime)
  });
};
const describeThisRange = ({
  startInterval,
  endInterval
}) => {
  const t = i18next.t.bind(i18next);
  return t('this startInterval to endInterval', {
    ns: 'describe_date',
    startInterval,
    endInterval
  });
};
const relative = ({
  startInterval,
  endInterval,
  intervalType
}) => {
  const t = i18next.t.bind(i18next);
  const agoText = t('ago', {
    ns: 'describe_date'
  });
  const fromNowText = t('from now', {
    ns: 'describe_date'
  });
  return t('is intervalStart intervalType for intervalEnd', {
    ns: 'describe_date',
    intervalStart: describeInterval(startInterval),
    intervalType: intervalType === 'ago' ? agoText : fromNowText,
    intervalEnd: describeInterval(endInterval)
  });
};
const anyvalue = () => {
  const t = i18next.t.bind(i18next);
  return t('is any time', {
    ns: 'describe_date'
  });
};
const describeDay = ({
  day
}) => {
  const t = i18next.t.bind(i18next);
  return t('is day', {
    ns: 'describe_date',
    day
  });
};
const filterToStringMap = {
  null: describeNull,
  notnull: describeNotNull,
  pastAgo: describePastAgo,
  past,
  this: describeTypeAndUnit,
  next: describeTypeAndUnit,
  last: describeLast,
  year: describeYear,
  month: describeMonth,
  before: beforeAfter,
  after: beforeAfter,
  range: describeRange,
  thisRange: describeThisRange,
  on,
  relative,
  anyvalue,
  user_attribute: describeUserAttribute,
  day: describeDay
};

export const describeDate = (item, expressionType) => defaultTo(filterToStringMap[item.type], () => '')(item, isDateTime(expressionType));
//# sourceMappingURL=describe_date.js.map