# FieldDateRange

This component is composed of an `InputDateRange` and a `Label`.

```tsx
function Basic(value: RangeModifier) {
  const [range, setRange] = useState<RangeModifier>(value);
  return (
    <FieldDateRange value={range} onChange={setRange} label={'Pick a Date'} />
  );
}
```
