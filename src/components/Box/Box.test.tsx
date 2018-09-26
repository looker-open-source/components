import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { Box } from './Box'

test('Box default', () => {
  const component = createWithTheme(<Box mt="large">🥑</Box>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Responsive margin top Box', () => {
  const component = createWithTheme(
    <div>
      <Box mt={['large', 'medium', 'small']}>🥑</Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Box with null values are removed from styling', () => {
  const component = createWithTheme(
    <div>
      <Box mt={['large', null, 'medium']}>🥑</Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Box with SizeNone is valid', () => {
  const component = createWithTheme(
    <div>
      <Box mt="none">🥑</Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
