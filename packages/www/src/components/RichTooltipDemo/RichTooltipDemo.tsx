import { hsv } from 'd3-hsv'
import React from 'react'
import {
  Box,
  HueSaturation,
  SimpleHSV,
  ColorWheel,
  RichTooltip,
  RichTooltipContent,
} from '@looker/components'

export interface RichTooltipDemoState {
  color: SimpleHSV
  size: number
}

export default class RichTooltipDemo extends React.Component<
  {},
  RichTooltipDemoState
> {
  constructor(props: {}) {
    super(props)

    this.state = {
      color: {
        h: 140,
        s: 1,
        v: 1,
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
      <RichTooltipContent>
        <ColorWheel
          hue={this.state.color.h}
          saturation={this.state.color.s}
          value={this.state.color.v}
          onColorChange={this.handleColorStateChange}
        />
      </RichTooltipContent>
    )

    const color = hsv(
      this.state.color.h,
      this.state.color.s,
      this.state.color.v
    )

    return (
      <Box display="inline-block" mr="small">
        <RichTooltip placement="top" content={popoverContent}>
          {(eventHandlers, ref) => (
            <Box
              ref={ref}
              bg={color.toString()}
              p="medium"
              borderRadius="4px"
              {...eventHandlers}
            >
              Pick a new color.
            </Box>
          )}
        </RichTooltip>
      </Box>
    )
  }
}
