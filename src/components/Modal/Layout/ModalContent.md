Using the `ModalContent` component quickly gives your content consistent spacing inside a modal component as well as managing overflow of content of the dialog is taller than the viewport.

ModalContent supports all [`Box`](/#!/Box) properties.

```js
<Box height="10rem" display="flex" bg="white" p="large">
  <ModalContent>
    <Box height="2rem" bg="rebeccapurple" />
    <Paragraph>Scroll down here...</Paragraph>
  </ModalContent>
</Box>
```

#### Content Overflows

If content overflows the component's height an visual indicator of content that extends beyond the visible edges is added (border on top and shadow on the bottom).

```js
<Box height="10rem" display="flex" bg="white" p="large">
  <ModalContent>
    <Box height="6rem" bg="rebeccapurple" />
    <Paragraph>Scroll down here...</Paragraph>
  </ModalContent>
</Box>
```
