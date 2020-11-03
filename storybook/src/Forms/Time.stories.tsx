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
import partial from 'lodash/partial'
import {
  Button,
  FieldTime,
  InputTime,
  Paragraph,
  Space,
  SpaceVertical,
} from '@looker/components'

export default {
  title: 'Forms/Time',
}

export const Basic = () => (
  <FieldTime defaultValue="14:34" format="12h" label="Label" />
)

export const Disabled = () => (
  <FieldTime disabled label="Label" defaultValue="02:34" />
)

export const Required = () => (
  <FieldTime label="Label" defaultValue="14:34" required />
)

export const ValidationError = () => (
  <FieldTime
    autoFocus
    defaultValue="14:34"
    description="this is the description is a very long one"
    detail="detail"
    label="Label"
    validationMessage={{ message: 'validation Message', type: 'error' }}
  />
)

export const Controlled = () => {
  const [controlledTime, setControlledTime] = useState<string | undefined>(
    '12:00'
  )
  return (
    <SpaceVertical>
      <Paragraph>Selected: {controlledTime}</Paragraph>

      <Space>
        <Button onClick={partial(setControlledTime, '14:00')}>2:00pm</Button>
        <Button onClick={partial(setControlledTime, '15:15')}>3:15pm</Button>
        <Button onClick={partial(setControlledTime, '16:32')}>4:32pm</Button>
      </Space>

      <InputTime value={controlledTime} onChange={setControlledTime} />
    </SpaceVertical>
  )
}

export const MilitaryTime = () => {
  const [format24Time, setFormat24Time] = useState<string>()

  return (
    <>
      <Paragraph>Selected: {format24Time}</Paragraph>
      <InputTime format="24h" defaultValue="14:34" onChange={setFormat24Time} />
    </>
  )
}
