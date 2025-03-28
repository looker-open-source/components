# LkFieldTree

```tsx
function Basic(props: LkFieldTreeProps) {
  const {
    label = <strong>Orders</strong>,
    defaultOpen = true,
    ...rest
  } = props;

  return (
    <TreeCollection>
      <LkFieldTree label={label} {...rest}>
        <LkFieldTree label={label} defaultOpen>
          <LkFieldItem>ID</LkFieldItem>
          <LkFieldItem>Status</LkFieldItem>
          <LkFieldTree
            label={<strong>Created</strong>}
            defaultOpen={defaultOpen}
          >
            <LkFieldItem>Created Date</LkFieldItem>
            <LkFieldItem>Created Month</LkFieldItem>
            <LkFieldItem>Created Year</LkFieldItem>
            <LkFieldItem>Created Quarter</LkFieldItem>
          </LkFieldTree>
        </LkFieldTree>
      </LkFieldTree>
    </TreeCollection>
  );
}
```
