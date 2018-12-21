`ModalHeader` is attached to the top of modal and provides a button to close the containing modal. Uses the `withModal` to consume `ModalContext` and get access to the `close` method.

ModalHeader supports all [`Box`](/#!/Box) properties.

```js
<ModalHeader>
  <Heading weight="semiBold">This is a ModalHeader</Heading>
</ModalHeader>
```