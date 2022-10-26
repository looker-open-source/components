import { formatDateString } from '@looker/components';
export const FILTERS_DATE_FORMAT = 'yyyy/MM/dd';
export const formatDate = date => {
  return formatDateString(date, FILTERS_DATE_FORMAT);
};
//# sourceMappingURL=format_date.js.map