# Span

By default the `<Span />` component will render text wrapped in a `<span>`, if you need another html element for semantic purposes you can use the `element` property.

Note: `@looker/components` also exports a, now deprecated, `Text` component that is identical to `Span` except that it has a default `fontSize="medium"` rather than inheriting it's parent element's fontSize.

```tsx
function Basic() {
  return <Span>Span Text</Span>;
}
```

## Text Size

If you need to adjust the font-size of the rendered text, you can use the `size` property and a value from the [type scale](/#!/Typography)

```tsx
function XXXXLarge() {
  return <Span fontSize="xxxxlarge">Span Text</Span>;
}
```

## Weight & Transform

Common patterns for text is to adjust the font weight and transform the text. Below are examples of using the `weight` and `textTransform` properties to modify the rendered text

```tsx
function TextTransform() {
  return <Span textTransform="uppercase">Span Text</Span>;
}
```

```tsx
function Bold() {
  return <Span fontWeight="bold">Span Text</Span>;
}
```

## Color

`Span` supports a `color` prop that supports the full theme color object.

```tsx
function Color() {
  return <Span color="critical">Span Text</Span>;
}
```
