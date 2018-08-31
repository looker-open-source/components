import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import theme from '../../../themes'
import { Checkbox } from './Checkbox'

test('Checkbox default', () => {
  const component = create(<Checkbox theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox checked set to true', () => {
  const component = create(<Checkbox theme={theme} checked={true} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox checked set to false', () => {
  const component = create(<Checkbox theme={theme} checked={false} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox with name and id', () => {
  const component = create(<Checkbox theme={theme} name="Chuck" id="Chucky" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox should accept disabled', () => {
  const component = create(<Checkbox theme={theme} disabled />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox with alt', () => {
  const component = create(<Checkbox theme={theme} alt="Alternate" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
