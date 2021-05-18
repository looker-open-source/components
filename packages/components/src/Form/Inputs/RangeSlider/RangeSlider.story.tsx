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

import React, { useState } from 'react'
import { Button } from '../../../Button'
import { Paragraph } from '../../../Text'
import { RangeSlider } from './RangeSlider'

export default {
  component: RangeSlider,
  title: 'RangeSlider',
}

const getRange = (value?: number[]) => [
  value && value[0] ? value[0] : 0,
  value && value[1] ? value[1] : 0,
]

const NumberFilter = ({
  AST: { value },
  onChange,
}: {
  AST: { value?: number[] }
  onChange: (value: number[]) => void
}) => {
  const [minMax, setMinMax] = useState([0, 100])
  const rangeValue = getRange(value)
  return (
    <>
      <RangeSlider
        min={minMax[0]}
        max={minMax[1]}
        value={rangeValue}
        onChange={onChange}
        width={200}
      />
      <Button onClick={() => setMinMax([0, 5])}>Min/max to 0 - 5</Button>
    </>
  )
}

const getValue = (expression: string) =>
  expression.split(',').map((text) => parseInt(text, 10))

const Filter = ({
  expression,
  onChange,
}: {
  expression: string
  onChange: (expression: string) => void
}) => {
  const [AST, setAST] = React.useState({
    value: getValue(expression),
  })
  const expressionRef = React.useRef(expression)
  React.useEffect(() => {
    if (expressionRef.current !== expression) {
      setAST({ value: getValue(expression) })
      expressionRef.current = expression
    }
  }, [expression])
  const handleChange = (newValue: number[]) => {
    onChange(newValue.join(','))
  }
  return <NumberFilter AST={AST} onChange={handleChange} />
}

export const RerenderRepro = () => {
  const [expression, setExpression] = React.useState('0,10')
  const handleChange = (newValue: string) => {
    setExpression(newValue)
  }
  return (
    <>
      <Paragraph>
        When updating the min/max, the value should move to stay within bounds.
      </Paragraph>
      <Paragraph>
        When changing the value, it should not immediately reset.
      </Paragraph>
      <Filter expression={expression} onChange={handleChange} />
    </>
  )
}

RerenderRepro.parameters = {
  docs: { disable: true },
  storyshots: { disable: true },
}
