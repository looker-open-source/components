# MessageBar

The `<MessageBar />` component is used to alert the user with `warn`, `critical`, `inform`, or `positive` messages, settable via the `intent` property. If no intent is set, it will fall back to `inform` by default.

```tsx
function Basic(props: MessageBarProps) {
  const { children = 'Hey! This is a message to you.', ...rest } = props;

  return <MessageBar {...rest}>{children}</MessageBar>;
}
```

## Intent

MessageBar `intent` is specified as a design token with a semantic meaning. The values can be one of `critical`, `inform`, `positive`, `warn`.

```tsx
function Intent() {
  return (
    <Space around>
      <MessageBar intent="critical">Key</MessageBar>
      <MessageBar intent="inform">Positive</MessageBar>
      <MessageBar intent="positive">Inform</MessageBar>
      <MessageBar intent="warn">Neutral</MessageBar>
    </Space>
  );
}
```

### Non-clearable MessageBar

If you don't want the MessageBar to be clearable, you can hide all action buttons with the `noActions` prop.

```tsx
function NoAction() {
  return <MessageBar noActions>I can't be closed</MessageBar>;
}
```

### Customizing the action buttons

`MessageBar` allows you to pass your own custom buttons in place of the standard dismiss button.

The relevant props for modifying button labels and actions are as follows:

- `primaryAction`: string or ReactElement
- `onPrimaryClick`: () => void
- `secondaryAction`: string or ReactElement
- `onSecondaryClick`: () => void

```tsx
function CustomAction() {
  return (
    <MessageBar
      primaryAction="Primary Action"
      onPrimaryClick={() => alert('Primary Action')}
      secondaryAction="Secondary Action"
      onSecondaryClick={() => alert('Secondary Action')}
    >
      Render some custom action labels and actions!
    </MessageBar>
  );
}
```

### Rendering custom components

This is not the recommended happy path for using MessageBar, but it is available if you run into an edge case that is not supported by customizing the string label and click callbacks. Just keep in mind that if you decide to render custom components you will be responsible for allowing the MessageBar to be cleared.

```tsx
function CustomComponents() {
  const [visible, setVisible] = useState(true);
  const handlePrimaryClick = () => {
    alert('Primary Action');
    setVisible(false);
  };
  const handleSecondaryClick = () => {
    alert('Secondary Action');
    setVisible(false);
  };
  return (
    <MessageBar
      primaryAction={
        <IconButton
          icon={<Favorite />}
          label="Add to Favorites"
          onClick={handlePrimaryClick}
          color="key"
        />
      }
      secondaryAction={
        <IconButton
          onClick={handleSecondaryClick}
          color="neutral"
          icon={<Settings />}
          label="Settings"
          color="neutral"
        />
      }
      visible={visible}
    >
      Render some custom action components!
    </MessageBar>
  );
}
```

## Controlled Component Pattern

To control MessageBar rendering externally, use `onPrimaryAction` in conjunction with the `visible` boolean prop. This can be useful if you wish to provide an Undo or other complex workflows.

```tsx
function Controlled() {
  const { value, setOff, setOn } = useToggle(true);

  return (
    <>
      <MessageBar intent="warn" onPrimaryClick={setOff} visible={value}>
        I can be closed and reopened
      </MessageBar>
      {!value && (
        <ButtonOutline m="u4" onClick={setOn}>
          Show MessageBar
        </ButtonOutline>
      )}
    </>
  );
}
```
