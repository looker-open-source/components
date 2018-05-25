## About Blocks

By default a `<Block>` is just a full width `<div>` tag. It's main use is breaking content into blocks and facilitating the building up of component and layout patterns.

```js
<Block>⬛️◾️Blocks are really just divs, but they can do some cool things ◾️⬛ ️ </Block>
```

<div class="doc-section-divider"></div>

## Spacing with Blocks

One powerful feature of a `<Block />` is the ability to control padding and margins for a chosen side. The available padding and margin values come from the [Lens Spacing Values](/#!/Spacing), which helps maintain consistent spacing throughout the UI.

Using spacing on a `<Block />` is a little like a cooking recipe, you select your ingredients and combine them to achieve the desired result. In this case your ingredients are a property, an optional side, and a size.

Choose one item from each column to create your spacing recipe.

```js noeditor
const codeStyle = { border: 'solid 1px #E4E5E6', background: '#F6F6F7', padding: '2px 8px 3px', borderRadius: '4px', color:'#4C33AA', textAlign: 'center', width: '25px', display: 'inline-block', fontSize:"14px"};
<BlockLayout>
  <Block mr="2xl" pr="2xl" style={{borderRight: 'solid 1px #E4E5E6'}}>
    <Block mb="m">
    <Text size="6" transform="upper" weight="bold">Property</Text>
    </Block>
    <List>
      <ListItem><Text element="code" style={codeStyle}>p</Text> - padding </ListItem>
      <ListItem><Text element="code" style={codeStyle}>m</Text> - margin </ListItem>
    </List>
  </Block>

  <Block mr="2xl" pr="2xl" style={{borderRight: 'solid 1px #E4E5E6'}}>
    <Block mb="m">
      <Text size="6"  weight="bold">SIDE (optional)</Text>
    </Block>
    <List>
      <ListItem><Text style={codeStyle}><span style={{color: 'transparent'}}>a</span></Text> - all </ListItem>
      <ListItem><Text element="code" style={codeStyle}>t</Text> - top </ListItem>
      <ListItem><Text element="code" style={codeStyle}>r</Text> - right </ListItem>
      <ListItem><Text element="code" style={codeStyle}>b</Text> - bottom </ListItem>
      <ListItem><Text element="code" style={codeStyle}>l</Text> - left </ListItem>
      <ListItem><Text element="code" style={codeStyle}>x</Text> - left & right </ListItem>
      <ListItem><Text element="code" style={codeStyle}>y</Text> - top & bottom </ListItem>
    </List>
  </Block>

  <Block mr="2xl" pr="2xl" style={{borderRight: 'solid 1px #E4E5E6'}}>
    <Block mb="m">
    <Text size="6"  weight="bold">SIZE</Text>
    </Block>
    <List>
      <ListItem><Text element="code" style={codeStyle}>xs</Text> - 0.25rem (4px) </ListItem>
      <ListItem><Text element="code" style={codeStyle}>s</Text> - 0.5rem (8px)</ListItem>
      <ListItem><Text element="code" style={codeStyle}>m</Text> - 1rem (16px)</ListItem>
      <ListItem><Text element="code" style={codeStyle}>l</Text> - 1.25rem (20px) </ListItem>
      <ListItem><Text element="code" style={codeStyle}>xl</Text> - 1.5rem (24px) </ListItem>
      <ListItem><Text element="code" style={codeStyle}>2xl</Text> - 1.875rem (30px) </ListItem>
      <ListItem><Text element="code" style={codeStyle}>3xl</Text> - 2.25rem (36px) </ListItem>
      <ListItem><Text element="code" style={codeStyle}>4xl</Text> - 2.875rem (46px) </ListItem>
    </List>
  </Block>
</BlockLayout>
```

### Spacing Examples

```js
  <Block p="4xl" mb="2xl" style={{background: 'rgba(126, 100, 224, 0.15)', color: '#7E64E0' }}>
    <code>spacing recipe: p="4xl" mb="2xl"</code>
  </Block>
  <Block px="2xl" py="l" mb="xl" style={{background: 'rgba(126, 100, 224, 0.15)', color: '#7E64E0' }}>
    <code>spacing recipe: px="2xl" py="l" mb="xl"</code>
  </Block>
  <Block p="xs" style={{background: 'rgba(126, 100, 224, 0.15)', color: '#7E64E0' }}>
    <code>spacing recipe: p="xs"</code>
  </Block>
```
<div class="doc-section-divider"></div>

## Layout with Blocks

Another great feature of a `<Block>` is being able to compose layouts quickly using spacing and alignment. `<Block /`> layouts are based on [flex-box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and require you to wrap your `<Block>` components in a `<BlockLayout>`..

```js
  <BlockLayout>
    <Block>Block 1</Block>
    <Block>Block 2</Block>
    <Block>Block 3</Block>
  </BlockLayout>
```
