import * as React from 'react'
import { Card } from './Card'
import { CardMedia } from './CardMedia'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../themes'

test('A Card', () => {
  const component = create(<Card theme={theme}>🥑</Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card', () => {
  const component = create(
    <Card raised={true} theme={theme}>
      🥑
    </Card>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card with a CardMedia block', () => {
  const component = create(
    <Card raised={true} theme={theme}>
      <CardMedia image="http://placekitten.com/200/300" />
    </Card>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
