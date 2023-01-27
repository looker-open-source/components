
import { convertToNumber } from './convert_to_number';
import { zeroPad2 } from './zero_pad';
const meridiemChange = 12;
const hourCeil = 24;
const minuteCeil = 60;
const defaultMinuteValue = 0;
const meridiemAm = 'AM';
const meridiemPm = 'PM';
export const allowedTimeInputValues = /\d|[a|p|m]|\s|^$/gi;
const exactTimeMatch = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):([0-5][0-9])\s(am|pm)$/gi;

const maxHourValue = hour => hour <= 0 || hour >= hourCeil ? 0 : hour;

const maxMinuteValue = minute => !minute || minute < 0 || minute >= minuteCeil ? 0 : minute;

const getAccurateMeridiem = ({
  hour,
  meridiem: _meridiem = meridiemAm
}) => hour > meridiemChange ? meridiemPm : _meridiem.toUpperCase();
export const meridiemFrom24HourTime = hour => hour >= meridiemChange && hour < hourCeil ? meridiemPm : meridiemAm;
const get12HourTimeValue = hour => {
  if (hour > meridiemChange) {
    hour = hour - meridiemChange;
  }
  if (hour === 0) {
    hour = meridiemChange;
  }
  return hour;
};

export const displayTimeAsIs = ({
  hour,
  minute: _minute = defaultMinuteValue,
  meridiem: _meridiem2 = ''
}) => `${hour}:${zeroPad2(_minute)} ${_meridiem2}`.trim();

export const formatAndDisplayTime = ({
  hour,
  minute: _minute2 = 0,
  meridiem: _meridiem3 = meridiemAm
}) => displayTimeAsIs({
  hour: get12HourTimeValue(maxHourValue(hour)),
  minute: maxMinuteValue(_minute2),
  meridiem: getAccurateMeridiem({
    hour: maxHourValue(hour),
    meridiem: _meridiem3
  })
});

export const get24HourTime = ({
  hour,
  minute: _minute3 = 0,
  meridiem: _meridiem4 = ''
}) => {
  hour = maxHourValue(hour);
  if (_meridiem4.toUpperCase() === meridiemPm && hour < meridiemChange) {
    hour = meridiemChange + hour;
  }
  return {
    hour,
    minute: maxMinuteValue(_minute3),
    meridiem: hour < meridiemChange ? meridiemAm : meridiemPm
  };
};
export const parseTimeInput = inputValue => {
  const [hour, minute, meridiem] = inputValue.split(exactTimeMatch).filter(Boolean);
  return {
    hour: convertToNumber(hour),
    minute: convertToNumber(minute),
    meridiem
  };
};

export const isTimeAndFormatAccurate = input => !!input.match(exactTimeMatch);
//# sourceMappingURL=format_time.js.map