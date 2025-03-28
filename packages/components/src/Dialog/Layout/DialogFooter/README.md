# DialogFooter

`DialogFooter` is attached to the bottom of dialog. Generally, the terminal action for a dialog as well as an option to abandon the process done via the dialog are available within this component. This component is generally used in combination with the `DialogContext.Provider` to get access to the `DialogContext.close()` method.

DialogFooter supports all [`Box`](/src-documentation-components-box) properties.

```tsx
export default function Basic() {
  return <DialogFooter>Footer Text</DialogFooter>;
}
```

```tsx
export default function Secondary() {
  return (
    <DialogFooter secondary={<button>Done</button>}>Footer Text</DialogFooter>
  );
}
```
