import isValid from 'date-fns/isValid';
import en from 'date-fns/locale/en-US';
import parse from 'date-fns/parse';
export const formatYear = date => {
  const year = date.getFullYear();

  if (year < 100) {
    return year + 2000;
  } else if (year < 1000) {
    return parseInt(`${year}0`);
  }

  return year;
};
export const parseDateFromString = (value, locale = en, format = 'P') => {
  const parsedValue = parse(value, format, new Date(), {
    locale
  });
  parsedValue.setFullYear(formatYear(parsedValue));
  return isValid(parsedValue) && parsedValue;
};
//# sourceMappingURL=parseDateFromString.js.map