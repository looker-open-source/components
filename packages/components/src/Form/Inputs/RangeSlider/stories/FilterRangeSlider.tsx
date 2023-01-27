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

import React from 'react'
import { RangeSlider } from '..'
import { useToggle } from '../../../../utils'
import {
  Space,
  Button,
  Paragraph,
  SpaceVertical,
  OrderedList,
} from '../../../..'

const getRange = (value?: number[]) => [
  value && value[0] ? value[0] : 0,
  value && value[1] ? value[1] : 0,
]

const NumberFilter = ({
  AST,
  onChange,
}: {
  AST: { value?: number[] }
  onChange: (value: number[]) => void
}) => {
  const { value, toggle } = useToggle()
  const rangeValue = getRange(AST.value)
  return (
    <>
      <RangeSlider
        min={0}
        max={value ? 5 : 100}
        value={rangeValue}
        onChange={onChange}
      />
      <Space>
        <Button onClick={toggle}>
          Change min/max to 0 - {value ? '100' : '5'}
        </Button>
        <Paragraph>Current Value: {rangeValue.join(',')}</Paragraph>
      </Space>
    </>
  )
}

const getValue = (expression: string) =>
  expression.split(',').map(text => parseInt(text, 10))

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
    onChange(newValue.join(', '))
  }
  return <NumberFilter AST={AST} onChange={handleChange} />
}

// Reproduce and verify rerendering behavior
export default function FilterRangeSlider() {
  const [expression, setExpression] = React.useState('0,10')
  const handleChange = (newValue: string) => {
    setExpression(newValue)
  }
  return (
    <SpaceVertical p="u4" align="stretch">
      <OrderedList type="number">
        <li>
          When updating the min/max, the value should move to stay within
          bounds.
        </li>
        <li>When changing the value, it should not immediately reset.</li>
      </OrderedList>
      <Filter expression={expression} onChange={handleChange} />
    </SpaceVertical>
  )
}
