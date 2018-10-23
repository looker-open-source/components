```js
const popoverTest = (
  <div>
    <ColorWheel />
  </div>
);

<div>
<Box display="inline-block" mr="small">
  <Popover trigger="click" placement="top" content={popoverTest}>
    <Button variant="outline">Show overlay top!</Button>
  </Popover>
</Box>
<Box display="inline-block" mr="small">
  <Popover trigger="click" placement="right" content={popoverTest}>
    <Button variant="outline">Show overlay right!</Button>
  </Popover>
</Box>
<Box display="inline-block" mr="small">
  <Popover trigger="click" placement="bottom" content={popoverTest}>
    <Button variant="outline">Show overlay bottom!</Button>
  </Popover>
</Box>
<Box display="inline-block" mr="small">
  <Popover trigger="click" placement="left" content={popoverTest}>
    <Button variant="outline">Show overlay left!</Button>
  </Popover>
</Box>
</div>
```
