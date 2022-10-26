import React from 'react';
import { formatDateString } from '../../../Calendar/utils';
export const DateTimeFormat = ({
  children: _children = new Date(Date.now()),
  date: _date = true,
  format: _format = 'medium',
  locale,
  time: _time = true,
  timeZone
}) => {
  try {
    return React.createElement(React.Fragment, null, formatDateString(_children, _format, locale, timeZone, {
      date: _date,
      time: _time
    }));
  } catch (error) {
    return React.createElement(React.Fragment, null, error);
  }
};
//# sourceMappingURL=DateTimeFormat.js.map