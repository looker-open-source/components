import React, { useState } from 'react';
import ko from 'date-fns/locale/ko';
import { Calendar, ComponentsProvider } from '../..';
export default function ProviderLocale() {
  const initialDate = new Date('Jul 1, 2021');
  const [date, setDate] = useState(initialDate);
  const [viewMonth, setViewMonth] = useState(initialDate);
  return React.createElement(ComponentsProvider, {
    dateLocale: ko
  }, React.createElement(Calendar, {
    onSelectDate: setDate,
    selectedDate: date,
    viewMonth: viewMonth,
    onMonthChange: setViewMonth
  }));
}
//# sourceMappingURL=ProviderLocale.js.map