```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="stable"
  figmaURL="https://www.figma.com/file/FJdRcUtLJ6RVIcPS1CL5dwwQ/Borders-and-Dividers?node-id=7%3A10"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Divider/Divider.tsx"
  feedbackTitle="Divider Component Feedback" />
```

## Default Divider

Dividers accept all the spacing props from `<Box />`, which gives you the ability to easily put spacing around your dividers. By default a divider's background color will be  `charcoal300`

```js
<Flex justifyContent="space-around" >
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

## Divider Variants

There are three divider variants `light`, `dark` and `onDark`.

```js
<Flex justifyContent="space-around" >
  <Box bg="white " p="xlarge" mr="large">
    light variant
    <Divider mt="medium" variant="light" />
  </Box>
  <Box bg="palette.charcoal000" p="xlarge" mr="large">
    dark variant
    <Divider mt="medium" variant="dark" />
  </Box>

  <Box bg="palette.charcoal600" p="xlarge">
    onDark variant
    <Divider mt="medium" variant="onDark" />
  </Box>
</Flex>
```

## Custom Divider

You can adjust the dividers height and supply a custom color if needed

```js
<Box p="xlarge">
  Custom Divider
  <Divider size="8px" customColor="turquoise" mt="large" borderRadius="100px" />
</Box>

```

```
