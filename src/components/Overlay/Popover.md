```js
const PopoverDemo = require('./PopoverDemo').PopoverDemo;

<PopoverDemo/>
```

```js
const popoverTest = (
  <ColorWheel />
);

<Box display="inline-block" mr="small">
  <Popover trigger={['hover', 'focus']} placement="top" content={popoverTest}>
    <Box bg="hsl(120, 100%, 80%)" p="medium">Show overlay top!</Box>
  </Popover>
</Box>
```
