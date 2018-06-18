<div class="component-desc"><p>Borders help define the space and structure of the interface. </p></div>

<div class="doc-section-divider"></div>

## Borders on light backgrounds
Lens provides two border colors that are used on light backgrounds, default and dark.

### Default Border

```js noeditor
<Block p="xl" mb="m" style={{border: 'solid 1px var(--lens-border-color)'}}>
  <BlockLayout justify="between">
    <Block>Default</Block>
    <Block><Text element="code" size="6">var(--lens-border-color)</Text></Block>
    <Block><Text element="code" size="6">solid 1px #D8DEE5</Text></Block>
  </BlockLayout>
</Block>
<Block p="xl" style={{border: 'solid 1px var(--lens-border-color-dark)'}}>
  <BlockLayout justify="between">
    <Block>Dark</Block>
    <Block><Text element="code" size="6">var(--lens-border-color-dark)</Text></Block>
    <Block><Text element="code" size="6">solid 1px #B8C1CC</Text></Block>
  </BlockLayout>
</Block>
```

## Borders on dark backgrounds

```js noeditor
<Block p="xl" mb="m" style={{background: 'var(--lens-color-space)'}}>
  <Block p="xl" style={{border: 'solid 1px var(--lens-border-color-light)'}}>
  <BlockLayout justify="between" style={{color: '#fff'}}>
    <Block>Light</Block>
    <Block><Text element="code" size="6">var(--lens-border-color-light)</Text></Block>
    <Block><Text element="code" size="6">solid 1px #627081</Text></Block>
  </BlockLayout>
  </Block>
</Block>

<Block p="xl" mb="m" style={{background: 'var(--lens-color-space-400)'}}>
  <Block p="xl" style={{border: 'solid 1px var(--lens-border-color-light)'}}>
  <BlockLayout justify="between" style={{color: '#fff'}}>
    <Block>Light</Block>
    <Block><Text element="code" size="6">var(--lens-border-color-light)</Text></Block>
    <Block><Text element="code" size="6">solid 1px #627081</Text></Block>
  </BlockLayout>
  </Block>
</Block>

```
