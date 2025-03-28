# FieldColor

```tsx
function Basic(props: FieldColorProps) {
  const [value, setValue] = useState('purple');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <FieldColor
      {...props}
      label="Basic"
      value={value}
      onChange={handleChange}
    />
  );
}
```
