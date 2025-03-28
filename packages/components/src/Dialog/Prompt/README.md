# Prompt

The `<Prompt/>` component is similar to the `<Confirm/>` component in that you can use either to render a dialog.

However, unlike the `<Confirm/>`, the `<Prompt/>` component comes with a built in `<InputText/>` component. This makes it more suitable for use cases where you want to grab user input before performing an action.

```tsx
export function Basic() {
  return (
    <Prompt
      cancelColor="neutral"
      cancelLabel={'Not into cheese'}
      title={'Choose a cheese!'}
      inputLabel={'Name of Cheese'}
      saveLabel={'Save'}
      onCancel={close => {
        alert('Prompt closed');
        close();
      }}
      onSave={(value: string, close: () => void) => {
        alert(`You chose ${value}`);
        close();
      }}
      secondary={
        <Button onClick={() => alert('Secondary clicked')}>
          Secondary Cheese
        </Button>
      }
    >
      {open => <Button onClick={open}>Prompt</Button>}
    </Prompt>
  );
}
```
