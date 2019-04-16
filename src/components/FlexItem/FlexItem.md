```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/FlexItem/FlexItem.tsx"
  feedbackTitle="FlexItem Component Feedback"
/>
```

The `<FlexItem />` component lets you have more control of the properties that apply to just children inside a `<Flex />` container. These properties affect how a flex item aligns its self, it's order, and how it resizes to fill the available space in the flex container.

### Adjusting Individual Alignment

Using the `alignSelf` property on a `<FlexItem />` allows you to override the the `alignItems` value from the flex container. This is useful if you need to adjust how a single flex item aligns itself in the container.

```js noeditor
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableDataCell,
} from '../Table'
import { Code, Text } from '../Text'
;<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell width="40%">alignSelf Property</TableHeaderCell>
      <TableHeaderCell>Behavior</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableDataCell>
        <span className="prop-code">
          <Code>center</Code>
        </span>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">Pack items around the center</Text>
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        <span className="prop-code">
          <Code>flex-start</Code>
        </span>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">Pack items from the start</Text>
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        <span className="prop-code">
          <Code>flex-end</Code>
        </span>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">Pack items from the end</Text>
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        <span className="prop-code">
          <Code>baseline</Code>
        </span>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">Item aligned to its baseline</Text>
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        <span className="prop-code">
          <Code>stretch</Code>
        </span>{' '}
        <Text fontSize="xsmall">(default)</Text>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">stretch to the container</Text>
      </TableDataCell>
    </TableRow>
  </TableBody>
</Table>
```

```js
import { FlexItem } from './FlexItem'
import { Flex } from '../Flex'
import { Box } from '../Box'
;<Flex height="200px" bg="palette.purple400">
  <FlexItem alignSelf="flex-start">
    <Box m="small" p="large" bg="palette.purple200">
      Flex Start
    </Box>
  </FlexItem>
  <FlexItem alignSelf="flex-end">
    <Box m="small" p="large" bg="palette.purple200">
      Flex End
    </Box>
  </FlexItem>
  <FlexItem alignSelf="center">
    <Box m="small" p="large" bg="palette.purple200">
      Center
    </Box>
  </FlexItem>
  <FlexItem alignSelf="baseline">
    <Box m="small" p="large" bg="palette.purple200">
      Baseline
    </Box>
  </FlexItem>
</Flex>
```

### Item Order

By default flex items are laid our in source order, the `order` property on a `<FlexItem />` allows you to adjust how an individual flex item is is ordered in a flex container.

**Note:** the `order` value default is `0`, so setting an `order="1"` will put the item at the end unless another flex item has a higher `order` set. You can also use negative numbers to set an item at the beginning.

```js
import { FlexItem } from './FlexItem'
import { Flex } from '../Flex/Flex'
import { Box } from '../Box'
;<>
  <Flex bg="palette.charcoal000" mb="large">
    <FlexItem>
      <Box m="small" p="large" bg="palette.blue200">
        0
      </Box>
    </FlexItem>
    <FlexItem>
      <Box m="small" p="large" bg="palette.purple200">
        1
      </Box>
    </FlexItem>
    <FlexItem>
      <Box m="small" p="large" bg="palette.green200">
        2
      </Box>
    </FlexItem>
    <FlexItem>
      <Box m="small" p="large" bg="palette.yellow200">
        3
      </Box>
    </FlexItem>
    <FlexItem>
      <Box m="small" p="large" bg="palette.red200">
        4
      </Box>
    </FlexItem>
  </Flex>

  <Flex bg="palette.charcoal000">
    <FlexItem>
      <Box m="small" p="large" bg="palette.blue200">
        0
      </Box>
    </FlexItem>
    <FlexItem order="2">
      <Box m="small" p="large" bg="palette.purple200">
        1
      </Box>
    </FlexItem>
    <FlexItem order="1">
      <Box m="small" p="large" bg="palette.green200">
        2
      </Box>
    </FlexItem>
    <FlexItem>
      <Box m="small" p="large" bg="palette.yellow200">
        3
      </Box>
    </FlexItem>
    <FlexItem order="-1">
      <Box m="small" p="large" bg="palette.red200">
        4
      </Box>
    </FlexItem>
  </Flex>
</>
```

