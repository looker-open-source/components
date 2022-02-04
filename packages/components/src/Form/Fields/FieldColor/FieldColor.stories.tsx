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

import type { Story } from '@storybook/react/types-6-0'
import type { FormEvent } from 'react'
import React, { useState } from 'react'
import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import { defaultArgTypes as argTypes } from '../../../../../../apps/storybook/src/defaultArgTypes'
import { Button } from '../../../Button'
import type { FieldColorProps } from './FieldColor'
import { FieldColor } from './FieldColor'

export default {
  argTypes,
  component: FieldColor,
  title: 'FieldColor',
}

const Template: Story<
  FieldColorProps & { initialValue: string; externalLabel: boolean }
> = ({ externalLabel = true, initialValue, ...args }) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e: FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value)

  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel } }}
    >
      <FieldColor {...args} value={value} onChange={handleChange} />
    </ExtendComponentsThemeProvider>
  )
}

export const Basic = Template.bind({})
Basic.args = { initialValue: 'purple', label: 'Basic' }

export const Required = Template.bind({})
Required.args = {
  ...Basic.args,
  required: true,
}

export const FloatingLabel = Template.bind({})
FloatingLabel.args = { ...Basic.args, externalLabel: false }

export const FloatingLabelNoDefaultValue = Template.bind({})
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  initialValue: undefined,
  label: 'Example',
}

export const ControlledFloatingLabelNoValue = () => {
  const [blue, setBlue] = useState<string>('')
  const onClickSetColorToBlue = () => setBlue('blue')
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <Button onClick={onClickSetColorToBlue}>Blue</Button>
      <FieldColor externalLabel={false} label="Controlled" value={blue} />
    </ExtendComponentsThemeProvider>
  )
}
ControlledFloatingLabelNoValue.parameters = {
  storyshots: { disable: true },
}

export const ControlledFloatingLabel = () => {
  const [blue, setBlue] = useState<string>('white')
  const onClickSetColorToBlue = () => setBlue('blue')
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <Button onClick={onClickSetColorToBlue}>Blue</Button>
      <FieldColor externalLabel={false} label="Controlled" value={blue} />
    </ExtendComponentsThemeProvider>
  )
}
ControlledFloatingLabel.parameters = {
  storyshots: { disable: true },
}
