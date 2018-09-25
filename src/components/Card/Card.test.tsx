import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { theme } from '../../style/theme'
import { Card } from './Card'
import { CardMedia } from './CardMedia'

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
