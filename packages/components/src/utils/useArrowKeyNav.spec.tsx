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

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactNode } from 'react'
import React, { useState } from 'react'
import type { UseArrowKeyNavProps } from './useArrowKeyNav'
import { useArrowKeyNav } from './useArrowKeyNav'

const ArrowKeyNavComponent = ({
  axis,
  children,
}: {
  axis?: UseArrowKeyNavProps<HTMLUListElement>['axis']
  children?: ReactNode
}) => {
  const navProps = useArrowKeyNav<HTMLUListElement>({ axis })
  return (
    <ul role="list" {...navProps}>
      {children}
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

  test('un-mounting the focused item', async () => {
    const TestComponent = () => {
      const [showMore, setShowMore] = useState(false)
      return (
        <>
          <button>before</button>
          <ArrowKeyNavComponent>
            {showMore ? (
              <>
                <li tabIndex={-1}>more stuff</li>
                <li tabIndex={-1} onClick={() => setShowMore(false)}>
                  less
                </li>
              </>
            ) : (
              <li tabIndex={-1} onClick={() => setShowMore(true)}>
                more
              </li>
            )}
          </ArrowKeyNavComponent>
        </>
      )
    }
    render(<TestComponent />)
    const before = screen.getByText('before')
    const more = screen.getByText('more')

    userEvent.click(before)
    userEvent.tab()
    expect(more).toHaveFocus()

    userEvent.type(more, '{enter}')
    const moreStuff = screen.getByText('more stuff')
    await waitFor(() => expect(moreStuff).toHaveFocus())

    userEvent.type(moreStuff, '{arrowdown}')
    expect(screen.getByText('less')).toHaveFocus()
  })

  test('Menu: focus landed on container after tab, moves to first item', () => {
    render(<ArrowKeyNavComponent />)
    const list = screen.getByRole('list')
    const first = screen.getByText('first')

    list.focus()
    expect(first).toHaveFocus()
    userEvent.type(first, '{arrowdown}')
    expect(screen.getByText('second')).toHaveFocus()
  })

  test('Menu: focus landed on container after click, stays there', () => {
    // Mock matches b/c jest does not support :focus-visible as selector
    const globalMatches = Element.prototype.matches
    /* eslint-disable-next-line @typescript-eslint/unbound-method */
    Element.prototype.matches = jest.fn(() => false)

    render(<ArrowKeyNavComponent />)
    const list = screen.getByRole('list')
    list.focus()
    expect(screen.getByText('first')).not.toHaveFocus()
    userEvent.type(list, '{arrowdown}')
    expect(screen.getByText('first')).toHaveFocus()

    /* eslint-disable-next-line @typescript-eslint/unbound-method */
    Element.prototype.matches = globalMatches
  })
})
