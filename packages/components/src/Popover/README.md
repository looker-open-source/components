# Popover

Popovers are containers for things like contextual information, menus, and related actions.

## Terminology

Popovers are assembled of two pieces: an overlay and a surface. Unlike [Dialogs](/components/dialogs/), the `Popover` overlay is transparent, but it still blocks the application behind it until it is closed, with the exception of [grouped Popovers](#grouped-popovers). The `Popover`'s surface renders the content above the overlay and the rest of the application.

```tsx
function PopoverWithLayout() {
  return (
    <Popover
      width={640}
      content={
        <PopoverLayout header="Header text" footer>
          We the People of the United States
        </PopoverLayout>
      }
    >
      <Button>Open</Button>
    </Popover>
  );
}
```

## Placement

Placement can be adjusted with the `placement` prop. Valid positions are `top`, `left`, `right` and `bottom`, each can be augmented with -`start` or `-end` which places the edge of the popover at the start or end of the target.

```tsx
function Placement() {
  const popoverContent = (
    <PopoverContent>
      <Paragraph width={300} p="u10">
        👋 Hello, I am a popover!
      </Paragraph>
    </PopoverContent>
  );

  return (
    <Box mt="large">
      <Heading>Placement</Heading>
      <Box my="medium">
        <Popover content={popoverContent}>
          <Button>Default</Button>
        </Popover>

        <Popover content={popoverContent}>
          <Button>Default</Button>
        </Popover>
      </Box>
    </Box>
  );
}
```

## Arrow

Show the arrow pointing toward trigger element by setting this prop to true, or pass an object .

```tsx
function Arrow(props: PopoverProps) {
  return (
    <Box
      width={400}
      height={400}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Popover
        {...props}
        isOpen
        content={<PopoverContent>Some content</PopoverContent>}
        arrow
      >
        <Button>Open</Button>
      </Popover>
    </Box>
  );
}
```

## Disclosing the Trigger on Hover

```tsx
function Hover() {
  const hoverRef = React.useRef<HTMLDivElement>(null);
  const content = <PopoverLayout>I'm in the popover</PopoverLayout>;
  return (
    <Card ref={hoverRef} raised>
      <CardContent>
        <Space between>
          <Paragraph>
            Hovering in this card will show the button that triggers the
            popover.
          </Paragraph>
          <Popover content={content} hoverDisclosureRef={hoverRef}>
            <Button />
          </Popover>
        </Space>
      </CardContent>
    </Card>
  );
}
```

## PopoverContent

`PopoverContent` is a simple container component that can be used to apply a consistent style to content placed within a Popover surface.

## "Render Prop" style

Sometimes you may need to control how `Tooltip` applies handlers to the component within it. If so you can use the render prop form of the component:

```tsx
function RenderProps() {
  const popoverContent = (
    <PopoverContent>
      <Paragraph width={300} p="u10">
        👋 Hello, I am a popover!
      </Paragraph>
    </PopoverContent>
  );
  return (
    <Popover content={popoverContent}>
      {props => <button {...props}>Test</button>}
    </Popover>
  );
}
```
