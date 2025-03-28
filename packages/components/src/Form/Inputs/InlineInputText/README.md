# InlineInputText

An input styled as text, with an underline and hover styles to indicate it is editable.

`InlineInputText` implements `InputText` internally – see [that component's documentation](?path=/docs/docs-inputtext--docs) for more information.

```tsx
function HeadingParagraph() {
  return (
    <Space around>
      <Heading>
        <InlineInputText value="Type here..." />
      </Heading>
      <Paragraph color="text1">
        <InlineInputText placeholder="Type here..." />
      </Paragraph>
    </Space>
  );
}
```

## Simple

Use the `simple` prop to remove the underline except on hover and focus.

```tsx
function Simple() {
  return <InlineInputText simple value="Some text here" />;
}
```

## Disabled

Use the `disabled` prop to make the input uneditable and greyed out.

<Editor code={storyDisabled} />

```tsx
function Disabled() {
  return <InlineInputText disabled value="You can't change me." />;
}
```

## ReadOnly

Use the `readOnly` prop to make the input uneditable and have no underline.

<Editor code={storyReadOnly} />

```tsx
function ReadOnly() {
  return <InlineInputText readOnly value="You can't change me." />;
}
```
