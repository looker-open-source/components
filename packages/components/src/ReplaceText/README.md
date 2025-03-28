# ReplaceText

Highlights the `match` string in the child text (case-insensitive and global).

```tsx
function Basic({ match = 'che', ...props }: ReplaceTextProps) {
  return (
    <ReplaceText match={match} {...props}>
      Cheddar cheese
    </ReplaceText>
  );
}
```

## Custom Replace

Optionally pass a component to the `replace` prop to customize the highlighted text.

```tsx
function CustomReplace() {
  return (
    <ReplaceText match="che" replace={props => <em {...props} />}>
      Cheddar cheese
    </ReplaceText>
  );
}
```
