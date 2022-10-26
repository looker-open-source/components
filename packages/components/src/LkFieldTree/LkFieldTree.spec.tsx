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
import userEvent from '@testing-library/user-event'
import { screen, fireEvent } from '@testing-library/react'
import { Science } from '@styled-icons/material-outlined'
import { FieldToggleSwitch } from '../Form'
import { Button } from '../Button'
import { useToggle } from '../utils'
import { Link } from '../Link'
import { InputText } from '../Form/Inputs/InputText'
import { TreeCollection } from '../Tree'
import { LkFieldItem, LkFieldTree } from '.'

describe('LkFieldTree', () => {
  test('Renders string disclosure label and detail', () => {
    renderWithTheme(
      <LkFieldTree label="Tree Label" detail="Tree Detail">
        Hello World
      </LkFieldTree>
    )

    screen.getByText('Tree Label')
    screen.getByText('Tree Detail')
  })

  test('Renders JSX Element disclosure label', () => {
    renderWithTheme(
      <LkFieldTree label={<div>Tree JSX Label</div>} detail="Tree Detail">
        Hello World
      </LkFieldTree>
    )

    screen.getByText('Tree JSX Label')
  })

  test('Renders and hides children on disclosure click', () => {
    renderWithTheme(<LkFieldTree label="Tree Label">Hello World</LkFieldTree>)

    const treeLabel = screen.getByText('Tree Label')
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(treeLabel)
    screen.getByText('Hello World')
    fireEvent.click(treeLabel)
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
  })

  test('Shows children by default when defaultOpen is true (and uses uncontrolled open state)', () => {
    renderWithTheme(
      <LkFieldTree label="Tree Label" defaultOpen>
        Hello World
      </LkFieldTree>
    )
    screen.getByText('Hello World')
  })

  test('Handles controlled open state via isOpen and toggleOpen props', () => {
    const Component = () => {
      const { value, change, toggle } = useToggle(true)

      return (
        <>
          <FieldToggleSwitch on={value} onChange={toggle} label="Toggle" />
          <LkFieldTree label="Tree Label" isOpen={value} toggleOpen={change}>
            Stuff here
          </LkFieldTree>
        </>
      )
    }
    renderWithTheme(<Component />)

    const treeLabel = screen.getByText('Tree Label')
    screen.getByText('Stuff here')
    fireEvent.click(treeLabel)
    expect(screen.queryByText('Stuff here')).not.toBeInTheDocument()

    fireEvent.click(treeLabel)
    screen.getByText('Stuff here')

    const toggleSwitch = screen.getByRole('switch')
    fireEvent.click(toggleSwitch)
    expect(screen.queryByText('Stuff here')).not.toBeInTheDocument()
  })

  test('Triggers onClose and onOpen callbacks when provided via props', () => {
    const onClose = jest.fn()
    const onOpen = jest.fn()

    renderWithTheme(
      <LkFieldTree label="Tree Label" onClose={onClose} onOpen={onOpen}>
        Hello World
      </LkFieldTree>
    )

    const treeLabel = screen.getByText('Tree Label')
    fireEvent.click(treeLabel)
    expect(onOpen).toHaveBeenCalledTimes(1)
    fireEvent.click(treeLabel)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('Clicks on detail do not open the LkFieldTree or trigger callbacks when accessory === true', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    renderWithTheme(
      <LkFieldTree
        label="Tree Label"
        detail={{
          content: <Button>Tree Detail</Button>,
          options: { accessory: true },
        }}
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </LkFieldTree>
    )

    const detail = screen.getByText('Tree Detail')

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.click(detail)
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    expect(onOpen).toHaveBeenCalledTimes(0)
  })

  test('Key presses on detail do not open the LkFieldTree or trigger callbacks when accessory === true', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    renderWithTheme(
      <LkFieldTree
        label="Tree Label"
        detail={{
          content: <Button>Tree Detail</Button>,
          options: { accessory: true },
        }}
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </LkFieldTree>
    )

    const detail = screen.getByText('Tree Detail')

    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    fireEvent.keyDown(detail, {
      key: 'Enter',
    })
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument()
    expect(onOpen).toHaveBeenCalledTimes(0)
  })

  test('Clicks on detail open the LkFieldTree and trigger callbacks when accessory === false', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    renderWithTheme(
      <LkFieldTree
        label="Tree Label"
        detail={{ content: 'Tree Detail', options: { accessory: false } }}
        onClose={onClose}
        onOpen={onOpen}
      >
        Hello World
      </LkFieldTree>
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

  test('Shows and hides detail on LkFieldTree hover when hoverDisclosure === true', () => {
    renderWithTheme(
      <LkFieldTree
        label="Tree Label"
        detail={{ content: 'Tree Detail', options: { hoverDisclosure: true } }}
      >
        Hello World
      </LkFieldTree>
    )

    expect(screen.queryByText('Tree Detail')).not.toBeInTheDocument()
    fireEvent.mouseEnter(screen.getByText('Tree Label'), { bubbles: true })
    expect(screen.getByText('Tree Detail')).toBeInTheDocument()
  })

  describe('aria roles', () => {
    test('selected LkFieldTrees have aria-selected=true', () => {
      renderWithTheme(
        <LkFieldTree
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

    test('LkFieldTrees can take aria-current=true', () => {
      renderWithTheme(
        <LkFieldTree
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

  describe('keyboard navigation', () => {
    const detail = {
      content: (
        <>
          <Button>Nested Button</Button>
          <Link href="https://google.com">Nested Link</Link>
          <InputText>Nested InputText</InputText>
        </>
      ),
      options: {
        accessory: true,
      },
    }

    const treeCollection = (
      <TreeCollection>
        <LkFieldTree defaultOpen label="Cheeses">
          <LkFieldItem detail={detail}>Cheddar</LkFieldItem>
          <LkFieldItem>Gouda</LkFieldItem>
          <LkFieldItem>Swiss</LkFieldItem>
        </LkFieldTree>
      </TreeCollection>
    )

    test('starts focus at first item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )
      const treeItems = screen.getAllByRole('treeitem')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(treeItems[0]).toHaveFocus()
    })

    test('arrow up and down key presses move user from item to item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )
      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const gouda = treeItems[2]
      const swiss = treeItems[3]

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()

      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(gouda).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(swiss).toHaveFocus()

      userEvent.keyboard('{arrowup}')
      expect(gouda).toHaveFocus()

      userEvent.keyboard('{arrowup}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowup}')
      expect(cheeses).toHaveFocus()
    })

    test('left and right arrow keys move user from accordion to buttons/links/inputs within accordion', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          <TreeCollection>
            <LkFieldTree defaultOpen label="Cheeses" detail={detail}>
              <LkFieldItem>Cheddar</LkFieldItem>
            </LkFieldTree>
          </TreeCollection>
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const nestedButton = screen.getByText('Nested Button')
      const nestedLink = screen.getByText('Nested Link')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedButton).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedLink).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(screen.getByRole('textbox')).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(cheeses).toHaveFocus()
    })

    test('left and right arrow keys move user from item to buttons/links/inputs within item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const nestedButton = screen.getByText('Nested Button')
      const nestedLink = screen.getByText('Nested Link')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedButton).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedLink).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(screen.getByRole('textbox')).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(cheddar).toHaveFocus()
    })

    test('pressing arrow down from a detail element moves user to next item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const gouda = treeItems[2]
      const nestedButton = screen.getByText('Nested Button')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(nestedButton).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(gouda).toHaveFocus()
    })

    test('pressing arrow down from a detail element with accessory enabled moves user to next item', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          <TreeCollection>
            <LkFieldTree
              defaultOpen
              label="Cheeses"
              detail={{
                content: <button>Accessory Button</button>,
                options: { accessory: true },
              }}
            >
              <LkFieldItem>Cheddar</LkFieldItem>
            </LkFieldTree>
          </TreeCollection>
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const accessoryButton = screen.getByText('Accessory Button')

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowright}')
      expect(accessoryButton).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()
    })

    test('home button moves user to first treeitem element', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const cheddar = treeItems[1]
      const swiss = treeItems[3]

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      expect(cheddar).toHaveFocus()

      userEvent.keyboard('{arrowdown}')
      userEvent.keyboard('{arrowdown}')
      expect(swiss).toHaveFocus()

      userEvent.keyboard('{Home}')
      expect(cheeses).toHaveFocus()
    })

    test('end button moves user to last treeitem element', () => {
      renderWithTheme(
        <>
          <button>My Button</button>
          {treeCollection}
        </>
      )

      const treeItems = screen.getAllByRole('treeitem')
      const cheeses = treeItems[0]
      const swiss = treeItems[3]

      userEvent.click(screen.getByText('My Button'))
      expect(screen.getByText('My Button')).toHaveFocus()

      userEvent.tab()
      expect(cheeses).toHaveFocus()

      userEvent.keyboard('{End}')
      expect(swiss).toHaveFocus()
    })
  })
})
