/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'
import { UnorderedList } from '../../../UnorderedList'
import {
  CheckboxTree,
  MixedBoolean,
  useMixedStateCheckbox,
} from '../../Inputs/Checkbox'
import { FieldCheckbox, FieldCheckboxProps } from './FieldCheckbox'

const Template: Story<FieldCheckboxProps> = (args) => (
  <FieldCheckbox {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  id: 'id',
  label: 'Example Field',
  name: 'thumbsUp',
}

export const DetailDescription = Template.bind({})
DetailDescription.args = {
  ...Basic.args,
  description: 'describe something here.',
  detail: '4/20',
}

export const Checked = Template.bind({})
Checked.args = {
  ...Basic.args,
  checked: true,
}

export const DefaultChecked = Template.bind({})
DefaultChecked.args = {
  ...Basic.args,
  defaultChecked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  ...Checked.args,
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...Basic.args,
  readOnly: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'This is an error', type: 'error' },
}

export const DetailDescriptionError = Template.bind({})
DetailDescriptionError.args = {
  ...DetailDescription.args,
  validationMessage: { message: 'This is an error', type: 'error' },
}

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
    children: [
      { setState: setAppleState, state: appleState },
      { setState: setBananaState, state: bananaState },
      { setState: setAvocadoState, state: avocadoState },
    ],
    parent: {
      setState: setParentState,
      state: parentState,
    },
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
      <UnorderedList pl="large">
        <li>
          <FieldCheckbox
            id="fruit-apple"
            name="fruit"
            value="apple"
            label="🍏"
            onChange={handleAppleChange}
            checked={appleState}
          />
        </li>
        <li>
          <FieldCheckbox
            id="fruit-banana"
            name="fruit"
            value="apple"
            onChange={handleBananaChange}
            checked={bananaState}
            label="🍌"
          />
        </li>
        <li>
          <FieldCheckbox
            id="fruit-avocado"
            name="fruit"
            value="apple"
            onChange={handleAvocadoChange}
            checked={avocadoState}
            label="🥑"
          />
        </li>
      </UnorderedList>
    </>
  )
}

export default {
  component: FieldCheckbox,
  title: 'FieldCheckbox',
}
