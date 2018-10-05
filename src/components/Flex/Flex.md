The `<Flex />` component lets you utilize [flex box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) to create a wide variety of layouts, with powerful alignment, directional, and space distribution abilities.

### Basic Usage
The `<Flex />` component has the ability to control the layout direction and order of its children. By default the children will layout in a row. For example if we wrap a series of `<Box />` components in `<Flex />` they will render next to each other..

```js
<Flex>
  <Box>👋</Box>
  <Box>💪</Box>
  <Box>📦</Box>
</Flex>
```

### Changing direction and order

You can change the layout direction and order of flex children by using the `flexDirection` property. Below we use the same children in each example but can adjust the layout quickly using `flexDirection`.

```js
<Flex>
  <Flex mr="large">
    <Box>1️⃣</Box>
    <Box>2️⃣</Box>
    <Box>3️⃣</Box>
  </Flex>

  <Flex flexDirection="column" mr="large">
    <Box>1️⃣</Box>
    <Box>2️⃣</Box>
    <Box>3️⃣</Box>
  </Flex>

  <Flex flexDirection="column-reverse" mr="large">
    <Box>1️⃣</Box>
    <Box>2️⃣</Box>
    <Box>3️⃣</Box>
  </Flex>

  <Flex flexDirection="row-reverse" mr="large">
    <Box>1️⃣</Box>
    <Box>2️⃣</Box>
    <Box>3️⃣</Box>
  </Flex>
</Flex>
```

### Item distribution

The `<Flex>` component allows you to control how its children are distributed within its container. Using the `justifyContent` property you can adjust the distribution of the children. Below is a table with all the justify options:
```js noeditor
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell width="40%">Justify Property</TableHeaderCell>
      <TableHeaderCell>Behavior</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>center</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Pack items around the center</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>start</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Pack items from the start</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>end</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Pack items from the end</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>space-between</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Distribute items evenly. The first item is flush with the start, the last is flush with the end </Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>space-around</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Distribute items evenly. Items have a half-size space on either end</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>space-evenly</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Distribute items evenly. Items have equal space around them</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>stretch</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Distribute items evenly. Items strechted to fit the container</Text></TableDataCell>
    </TableRow>
  </TableBody>
</Table>
```

Here is a more visual example of how using `justifyContent` affects the distribution of items in a `<Flex />` component.

```js
<div>

<Flex justifyContent="start">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="space-between">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="space-around">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="space-evenly">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="center">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="end">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>
</div>
```

### Aligning Items

Flex box allows for quickly adjusting the alignment items inside the flex container. Below are available alignment types:

```js noeditor
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell width="40%">Align Property</TableHeaderCell>
      <TableHeaderCell>Behavior</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>center</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Items are aligned center of container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>start</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Items are aligned to the start of the container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>end</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Items are aligned to the start of the container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>baseline</Code></span></TableDataCell>
      <TableDataCell><Text size="5">All items are aligned so their baselines align</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>stretch</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Items strechted to fit the container</Text></TableDataCell>
    </TableRow>
  </TableBody>
</Table>
```

Here is an example of using `alignItems` to adjust how items are aligned within the flex container. We will use the same items in each example to illustrate how adjusting `alignItems` works.

```js
<div>
<Flex mb="xxlarge">
  <Box p="xxlarge" style={{background: 'lightsalmon'}}>Default</Box>
  <Box p="large" style={{background: 'papayawhip'}}>One</Box>
  <Box p="medium" style={{background: 'paleturquoise'}}>Two</Box>
  <Box p="small" style={{background: 'palevioletred'}}>Three</Box>
</Flex>

<Flex alignItems="center" mb="xxlarge">
  <Box p="xxlarge" style={{background: 'lightsalmon'}}>Center</Box>
  <Box p="large" style={{background: 'papayawhip'}}>One</Box>
  <Box p="medium" style={{background: 'paleturquoise'}}>Two</Box>
  <Box p="small" style={{background: 'palevioletred'}}>Three</Box>
</Flex>

<Flex alignItems="start" mb="xxlarge">
  <Box p="xxlarge" style={{background: 'lightsalmon'}}>Start</Box>
  <Box p="large" style={{background: 'papayawhip'}}>Two</Box>
  <Box p="medium" style={{background: 'paleturquoise'}}>Three</Box>
  <Box p="small" style={{background: 'palevioletred'}}>Four</Box>
</Flex>

<Flex alignItems="end" mb="xxlarge">
  <Box p="xxlarge" style={{background: 'lightsalmon'}}>End</Box>
  <Box p="large" style={{background: 'papayawhip'}}>Two</Box>
  <Box p="medium" style={{background: 'paleturquoise'}}>Three</Box>
  <Box p="small" style={{background: 'palevioletred'}}>Four</Box>
</Flex>

<Flex alignItems="baseline" mb="xxlarge">
  <Box p="xxlarge" style={{background: 'lightsalmon'}}>Baseline</Box>
  <Box p="large" style={{background: 'papayawhip'}}>Two</Box>
  <Box p="medium" style={{background: 'paleturquoise'}}>Three</Box>
  <Box p="small" style={{background: 'palevioletred'}}>Four</Box>
</Flex>

<Flex alignItems="stretch" mb="xxlarge">
  <Box p="xxlarge" style={{background: 'lightsalmon'}}>Stretch</Box>
  <Box p="large" style={{background: 'papayawhip'}}>Two</Box>
  <Box p="medium" style={{background: 'paleturquoise'}}>Three</Box>
  <Box p="small" style={{background: 'palevioletred'}}>Four</Box>
</Flex>
</div>
```


### Item wrapping

Wrapping specifies
