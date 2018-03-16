import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"

import { Button } from '../src/components/buttons/Button'
import SassButton from '../src/components/buttons/SassButtons'


const stories = storiesOf("Typescript and Storybook", module)

stories.addDecorator(withKnobs)

stories.add("Button", () => {
  return <div>
    <Button>A Button</Button>
  </div>
})
.add("Sass Button", () => {
  const className = text('Class name', '')
  const danger = boolean('Danger', false)

  return <div>
    <SassButton className={className} danger={danger}>Hello World</SassButton>
  </div>
})
.add("as dynamic vars", () => {
  const className = text('Class Name', 'danger')
  const txt = text('name', 'name')
  return (<div className={className}>{txt}</div>)
})
