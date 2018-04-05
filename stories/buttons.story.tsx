import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'
import { Button, buttonStyles, ButtonModes, ButtonSizes, ButtonProps } from '../src/buttons/buttons'
import { ReactElement } from "react"

const stories = storiesOf("Buttons", module)
stories.addDecorator(withKnobs)

stories.add("Button", () => {
  const styleKeys = Object.keys(buttonStyles)

  const modes = styleKeys.filter((key) => key.includes('mode') && !key.includes('-')) as ButtonModes[]
  const sizes = styleKeys.filter((key) => key.includes('size') && !key.includes('-')) as ButtonSizes[]
  modes.unshift(undefined)
  sizes.unshift(undefined)
  const matrix: ReactElement<ButtonProps>[][] = []

  modes.forEach((mode) => {
    const buttonRow: ReactElement<ButtonProps>[] = []
    sizes.forEach((size) => {
      let desc = ''
      switch (size) {
        case 'sizeExtraSmall':
          desc = 'X-Small'
          break
        case 'sizeSmall':
          desc = 'Small'
          break
        case 'sizeLarge':
          desc = 'Large'
          break
        default:
          desc = 'Normal'
          break
      }
      buttonRow.push(<Button onClick={action('clicked')} size={size} mode={mode}>{desc}</Button>)
    })
    matrix.push(buttonRow)
  })

  return (
    <table>
      {matrix.map((row) => {
        return (
          <tr>
            {row.map((button) => (<td>{button}</td>))}
          </tr>
        )
      })}
    </table>
  )
})

