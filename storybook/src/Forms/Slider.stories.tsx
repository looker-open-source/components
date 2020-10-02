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

import React, {
  useState,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { FieldSlider, Slider } from '@looker/components'

export default {
  title: 'Forms/Slider',
}

const handleEvent = (cb: Dispatch<SetStateAction<number>>) => {
  return (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    cb(parseInt(target.value, 10))
  }
}

export const Basic = () => <Slider min={0} max={5} />
export const Disabled = () => <Slider min={0} max={5} value={3} disabled />
export const Steps = () => (
  <FieldSlider label="Step" min={100} max={10000} step={100} />
)

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
