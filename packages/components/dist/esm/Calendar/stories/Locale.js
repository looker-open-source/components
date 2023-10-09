import React, { useState } from 'react';
import ko from 'date-fns/locale/ko';
import { Calendar } from '../..';
export default function Locale() {
  const initialDate = new Date('Jul 1, 2021');
  const [date, setDate] = useState(initialDate);
  const [viewMonth, setViewMonth] = useState(initialDate);
  return React.createElement(Calendar, {
    onSelectDate: setDate,
    selectedDate: date,
    viewMonth: viewMonth,
    onMonthChange: setViewMonth,
    locale: ko
  });
}
//# sourceMappingURL=Locale.js.map