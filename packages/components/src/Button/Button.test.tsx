import { assertSnapshotShallow } from 'looker-components-test-utils'
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'looker-design-tokens'
import { Button } from './Button'

test('Button is rendered ', () => {
  assertSnapshotShallow(<Button>click here</Button>)
})

test('Button still works with variate outline', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button variant="outline">outline</Button>
    </ThemeProvider>
  )
  expect(getByText('outline')).toMatchSnapshot()
})

test('Button still works with variate transparent', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button variant="transparent">transparent</Button>
    </ThemeProvider>
  )

  expect(getByText('transparent')).toMatchSnapshot()
})

test('Button works with color danger', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button color="danger">danger</Button>
    </ThemeProvider>
  )

  expect(getByText('danger')).toMatchSnapshot()
})

test('Button disable', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button disabled>disabled</Button>
    </ThemeProvider>
  )

  expect(getByText('disabled')).toMatchSnapshot()
})

test('Button accepts a className prop', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Button className="foo">button with class</Button>
    </ThemeProvider>
  )

  expect(container.firstChild).toHaveClass('foo')
})

test('Button validates all sizes', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <>
        <Button size={'xsmall'}>xsmall button</Button>
        <Button size={'small'}>small button</Button>
        <Button size={'medium'}>medium button</Button>
        <Button size={'large'}>large button</Button>
      </>
    </ThemeProvider>
  )

  expect(getByText('xsmall button')).toMatchSnapshot()
  expect(getByText('small button')).toMatchSnapshot()
  expect(getByText('medium button')).toMatchSnapshot()
  expect(getByText('large button')).toMatchSnapshot()
})
