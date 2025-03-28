# Confirm

Confirm provides a helpful composition of dialog components to drive the most common use case: driving user action to confirm or cancel a specific outcome.

# Standard Use

Confirm makes use of the render prop pattern to provide `open` and `close` functions to be called when needed.

```tsx
export default function Basic() {
  return (
    <Confirm
      title="Confirm Something"
      message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      onConfirm={close => {
        alert('You did something');
        close();
      }}
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {open => <ButtonOutline onClick={open}>Do something</ButtonOutline>}
    </Confirm>
  );
}
```

Updating color and text of the button

```tsx

```

# useConfirm

If you want more control over markup and state, we provide a custom hook that returns the opener function and rendered confirmation dialog. The following example illustrates how the opener can be called outside the Confirm component.

```tsx
() => {
  function handleConfirm(close) {
    alert('You deleted it');
    close();
  }

  const [confirmationDialog, openDialog] = useConfirm({
    confirmLabel: 'Yes, Delete all',
    buttonColor: 'critical',
    title: `Delete all`,
    message: 'Are you sure you want to delete all?',
    onConfirm: handleConfirm,
  });

  return (
    <>
      {confirmationDialog}
      <ButtonOutline onClick={openDialog}>useConfirm</ButtonOutline>
    </>
  );
};
```

# ConfirmLayout

We've found that most Dialogs involve the same common elements: Title, Message, a primary action (usually "Confirm"), and a secondary action (usually "Cancel").

To help standardize that layout, we created the `ConfirmLayout` component for composing the relevant pieces. This is handy if you need something like Confirm in a separate context (e.g. when you need to lay out surface content for use in [`Dialog`](/components/dialogs/dialog)).

```tsx
export default function Layout() {
  function handleConfirm() {
    alert('Changes discarded');
  }
  function handleCancel() {
    alert('Went back');
  }
  return (
    <ConfirmLayout
      title="Discard Changes?"
      message="Are you sure you want to close the dialog? Unsaved changes will be lost."
      primaryButton={
        <Button onClick={handleConfirm} color="critical">
          Discard changes
        </Button>
      }
      secondaryButton={
        <ButtonTransparent onClick={handleCancel} color="neutral">
          Go back
        </ButtonTransparent>
      }
    />
  );
}
```
