export const dateToFilterDateTimeModel = (date = new Date()) => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds()
});
export const filterDateTimeModelToDate = ({
  year,
  month,
  day,
  hour: _hour = 0,
  minute: _minute = 0,
  second: _second = 0
}) => new Date(year, month - 1, day, _hour, _minute, _second);
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
export const clearTimeFilterDateTimeModel = model => ({
  year: model.year,
  month: model.month,
  day: model.day
});
export const hasTimeFilterDateTimeModel = model => model !== undefined && model.hour !== undefined && model.minute !== undefined && model.second !== undefined;
//# sourceMappingURL=date_conversions.js.map