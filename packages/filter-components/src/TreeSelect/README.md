# TreeSelect

`TreeSelect` renders a tree of explore fields for selection.

```tsx
const exploreTree = createExploreTree();

export default function WithoutDropdown({
  label = 'Filter by',
  tree = exploreTree,
  withDropdown = false,
  onSelectedFieldChange,
  ...props
}: TreeSelectProps) {
  const handleChange = (fieldData: any) => {
    onSelectedFieldChange?.(fieldData);
  };
  return (
    <TreeSelect
      label={label}
      treeHeight={200}
      onSelectedFieldChange={handleChange}
      tree={tree}
      withDropdown={withDropdown}
      {...props}
    >
      <Box mb="xsmall">
        <FieldToggleSwitch label="Advanced" />
      </Box>
    </TreeSelect>
  );
}
```
