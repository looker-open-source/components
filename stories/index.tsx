import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'
import {Button, LinkButton} from '../src/components/buttons/Buttons'
import {List, ListItem, OrderedList} from '../src/components/list/lists'

const stories = storiesOf("Typescript and Storybook", module)

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

stories.add("Lists", () => {
  return (
    <div>
      <List>
        <ListItem>An Item</ListItem>
        <ListItem>Another Item</ListItem>
        <ListItem>
          <List>
            <ListItem>Sub Item</ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  )
})

stories.add("Ordered Lists", () => {
  return (
    <div>
      <OrderedList>
        <ListItem>Hello world</ListItem>
        <ListItem>What</ListItem>
        <ListItem>
          <OrderedList>
            <ListItem>Foo bar</ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </div>
  )
})
