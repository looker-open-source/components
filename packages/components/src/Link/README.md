# Link

The `<Link />` component renders an `<a>` tag that accepts and `href` property. You can also supply an optional `id` property if you want to give your anchor an id.

```tsx
function Basic() {
  return (
    <Space around>
      <Link href="https://google.com">👋 I am a link!</Link>
      <Link href="https://google.com" id="thumbs-up">
        👍 I am a link with an id
      </Link>
    </Space>
  );
}
```

## External

If you are linking to an external resource, we recommend setting `external` to true in order to render the icon indicating that you're about to leave the current website.

```tsx
function External() {
  return (
    <Link href="https://google.com" isExternal>
      Leaving this domain
    </Link>
  );
}
```

## Underline

By default, the underline appears on hover, focus, active, and visited states. To always disable the underline, set the `underline` prop to `false`. To always enable it, set the prop to `true`.

```tsx
function Underline() {
  return (
    <Space around>
      <Link href="https://google.com">
        By default, underline appears on hover
      </Link>
      <Link href="https://google.com" underline>
        I always have an underline
      </Link>
      <Link href="https://google.com" underline={false}>
        I never have an underline
      </Link>
    </Space>
  );
}
```

## KeyColor

Set `keyColor` to true if you wish the link color to be branded as defined by your theme object.

```tsx
function KeyColor() {
  return (
    <>
      <Link href="https://google.com" keyColor>
        Rendered in the brand color
      </Link>
    </>
  );
}
```
