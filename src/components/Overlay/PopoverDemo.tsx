import { hsl } from 'polished'
import * as React from 'react'
import { Box } from '../Box'
import {
  HueSaturation,
  SimpleHSV,
} from '../Colors/ColorWheel/color_wheel_utils'
import { ColorWheel } from '../Colors/ColorWheel/ColorWheel'
import { Popover } from './Popover'

export interface PopoverDemoState {
  color: SimpleHSV
  size: number
}

export class PopoverDemo extends React.Component<{}, PopoverDemoState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      color: {
        h: 140,
        s: 0.5,
        v: 0.5,
      },
      size: 300,
    }
  }

  public handleColorStateChange = (hs: HueSaturation) => {
    const color = {
      ...hs,
      v: this.state.color.v,
    }
    this.setState({ color })
  }

  public render() {
    const popoverContent = (
      <ColorWheel
        hue={this.state.color.h}
        saturation={this.state.color.s}
        value={this.state.color.v}
        onColorChange={this.handleColorStateChange}
      />
    )

    const color = hsl(
      this.state.color.h,
      this.state.color.s,
      this.state.color.v
    )

    return (
      <Box display="inline-block" mr="small">
        <Popover
          trigger={['hover', 'focus']}
          placement="top"
          content={popoverContent}
          zIndex={1000}
        >
          <Box bg={color} p="medium" borderRadius="4px">
            Show overlay top!
          </Box>
        </Popover>
      </Box>
    )
  }
}
