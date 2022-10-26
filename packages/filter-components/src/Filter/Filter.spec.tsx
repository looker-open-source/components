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
import { ComponentsProvider } from '@looker/components'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { Filter } from './Filter'
import type { FilterChangeProps } from './types/filter_props'

describe('Filter', () => {
  it('reflects changes to the expression prop', () => {
    const onChangeMock = jest.fn()
    const { rerender } = renderWithTheme(
      <Filter
        expression=""
        expressionType="date"
        onChange={onChangeMock}
        name="Test Filter"
        allowMultipleValues={true}
      />
    )
    expect(screen.getByText('is any time')).toBeVisible()

    rerender(
      <ComponentsProvider>
        <Filter
          expression="1999"
          expressionType="date"
          onChange={onChangeMock}
          name="Test Filter"
          allowMultipleValues={true}
        />
      </ComponentsProvider>
    )
    expect(screen.getByDisplayValue('is in the year')).toBeVisible()
    expect(screen.getByDisplayValue('1999')).toBeVisible()
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('reflects changes to the filter type prop', () => {
    const onChangeMock = jest.fn()
    const { rerender } = renderWithTheme(
      <Filter
        expression="1999"
        expressionType="date"
        onChange={onChangeMock}
        name="Test Filter"
        allowMultipleValues={true}
      />
    )
    expect(screen.getByDisplayValue('is in the year')).toBeVisible()
    expect(screen.getByDisplayValue('1999')).toBeVisible()

    rerender(
      <ComponentsProvider>
        <Filter
          expression="1999"
          expressionType="string"
          onChange={onChangeMock}
          name="Test Filter"
          allowMultipleValues={true}
        />
      </ComponentsProvider>
    )
    expect(screen.getByDisplayValue('is')).toBeVisible()
    expect(screen.getByText('1999')).toBeVisible()
  })

  it('handles multi-step interactive changes', () => {
    const onChangeMock = jest.fn()
    // Simulate a controlled expression prop
    const TestComponent = () => {
      const [expression, setExpression] = useState('')
      const handleChange = (value: { expression: string }) => {
        onChangeMock(value)
        setExpression(value.expression)
      }
      return (
        <Filter
          expression={expression}
          expressionType="number"
          onChange={handleChange}
          name="Test Filter"
          allowMultipleValues={true}
        />
      )
    }

    renderWithTheme(<TestComponent />)
    const select = screen.getByDisplayValue('is')
    fireEvent.click(select)
    fireEvent.click(screen.getByText('is between'))
    fireEvent.change(screen.getByTestId('low'), {
      target: { value: '5' },
    })

    expect(onChangeMock).toHaveBeenCalledWith({ expression: '[5,]' })
    // If the expression were to be re-parsed now, it would change to >=
    // Verify that UI is still on "is between"
    expect(screen.getByDisplayValue('is between')).toBeVisible()
    fireEvent.change(screen.getByTestId('high'), {
      target: { value: '10' },
    })
    expect(onChangeMock).toHaveBeenCalledWith({ expression: '[5,]' })
  })

  it('handles multi-step interactive changes with proper on change', () => {
    const onChangeMock = jest.fn()
    // Simulate a controlled expression prop
    const TestComponent = () => {
      const [expression, setExpression] = useState('[5,]')
      const handleChange = (value: { expression: string }) => {
        onChangeMock(value)
        setExpression(value.expression)
      }
      return (
        <Filter
          expression={expression}
          expressionType="number"
          onChange={handleChange}
          name="Test Filter"
          allowMultipleValues={true}
        />
      )
    }

    renderWithTheme(<TestComponent />)
    expect(onChangeMock).not.toHaveBeenCalled()
    fireEvent.change(screen.getByTestId('single-number'), {
      target: { value: '5' },
    })
    // on change is not called when the expression does not change
    expect(onChangeMock).not.toHaveBeenCalled()

    fireEvent.change(screen.getByTestId('single-number'), {
      target: { value: '6' },
    })
    expect(onChangeMock).toHaveBeenCalledWith({ expression: '>=6' })
  })

  it('use dispatchConfigTypeChange to call onChange in EditMode', () => {
    const onChangeMock = jest.fn()
    // Simulate a controlled expression prop in EditMode
    // using dispatchConfigTypeChange=true
    const TestComponent = () => (
      <Filter
        expression={'1'}
        expressionType="number"
        onChange={onChangeMock}
        name="Test Filter"
        config={{ display: 'inline', type: 'slider' }}
        dispatchConfigTypeChange={true}
        allowMultipleValues={true}
      />
    )

    renderWithTheme(<TestComponent />)
    expect(onChangeMock).toHaveBeenCalledWith({ expression: '1' })
  })

  it('does not call onChange when dispatchConfigTypeChange is false', () => {
    const onChangeMock = jest.fn()
    // Simulate a controlled expression prop in View Mode
    const TestComponent = () => (
      <Filter
        expression={'1,2,3'}
        expressionType="number"
        onChange={onChangeMock}
        name="Test Filter"
        config={{ display: 'inline', type: 'slider' }}
        dispatchConfigTypeChange={false}
        allowMultipleValues={true}
      />
    )

    renderWithTheme(<TestComponent />)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('does not switch component types while typing (Matches Advanced)', () => {
    // Simulate changing props outside of React state (like Redux)
    let expression = '5 mont'
    const onChange = (newValue: FilterChangeProps) => {
      expression = newValue.expression
    }

    const TestComponent = () => {
      const [, setUpdate] = useState(false)
      return (
        <>
          <button onClick={() => setUpdate(true)}>rerender</button>
          <Filter
            expression={expression}
            expressionType="date"
            onChange={onChange}
            name="Test Filter"
            allowMultipleValues={true}
          />
        </>
      )
    }

    renderWithTheme(<TestComponent />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs[0]).toHaveValue('matches (advanced)')
    expect(inputs[1]).toHaveValue('5 mont')

    fireEvent.change(inputs[1], { target: { value: '5 month' } })
    // Simulate "delayed" rerender triggered by Redux
    fireEvent.click(screen.getByText('rerender'))

    const updatedInputs = screen.getAllByRole('textbox')
    expect(updatedInputs[0]).toHaveValue('matches (advanced)')
    expect(updatedInputs[1]).toHaveValue('5 month')
  })

  it('requires at least one of: expressionType, field, type', () => {
    // @ts-expect-error: require one of expressionType, field, or type
    renderWithTheme(<Filter expression="" name="test" />)
    // Just expressionType: good
    renderWithTheme(
      <Filter expression="" name="test" expressionType="string" />
    )
    // Just field: good
    renderWithTheme(<Filter expression="" name="test" field={{}} />)
    // Just type: good
    renderWithTheme(<Filter expression="" name="test" type="date_filter" />)
    // expressionType, field and type: good
    renderWithTheme(
      <Filter
        expression=""
        name="test"
        expressionType="string"
        field={{}}
        type="field_filter"
      />
    )
  })
})
