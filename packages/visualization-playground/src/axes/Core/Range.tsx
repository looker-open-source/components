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
import type { FormEvent, FormEventHandler } from 'react'
import React from 'react'
import { isNumeric } from '@looker/visualizations'
import type { YAxisConfig, YAxisEndpoint } from '@looker/visualizations'
import { FieldText, Fieldset } from '@looker/components'
import { FieldInfo } from '../../FieldInfo'

export type RangeEditorProps = {
  axis: YAxisConfig
  onAxisChange: (axis: YAxisConfig) => void
}

export const Range = (props: RangeEditorProps) => {
  const {
    axis,
    axis: { range = ['auto', 'auto'] },
    onAxisChange,
  } = props

  const [yMin, yMax] = range

  const deriveRangeValue = (e: FormEvent): YAxisEndpoint => {
    const { value } = e.target as HTMLInputElement

    switch (true) {
      case isNumeric(value):
        return Number(value)
      case value === '-': // allow typing a negative number
        return (value as unknown) as number
      default:
        return 'auto'
    }
  }

  const handleMinChange: FormEventHandler<HTMLInputElement> = e => {
    onAxisChange({ ...axis, range: [deriveRangeValue(e), yMax] })
  }

  const handleMaxChange: FormEventHandler<HTMLInputElement> = e => {
    onAxisChange({ ...axis, range: [yMin, deriveRangeValue(e)] })
  }

  return (
    <Fieldset inline>
      <FieldText
        label="Y-min"
        value={yMin}
        onChange={handleMinChange}
        detail={<FieldInfo content="Number or 'auto'" />}
      />
      <FieldText
        label="Y-max"
        value={yMax}
        onChange={handleMaxChange}
        detail={<FieldInfo content="Number or 'auto'" />}
      />
    </Fieldset>
  )
}
