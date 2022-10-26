import padStart from 'lodash/padStart';
import toString from 'lodash/toString';
import map from 'lodash/map';
export const formatTimeString = number => {
  return padStart(toString(number), 2, '0');
};
export const parseBase10Int = value => value.length ? parseInt(value, 10) : 0;
export const isValidTime = value => {
  if (!value) {
    return true;
  }

  const [hour = 0, minute = 0] = map(value.split(':'), parseBase10Int);

  if (hour < 24 && minute <= 60) {
    return true;
  }

  return false;
};
//# sourceMappingURL=utils.js.map