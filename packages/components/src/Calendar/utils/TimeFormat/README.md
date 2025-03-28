# TimeFormat

As it's name implies, `TimeFormat` is used to format a javascript Date object to human readable and localized text.

This is the sibling component of [`DateFormat`](date-format), which does the same thing for times. If no Date object is provided, it will default to `Now`.

```tsx
<TimeFormat />
```

## Providing A Date Object

Wrap the `TimeFormat` component around a javascript Date object to render time in a human-readable format.

```tsx
<TimeFormat>{new Date(1589411215703)}</TimeFormat>
```

## Format

- `medium` is the default format

## TimeZone

`TimeFormat`, well as [`DateFormat`]('date-format') assume that the provided date object is anchored in UTC time. If you need to adjust this to display correctly, you can pass the user's preferred time zone into the `timeZone` prop. This component will accept any string listed in the the [IANA standard](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

```tsx
<TimeFormat timeZone="America/New_York">
  {new Date(Date.parse('05 May 2020 12:00 UTC'))}
</TimeFormat>
```

## I18n

See `locale` on the [`DateFormat`](date-format) component.
