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
import { renderWithTheme } from '@looker/components-test-utils'
import { Science } from '@styled-icons/material-outlined'
import { screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'
import Controlled from './stories/Controlled'
import { Tree } from '.'

describe('Tree', () => {
  test('Renders string disclosure label and detail', () => {
    renderWithTheme(
      <Tree label="Tree Label" detail="Tree Detail">
        Hello World
      </Tree>
    )

    screen.getByText('Tree Label')
    screen.getByText('Tree Detail')
  })

  test('Renders JSX Element disclosure label', () => {
    renderWithTheme(
      <Tree label={<div>Tree JSX Label</div>} detail="Tree Detail">
        Hello World
      </Tree>
    )

    screen.getByText('Tree JSX Label')
  })

  test('Renders and hides children on disclosure click', () => {
    renderWithTheme(<Tree label="Tree Label">Hello World</Tree>)

    const treeLabel = screen.getByText('Tree Label')
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(treeLabel)
    screen.getByText('Hello World')
    fireEvent.click(treeLabel)
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
  })

  test('Shows children by default when defaultOpen is true (and uses uncontrolled open state)', () => {
    renderWithTheme(
      <Tree label="Tree Label" defaultOpen>
        Hello World
      </Tree>
    )
    screen.getByText('Hello World')
  })

  test('Handles controlled open state via isOpen and toggleOpen props', () => {
    renderWithTheme(<Controlled />)

    const treeLabel = screen.getByText('Controlled Tree')
    screen.getByText('Cost')
    fireEvent.click(treeLabel)
    expect(screen.queryByText('Cost')).not.toBeInTheDocument()

    fireEvent.click(treeLabel)
    screen.getByText('Cost')

    const toggleSwitch = screen.getByRole('switch')
    fireEvent.click(toggleSwitch)
    expect(screen.queryByText('Cost')).not.toBeInTheDocument()
  })

  test('Triggers onClose and onOpen callbacks when provided via props', () => {
    const onClose = jest.fn()
    const onOpen = jest.fn()

    renderWithTheme(
      <Tree label="Tree Label" onClose={onClose} onOpen={onOpen}>
        Hello World
      </Tree>
    )

    const treeLabel = screen.getByText('Tree Label')
    fireEvent.click(treeLabel)
    expect(onOpen).toHaveBeenCalledTimes(1)
    fireEvent.click(treeLabel)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('Clicks on detail do not open the Tree or trigger callbacks when accessory === true', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    renderWithTheme(
      <Tree
        label="Tree Label"
        detail={{
          content: <Button>Tree Detail</Button>,
          options: { accessory: true },
        }}
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </Tree>
    )

    const detail = screen.getByText('Tree Detail')

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(detail)
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    expect(onOpen).toHaveBeenCalledTimes(0)
  })

  test('Key presses on detail do not open the Tree or trigger callbacks when accessory === true', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    renderWithTheme(
      <Tree
        label="Tree Label"
        detail={{
          content: <Button>Tree Detail</Button>,
          options: { accessory: true },
        }}
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </Tree>
    )

    const detail = screen.getByText('Tree Detail')

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.keyDown(detail, {
      key: 'Enter',
    })
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    expect(onOpen).toHaveBeenCalledTimes(0)
  })

  test('Clicks on detail open the Tree and trigger callbacks when accessory === false', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    renderWithTheme(
      <Tree
        label="Tree Label"
        detail={{ content: 'Tree Detail', options: { accessory: false } }}
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </Tree>
    )

    const detail = screen.getByText('Tree Detail')

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(detail)
    screen.getByText('Hello World')
    expect(onOpen).toHaveBeenCalledTimes(1)
    fireEvent.click(detail)
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('Shows and hides detail on Tree hover when hoverDisclosure === true', () => {
    renderWithTheme(
      <Tree
        label="Tree Label"
        detail={{ content: 'Tree Detail', options: { hoverDisclosure: true } }}
      >
        Hello World
      </Tree>
    )

    expect(screen.queryByText('Tree Detail')).not.toBeInTheDocument()
    fireEvent.mouseEnter(screen.getByText('Tree Label'), { bubbles: true })
    expect(screen.getByText('Tree Detail')).toBeInTheDocument()
  })

  describe('color', () => {
    test('theme.colors.key', () => {
      renderWithTheme(
        <Tree
          color="key"
          selected
          label="Whatever"
          icon={<Science data-testid="icon" />}
        />
      )
      expect(screen.getByText('Whatever')).toHaveStyle('color: #262d33')
      expect(screen.getByTestId('icon').parentNode).toHaveStyle(
        'color: #707781'
      )
    })

    test('calculation', () => {
      renderWithTheme(
        <Tree
          color="calculation"
          selected
          label="Whatever"
          icon={<Science data-testid="icon" />}
        />
      )
      expect(screen.getByText('Whatever')).toHaveStyle('color: #319220')
      expect(screen.getByTestId('icon').parentNode).toHaveStyle(
        'color: #319220'
      )
    })

    test('disabled', () => {
      renderWithTheme(
        <Tree disabled label="Whatever" icon={<Science data-testid="icon" />} />
      )
      expect(screen.getByText('Whatever')).toHaveStyle('color: #939ba5')
      expect(screen.getByTestId('icon').parentNode).toHaveStyle(
        'color: #939ba5'
      )
    })
  })

  describe('aria roles', () => {
    test('selected Trees have aria-selected=true', () => {
      renderWithTheme(
        <Tree
          color="calculation"
          selected
          label="Whatever"
          icon={<Science data-testid="icon" />}
        />
      )
      expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute(
        'aria-selected',
        'true'
      )
    })

    test('Trees can take aria-current=true', () => {
      renderWithTheme(
        <Tree
          aria-current={true}
          color="calculation"
          label="Whatever"
          icon={<Science data-testid="icon" />}
        />
      )
      expect(screen.getAllByRole('treeitem')[0]).toHaveAttribute(
        'aria-current',
        'true'
      )
    })
  })

  describe('itemRole', () => {
    test('renders inner <TreeItem> as <div> by default', () => {
      renderWithTheme(<Tree label="Default Tree" />)

      expect(screen.getByText('Default Tree').closest('button')).toBe(null)
      expect(screen.getByText('Default Tree').closest('a')).toBe(null)
    })

    test('renders inner <TreeItem> as <a> and receives link-related props when itemRole="link"', () => {
      renderWithTheme(
        <Tree
          href="https://google.com"
          itemRole="link"
          label="Link Tree"
          target="_blank"
        />
      )

      const treeItemLink = screen.getByText('Link Tree').closest('a')
      expect(treeItemLink).toHaveAttribute('href', 'https://google.com')
      expect(treeItemLink).toHaveAttribute('target', '_blank')
      // Note: rel="noopener noreferrer" is auto added to the underlying <a> element when target="_blank"
      expect(treeItemLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
