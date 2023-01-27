

import { isValid } from 'date-fns';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { isDateQuery } from './isDateQuery';
export const formatDateLabel = ({
  dateString,
  fields
}) => {
  const dateObj = parseISO(dateString);
  if (isDateQuery(fields) && isValid(dateObj)) {
    const {
      type
    } = fields.dimensions[0];
    if (type === 'date_year') {
      return format(dateObj, 'yyyy');
    } else if (type === 'date_month') {
      return format(dateObj, 'MMMM \u2018yy');
    } else if (type === 'date_date' || type === 'date_week') {
      return format(dateObj, 'LLL d');
    }
  }

  return dateString;
};
//# sourceMappingURL=formatDateLabel.js.map