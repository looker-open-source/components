import React from 'react'
import { FieldColor } from '@looker/components'

interface ColorPickerState {
  colorValue: string
}

export class FieldColorDemo extends React.Component<{}, ColorPickerState> {
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
      <FieldColor
        label="Pick a color"
        alignLabel="left"
        value={this.state.colorValue}
        onChange={this.handleChange}
      />
    )
  }
}
