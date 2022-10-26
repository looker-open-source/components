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
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes as argTypes } from '@looker/storybook'
import type { RangeModifier } from '../../../../Calendar'
import type { InputDateRangeProps } from '../InputDateRange'
import { InputDateRange } from '../InputDateRange'

export { default as Popover } from './Popover'

export default {
  argTypes,
  component: InputDateRange,
  title: 'Stories/Form/Inputs/InputDateRange',
}

const Template: Story<InputDateRangeProps> = ({ value, ...args }) => {
  const [range, setRange] = useState<RangeModifier>(value)
  return <InputDateRange {...args} value={range} onChange={setRange} />
}

export const Basic = Template.bind({})
Basic.args = {
  value: {},
}

export const Value = Template.bind({})
Value.args = {
  value: {
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019'),
  },
}

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationType: 'error',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Value.args,
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...Value.args,
  readOnly: true,
}

export const ExternalUpdates = () => {
  const [value, setValue] = useState<RangeModifier>({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019'),
  })

  return (
    <>
      <button
        onClick={() =>
          setValue({
            from: new Date('June 5, 2019'),
            to: new Date('June 15, 2019'),
          })
        }
      >
        June 5 - 15, 2019
      </button>
      <button
        onClick={() =>
          setValue({
            from: new Date('January 1, 2012'),
            to: new Date('February 15, 2012'),
          })
        }
      >
        January 1 - February 15, 2012
      </button>
      <button onClick={() => setValue({ from: new Date('February 9, 2021') })}>
        From: February 9, 2021
      </button>
      <button onClick={() => setValue({ to: new Date('February 9, 2021') })}>
        To: February 9, 2021
      </button>
      <InputDateRange value={value} onChange={setValue} />
    </>
  )
}
ExternalUpdates.parameters = {
  storyshots: { disable: true },
}
