import * as React from 'react'
import { Card } from './Card'
import { CardMedia} from './CardMedia'
import { CardContent} from './CardContent'
import { CardDetails } from './CardDetails'
import { create } from 'react-test-renderer'

test('A Card', () => {
  const component = create(<Card>🥑</Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


test('A raised Card', () => {
  const component = create(<Card raised>🥑</Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card with a CardMedia block', () => {
  const component = create(<Card raised><CardMedia image="http://placekitten.com/200/300"></CardMedia></Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A raised Card with a CardContent and CardDetails block', () => {
  const component = create(<Card raised><CardContent><CardDetails title="Card Details Title" subtitle="A subtitle"></CardDetails></CardContent></Card>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
