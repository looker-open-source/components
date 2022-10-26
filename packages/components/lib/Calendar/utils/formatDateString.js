import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getDateLocale } from '@looker/i18n';
import format from 'date-fns-tz/format';
import utcToZonedTime from 'date-fns-tz/utcToZonedTime';
import repeat from 'lodash/repeat';
import trim from 'lodash/trim';
const dateFormatRepetitions = {
  full: 4,
  long: 3,
  medium: 2,
  short: 1
};

const isDateFormat = stringFormat => dateFormatRepetitions[stringFormat];

const getStringFormat = (stringFormat, timeZone = undefined, {
  date: _date = true,
  time: _time = true
}) => {
  const dateFormat = repeat('P', dateFormatRepetitions[stringFormat]);
  const timeFormat = repeat('p', dateFormatRepetitions[stringFormat]);
  const timeZoneFormat = repeat('z', dateFormatRepetitions[stringFormat]);
  return trim(`${_date ? dateFormat : ''}${_time ? timeFormat : ''} ${timeZone ? timeZoneFormat : ''}`);
};

export const formatDateString = (date, stringFormat = 'P', locale = getDateLocale(), timeZone = undefined, options = {}) => {
  if (!date) {
    return '';
  }

  const renderedDate = timeZone ? utcToZonedTime(date, timeZone) : date;
  const actualFormat = isDateFormat(stringFormat) ? getStringFormat(stringFormat, timeZone, options) : stringFormat;
  return format(renderedDate, actualFormat, _objectSpread({
    locale
  }, timeZone && {
    timeZone
  }));
};
//# sourceMappingURL=formatDateString.js.map