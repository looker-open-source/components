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
import React, { useState } from 'react'
import {
  CheckboxTree,
  List,
  ListItem,
  Fieldset,
  FieldCheckbox,
  MixedBoolean,
  useMixedStateCheckbox,
} from '@looker/components'

export const All = () => (
  <Fieldset>
    <Basic />
    <Checked />
    <Disabled />
    <Required />
    <Error />
    <MixedState />
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/Checkbox',
}

export const Basic = () => <FieldCheckbox label="Text Input" />
export const Checked = () => <FieldCheckbox defaultChecked label="Text Input" />
export const Disabled = () => <FieldCheckbox label="Text Input" disabled />
export const Required = () => <FieldCheckbox label="Text Input" required />
export const Error = () => (
  <FieldCheckbox
    label="Text Input"
    validationMessage={{ message: 'Error Message', type: 'error' }}
  />
)

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const MixedState = () => {
  // Set up local state and child change handlers
  const [parentState, setParentState] = useState<MixedBoolean>('mixed')
  const [appleState, setAppleState] = useState<MixedBoolean>(true)
  const [bananaState, setBananaState] = useState<MixedBoolean>(false)
  const [avocadoState, setAvocadoState] = useState<MixedBoolean>(false)
  const handleAppleChange = () => setAppleState(!appleState)
  const handleBananaChange = () => setBananaState(!bananaState)
  const handleAvocadoChange = () => setAvocadoState(!avocadoState)

  // Establish checkbox hierarchy for use in custom hook
  const fruitTree: CheckboxTree = {
    parent: {
      setState: setParentState,
      state: parentState,
    },
    children: [
      { setState: setAppleState, state: appleState },
      { setState: setBananaState, state: bananaState },
      { setState: setAvocadoState, state: avocadoState },
    ],
  }

  // Sync parent/child states and get provided parent change handler
  const handleParentChange = useMixedStateCheckbox(fruitTree)

  return (
    <>
      <FieldCheckbox
        id="fruit-parent"
        name="fruit"
        value="all-fruit"
        onChange={handleParentChange}
        checked={parentState}
        label="Fruit"
      />
      <List pl="large">
        <ListItem>
          <FieldCheckbox
            id="fruit-apple"
            name="fruit"
            value="apple"
            label="🍏"
            onChange={handleAppleChange}
            checked={appleState}
          />
        </ListItem>
        <ListItem>
          <FieldCheckbox
            id="fruit-banana"
            name="fruit"
            value="apple"
            onChange={handleBananaChange}
            checked={bananaState}
            label="🍌"
          />
        </ListItem>
        <ListItem>
          <FieldCheckbox
            id="fruit-avocado"
            name="fruit"
            value="apple"
            onChange={handleAvocadoChange}
            checked={avocadoState}
            label="🥑"
          />
        </ListItem>
      </List>
    </>
  )
}
