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
import React, { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Tooltip } from '../Tooltip'

export default function PerformanceTest() {
  const [value, setValue] = useState('')
  const handleChange = (e: FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value)
  const lastRenderRef = useRef(Date.now())
  useEffect(() => {
    const now = Date.now()
    const diff = now - lastRenderRef.current
    // eslint-disable-next-line no-console
    console.log(diff)
    lastRenderRef.current = now
  })
  return (
    <div>
      <p>Type fast then hold down delete:</p>
      <input type="text" value={value} onChange={handleChange} />
      <p>The text shouldn't freeze due to main thread being blocked.</p>
      <div>
        {Array.from(Array(1000), (_, i) => (
          <Tooltip key={i} content="I'm a tooltip">
            <button>Hover me</button>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
