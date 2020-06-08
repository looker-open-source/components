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
import React from 'react'
import {
  FieldText,
  FieldCheckbox,
  Fieldset,
  FieldRadio,
  FieldToggleSwitch,
} from '@looker/components'

export const All = () => (
  <Fieldset>
    <Basic />
    <Detail />
    <Description />
    <Inline />
    <Disabled />
    <Required />
    <Placeholder />
    <Value />
    <ValidationError />
    <Prefix />
    <Suffix />
    <IconBefore />
    <IconAfter />
    <Toggles />
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/Text',
}

export const Basic = () => <FieldText label="Text Input" />
export const Detail = () => <FieldText label="Text Input" detail="0/50" />
export const Description = () => (
  <FieldText
    label="Text Input"
    description="Some important information about this field"
  />
)
export const Inline = () => <FieldText label="Text Input" inline />
export const Disabled = () => <FieldText label="Text Input" disabled />
export const Required = () => <FieldText label="Text Input" required />
export const Placeholder = () => (
  <FieldText label="Text Input" placeholder="Placeholder text here" />
)
export const Value = () => <FieldText label="Text Input" value="Text here" />
export const ValidationError = () => (
  <FieldText
    label="Text Input"
    validationMessage={{ message: 'Error Message', type: 'error' }}
  />
)
export const Prefix = () => <FieldText prefix="$" label="Dollars" />
export const Suffix = () => <FieldText prefix="%" label="Percent" />
export const IconBefore = () => (
  <FieldText iconBefore="GearOutline" label="Settings" />
)
export const IconAfter = () => (
  <FieldText iconAfter="GearOutline" label="Settings" />
)

export const Toggles = () => (
  <>
    <FieldCheckbox label="Checkbox" />
    <FieldCheckbox
      required
      label="Checkbox"
      validationMessage={{ message: 'validation Message', type: 'error' }}
    />
    <FieldCheckbox disabled label="Checkbox" />
    <FieldCheckbox required label="Checkbox" />

    <FieldRadio label="Radio" />
    <FieldRadio disabled label="Radio" />

    <FieldToggleSwitch label="Toggle Switch" />
    <FieldToggleSwitch
      required
      label="Toggle Switch"
      validationMessage={{ message: 'validation Message', type: 'error' }}
    />
    <FieldToggleSwitch disabled label="Toggle Switch" />
    <FieldToggleSwitch required label="Toggle Switch" />
  </>
)
