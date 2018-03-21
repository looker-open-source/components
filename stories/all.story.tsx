import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'
import { Button, LinkButton } from '../src/components/buttons/buttons'
import { FormattedMessage } from 'react-intl'
import { List, ListItem, OrderedList } from "../src/components/lists/lists";


const stories = storiesOf("All", module)
stories.addDecorator(withKnobs)

stories.add("All", () => {
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
      <p>
        <OrderedList>
          <ListItem>Hello world</ListItem>
          <ListItem>What</ListItem>
          <ListItem>
            <OrderedList>
              <ListItem>Foo bar</ListItem>
            </OrderedList>
          </ListItem>
        </OrderedList>
      </p>
      <p>
        <List>
          <ListItem>An Item</ListItem>
          <ListItem>Another Item</ListItem>
          <ListItem>
            <List>
              <ListItem>Sub Item</ListItem>
            </List>
          </ListItem>
        </List>
      </p>
    </div>
  )
})

