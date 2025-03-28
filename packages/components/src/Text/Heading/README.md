# Heading

The `<Heading />` component is used to render a HTML `<h1>` - `<h6>` element, by default it will render a `<h2>` element

```tsx
function Basic() {
  return <Heading>Heading Text</Heading>;
}
```

## Heading Levels

To use a different HTML heading element, the `<Heading />` component accepts a `as` attribute that corresponds to the `<h1>` - `<h6>` elements. The font-size of each heading element maps to the [type ramp](/#!/Typography)

```tsx
function Level() {
  return <Heading as="h4">Heading Text</Heading>;
}
```

## Heading Sizes

When creating accessible pages it is important that headings create a [logical document outline](https://bitsofco.de/using-heading-elements-to-create-a-document-outline/), but sometimes the font-size of the heading element doesn't match to the needs of the design or layout. Composing the `is` and the `fontSize` attributes lets you choose the semantically correct level heading and the desired size. The available size values come from the [type ramp](/#!/Typography).

```tsx
function FontSize() {
  return <Heading fontSize="large">Heading Text</Heading>;
}
```

---

## Weight and Transform

Another common pattern for headings is to control the font-weight and the text-transform properties. The `<Heading />` component allows you to adjust those with the `fontWeight` and `textTransform` attributes.

```tsx
function FontWeight() {
  return <Heading fontWeight="bold">Heading Text</Heading>;
}
```

```tsx
function TextTransform() {
  return <Heading textTransform="uppercase">Heading Text</Heading>;
}
```

---

## Heading alignment

The `align` property allows you to adjust the `text-align` property of your `<Heading />` component. This is useful if you need to center or right align the text.

```tsx
function TextAlign() {
  return (
    <>
      <Heading textAlign="left">◀️ Align left (Default) </Heading>
      <Heading textAlign="center">◀️ Align Center ▶️</Heading>
      <Heading textAlign="right">Align Right ▶️</Heading>
    </>
  );
}
```

## Color

Heading supports a `color` prop that supports the full theme color object. Common uses are shown in the example below:

```tsx
function Color() {
  return <Heading color="text1">Heading Text</Heading>;
}
```
