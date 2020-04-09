/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  assertSnapshotShallow,
  renderWithTheme,
} from '@looker/components-test-utils'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { Button } from './Button'

test('Button is rendered ', () => {
  assertSnapshotShallow(<Button>click here</Button>)
})

test('Button works with color danger', () => {
  const { getByText } = renderWithTheme(<Button color="danger">danger</Button>)

  expect(getByText('danger')).toMatchSnapshot()
})

test('Button disable', () => {
  const { getByText } = renderWithTheme(<Button disabled>disabled</Button>)

  expect(getByText('disabled')).toMatchSnapshot()
})

test('Button accepts a className prop', () => {
  const { container } = renderWithTheme(
    <Button className="foo">button with class</Button>
  )

  expect(container.firstChild).toHaveClass('foo')
})

test('Button validates all sizes', () => {
  const { getByText } = renderWithTheme(
    <>
      <Button size={'xsmall'}>xsmall button</Button>
      <Button size={'small'}>small button</Button>
      <Button size={'medium'}>medium button</Button>
      <Button size={'large'}>large button</Button>
    </>
  )

  expect(getByText('xsmall button')).toMatchSnapshot()
  expect(getByText('small button')).toMatchSnapshot()
  expect(getByText('medium button')).toMatchSnapshot()
  expect(getByText('large button')).toMatchSnapshot()
})

test('Button with icon validates all sizes', () => {
  const { getByText } = renderWithTheme(
    <>
      <Button size={'xsmall'} iconBefore={'Account'}>
        xsmall button
      </Button>
      <Button size={'small'} iconBefore={'Account'}>
        small button
      </Button>
      <Button size={'medium'} iconBefore={'Account'}>
        medium button
      </Button>
      <Button size={'large'} iconBefore={'Account'}>
        large button
      </Button>
    </>
  )

  expect(getByText('xsmall button')).toMatchSnapshot()
  expect(getByText('small button')).toMatchSnapshot()
  expect(getByText('medium button')).toMatchSnapshot()
  expect(getByText('large button')).toMatchSnapshot()
})

test('Button can be full width', () => {
  const { getByText } = renderWithTheme(<Button fullWidth>Full Width</Button>)

  expect(getByText('Full Width')).toMatchSnapshot()
})

test('Button Focus: renders outline when tabbing into focus, but not when clicking', () => {
  const { getByText } = renderWithTheme(
    <>
      <Button>button</Button>
      <Button>focus</Button>
    </>
  )

  fireEvent.click(getByText('button'))
  expect(getByText('focus')).toMatchSnapshot()

  fireEvent.keyUp(getByText('focus'), { charCode: 9, code: 9, key: 'Tab' })
  expect(getByText('focus')).toMatchSnapshot()
})
