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

  <Flex flexDirection="columnReverse" mr="large">
    <Box>1️⃣</Box>
    <Box>2️⃣</Box>
    <Box>3️⃣</Box>
  </Flex>

  <Flex flexDirection="rowReverse" mr="large">
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
      <TableDataCell><span class="prop-code"><Code>spaceBetween</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Distribute items evenly. The first item is flush with the start, the last is flush with the end </Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>spaceAround</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Distribute items evenly. Items have a half-size space on either end</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>spaceAround</Code></span></TableDataCell>
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

<Flex justifyContent="spaceBetween">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="spaceAround">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="spaceEvenly">
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




