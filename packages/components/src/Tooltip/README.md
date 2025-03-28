# Tooltip

A simple Tooltip component with out of the box styles and behavior.

```tsx
function Basic() {
  return (
    <Tooltip content="Simple Content">
      <Button m="xxxlarge">Open Tooltip</Button>
    </Tooltip>
  );
}
```

```tsx
function Example() {
  return (
    <Tooltip
      content={
        <>
          This is a tooltip with quite a bit of text. It's probably not ideal to
          have this much text in a Tooltip. Perhaps you should link to
          <Link href="#">another document &rarr;</Link>
        </>
      }
    >
      <ButtonOutline>Tooltip with lots of text</ButtonOutline>
    </Tooltip>
  );
}
```

## Tooltip Placement

Tooltip allows you to specify where it should appear in relation to the target element. It accepts the following values:

1. `auto`
1. `auto-end`
1. `top-start`
1. `top`
1. `top-end`
1. `right-start`
1. `right`
1. `right-end`
1. `bottom-end`
1. `bottom`
1. `bottom-start`
1. `left-end`
1. `left`
1. `left-start`

```tsx
function ExamplePlacement() {
  return (
    <Space around>
      <Tooltip content="I'm on top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="I'm on bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="I'm on the left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="I'm on the right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </Space>
  );
}
```

## Delay

By default, the tooltip will show a brief delay. To customize this, use the `delay` prop.

```tsx
function DelayNone() {
  return (
    <Tooltip content={'Simple Content'} delay={'none'}>
      <Button m="xxxlarge">Open Tooltip</Button>
    </Tooltip>
  );
}
```

## "Render Prop" style

Sometimes you may need to control how `Tooltip` applies handlers to the component within it. If so you can use the render prop form of the component:

```tsx
function ExampleRenderProp() {
  return (
    <Tooltip content="Example using render props exploded">
      {props => (
        <Button
          aria-describedby={props['aria-describedby']}
          className={props.className}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onMouseOut={props.onMouseOut}
          onMouseOver={props.onMouseOver}
          ref={props.ref}
        >
          Render Props Example
        </Button>
      )}
    </Tooltip>
  );
}
```

## Tooltip passes a "hover" class

In both the regular and "Render Prop" styles, `Tooltip` will pass a class named `hover` to its child element (or function) when the `Tooltip` is open.

This will preserve any hover styling when the cursor is on the tooltip text and off of the trigger element itself.
