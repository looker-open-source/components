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
import type { FormEvent } from 'react'
import React, { useState } from 'react'
import {
  SpaceVertical,
  ButtonToggle,
  ButtonItem,
  FieldText,
} from '@looker/components'
import type { YAxisConfig, XAxisConfig } from '@looker/visualizations-adapters'
import partial from 'lodash/partial'
import curry from 'lodash/curry'
import { Checkbox } from '../../Checkbox'
import { TickDensity } from './TickDensity'
import { Range } from './Range'
import has from 'lodash/has'

export type CoreProps = {
  axisConfig: YAxisConfig[] | XAxisConfig[]
  onAxisChange: (axisIndex: number, axis: YAxisConfig | XAxisConfig) => void
}

export const Core = ({ onAxisChange, axisConfig }: CoreProps) => {
  const [group, setGroup] = useState('1')

  const handleLabelChange = curry(
    (i: number, axis: XAxisConfig, e: FormEvent) => {
      const { value } = e.target as HTMLInputElement
      onAxisChange(i, { ...axis, label: value.length ? value : false })
    }
  )

  return (
    <>
      {axisConfig.length > 1 && (
        <ButtonToggle value={group} onChange={setGroup}>
          {axisConfig.map((_, i) => (
            <ButtonItem key={i}>{String(i + 1)}</ButtonItem>
          ))}
        </ButtonToggle>
      )}

      {axisConfig.map((axis, i) => {
        return (
          String(i + 1) === group && (
            <SpaceVertical key={i}>
              {has(axis, 'label') && (
                <FieldText
                  label="Label"
                  value={typeof axis.label === 'string' ? axis.label : ''}
                  onChange={handleLabelChange(i)(axis)}
                />
              )}

              {has(axis, 'reversed') && (
                <Checkbox
                  label="Reverse"
                  checked={(axis as XAxisConfig).reversed}
                  onChange={(checked: boolean) =>
                    onAxisChange(i, {
                      ...axis,
                      reversed: checked,
                    })
                  }
                />
              )}

              {has(axis, 'gridlines') && (
                <Checkbox
                  label="Render Gridlines"
                  checked={axis.gridlines}
                  onChange={(checked: boolean) =>
                    onAxisChange(i, {
                      ...axis,
                      gridlines: checked,
                    })
                  }
                />
              )}

              {has(axis, 'values') && (
                <Checkbox
                  label="Show Values"
                  checked={axis.values}
                  onChange={(checked: boolean) =>
                    onAxisChange(i, {
                      ...axis,
                      values: checked,
                    })
                  }
                />
              )}

              {has(axis, 'tick_density') && (
                <TickDensity
                  axis={axis}
                  onAxisChange={partial(onAxisChange, i)}
                />
              )}

              {has(axis, 'range') && (
                <Range axis={axis} onAxisChange={partial(onAxisChange, i)} />
              )}
            </SpaceVertical>
          )
        )
      })}
    </>
  )
}
