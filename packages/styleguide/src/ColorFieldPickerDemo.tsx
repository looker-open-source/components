import * as React from 'react'
import { ColorFieldPicker } from '../src/components/Colors/ColorFieldPicker/ColorFieldPicker'

interface ColorPickerState {
  colorValue: string
}

export class ColorFieldPickerDemo extends React.Component<
  {},
  ColorPickerState
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      colorValue: 'red',
    }
  }

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ colorValue: event.currentTarget.value })
  }

  public render() {
    return (
      <ColorFieldPicker
        label="Pick a color"
        alignLabel="left"
        value={this.state.colorValue}
        onChange={this.handleChange}
      />
    )
  }
}
