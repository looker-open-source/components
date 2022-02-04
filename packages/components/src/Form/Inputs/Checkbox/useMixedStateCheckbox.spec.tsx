/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import React, { useState } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Label } from '../../Label'
import type { MixedBoolean } from './Checkbox'
import { Checkbox } from './Checkbox'
import type { CheckboxTree } from './useMixedStateCheckbox'
import { useMixedStateCheckbox } from './useMixedStateCheckbox'

/* eslint-disable sort-keys-fix/sort-keys-fix */

const FormDemo = () => {
  // Set up local state and child change handlers
  const [parentState, setParentState] = useState<MixedBoolean>(false)
  const [appleState, setAppleState] = useState<MixedBoolean>(false)
  const [bananaState, setBananaState] = useState<MixedBoolean>(false)
  const handleAppleChange = () => setAppleState(!appleState)

  const handleBananaChange = () => setBananaState(!bananaState)

  // Establish checkbox hierarchy for use in custom hook
  const fruitTree: CheckboxTree = {
    parent: {
      setState: setParentState,
      state: parentState,
    },
    children: [
      { setState: setAppleState, state: appleState },
      { setState: setBananaState, state: bananaState },
    ],
  }

  // Sync parent/child states and get provided parent change handler
  const handleParentChange = useMixedStateCheckbox(fruitTree)

  return (
    <>
      <Checkbox
        id="fruit-parent"
        name="fruit"
        value="all-fruit"
        onChange={handleParentChange}
        checked={parentState}
      />
      <Label htmlFor="fruit-parent" fontSize="medium">
        All Fruit
      </Label>
      <Checkbox
        id="fruit-apple"
        name="fruit"
        value="apple"
        onChange={handleAppleChange}
        checked={appleState}
      />
      <Label htmlFor="fruit-apple" fontSize="large">
        Apple
      </Label>
      <Checkbox
        id="fruit-banana"
        name="fruit"
        value="apple"
        onChange={handleBananaChange}
        checked={bananaState}
      />
      <Label htmlFor="fruit-banana" fontSize="large">
        Banana
      </Label>
    </>
  )
}

test('Parent element receives `checked="mixed"` state when some (but not all) children are checked', () => {
  renderWithTheme(<FormDemo />)
  const parent = screen.getByLabelText('All Fruit') as HTMLInputElement
  const child = screen.getByLabelText('Apple') as HTMLInputElement
  const parentAttr = parent.attributes.getNamedItem('aria-checked') as Attr
  const childAttr = child.attributes.getNamedItem('aria-checked') as Attr

  expect(parentAttr.value).toEqual('false')
  expect(childAttr.value).toEqual('false')

  fireEvent.click(child)

  expect(parentAttr.value).toEqual('mixed')
  expect(childAttr.value).toEqual('true')
})

test('Parent element receives `checked="true"` state all children are checked', () => {
  renderWithTheme(<FormDemo />)
  const parent = screen.getByLabelText('All Fruit') as HTMLInputElement
  const child1 = screen.getByLabelText('Apple') as HTMLInputElement
  const child2 = screen.getByLabelText('Banana') as HTMLInputElement
  const parentAttr = parent.attributes.getNamedItem('aria-checked') as Attr
  const child1Attr = child1.attributes.getNamedItem('aria-checked') as Attr
  const child2Attr = child2.attributes.getNamedItem('aria-checked') as Attr

  expect(parentAttr.value).toEqual('false')
  expect(child1Attr.value).toEqual('false')
  expect(child2Attr.value).toEqual('false')

  fireEvent.click(child1)
  fireEvent.click(child2)

  expect(parentAttr.value).toEqual('true')
  expect(child1Attr.value).toEqual('true')
  expect(child2Attr.value).toEqual('true')
})

test('Clicking Parent element toggles all children', () => {
  renderWithTheme(<FormDemo />)
  const parent = screen.getByLabelText('All Fruit') as HTMLInputElement
  const child1 = screen.getByLabelText('Apple') as HTMLInputElement
  const child2 = screen.getByLabelText('Banana') as HTMLInputElement
  const parentAttr = parent.attributes.getNamedItem('aria-checked') as Attr
  const child1Attr = child1.attributes.getNamedItem('aria-checked') as Attr
  const child2Attr = child2.attributes.getNamedItem('aria-checked') as Attr

  expect(parentAttr.value).toEqual('false')
  expect(child1Attr.value).toEqual('false')
  expect(child2Attr.value).toEqual('false')

  fireEvent.click(parent)

  expect(parentAttr.value).toEqual('true')
  expect(child1Attr.value).toEqual('true')
  expect(child2Attr.value).toEqual('true')
})
