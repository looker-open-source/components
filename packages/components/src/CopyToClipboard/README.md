# CopyToClipboard

```tsx
export default function Basic() {
  return <CopyToClipboard content="here is some text to be copied" />;
}
```

### Label

`CopyToClipboard` offers props `children` and `success` both can be used to change the labels on the button by passing a string

```tsx
export default function Success() {
  return (
    <CopyToClipboard
      content="here is some text to be copied"
      success="it was copied"
    />
  );
}
```

### Customize Components

`CopyToClipboard` `children` and `success` support taking a `JSX.Element` instead of a simple string if you prefer

```tsx
export default function ChildComponent() {
  return (
    <CopyToClipboard
      content="here is some text to be copied"
      success={<Button color="positive">Success</Button>}
    >
      <Button>Copy stuff</Button>
    </CopyToClipboard>
  );
}
```
