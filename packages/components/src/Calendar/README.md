# Calendar

`Calendar` is a stateless component which renders a standard calendar month. It accepts a limited amount of props, and is the foundation of our more useful [`InputDate`](/components/forms/input-date) and `InputDateRange` components.

```tsx
export default function Basic({
  onSelectDate,
  selectedDate,
  viewMonth: viewMonthProp = new Date('Jul 1, 2021'),
  ...args
}: Partial<CalendarProps>) {
  const [date, setDate] = useState(selectedDate);
  const handleSelect = (newDate: Date) => {
    onSelectDate?.(newDate);
    setDate(newDate);
  };
  const [viewMonth, setViewMonth] = useState(viewMonthProp);
  return (
    <Calendar
      {...args}
      onSelectDate={handleSelect}
      selectedDate={date}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
    />
  );
}
```

## I18n

Install the [`date-fns`](https://date-fns.org/) package, import the necessary locale, and pass it to `ComponentsProvider`.

```tsx
import ko from 'date-fns/locale/ko';

export default function ProviderLocale() {
  const initialDate = new Date('Jul 1, 2021');
  const [date, setDate] = useState(initialDate);
  const [viewMonth, setViewMonth] = useState(initialDate);

  return (
    <ComponentsProvider dateLocale={ko}>
      <Calendar
        onSelectDate={setDate}
        selectedDate={date}
        viewMonth={viewMonth}
        onMonthChange={setViewMonth}
      />
    </ComponentsProvider>
  );
}
```

The locale can also be passed directly to the `Calendar` component.

```tsx
import ko from 'date-fns/locale/ko';

export default function Locale() {
  const initialDate = new Date('Jul 1, 2021');
  const [date, setDate] = useState(initialDate);
  const [viewMonth, setViewMonth] = useState(initialDate);

  return (
    <Calendar
      onSelectDate={setDate}
      selectedDate={date}
      viewMonth={viewMonth}
      onMonthChange={setViewMonth}
      locale={ko}
    />
  );
}
```
