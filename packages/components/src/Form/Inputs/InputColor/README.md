# InputColor

The `InputColor` component has an input to add a color value and a color wheel to pick color directly.

```tsx
function Basic(props: InputColorProps) {
  return <InputColor {...props} />;
}
```

## Value

Use the `value` prop for a controlled component.

```tsx
function ControlledColor() {
  const [color, setColor] = useState('red');

  function handleChange(value: string) {
    setColor(value);
  }

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColor(e.target.value);
  }
  return (
    <Space>
      <Select
        options={[{ value: 'green' }, { value: 'purple' }, { value: 'red' }]}
        value={color}
        onChange={handleChange}
        autoResize
      />
      <InputColor value={color} onChange={handleColorChange} />
      <Text>{color}</Text>
    </Space>
  );
}
```

## DefaultValue

To set an initial value on an uncontrolled component use `defaultValue`.

```tsx
function DefaultValue() {
  return <InputColor defaultValue="purple" />;
}
```

## Disabled

```tsx
function Disabled() {
  return <InputColor disabled value="purple" />;
}
```

```tsx
function DisabledNoValue() {
  return <InputColor disabled />;
}
```

## ReadOnly

```tsx
function ReadOnly() {
  return <InputColor readOnly value="purple" />;
}
```

## Swatch

```tsx
<Flex justifyContent="space-between">
  <Swatch />
  <Swatch color="rgb(79, 42, 186)" />
  <Swatch color="#FFFF00" />
</Flex>
```
