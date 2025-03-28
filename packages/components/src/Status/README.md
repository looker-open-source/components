# Status

The `Status` component can be used to indicate `critical` `inform` `neutral` `positive` or `warn` of an item and to inform user and take actions. This is accomplished using `intent` property.

```tsx
function Critical() {
  return <Status intent={'critical'} />;
}
```

```tsx
function Neutral() {
  return <Status intent={'neutral'} />;
}
```

```tsx
function Inform() {
  return <Status intent={'inform'} />;
}
```

```tsx
function Critical() {
  return <Status intent={'critical'} />;
}
```

```tsx
function Warn() {
  return <Status intent={'warn'} />;
}
```
