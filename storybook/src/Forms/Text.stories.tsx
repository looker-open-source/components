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
  Button,
  FieldText,
  FieldCheckbox,
  Fieldset,
  FieldRadio,
  FieldToggleSwitch,
  Icon,
  InputText,
  Space,
  Text,
  Tooltip,
  useToggle,
  SpaceVertical,
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
    <Before />
    <After />
    <IconBefore />
    <IconAfter />
    <Toggles />
    <AutoResize />
    <BeforeAfterValidation />
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
export const Inline = () => (
  <FieldText label="Text Input" inline detail="Detail inline looks like this" />
)
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
export const Before = () => <FieldText before="$" label="Dollars" />
export const After = () => <FieldText after="%" label="Percent" />
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

export function AutoResize() {
  return (
    <Space alignItems="flex-end">
      <InputText autoResize placeholder="Start typing to resize me" />
      <FieldText
        label="I also resize"
        autoResize
        defaultValue="Some default text"
        detail="Detail lines up"
      />
      <FieldText
        label="Inline autoResize"
        inline
        autoResize
        defaultValue="Some default text"
        detail="Detail text"
      />
    </Space>
  )
}

export function BeforeAfterValidation() {
  const { value, toggle } = useToggle(true)
  const validation = value
    ? { validationMessage: { message: 'Oops!', type: 'error' as 'error' } }
    : {}
  return (
    <SpaceVertical align="start">
      <Button onClick={toggle}>Toggle error state</Button>
      <Space>
        <FieldText label="iconBefore" iconBefore="Favorite" {...validation} />
        <FieldText label="iconAfter" iconAfter="Account" {...validation} />
        <FieldText label="before string" before="$" {...validation} />
        <FieldText label="after string" after="%" {...validation} />
        <FieldText
          label="before &amp; after"
          before={
            <Tooltip content="Some very important info">
              <Icon
                name="AddAlerts"
                size="small"
                style={{ cursor: 'default' }}
              />
            </Tooltip>
          }
          after={
            <Text fontSize="small" color={value ? 'critical' : 'info'}>
              Helper text
            </Text>
          }
          {...validation}
        />
      </Space>
    </SpaceVertical>
  )
}
