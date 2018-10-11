```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;
<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Flex/Flex.tsx"
  feedbackTitle="Flex Component Feedback" />
```

The `<Flex />` component creates a flex container for you to place `<FlexItem />` components inside. It lets you utilize [flex box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) to create a wide variety of layouts, with powerful alignment, directional, and space distribution abilities.

If you are not familiar with flex box, [here is a great guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for how it works.

### Basic Usage
The `<Flex />` component has the ability to control the layout direction and order of its children. By default the children will layout in a row.

```js
<Flex>
  <FlexItem>👋</FlexItem>
  <FlexItem>💪</FlexItem>
  <FlexItem>📦</FlexItem>
</Flex>
```

### A real world example
Using our `<Flex>` and `<FlexItem>` components we can quickly scaffold out real world use cases like a navigation bar.
```js
<Flex bg="palette.charcoal800" px="small" height="50px" alignItems="center" justifyContent="space-between">
  <FlexItem mr="small" pt="xsmall"><IconHamburger fill="white" width="24" height="24" /></FlexItem>
  <FlexItem><IconLookerLogo fill="white" width="60px" height="auto"/></FlexItem>
  <FlexItem flex="1">
    <Flex justifyContent="center">
    <Box px="small"><Text size="5" style={{'color': '#fff'}}>Browse <IconExpandMore fill="white" /></Text></Box>
    <Box px="small"><Text size="5" style={{'color': '#fff'}}>Explore <IconExpandMore fill="white" /></Text></Box>
    <Box px="small"><Text size="5" style={{'color': '#fff'}}>Develop <IconExpandMore fill="white" /></Text></Box>
    <Box px="small"><Text size="5" style={{'color': '#fff'}}>Admin <IconExpandMore fill="white" /></Text></Box>
    </Flex>
  </FlexItem>
  <FlexItem>
    <Flex>
      <FlexItem mr="small"><IconSearch fill="white" width="24" height="24" /></FlexItem>
      <FlexItem mr="small"><IconLiveHelp fill="white" width="24" height="24" /></FlexItem>
      <FlexItem><IconGroup fill="white" width="24" height="24" /></FlexItem>
    </Flex>
  </FlexItem>
</Flex>
```


### Changing direction and order

You can change the layout direction and order of flex children by using the `flexDirection` property. Below we use the same children in each example but can adjust the layout quickly using `flexDirection`.

```js
<Flex>
  <Flex mr="large">
    <FlexItem>1️⃣</FlexItem>
    <FlexItem>2️⃣</FlexItem>
    <FlexItem>3️⃣</FlexItem>
  </Flex>

  <Flex flexDirection="column" mr="large">
    <FlexItem>1️⃣</FlexItem>
    <FlexItem>2️⃣</FlexItem>
    <FlexItem>3️⃣</FlexItem>
  </Flex>

  <Flex flexDirection="column-reverse" mr="large">
    <FlexItem>1️⃣</FlexItem>
    <FlexItem>2️⃣</FlexItem>
    <FlexItem>3️⃣</FlexItem>
  </Flex>

  <Flex flexDirection="row-reverse" mr="large">
    <FlexItem>1️⃣</FlexItem>
    <FlexItem>2️⃣</FlexItem>
    <FlexItem>3️⃣</FlexItem>
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
      <TableDataCell><span class="prop-code"><Code>flex-start</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Pack items from the start</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>flex-end</Code></span></TableDataCell>
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

Here is a visual example of how using `justifyContent` affects the distribution of items in a `<Flex />` component.

```js
<div>

<Flex justifyContent="flex-start" mb="medium" bg="palette.charcoal000">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="space-between"  mb="medium" bg="palette.charcoal000">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="space-around"  mb="medium" bg="palette.charcoal000">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="space-evenly"  mb="medium" bg="palette.charcoal000">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="center"  mb="medium" bg="palette.charcoal000">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>

<Flex justifyContent="flex-end"  mb="medium" bg="palette.charcoal000">
  <Box><Text size="d3">🕺</Text></Box>
  <Box><Text size="d3">🎶</Text></Box>
  <Box><Text size="d3">💃</Text></Box>
</Flex>
</div>
```

### Aligning Items

Flex box allows for quickly adjusting the alignment of items inside the flex container. Below are available alignment types:

```js noeditor
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell width="40%">AlignItems Property</TableHeaderCell>
      <TableHeaderCell>Behavior</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>center</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Items are aligned center of container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>flex-start</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Items are aligned to the start of the container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>flex-end</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Items are aligned to the start of the container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>baseline</Code></span></TableDataCell>
      <TableDataCell><Text size="5">All items are aligned so their baselines align</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>stretch</Code></span> <Span size="6">(default)</Span></TableDataCell>
      <TableDataCell><Text size="5">Items strechted to fit the container</Text></TableDataCell>
    </TableRow>
  </TableBody>
</Table>
```

Here is an example of using `alignItems` to adjust how items are aligned within the flex container.
```js
<div>
<Flex mb="xxlarge">
  <FlexItem p="xxlarge" bg="palette.purple200">Default (stretch)</FlexItem>
  <FlexItem p="large" bg="palette.blue200">One</FlexItem>
  <FlexItem p="medium" bg="palette.green200">Two</FlexItem>
  <FlexItem p="small" bg="palette.red200">Three</FlexItem>
</Flex>

<Flex alignItems="center" mb="xxlarge">
  <FlexItem p="xxlarge" bg="palette.purple200">Center</FlexItem>
  <FlexItem p="large" bg="palette.blue200">One</FlexItem>
  <FlexItem p="medium" bg="palette.green200">Two</FlexItem>
  <FlexItem p="small" bg="palette.red200">Three</FlexItem>
</Flex>

<Flex alignItems="flex-start" mb="xxlarge">
  <FlexItem p="xxlarge" bg="palette.purple200">Start</FlexItem>
  <FlexItem p="large" bg="palette.blue200">Two</FlexItem>
  <FlexItem p="medium" bg="palette.green200">Three</FlexItem>
  <FlexItem p="small" bg="palette.red200">Four</FlexItem>
</Flex>

<Flex alignItems="flex-end" mb="xxlarge">
  <FlexItem p="xxlarge" bg="palette.purple200">End</FlexItem>
  <FlexItem p="large" bg="palette.blue200">Two</FlexItem>
  <FlexItem p="medium" bg="palette.green200">Three</FlexItem>
  <FlexItem p="small" bg="palette.red200">Four</FlexItem>
</Flex>

<Flex alignItems="baseline" mb="xxlarge">
  <FlexItem p="xxlarge" bg="palette.purple200">Baseline</FlexItem>
  <FlexItem p="large" bg="palette.blue200">Two</FlexItem>
  <FlexItem p="medium" bg="palette.green200">Three</FlexItem>
  <FlexItem p="small" bg="palette.red200">Four</FlexItem>
</Flex>
</div>
```

### Aligning Content
If you have multiple rows of flex items, the `alignContent` property determines how the rows are distributed within the flex container.

```js noeditor
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell width="40%">AlignContent Property</TableHeaderCell>
      <TableHeaderCell>Behavior</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>center</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Lines are packed to the center of container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>flex-start</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Lines are packed to the start of the container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>flex-end</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Lines are packed to the start of the container</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>space-between</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Lines evenly distributed. First line at start of container, last line at end of container</Text></TableDataCell>
    </TableRow>
        <TableRow>
      <TableDataCell><span class="prop-code"><Code>space-around</Code></span></TableDataCell>
      <TableDataCell><Text size="5">Lines evenly distributed. Even space around each line</Text></TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell><span class="prop-code"><Code>stretch</Code></span> <Span size="6">(default)</Span></TableDataCell>
      <TableDataCell><Text size="5">Items strechted to fit the container</Text></TableDataCell>
    </TableRow>
  </TableBody>
</Table>
```

```js
<Flex justifyContent="space-between">
  <Flex alignContent="space-around" width="30%" height="150px" flexWrap="wrap" bg="palette.purple400">
    <FlexItem width="70%" m="small" p="xsmall" bg="palette.purple200">Aligned w/</FlexItem>
    <FlexItem width="30%" m="small" p="xsmall" bg="palette.purple200">Space</FlexItem>
    <FlexItem width="50%" m="small" p="xsmall" bg="palette.purple200">Around</FlexItem>
  </Flex>

  <Flex alignContent="flex-end" width="30%" height="150px" flexWrap="wrap" bg="palette.blue400">
    <FlexItem width="70%" m="small" p="xsmall" bg="palette.blue200">Aligned w/</FlexItem>
    <FlexItem width="30%" m="small" p="xsmall" bg="palette.blue200">Flex</FlexItem>
    <FlexItem width="50%" m="small" p="xsmall" bg="palette.blue200">End</FlexItem>
  </Flex>

  <Flex alignContent="center" width="30%" height="150px" flexWrap="wrap" bg="palette.green400">
    <FlexItem width="70%" m="small" p="xsmall" bg="palette.green200">Aligned w/</FlexItem>
    <FlexItem width="30%" m="small" p="xsmall" bg="palette.green200">Flex</FlexItem>
    <FlexItem width="50%" m="small" p="xsmall" bg="palette.green200">Center</FlexItem>
  </Flex>
</Flex>
```


### Wrapping Flex Items

The  `flexWrap` property determines if flex items should be forced into a single line or if they can wrap onto multiple lines.

```js
<Flex width="80%" flexWrap="nowrap" mb="large">
  <FlexItem width="40%" p="large" bg="palette.red200">These Lines</FlexItem>
  <FlexItem width="40%" p="large" bg="palette.blue200">Will NOT</FlexItem>
  <FlexItem width="40%" p="large" bg="palette.green200">Wrap</FlexItem>
</Flex>

<Flex width="50%" flexWrap="wrap" mb="large">
  <FlexItem width="40%" p="large" bg="palette.red200">These Lines</FlexItem>
  <FlexItem width="40%" p="large" bg="palette.blue200">Will</FlexItem>
  <FlexItem width="40%" p="large" bg="palette.green200">Wrap</FlexItem>
</Flex>

<Flex width="50%" flexWrap="wrap-reverse" mb="large">
  <FlexItem width="40%" p="large" bg="palette.red200">These Lines</FlexItem>
  <FlexItem width="40%" p="large" bg="palette.blue200">Will</FlexItem>
  <FlexItem width="40%" p="large" bg="palette.green200">Wrap Reverse</FlexItem>
</Flex>
```

### Responsive Behavior

Many of the properties you can set on the `<Flex />` component will accept an array of values that will then be applied at different breakpoints. There are 5 [breakpoints](/#!/Breakpoints) slots that you can target. Here is an example of what that looks like.

```js
<Flex
  flexDirection={[
      "column", // column up to the first breakpoint
      null,     // stay a column past first breakpoint
      "row"     // switch to row layout after second breakpoint
  ]}>

  <FlexItem p="medium" bg="palette.yellow200">👋</FlexItem>
  <FlexItem p="medium" bg="palette.green200">💪</FlexItem>
  <FlexItem p="medium" bg="palette.purple200">📦</FlexItem>
</Flex>
```
