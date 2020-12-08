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

import { Story } from '@storybook/react/types-6-0'
import React, {
  useState,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { FieldSlider, FieldSliderProps } from './FieldSlider'

export default {
  component: FieldSlider,
  title: 'FieldSlider',
}

const Template: Story<FieldSliderProps> = (args) => <FieldSlider {...args} />

export const Basic = Template.bind({})
Basic.args = { max: 5, min: 0 }

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, disabled: true }

export const Steps = Template.bind({})
Steps.args = { label: 'Step', max: 1000, min: 100, step: 100 }

const handleEvent = (cb: Dispatch<SetStateAction<number>>) => {
  return (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    cb(parseInt(target.value, 10))
  }
}
export const Controlled = () => {
  const [value, setValue] = useState(8)
  const onChange = handleEvent(setValue)

  return (
    <FieldSlider
      label="Controlled"
      description="Min: 0, Max: 11"
      min={0}
      max={11}
      value={value}
      onChange={onChange}
      aria-labelledby="test-id"
    />
  )
}
Controlled.parameters = {
  storyshots: { disable: true },
}
