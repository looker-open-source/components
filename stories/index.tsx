import * as React from 'react'
import { storiesOf } from "@storybook/react"

import { Button } from '../src/components/buttons/Button'

storiesOf("Typescript and Storybook", module)
  .add("Button", () => {
    return <div>
      <Button>A Button</Button>
    </div>
  })
