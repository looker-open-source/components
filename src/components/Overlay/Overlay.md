Overlay is the abstract building block for building more specific implementations from. Popover and RichTooltip it under the hood.

NOTE: Code examples below don't work well within StyleGuidist so actual code is contained within `styleguide_components/OverlayDemo.tsx` but same code is embedded below to show how `Overlay` can be composed to create more complex components.

```js noeditor
const OverlayDemo = require('../../../styleguide_components/OverlayDemo')
  .OverlayDemo
;<OverlayDemo />
```

```js static
class OverlayDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.triggerRef = React.createRef()
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  render() {
    return (
      <>
        <Overlay
          isOpen={this.state.isOpen}
          onClose={this.close}
          triggerRef={this.triggerRef}
        >
          {({ ref, style, arrowProps, placement }) => {
            return (
              <OverlaySurface
                animation=".2s linear"
                backgroundColor="white"
                border="1px solid"
                borderColor="pink"
                borderRadius="20px"
                boxShadow="10px 10px 10px purple"
                color="orange"
                arrowProps={arrowProps}
                placement={placement}
                ref={ref}
                style={style}
              >
                <Box p="xlarge">This is some content in the Overlay</Box>
              </OverlaySurface>
            )
          }}
        </Overlay>

        <Button onClick={this.open} innerRef={this.triggerRef}>
          Open Overlay
        </Button>
      </>
    )
  }

  open() {
    this.setState({ isOpen: true })
  }

  close() {
    this.setState({ isOpen: false })
  }
}
```
