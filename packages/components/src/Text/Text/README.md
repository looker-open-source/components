_NOTE: This component has been deprecated. Use `Span` component instead for a more predictable behavior._

The Text component outputs a `span` HTML element with specified props.

```tsx
function Basic() {
  return <Text>Basic Text Example</Text>;
}
```

_This component has a historic "quirk" where the `font-size` defaults to medium rather than simply inheriting it's size from the parent DOM element (what one might expect of a "normal" inline element. `line-height` will match the `font-size` (`medium` unless otherwise specified) as well._
