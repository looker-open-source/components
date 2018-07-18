import * as React from 'react'
import { Card } from './Card'
import { CardMedia } from './CardMedia'
import { CardContent } from './CardContent'
import { create } from 'react-test-renderer'

test('A Card', () => {
  const component = create(<Card>🥑</Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card', () => {
  const component = create(<Card raised={true}>🥑</Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card with a CardMedia block', () => {
  const component = create(
    <Card raised={true}>
      <CardMedia image="http://placekitten.com/200/300" />
    </Card>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
