
```js
const popoverTest = (
  <Popover title="hello world">
    What am I doing here?
  </Popover>
);

<div>
<Box display="inline-block" mr="small">
  <OverlayTrigger trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay!</Button>
  </OverlayTrigger>
</Box>
<Box display="inline-block" mr="small">
  <OverlayTrigger placement="top" trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay above!</Button>
  </OverlayTrigger>
</Box>
<Box display="inline-block" mr="small">
  <OverlayTrigger placement="bottom" trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay below!</Button>
  </OverlayTrigger>
</Box>
<Box display="inline-block">
  <OverlayTrigger placement="left" trigger="click" overlay={popoverTest}>
    <Button variant="outline">Show overlay left!</Button>
  </OverlayTrigger>
</Box>
</div>
```
