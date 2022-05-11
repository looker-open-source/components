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
import type { FormEvent } from 'react'
import type { YAxisConfig } from '@looker/visualizations-adapters'
import { Slider, FieldRadio, Field, useID } from '@looker/components'

export type TickDensityProps = {
  axis: YAxisConfig
  onAxisChange: (axis: YAxisConfig) => void
}

export const TickDensity = (props: TickDensityProps) => {
  const {
    axis,
    // TODO: uncomment this when tick density is supported
    // axis: { tick_density },
    onAxisChange,
  } = props

  const [densityToggle, setDensityToggle] = useState<string>()
  // TODO: uncomment this when tick density is supported
  // tick_density === 'default' ? 'default' : 'custom'

  const handleSliderChange = (e: FormEvent) => {
    const draft = {
      ...axis,
      tick_density: parseInt((e.target as HTMLInputElement).value),
    }
    onAxisChange(draft)
  }

  const handleToggleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement
    setDensityToggle(value)
    // TODO: uncomment this when tick density is supported
    // const densityValue = value === 'default' ? 'default' : 50
    // onAxisChange({ ...axis, tick_density: densityValue })
  }

  const groupID = useID()

  return (
    <>
      <Field id={groupID} label="Tick Density">
        <FieldRadio
          name={`${groupID}-default`}
          label="Default"
          value="default"
          checked={densityToggle === 'default'}
          onChange={handleToggleChange}
        />
        <FieldRadio
          name={`${groupID}-custom`}
          label="Custom"
          value="custom"
          checked={densityToggle === 'custom'}
          onChange={handleToggleChange}
        />
      </Field>
      {densityToggle === 'custom' && (
        <Slider
          min={0}
          max={100}
          onChange={handleSliderChange}
          // TODO: uncomment this when tick density is supported

          // value={
          //   isNumeric(axis.tick_density)
          //     ? (axis.tick_density as number)
          //     : undefined
          // }
        />
      )}
    </>
  )
}
