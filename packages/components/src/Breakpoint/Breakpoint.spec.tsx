/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Breakpoint } from './Breakpoint'

/**
 * IMPORTANT NOTE:
 * Breakpoint behavior is determined by viewport size (by design, really, that's a good thing).
 *
 * Within our test-suite the viewport size is configured in `jest.setup.js`.
 * Specifically: document.body.clientHeight & document.body.width
 */

describe('Breakpoint', () => {
  let widthSpy: jest.SpyInstance<number, []>
  let heightSpy: jest.SpyInstance<number, []>

  beforeEach(() => {
    widthSpy = jest
      .spyOn(document.body, 'clientWidth', 'get')
      .mockImplementation(() => 800)
    heightSpy = jest
      .spyOn(document.body, 'clientHeight', 'get')
      .mockImplementation(() => 600)
  })
  afterEach(() => {
    widthSpy.mockRestore()
    heightSpy.mockRestore()
  })

  test('all', () => {
    renderWithTheme(
      <Breakpoint show={['mobile', 'xl']}>
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).toBeInTheDocument()
  })

  test('mobile', () => {
    renderWithTheme(
      <Breakpoint show="mobile">
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).not.toBeInTheDocument()
  })

  test('tablet up', () => {
    renderWithTheme(
      <Breakpoint show={['tablet', undefined]}>
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).toBeInTheDocument()
  })

  test('up to tablet', () => {
    renderWithTheme(
      <Breakpoint show={[undefined, 'tablet']}>
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).not.toBeInTheDocument()
  })
})
