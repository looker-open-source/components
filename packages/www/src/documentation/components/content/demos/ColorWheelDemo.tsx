import React from 'react'
import {
  Card,
  CardContent,
  Flex,
  Heading,
  Text,
  HueSaturation,
  SimpleHSV,
  ColorWheel,
  LuminositySlider,
} from '@looker/components'

interface ColorWheelDemoState {
  color: SimpleHSV
  size: number
}

export default class ColorWheelDemo extends React.Component<
  {},
  ColorWheelDemoState
> {
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

  // Using a slider to control the brightness of the color wheel
  public handleSliderChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value)
    const { color } = this.state
    color.v = value / 100
    this.setState({ color })
  }

  public render() {
    const h = Number(this.state.color.h).toFixed(0)
    const s = Number(this.state.color.s).toFixed(1)
    return (
      <Flex>
        <Card raised>
          <CardContent>
            <Heading as="h2">Color wheel</Heading>
            <ColorWheel
              size={this.state.size}
              hue={this.state.color.h}
              saturation={this.state.color.s}
              value={this.state.color.v}
              onColorChange={this.handleColorStateChange}
            />

            <LuminositySlider
              id="typeinp"
              min={0}
              max={100}
              value={this.state.color.v * 100}
              onChange={this.handleSliderChange}
              step={1}
            />
          </CardContent>
        </Card>
        <Card raised>
          <CardContent>
            <Heading as="h2">HSV values</Heading>
            <Text>Hue: {h}</Text>
            <Text>Saturation: {s}</Text>
            <Text>Value: {this.state.color.v}</Text>
          </CardContent>
        </Card>
      </Flex>
    )
  }
}
