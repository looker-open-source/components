# Density

Adjusting a component’s density changes its overall height and space it takes up in a UI. The higher the density, the smaller the height of the component.

## Helpers

Looker Compnents ships a small collection of density "helpers". The `Density` component takes a `scale` value to specify which key of the density scale to apply to children.

```tsx
export default function Scale() {
  return (
    <Density scale={0}>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        <ListItem>Swiss</ListItem>
      </List>
    </Density>
  );
}
```

Also included are a set of helpers for each specific density size: `Density1`, `Density0`, `DensityNegative1`, `DensityNegative2`, `DensityNegative3`

```tsx
export default function Density1Example() {
  return (
    <Density1>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        <ListItem>Swiss</ListItem>
      </List>
    </Density1>
  );
}
```

```tsx
export default function DensityNegative1Example() {
  return (
    <DensityNegative1>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        <ListItem>Swiss</ListItem>
      </List>
    </DensityNegative1>
  );
}
```
