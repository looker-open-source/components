## Layout with Blocks

The `<BlockLayout />` component lets you layout and align `<Block />` components quickly and reliably using [flex-box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). It exposes a set of properties that map to common layout techniques that flex-box enables.


### Rows, Columns, & Direction

Using the `<BlockLayout />` component you can control the direction in which the children `<Block />` components flow. By default they are laid out in rows, but you can use the `direction` property to change that.

```js
<BlockLayout>
  <BlockLayout style={{marginRight: '1rem'}}>
    <Block p="s" background="red-400">One</Block>
    <Block p="s" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>

  <BlockLayout direction="column" style={{marginRight: '1rem'}}>
    <Block p="s" background="red-400">One</Block>
    <Block p="s" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>

  <BlockLayout direction="row-reverse" style={{marginRight: '1rem'}}>
    <Block p="s" background="red-400">One</Block>
    <Block p="s" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>

  <BlockLayout direction="column-reverse" style={{marginRight: '1rem'}}>
    <Block p="s" background="red-400">One</Block>
    <Block p="s" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>
</BlockLayout>
```

### Justify Content

Using the `justify` property you can choose how to align the items in the direction the content is flowing, either rows or columns.

```js


<BlockLayout style={{marginBottom: '1rem', borderBottom: 'solid 1px #ddd'}}>
  <Block><Text size="d3">🤲</Text></Block>
  <Block><Text size="d3">🍎</Text></Block>
  <Block><Text size="d3">🦄</Text></Block>
</BlockLayout>

<BlockLayout justify="between" style={{marginBottom: '1rem', borderBottom: 'solid 1px #ddd'}}>
  <Block><Text size="d3">🤲</Text></Block>
  <Block><Text size="d3">🍎</Text></Block>
  <Block><Text size="d3">🦄</Text></Block>
</BlockLayout>


<BlockLayout justify="around" style={{marginBottom: '1rem', borderBottom: 'solid 1px #ddd'}}>
  <Block><Text size="d3">🤲</Text></Block>
  <Block><Text size="d3">🍎</Text></Block>
  <Block><Text size="d3">🦄</Text></Block>
</BlockLayout>


<BlockLayout justify="evenly" style={{marginBottom: '1rem', borderBottom: 'solid 1px #ddd'}}>
  <Block><Text size="d3">🤲</Text></Block>
  <Block><Text size="d3">🍎</Text></Block>
  <Block><Text size="d3">🦄</Text></Block>
</BlockLayout>

<BlockLayout justify="center" style={{marginBottom: '1rem', borderBottom: 'solid 1px #ddd'}}>
  <Block><Text size="d3">🤲</Text></Block>
  <Block><Text size="d3">🍎</Text></Block>
  <Block><Text size="d3">🦄</Text></Block>
</BlockLayout>


<BlockLayout justify="end" style={{marginBottom: '1rem', borderBottom: 'solid 1px #ddd'}}>
  <Block><Text size="d3">🤲</Text></Block>
  <Block><Text size="d3">🍎</Text></Block>
  <Block><Text size="d3">🦄</Text></Block>
</BlockLayout>
```

### Alignment

Use the `align` property to change how the child `<Block />` components align themselves.

```js


<Block mb="l">
 <Text size="6" weight="semi-bold">Stretch - default</Text>
  <BlockLayout align="stretch">
    <Block p="4xl" background="red-400">One</Block>
    <Block p="xl" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>
</Block>


<Block mb="l">
  <Text size="6" weight="semi-bold">Align to Baseline</Text>
  <BlockLayout align="baseline">
    <Block p="4xl" background="red-400">One</Block>
    <Block p="xl" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>
</Block>


<Block mb="l">
  <Text size="6" weight="semi-bold">Aligned Center</Text>
  <BlockLayout align="center">
    <Block p="4xl" background="red-400">One</Block>
    <Block p="xl" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>
</Block>

<Block mb="l">
  <Text size="6" weight="semi-bold">Align to Start</Text>
  <BlockLayout align="start">
    <Block p="4xl" background="red-400">One</Block>
    <Block p="xl" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>
</Block>

<Block mb="l">
  <Text size="6" weight="semi-bold">Align to End</Text>
  <BlockLayout align="end">
    <Block p="4xl" background="red-400">One</Block>
    <Block p="xl" background="green-400">Two</Block>
    <Block p="s" background="blue-400">Three</Block>
  </BlockLayout>
</Block>

```


