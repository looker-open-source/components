import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { ThemeProvider } from '../../styled_components'
import theme from '../../themes'
import { Box } from './Box'

test('Box default', () => {
  const component = create(<Box theme={theme}>🥑</Box>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
