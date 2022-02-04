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

import { renderWithTheme } from '@looker/components-test-utils'
import { Code } from '@styled-icons/material'
import { AccountCircle } from '@styled-icons/material-outlined'
import { screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { AvatarCombo } from './AvatarCombo'
import { AvatarIcon } from './AvatarIcon'
import { AvatarUser } from './AvatarUser'

/* eslint-disable camelcase */

describe('Avatar', () => {
  describe('AvatarCombo', () => {
    test('supports role as button & onClick event', () => {
      const fauxOnClick = jest.fn()
      renderWithTheme(
        <AvatarCombo
          secondaryIcon={<AccountCircle />}
          onClick={fauxOnClick}
          role="button"
        />
      )

      const button = screen.getByRole('button')

      expect(button).toBeInTheDocument()
      fireEvent.click(button)
      expect(fauxOnClick.mock.calls.length).toBe(1)
    })

    test('user', () => {
      renderWithTheme(
        <AvatarCombo
          secondaryIcon={<AccountCircle />}
          user={{
            avatar_url:
              'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
            first_name: 'John',
            last_name: 'Smith',
          }}
        />
      )

      expect(screen.getByLabelText('John Smith')).toBeInTheDocument()
    })
  })

  describe('AvatarIcon', () => {
    test('supports role as button & onClick event', () => {
      const fauxOnClick = jest.fn()
      renderWithTheme(<AvatarIcon onClick={fauxOnClick} role="button" />)

      const button = screen.getByRole('button')

      expect(button).toBeInTheDocument()
      fireEvent.click(button)
      expect(fauxOnClick.mock.calls.length).toBe(1)
    })

    test('renders different icon if specified', () => {
      renderWithTheme(<AvatarIcon aria-label="Code" icon={<Code />} />)
      expect(screen.getByLabelText('Code')).toBeInTheDocument()
    })
  })

  describe('AvatarUser', () => {
    test('shows user profile picture if it has good avatar_url ', () => {
      const data = {
        avatar_url:
          'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
        first_name: 'John',
        last_name: 'Smith',
      }
      renderWithTheme(<AvatarUser user={data} />)
      const image = screen.queryByTestId('avatar-photo')
      expect(image).toBeInTheDocument()
      expect(screen.getByLabelText('John Smith')).toBeInTheDocument()
    })

    test('shows initials if it has null as avatar_url ', () => {
      const data = {
        avatar_url: null,
        first_name: 'John',
        last_name: 'Smith',
      }

      renderWithTheme(<AvatarUser user={data} />)
      const image = screen.queryByTestId('avatar-photo')
      expect(image).not.toBeInTheDocument()
    })
  })

  test('supports role as button & onClick event', () => {
    const fauxOnClick = jest.fn()
    renderWithTheme(<AvatarUser onClick={fauxOnClick} role="button" />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(fauxOnClick.mock.calls.length).toBe(1)
  })
})
