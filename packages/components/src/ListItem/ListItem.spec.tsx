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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, configure, screen } from '@testing-library/react'
import { Science } from '@styled-icons/material-outlined'
import { List } from '../List'
import { ListItem } from './ListItem'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('ListItem', () => {
  test('ripple effect', () => {
    renderWithTheme(<ListItem>List Item</ListItem>)

    const listItem = screen.getByText('List Item').closest('button')
    expect(listItem).not.toHaveClass('bg-on fg-in')
    expect(listItem).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    listItem && fireEvent.focus(listItem)
    expect(listItem).toHaveClass('bg-on')

    listItem && fireEvent.mouseDown(listItem)
    expect(listItem).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    listItem && fireEvent.mouseUp(listItem)
    runTimers()
    expect(listItem).toHaveClass('bg-on fg-out')
    runTimers()
    expect(listItem).toHaveClass('bg-on')

    listItem && fireEvent.blur(listItem)
    expect(listItem).not.toHaveClass('bg-on fg-in')
    fireEvent.click(document)
  })

  test('children', () => {
    renderWithTheme(<ListItem>who!</ListItem>)
    expect(screen.getByText('who!')).toBeVisible()
  })

  test('description', () => {
    renderWithTheme(<ListItem description="are you?">who!</ListItem>)
    expect(screen.getByText('are you?')).toBeVisible()
    expect(screen.getByRole('listitem')).not.toHaveAttribute('description')
  })

  test('detail', () => {
    renderWithTheme(<ListItem detail="Is an excellent question">who!</ListItem>)
    expect(screen.getByText('Is an excellent question')).toBeVisible()
    expect(screen.getByRole('listitem')).not.toHaveAttribute('detail')
  })

  test('iconGutter', () => {
    renderWithTheme(
      <List iconGutter>
        <ListItem>who!</ListItem>
      </List>
    )
    expect(screen.getByText('who!')).toBeVisible()
  })

  describe('color', () => {
    test('theme.colors.key', () => {
      renderWithTheme(
        <ListItem selected color="key">
          who!
        </ListItem>
      )
      expect(screen.getByText('who!')).toHaveStyle('color: #262d33')
      expect(screen.getByRole('listitem')).toHaveStyle('background: #f3f2ff')
    })

    test('theme', () => {
      renderWithTheme(
        <ListItem color="calculation" icon={<Science data-testid="icon" />}>
          who!
        </ListItem>
      )
      expect(screen.getByText('who!')).toHaveStyle('color: #319220')
      expect(screen.getByTestId('icon').parentNode).toHaveStyle(
        'color: #319220'
      )
    })

    test('theme selected', () => {
      renderWithTheme(
        <ListItem selected color="calculation">
          who!
        </ListItem>
      )
      expect(screen.getByText('who!')).toHaveStyle('color: #319220')
      expect(screen.getByRole('listitem')).toHaveStyle('background: #eaf4e8')
    })

    test('theme + selected + hover', () => {
      renderWithTheme(
        <ListItem hovered selected color="calculation">
          who!
        </ListItem>
      )
      expect(screen.getByText('who!')).toHaveStyle('color: #319220')
      expect(screen.getByRole('listitem')).toHaveStyle('background: #eaf4e8')
    })

    test('custom', () => {
      renderWithTheme(
        <ListItem color="#cc0000" icon={<Science data-testid="icon" />}>
          who!
        </ListItem>
      )
      expect(screen.getByText('who!')).toHaveStyle('color: #cc0000')
      expect(screen.getByTestId('icon').parentNode).toHaveStyle(
        'color: #cc0000'
      )
    })
  })

  test('truncate', () => {
    renderWithTheme(
      <ListItem truncate>
        Some long text to truncate in my list item label
      </ListItem>
    )
    expect(
      screen.getByText('Some long text to truncate in my list item label')
    ).toBeVisible()
  })

  test('renders icon', () => {
    renderWithTheme(<ListItem icon={<Science />}>Icon</ListItem>)
    expect(screen.getByText('Icon')).toBeInTheDocument()
  })

  test('renders artwork', () => {
    renderWithTheme(
      <ListItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg">
            <title>SVG Title Here</title>
          </svg>
        }
      >
        Artwork
      </ListItem>
    )
    expect(screen.getByTitle('SVG Title Here')).toBeInTheDocument()
  })

  // At the moment, JSDom doesn't support the pseudo-selector parameter in getComputedStyle
  test.skip('has a key color border on key press', () => {
    configure({ computedStyleSupportsPseudoElements: true })
    renderWithTheme(<ListItem>Item</ListItem>)
    const item = screen.getByRole('listitem')
    fireEvent.keyUp(item, {
      key: 'Enter',
    })
    expect(window.getComputedStyle(item, ':after')).toHaveAttribute(
      'border',
      'solid 2px #9785F2'
    )
  })

  test('is not clickable when disabled', () => {
    const callbackFn = jest.fn()

    renderWithTheme(
      <ListItem itemRole="button" disabled onClick={callbackFn}>
        Item
      </ListItem>
    )

    const item = screen.getByText('Item')
    expect(item.closest('button')).toHaveAttribute('type', 'button')
    fireEvent.click(item)

    expect(callbackFn).toHaveBeenCalledTimes(0)
  })

  test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', () => {
    renderWithTheme(
      <ListItem itemRole="link" href="https://google.com" target="_blank">
        Link
      </ListItem>
    )

    const item = screen.getByRole('listitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('auto appends "noopener noreferrer" to rel prop value when itemRole="link", target="_blank" and rel is not undefined', () => {
    renderWithTheme(
      <ListItem
        itemRole="link"
        href="https://google.com"
        rel="nogouda"
        target="_blank"
      >
        Link
      </ListItem>
    )

    const item = screen.getByRole('listitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer')
  })

  test('does not auto append "noopener noreferrer" to link without target="_blank"', () => {
    renderWithTheme(
      <ListItem itemRole="link" rel="nogouda" href="https://google.com">
        Link
      </ListItem>
    )

    const item = screen.getByRole('listitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda')
  })

  test('renders label container as <div> when itemRole="none"', () => {
    renderWithTheme(<ListItem itemRole="none">No Role</ListItem>)
    expect(screen.getByRole('listitem').nodeName).toBe('DIV')
  })

  test('does not trigger onClick on detail click when accessory === true', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <ListItem
        detail={{ content: 'Detail', options: { accessory: true } }}
        onClick={onClick}
      >
        Dimension
      </ListItem>
    )
    fireEvent.click(screen.getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('triggers onClick on detail click when accessory === false', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <ListItem
        detail={{ content: 'Detail', options: { accessory: false } }}
        onClick={onClick}
      >
        Dimension
      </ListItem>
    )
    fireEvent.click(screen.getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  test('hides and shows detail when detailHoverDisclosure === true', () => {
    renderWithTheme(
      <ListItem
        detail={{ content: 'Detail', options: { hoverDisclosure: true } }}
      >
        Label
      </ListItem>
    )

    expect(screen.queryByText('Detail')).not.toBeInTheDocument()
    fireEvent.mouseEnter(screen.getByText('Label'), { bubbles: true })
    expect(screen.getByText('Detail')).toBeInTheDocument()
  })

  test('onKeyUp callback functions', () => {
    const onKeyUp = jest.fn()
    renderWithTheme(<ListItem onKeyUp={onKeyUp}>Label</ListItem>)

    fireEvent.keyUp(screen.getByText('Label'), {
      charCode: 13,
      code: 13,
      key: 'Enter',
    })

    expect(onKeyUp).toHaveBeenCalled()
  })

  test('warns on disabled link', () => {
    const globalConsole = global.console
    const warnMock = jest.fn()

    global.console = {
      warn: warnMock,
    } as unknown as Console

    renderWithTheme(
      <ListItem itemRole="link" disabled>
        Disabled but not
      </ListItem>
    )
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "itemRole=\\"link\\" and disabled cannot be combined - use itemRole=\\"button\\" if you need to offer a disabled ListItem",
        ],
      ]
    `)

    global.console = globalConsole
  })

  test('properly passes aria related props to label container', () => {
    renderWithTheme(
      <ListItem aria-current="location" aria-describedby="something-else">
        ListItem with aria props
      </ListItem>
    )

    const label = screen.getByRole('listitem')
    expect(label).toHaveAttribute('aria-current', 'location')
    expect(label).toHaveAttribute('aria-describedby', 'something-else')

    const wrapper = screen.getByRole('none')
    expect(wrapper).not.toHaveAttribute('aria-current', 'location')
    expect(wrapper).not.toHaveAttribute('aria-describedby', 'something-else')
  })

  test('has left padding on detail', () => {
    renderWithTheme(<ListItem detail="Detail">Dimension</ListItem>)

    expect(screen.getByText('Detail')).toHaveStyleRule(
      'padding-left',
      '0.75rem'
    )
  })

  test('no left padding on detail when accessory === true', () => {
    renderWithTheme(
      <ListItem detail={{ content: 'Detail', options: { accessory: true } }}>
        Dimension
      </ListItem>
    )

    expect(screen.getByText('Detail')).toHaveStyleRule('padding-left', '0')
  })
})
