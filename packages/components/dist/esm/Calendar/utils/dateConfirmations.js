import { isSameYear, getMonth } from 'date-fns';
export const confirmToday = i => getMonth(new Date()) === i;
export const isThisMonth = (date, monthNumber, selectedMonth) => selectedMonth && isSameYear(selectedMonth, date) && getMonth(selectedMonth) === monthNumber;
//# sourceMappingURL=dateConfirmations.js.map