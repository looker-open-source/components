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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { createEvent, fireEvent, screen } from '@testing-library/react'

import { InputChips } from './InputChips'

describe('InputChips', () => {
  test('values are added on Enter keydown', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputChips onChange={onChangeMock} values={[]} placeholder="type here" />
    )
    const input = screen.getByPlaceholderText('type here')
    fireEvent.change(input, { target: { value: 'tag1' } })
    expect(onChangeMock).not.toHaveBeenCalled()

    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
    expect(input).toHaveValue('')
  })

  test('values are added when a comma is last character entered', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputChips onChange={onChangeMock} values={[]} placeholder="type here" />
    )
    const input = screen.getByPlaceholderText('type here')

    // if the last character entered is a comma, values are added
    fireEvent.change(input, { target: { value: 'tag1,' } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
    expect(input).toHaveValue('')
  })

  function firePasteEvent(element: HTMLElement, value: string) {
    const eventProperties = {
      clipboardData: {
        getData: () => value,
      },
    }

    const pasteEvent = createEvent.paste(element, eventProperties)

    fireEvent(element, pasteEvent)
  }

  test('values are added when pasting', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputChips onChange={onChangeMock} values={[]} placeholder="type here" />
    )
    const input = screen.getByPlaceholderText('type here')
    // Newlines are stripped when pasting into a text input,
    // but InputChips saves the clipboard with newlines intact from the onPaste
    firePasteEvent(
      input,
      `tag1
tag2`
    )
    fireEvent.change(input, { target: { value: 'tag1  tag2' } })
    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2'])

    // If change follows a paste, no need for the last character to be a comma
    onChangeMock.mockClear()
    firePasteEvent(input, `tag1,tag2`)
    fireEvent.change(input, { target: { value: 'tag1, tag2' } })
    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2'])
  })

  test('values are added on blur', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputChips onChange={onChangeMock} values={[]} placeholder="type here" />
    )
    const input = screen.getByPlaceholderText('type here')
    fireEvent.change(input, { target: { value: 'tag1' } })
    expect(onChangeMock).not.toHaveBeenCalled()

    fireEvent.blur(input)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
    expect(input).toHaveValue('')
  })

  test('new values are appended to existing values', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputChips
        onChange={onChangeMock}
        values={['tag1']}
        placeholder="type here"
      />
    )
    const input = screen.getByPlaceholderText('type here')
    fireEvent.change(input, { target: { value: 'tag2,' } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(['tag1', 'tag2'])
    expect(input).toHaveValue('')
  })

  test('values are removed on backspace keydown', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputChips
        onChange={onChangeMock}
        values={['tag1']}
        placeholder="type here"
      />
    )
    const input = screen.getByPlaceholderText('type here')

    // If there is text in the input, Backspace doesn't remove values
    fireEvent.change(input, { target: { value: 't' } })
    fireEvent.keyDown(input, { key: 'Backspace' })
    expect(onChangeMock).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.keyDown(input, { key: 'Backspace' })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith([])
  })

  test('all values are removed by clicking clear field', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(
      <InputChips onChange={onChangeMock} values={['tag1', 'tag2']} />
    )
    const clear = screen.getByText('Clear Field')

    fireEvent.click(clear)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith([])
  })

  test('values are removed by clicking remove on the chip', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(<InputChips onChange={onChangeMock} values={['tag1']} />)
    const remove = screen.getByText('Delete')

    fireEvent.click(remove)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith([])
  })

  test('new values are validated', () => {
    const onChangeMock = jest.fn()
    const onValidationFailMock = jest.fn()
    const onDuplicateMock = jest.fn()

    const validate = jest.fn((value) => value === 'tag1')
    renderWithTheme(
      <InputChips
        onChange={onChangeMock}
        values={[]}
        placeholder="type here"
        validate={validate}
        onValidationFail={onValidationFailMock}
        onDuplicate={onDuplicateMock}
      />
    )
    const input = screen.getByPlaceholderText('type here')
    fireEvent.change(input, { target: { value: 'tag2,' } })
    // onChange is not called if there are now new valid values
    expect(onChangeMock).not.toHaveBeenCalled()
    // invalid value remains in the input
    expect(input).toHaveValue('tag2')
    expect(onValidationFailMock).toHaveBeenCalledWith(['tag2'])

    // value should be trimmed before validation
    fireEvent.change(input, { target: { value: ' tag1,' } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
    expect(input).toHaveValue('')
  })

  test('duplicate values are not added', () => {
    const onChangeMock = jest.fn()
    const onDuplicateMock = jest.fn()

    renderWithTheme(
      <InputChips
        onChange={onChangeMock}
        values={['tag1']}
        placeholder="type here"
        onDuplicate={onDuplicateMock}
      />
    )
    const input = screen.getByPlaceholderText('type here')

    // value should be trimmed before validation
    fireEvent.change(input, { target: { value: ' tag1,' } })
    expect(onChangeMock).toHaveBeenCalledTimes(0)
    expect(onDuplicateMock).toHaveBeenCalledWith(['tag1'])
    expect(input).toHaveValue('tag1')
  })

  test('escaped commas and tabs are preserved', () => {
    const onChangeMock = jest.fn()

    renderWithTheme(
      <InputChips onChange={onChangeMock} values={[]} placeholder="type here" />
    )
    const input = screen.getByPlaceholderText('type here')

    fireEvent.change(input, { target: { value: 'tag\\,1,tag\\	2,' } })
    expect(onChangeMock).toHaveBeenCalledWith(['tag,1', 'tag	2'])
  })

  describe('removeOnBackspace', () => {
    test('true by default', () => {
      const onChangeMock = jest.fn()

      renderWithTheme(
        <InputChips
          onChange={onChangeMock}
          values={['foo', 'bar']}
          placeholder="type here"
        />
      )
      const input = screen.getByPlaceholderText('type here')

      fireEvent.keyDown(input, {
        key: 'Backspace',
      })

      expect(onChangeMock).toHaveBeenCalledWith(['foo'])
    })

    test('false', () => {
      const onChangeMock = jest.fn()

      renderWithTheme(
        <InputChips
          onChange={onChangeMock}
          values={['foo', 'bar']}
          placeholder="type here"
          removeOnBackspace={false}
        />
      )
      const input = screen.getByPlaceholderText('type here')

      fireEvent.keyDown(input, {
        key: 'Backspace',
      })

      expect(onChangeMock).not.toHaveBeenCalled()
    })
  })

  test('mousedown on a chip does not focus the inner input', () => {
    const rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())

    renderWithTheme(
      <InputChips
        onChange={() => null}
        values={['foo', 'bar']}
        placeholder="type here"
      />
    )

    const chip = screen.getByText('bar')
    const deleteButton = screen.getAllByText('Delete')[0]
    const input = screen.getByPlaceholderText('type here')

    fireEvent.mouseDown(chip)
    expect(document.activeElement).not.toEqual(input)

    // Focus should move _after_ delete button is clicked
    fireEvent.click(deleteButton)
    expect(document.activeElement).toEqual(input)

    rafSpy.mockRestore()
  })

  test('mousedown on clear button does not focus the inner input', () => {
    const rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())

    renderWithTheme(
      <InputChips
        onChange={() => null}
        values={['foo', 'bar']}
        placeholder="type here"
      />
    )

    const clear = screen.getByText('Clear Field')
    const input = screen.getByPlaceholderText('type here')

    fireEvent.mouseDown(clear)
    expect(document.activeElement).not.toEqual(input)

    // Focus should move _after_ clear button is clicked
    fireEvent.click(clear)
    expect(document.activeElement).toEqual(input)

    rafSpy.mockRestore()
  })
})
