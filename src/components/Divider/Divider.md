```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources

;<StatusAndResources
  status="stable"
  figmaURL="https://www.figma.com/file/FJdRcUtLJ6RVIcPS1CL5dwwQ/Borders-and-Dividers?node-id=7%3A10"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Divider/Divider.tsx"
  feedbackTitle="Divider Component Feedback"
/>
```

## Default Divider

Dividers accept all the spacing props from `<Box />`, which gives you the ability to easily put spacing around your dividers. By default a divider's background color will be `charcoal300`

```js
import { Divider } from './Divider'
import { Box } from '../Box'
import { Flex } from '../Flex'
;<Flex justifyContent="space-around">
  <Box bg="white " p="xlarge" mr="large">
    On White
    <Divider mt="medium" />
  </Box>
  <Box bg="palette.charcoal000" p="xlarge" mr="large">
    On Charcoal000
    <Divider mt="medium" />
  </Box>

  <Box bg="palette.charcoal100" p="xlarge">
    On Charcoal100
    <Divider mt="medium" />
  </Box>
</Flex>
```

## Divider Appearance

There are three divider appearances `light`, `dark` and `onDark`.

```js
import { Divider } from './Divider'
import { Box } from '../Box'
import { Flex } from '../Flex'
;<Flex justifyContent="space-around">
  <Box bg="white " p="xlarge" mr="large">
    light appearance
    <Divider mt="medium" appearance="light" />
  </Box>
  <Box bg="palette.charcoal000" p="xlarge" mr="large">
    dark appearance
    <Divider mt="medium" appearance="dark" />
  </Box>

  <Box bg="palette.charcoal600" p="xlarge">
    onDark appearance
    <Divider mt="medium" appearance="onDark" />
  </Box>
</Flex>
```

## Custom Divider

You can adjust the dividers height and supply a custom color if needed

```js
import { Divider } from './Divider'
import { Box } from '../Box'
;<Box p="xlarge">
  Custom Divider
  <Divider size="8px" customColor="turquoise" mt="large" borderRadius="100px" />
</Box>
```
