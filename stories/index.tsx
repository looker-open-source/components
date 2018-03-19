import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import { Button } from '../src/components/buttons/Button'

const stories = storiesOf("Typescript and Storybook", module)

stories.addDecorator(withKnobs)

stories.add("Button", () => {
    const danger = boolean('Danger', false)

  return <div>
    <Button danger={danger} onClick={() => alert('hi')}>A Button</Button>
  </div>
})
