import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'
import { Button, LinkButton } from '../src/components/buttons/Buttons'

const stories = storiesOf("Buttons", module)
stories.addDecorator(withKnobs)

stories.add("Button", () => {
  const danger = boolean('Danger', false)
  return (
    <div>
      <div>
        <Button danger={danger} onClick={action('Button Clicked')}>A Button</Button>
      </div>
      <div>
        <LinkButton danger={danger} onClick={action('LinkButton Clicked')}>I'm really a link</LinkButton>
      </div>
    </div>
  )
})

