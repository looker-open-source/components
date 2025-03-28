# Chip

The `Chip` component can represent multiple interactive elements in the same area, such as a multiple values on a single filter or a list of email addresses.

```tsx
export default function Basic(props: ChipProps) {
  return <Chip {...props}>Basic</Chip>;
}
```

The `onClick` handler is called when when the user clicks anywhere on the `Chip` except for the x icon.
This icon appears when `onDelete` is defined and calls that intead when clicked.
`onDelete` is also called via the delete key. Neither callback is called when `disabled` is true.

```tsx
export default function ClickAndDelete() {
  const handleClick = () => alert('Clicked!');
  const handleDelete = () => alert('Deleted!');

  return (
    <Space>
      <Chip onClick={handleClick}>Click Me</Chip>
      <Chip disabled onClick={handleClick}>
        Click Me (nothing happens)
      </Chip>
      <Chip onClick={handleClick} onDelete={handleDelete}>
        Delete Me
      </Chip>
      <Chip disabled onClick={handleClick} onDelete={handleDelete}>
        Delete Me (nothing happens)
      </Chip>
    </Space>
  );
}
```

## MaxWidth

The width of the `Chip` will accomodate its contents, by default. Setting a `maxWidth` will cause any overflow text to be truncated with ellipses. The full text will show in a tooltip on hover.

```tsx
export default function MaxWidth() {
  return (
    <Space gap="u1">
      <Chip maxWidth={150}>short</Chip>
      <Chip maxWidth={150} onDelete={() => alert('deleted')}>
        Very long text inside the chip will be truncated
      </Chip>
    </Space>
  );
}
```

## Prefix

Text in the `prefix` will render before the children, in normal font-weight, with a colon after it.

```tsx
export default function Prefix() {
  return <Chip prefix="role">admin</Chip>;
}
```

## Removable

The following is an example of a collection of removable chips.

```tsx
export default function Removable() {
  const [values, setValues] = useState(['Cheddar', 'Gouda', 'Swiss']);
  function getDeleteHandler(item: string) {
    return () => {
      const newValues = values.filter(value => value !== item);
      setValues(newValues);
    };
  }
  return (
    <Space>
      {values.map(item => (
        <Chip onDelete={getDeleteHandler(item)} role="option" key={item}>
          {item}
        </Chip>
      ))}
    </Space>
  );
}
```

# IconLabel

The `Chip` component provides the prop `iconLabel` to customize the icon label. Hover over the the `x` icon to see the tooltip.

```tsx
export default function IconLabel() {
  const alertTrigger = () => alert('You click on the X');
  return (
    <Space gap="u1">
      <Chip iconLabel="remove chip" onDelete={alertTrigger}>
        hover the x
      </Chip>
      <Chip onDelete={alertTrigger}>hover the x</Chip>
    </Space>
  );
}
```
