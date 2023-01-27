/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
