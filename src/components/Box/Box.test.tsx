import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import theme from '../../themes'
import { Box } from './Box'

test('Box default', () => {
  const component = create(
    <Box theme={theme} mt="large">
      🥑
    </Box>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Responsive margin top Box', () => {
  const component = create(
    <div>
      <Box theme={theme} mt={['large', 'medium', 'small']}>
        🥑
      </Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Box with null values are removed from styling', () => {
  const component = create(
    <div>
      <Box theme={theme} mt={['large', null, 'medium']}>
        🥑
      </Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Box with SizeNone is valid', () => {
  const component = create(
    <div>
      <Box theme={theme} mt="none">
        🥑
      </Box>
    </div>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
