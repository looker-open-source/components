import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'
import { Button, LinkButton } from '../src/components/buttons/buttons'
import { FormattedMessage } from 'react-intl'


const stories = storiesOf("Buttons", module)
stories.addDecorator(withKnobs)

stories.add("Button", () => {
  const danger = boolean('Danger', false)
  return (
    <div>
      <p>
        <Button danger={danger} onClick={action('Button Clicked')}>
          <FormattedMessage id='button.label' />
        </Button>
      </p>
      <p>
        <LinkButton danger={danger} onClick={action('LinkButton Clicked')}>
          <FormattedMessage id='button.label' />
        </LinkButton>
      </p>
    </div>
  )
})

