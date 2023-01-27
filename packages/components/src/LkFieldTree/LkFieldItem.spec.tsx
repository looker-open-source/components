/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { LkFieldItem } from '.'

describe('LkFieldItem', () => {
  test('Renders children', () => {
    renderWithTheme(<LkFieldItem>Dimension</LkFieldItem>)
    screen.getByText('Dimension')
  })

  test('Accepts onClick and onKeyDown props', () => {
    const handleClick = jest.fn()
    const handleKeyDown = jest.fn()
    renderWithTheme(
      <LkFieldItem onClick={handleClick} onKeyDown={handleKeyDown}>
        Dimension
      </LkFieldItem>
    )
    screen.getByText('Dimension')
  })

  test('Does not trigger onClick on detail click when accessory === true', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <LkFieldItem
        detail={{ content: 'Detail', options: { accessory: true } }}
        onClick={onClick}
      >
        Dimension
      </LkFieldItem>
    )
    fireEvent.click(screen.getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('Triggers onClick on detail click when accessory === false', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <LkFieldItem
        detail={{ content: 'Detail', options: { accessory: false } }}
        onClick={onClick}
      >
        Dimension
      </LkFieldItem>
    )
    fireEvent.click(screen.getByText('Dimension'))
    expect(onClick).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText('Detail'))
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  test('Hides and shows detail when hoverDisclosure === true', () => {
    renderWithTheme(
      <LkFieldItem
        detail={{ content: 'Detail', options: { hoverDisclosure: true } }}
      >
        Label
      </LkFieldItem>
    )

    expect(screen.queryByText('Detail')).not.toBeInTheDocument()
    fireEvent.mouseEnter(screen.getByText('Label'), { bubbles: true })
    expect(screen.getByText('Detail')).toBeInTheDocument()
  })
})
