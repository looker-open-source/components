import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'
import { Button, buttonStyles, LookerButtonHTMLAttributes } from '../src/buttons/buttons'
import { ReactElement } from "react"
import { decapitalize } from '../src/utils/strings'
import { checkA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf("Buttons", module)
stories.addDecorator(withKnobs)
stories.addDecorator(checkA11y)

function propsFromStyles (styles: object, prefix: string, includeUndefined = false): Array<string | undefined> {
  const props: Array<string | undefined> = Object.keys(styles)
    .filter((key) => key.includes(prefix) && !key.includes('-'))
    .map((key) => key.replace(new RegExp(`^${prefix}`), ''))
    .map((key) => decapitalize(key))
  if (includeUndefined) props.push(undefined)
  return props
}

stories.add("Button", withInfo(`foo`)(() => {
  const modes = propsFromStyles(buttonStyles, 'mode')
  const sizes = propsFromStyles(buttonStyles, 'size')
  modes.push(undefined)
  sizes.push(undefined)
  const matrix: ReactElement<LookerButtonHTMLAttributes>[][] = []

  modes.forEach((mode) => {
    const buttonRow: ReactElement<LookerButtonHTMLAttributes>[] = []
    sizes.forEach((size) => {
      let desc = ''
      switch (size) {
        case 'extraSmall':
          desc = 'X-Small'
          break
        case 'small':
          desc = 'Small'
          break
        case 'large':
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
    <div>
    <table>
      <tbody>
      {matrix.map((row, idx) => {
        return (
          <tr key={idx}>
            {row.map((button, idx) => (<td key={idx}>{button}</td>))}
          </tr>
        )
      })}
      </tbody>
    </table>
    </div>
  )
}))

