# DateFormat

As it's name implies, `DateFormat` is used to format a javascript Date object to human readable and localized text.

This is the sibling component of [`TimeFormat`](time-format), which does the same thing for times. If no Date object is provided, it will default to `Now`.

```tsx
function Basic(props: DateTimeFormatProps) {
  return <DateFormat {...props} />;
}
```

## Providing A Date Object

Wrap the `DateFormat` component around a javascript Date object to render a human-readable date.

```tsx
function DateObject() {
  return <DateFormat>{new Date(1589411215703)}</DateFormat>;
}
```

## Format

<DateFormatTable />

\* medium is the default format

## TimeZone

`DateFormat`, as well as [`TimeFormat`]('time-format') assume that the provided date object is anchored in UTC time. If you need to adjust this to display correctly, you can pass the user's preferred time zone into the `timeZone` prop. This component will accept any string listed in the the [IANA standard](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

```tsx
function Format() {
  return (
    <DateFormat timeZone="Pacific/Auckland">
      {new Date(Date.parse('05 May 2020 12:00 UTC'))}
    </DateFormat>
  );
}
```

## I18n

For languages other than English, import the locale (e.g. `koKR`) and spread it onto `ComponentsProvider`.
This will provide translated strings for components that use them, as well as the locale-specific date strings and formatting.

```tsx
import { ComponentsProvider, koKR } from '@looker/components';
import { DateFormat } from '@looker/components';

export const App = () => {
  return (
    <ComponentsProvider {...koKR}>
      <DateFormat />
    </ComponentsProvider>
  );
};
```

The locale from the [date-fns package](https://www.npmjs.com/package/date-fns) can also be passed directly to the `DateFormat` component.

```tsx
import { DateFormat } from '@looker/components';
import ko from 'date-fns/locale/ko';

export const LocalizedDateFormat = () => {
  return <DateFormat locale={ko} />;
};
```
