# Truncate

`Truncate` can be used when you want to prevent text from wrapping. Text will be limited to a single line, and if it overflows an ellipsis will be rendered. In addition, a tooltip will be activated to display the full text on hover.

_The direct parent of this component must have a width or max-width styled on it or else it will invisibly overflow without rendering the proper ellipsis._

```tsx
function Basic() {
  return (
    <Box maxWidth={500}>
      <Truncate>
        <strong>Hover over text to see the full content:</strong> Earliest
        proposed dates for the origin of cheesemaking range from around 8000
        BCE, when sheep were first domesticated. Since animal skins and inflated
        internal organs have, since ancient times, provided storage vessels for
        a range of foodstuffs, it is probable that the process of cheese making
        was discovered accidentally by storing milk in a container made from the
        stomach of an animal, resulting in the milk being turned to curd and
        whey by the rennet from the stomach. There is a legend—with
        variations—about the discovery of cheese by an Arab trader who used this
        method of storing milk.
      </Truncate>
    </Box>
  );
}
```

## Description

You can optionally add the `description` prop, which is additional content that can be rendered at the end of the tooltip overlay. Specifying `description` will cause truncation tooltip to always be present on hover, even when the content does not overflow.

```tsx
function Description() {
  return (
    <Box maxWidth={500}>
      <Truncate description="This is pretty cheesy 🧀">
        <strong>Hover over text to see the description:</strong> Cheese is
        delicious.
      </Truncate>
    </Box>
  );
}
```