### Controlling Item Size

The `<FlexItem>` has two properties for managing its size. You can use the `flexBasis` property or the `flex` property.

##### Flex Basis example.

The `flexBasis` property defines the flex-items' default size before the remaining space is distributed.

```js
import { FlexItem } from './FlexItem'
import { Flex } from '../Flex'
import { Box } from '../Box'
;<Flex>
  <FlexItem flexBasis="20%">
    <Box p="small" m="small" bg="palette.red200">
      I am 20% of container
    </Box>
  </FlexItem>
  <FlexItem flexBasis="5.5rem">
    <Box p="small" m="small" bg="palette.green200">
      I am 5.5rem of container
    </Box>
  </FlexItem>
  <FlexItem flexBasis="150px">
    <Box p="small" m="small" bg="palette.blue200">
      I am 150px of container
    </Box>
  </FlexItem>
  <FlexItem>
    <Box p="small" m="small" bg="palette.purple200">
      I am sized to my content
    </Box>
  </FlexItem>
</Flex>
```

##### Flex Example

The `flex` property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` properties. It specifies how a flex item will grow or shrink to fit the space in its flex container.

**Note**: The `flex` syntax can be a bit confusing, if you need a more detail set of examples check out this [MDN flex overview](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

```js noeditor
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableDataCell,
} from '../Table'
import { Code, Text } from '../Text'
;<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell width="20%">flex Property</TableHeaderCell>
      <TableHeaderCell>Behavior</TableHeaderCell>
      <TableHeaderCell>Accepts</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableDataCell>
        <span class="prop-code">
          <Code>flex-grow</Code>
        </span>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">Specifies the grow factor of a flex item</Text>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">A positive unitless number</Text>
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        <span class="prop-code">
          <Code>flex-shrink</Code>
        </span>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">
          Specifies the shrink factor of a flex item
        </Text>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">A positive unitless number</Text>
      </TableDataCell>
    </TableRow>
    <TableRow>
      <TableDataCell>
        <span class="prop-code">
          <Code>flex-basis</Code>
        </span>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">Specifies the flex items size</Text>
      </TableDataCell>
      <TableDataCell>
        <Text fontSize="xsmall">A valid width unit</Text>
      </TableDataCell>
    </TableRow>
  </TableBody>
</Table>
```

##### Flex Grow Example

Below we set the flex grow value of the first flex item to `2` so it will take up a factor of two in the flex container

```js
import { FlexItem } from './FlexItem'
import { Flex } from '../Flex'
import { Box } from '../Box'
;<Flex>
  <FlexItem flex="2">
    <Box p="small" bg="palette.red200">
      Flex: 2
    </Box>
  </FlexItem>
  <FlexItem flex="1">
    <Box p="small" bg="palette.green200">
      Flex: 1
    </Box>
  </FlexItem>
  <FlexItem flex="1">
    <Box p="small" bg="palette.blue200">
      Flex: 1
    </Box>
  </FlexItem>
</Flex>
```

##### Flex Shrink

Below we have a flex container with a set width of 500px and each child's `flex-basis` is set to 200px. The flex shrink value on the last two flex items is set to `1` and they will now shrink so that all the flex items fit within the flex container.

```js
import { FlexItem } from './FlexItem'
import { Flex } from '../Flex'
import { Box } from '../Box'
;<Flex width="500px">
  <FlexItem flex="1 0 200px">
    <Box p="small" bg="palette.red200">
      No Shrink
    </Box>
  </FlexItem>
  <FlexItem flex="1 1 200px">
    <Box p="small" bg="palette.green200">
      I'll shrink
    </Box>
  </FlexItem>
  <FlexItem flex="1 1 200px">
    <Box p="small" bg="palette.blue200">
      I'll shrink
    </Box>
  </FlexItem>
</Flex>
```
