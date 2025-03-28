## CodeBlock

A `CodeBlock` is a dedicated container for multiple lines of source code. It produces un-styled code with whitespace preserved.

NOTE: Currently, this component doesn't support syntax highlighting.

```tsx
function Basic() {
  return <CodeBlock>This is a simple example of some code</CodeBlock>;
}
```

## A `CodeBlock` can be given a border with the `border` prop

```tsx
function Border() {
  return (
    <CodeBlock border="key">This is a simple example of some code</CodeBlock>
  );
}
```
