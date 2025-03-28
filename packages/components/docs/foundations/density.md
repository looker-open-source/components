# Density

Density is a foundational property of certain Looker Components and it plays a key role in how easy it is for a user to scan and navigate large amounts of content. Adjusting a component’s density changes its overall height and space it takes up in a UI. The higher the density, the smaller the height of the component.

In general Looker Components that support density adjustments start at a medium density (e.g.: `0`) and offer the ability to increase (e.g.: '-1, -2. -3`) or decrease (e.g.: `1`) density depending on the context and needs of the experience.

A couple key things to keep in mind when using density are:

- Density should be adjusted at the top most level component and should not be mixed, for example:
  - Adjust density on the `List` component, not it’s `ListItem` children.
  - Do not combine a high density and low density `MenuItem`s, in the same `Menu`
- High density components will not pass accessibility requirements, so use it judiciously and only where high density improves the experience

## Components that support density

Currently only list like components support density, this includes `List`, `Menu`, and `Tree`.

## Helpers

Looker Compnents ships a small collection of density "helpers". The `Density` component takes a `scale` value to specify which key of the density scale to apply to children.

```tsx
<Density scale={-3}>
  <ListItem>This ListItem is using -3 density</ListItem>
</Density>
```

Also included are a set of helpers for each specific density size: `Density1`, `Density0`, `DensityNegative1`, `DensityNegative2`, `DensityNegative3`.

```tsx
<Density1>
  <ListItem>+1 density</ListItem>
</Density1>
<Density0>
  <ListItem>0 density (default)</ListItem>
</Density0>
<DensityNegative3>
  <ListItem>-3 Density</ListItem>
</DensityNegative3>
```
