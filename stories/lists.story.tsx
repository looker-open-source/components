import * as React from 'react'
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { List, ListItem, OrderedList } from '../src/components/lists/lists'

const stories = storiesOf("Lists", module)
stories.addDecorator(withKnobs)

stories.add("List", () => {
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

stories.add("Ordered List", () => {
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
