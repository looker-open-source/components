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

import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { InputColor, InputColorProps } from './InputColor'

const Template: Story<InputColorProps> = (args) => <InputColor {...args} />

export default {
  component: InputColor,
  title: 'InputColor',
}

export const Basic = Template.bind({})
Basic.args = {}

export const ColorChosen = Template.bind({})
ColorChosen.args = {
  defaultValue: 'purple',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...ColorChosen.args,
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...ColorChosen.args,
  readOnly: true,
}

// import React, { useState } from 'react'

// export default { title: 'Forms/Color' }

// export const ControlledColor = () => {
//   const [color, setColor] = useState('red')

//   function handleChange(value: string) {
//     setColor(value)
//   }

//   function handleColorChange(e: React.FormEvent<HTMLInputElement>) {
//     setColor(e.currentTarget.value)
//   }

//   return (
//     <>
//       <FieldSelect
//         options={[{ value: 'green' }, { value: 'purple' }, { value: 'red' }]}
//         value={color}
//         onChange={handleChange}
//       />
//       <FieldColor value={color} onChange={handleColorChange} />
//     </>
//   )
// }
