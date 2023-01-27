

import { get24HourTime } from './format_time';
const hoursInDay = 24;

export const generateTimes = () => {
  const timeValues = [];
  for (let i = 0; i < hoursInDay; i++) {
    timeValues.push(get24HourTime({
      hour: i
    }));
  }
  return timeValues;
};
//# sourceMappingURL=generate_times.js.map