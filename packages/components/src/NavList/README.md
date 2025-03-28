# NavList

`NavList` is a variation of `List` that expects to wrap around a composition of `ListItem`s, `NavTree`s and `NavTreeItem`s

- `ListItem`, `NavTree` and `NavTreeItem` border-radius circular on the right side
- `ListItem`, `NavTree` and `NavTreeItem` selected or "active"
  - text color is `theme.colors.key`
  - background color is `keySubtle`
- `ListItem` at the root are indented to align properly with `Tree`(s) at the root as well

```tsx
function Basic(props: ListProps) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <NavList {...props}>
      <ListItem
        description="Description"
        detail="Interesting details"
        icon={<MaterialIcons.Home />}
        selected
      >
        Explore
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Info />}
        onClick={handleClick}
        selected={selected}
        truncate={{ description: "It's an item" }}
      >
        Develop
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Info />}
        truncate={{ description: 'Word Document - Last update 3 days ago' }}
      >
        This is a really long navigation list item that should get truncated at
        some point waaaayyyy out in the nether regions of a long line of text
      </ListItem>
    </NavList>
  );
}
```
