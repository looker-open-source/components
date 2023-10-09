function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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