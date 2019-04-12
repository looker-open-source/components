import * as React from 'react'
import { Box } from '../src/components/Box'
import { Button } from '../src/components/Button'
import { Overlay } from '../src/components/Overlay/Overlay'
import { OverlaySurface } from '../src/components/Overlay/OverlaySurface'

export interface OverlayDemoState {
  isOpen: boolean
}

export class OverlayDemo extends React.Component<{}, OverlayDemoState> {
  public triggerRef: React.RefObject<HTMLElement>

  constructor(props: {}) {
    super(props)
    this.state = { isOpen: false }
    this.triggerRef = React.createRef()
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  public render() {
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
  protected open() {
    this.setState({ isOpen: true })
  }
  protected close() {
    this.setState({ isOpen: false })
  }
}
