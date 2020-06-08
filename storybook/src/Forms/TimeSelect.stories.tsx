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
import { ButtonToggle, FieldTimeSelect, Fieldset } from '@looker/components'

export const All = () => (
  <Fieldset>
    <Basic />
    <Disabled />
    <Required />
    <Error />
    <Controlled />
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/TimeSelect',
}

export const Basic = () => <FieldTimeSelect interval={10} label="Label" />

export const Disabled = () => (
  <FieldTimeSelect disabled label="Label" interval={10} />
)

export const Required = () => (
  <FieldTimeSelect interval={10} required label="Label" />
)

export const Error = () => (
  <FieldTimeSelect
    interval={10}
    description="this is the description is a very long one"
    detail="detail"
    label="Label"
    validationMessage={{ message: 'validation Message', type: 'error' }}
  />
)

export const Controlled = () => {
  const [controlledTime, setControlledTime] = useState<any>('09:00')
  const handleClick = (value: string) => setControlledTime(value)

  const options = [
    { label: '11:05a', value: '11:05' },
    { label: '2:00pm', value: '14:00' },
    { label: '3:15pm', value: '15:15' },
    { label: '4:30pm', value: '16:30' },
  ]

  return (
    <>
      <ButtonToggle
        value={controlledTime}
        onChange={handleClick}
        options={options}
      />

      <Fieldset inline>
        <FieldTimeSelect
          label="Standard Time"
          value={controlledTime}
          onChange={setControlledTime}
        />
        <FieldTimeSelect
          label="Military Time"
          value={controlledTime}
          onChange={setControlledTime}
          format="24h"
        />
      </Fieldset>
    </>
  )
}
