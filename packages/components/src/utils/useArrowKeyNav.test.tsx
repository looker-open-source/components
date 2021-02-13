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

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { useArrowKeyNav, UseArrowKeyNavProps } from './useArrowKeyNav'

const ArrowKeyNavComponent = ({
  axis,
}: {
  axis?: UseArrowKeyNavProps<HTMLUListElement>['axis']
}) => {
  const navProps = useArrowKeyNav({ axis })
  return (
    <ul {...navProps}>
      <li tabIndex={-1}>first</li>
      <li tabIndex={-1}>second</li>
      <li tabIndex={-1}>third</li>
    </ul>
  )
}

describe('useArrowKeyNav', () => {
  test('tabbing', () => {
    render(
      <>
        <button>before</button>
        <ArrowKeyNavComponent />
        <button>after</button>
      </>
    )
    const before = screen.getByText('before')
    const first = screen.getByText('first')

    userEvent.click(before)
    userEvent.tab()
    expect(first).toHaveFocus()

    // second and third are skipped due to tabIndex={-1}
    userEvent.tab()
    expect(screen.getByText('after')).toHaveFocus()

    userEvent.tab({ shift: true })
    expect(first).toHaveFocus()

    userEvent.tab({ shift: true })
    expect(before).toHaveFocus()
  })

  test('up/down arrow keys', () => {
    render(
      <>
        <button>before</button>
        <ArrowKeyNavComponent />
        <button>after</button>
      </>
    )
    const before = screen.getByText('before')
    const first = screen.getByText('first')
    const second = screen.getByText('second')
    const third = screen.getByText('third')

    userEvent.click(before)
    userEvent.tab()

    userEvent.type(first, '{arrowdown}')
    expect(second).toHaveFocus()

    userEvent.type(second, '{arrowdown}')
    expect(third).toHaveFocus()

    // circles back
    userEvent.type(third, '{arrowdown}')
    expect(first).toHaveFocus()

    // circles back in reverse
    userEvent.type(first, '{arrowup}')
    expect(third).toHaveFocus()

    userEvent.type(third, '{arrowup}')
    expect(second).toHaveFocus()

    userEvent.tab({ shift: true })
    expect(before).toHaveFocus()

    // Previous focus item is persisted
    userEvent.tab()
    expect(second).toHaveFocus()
  })

  test('left/right arrow keys', () => {
    render(
      <>
        <button>before</button>
        <ArrowKeyNavComponent axis="horizontal" />
        <button>after</button>
      </>
    )
    const before = screen.getByText('before')
    const first = screen.getByText('first')
    const second = screen.getByText('second')
    const third = screen.getByText('third')

    userEvent.click(before)
    userEvent.tab()

    userEvent.type(first, '{arrowright}')
    expect(second).toHaveFocus()

    userEvent.type(second, '{arrowright}')
    expect(third).toHaveFocus()

    // circles back
    userEvent.type(third, '{arrowright}')
    expect(first).toHaveFocus()

    // circles back in reverse
    userEvent.type(first, '{arrowleft}')
    expect(third).toHaveFocus()

    userEvent.type(third, '{arrowleft}')
    expect(second).toHaveFocus()

    userEvent.tab({ shift: true })
    expect(before).toHaveFocus()

    // Previous focus item is persisted
    userEvent.tab()
    expect(second).toHaveFocus()
  })
})
