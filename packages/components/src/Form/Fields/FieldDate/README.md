# FieldDate

This component is composed of an `InputDate` and a `Label`.

```tsx
function Basic(externalLabel = true) {
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel } }}
    >
      <FieldDate defaultValue={new Date('July 25, 2020')} label={'Example'} />
    </ExtendComponentsThemeProvider>
  );
}
```
