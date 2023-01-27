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
import { ComponentsProvider } from '@looker/components'
import { renderHook } from '@testing-library/react-hooks'
import type { FilterProps } from '../Filter/types/filter_props'
import { useFiltersErrors } from './use_filters_errors'
import type { ValidationMessageProps } from '@looker/components'
import type { UserAttributeWithValue } from '@looker/filter-expressions'
import { getUserAttributeMatchingTypeAndExpression } from '@looker/filter-expressions'
import { ERROR_TYPE } from '../constants'

jest.mock('@looker/filter-expressions', () => ({
  ...jest.requireActual('@looker/filter-expressions'),
  getUserAttributeMatchingTypeAndExpression: jest.fn(),
}))

describe('FilterErrorMessage utils tests', () => {
  const getFilter = (overrideFilter: Partial<FilterProps> = {}) => {
    const defaultFilter: FilterProps = {
      expression: '',
      expressionType: 'string',
      isRequired: true,
      name: 'testfilter',
    }
    return { ...defaultFilter, ...overrideFilter }
  }
  const wrapper = ({ children }: { children: React.ReactElement }) => (
    <ComponentsProvider>{children}</ComponentsProvider>
  )

  describe('useFiltersErrors', () => {
    const requiredValidationMessage: ValidationMessageProps = {
      type: ERROR_TYPE,
      message: 'Selection required',
    }

    const invalidValueMessage: ValidationMessageProps = {
      type: ERROR_TYPE,
      message: 'Invalid value',
    }

    const invalidValueLongMessage: ValidationMessageProps = {
      type: ERROR_TYPE,
      message: 'No value is set for your user attribute',
    }

    describe('without user attributes', () => {
      it('should return a validationMessage for a required filter error', () => {
        const filters = [getFilter()]
        const {
          result: { current },
        } = renderHook(() => useFiltersErrors(filters), { wrapper })
        expect(current).toEqual(requiredValidationMessage)
      })

      it('should return a validationMessage for a required filter error if any have an error', () => {
        const filters = [getFilter({ isRequired: false }), getFilter()]
        const {
          result: { current },
        } = renderHook(() => useFiltersErrors(filters), { wrapper })
        expect(current).toEqual(requiredValidationMessage)
      })

      it('should not return a validationMessage for a required filter error if there is no error', () => {
        const filters = [getFilter({ expression: 'value' })]
        const {
          result: { current },
        } = renderHook(() => useFiltersErrors(filters), { wrapper })
        expect(current).toEqual({})
      })
    })

    describe('with user attributes', () => {
      const notRequiredFilter = getFilter({ isRequired: false })

      beforeEach(() => {
        ;(
          getUserAttributeMatchingTypeAndExpression as jest.Mock<any>
        ).mockReset()
      })

      describe('when filter is not linked to any user attributes', () => {
        beforeEach(() => {
          ;(
            getUserAttributeMatchingTypeAndExpression as jest.Mock<any>
          ).mockReturnValue(null)
        })

        it('should not return any error', () => {
          const {
            result: { current },
          } = renderHook(() => useFiltersErrors([notRequiredFilter]))
          expect(current).toEqual({})
        })
      })

      describe('when filter is linked to a user attribute that does not have a value', () => {
        beforeEach(() => {
          const userAttribute = {
            name: 'some-ua-name',
            value: null,
          } as any as UserAttributeWithValue
          ;(
            getUserAttributeMatchingTypeAndExpression as jest.Mock<any>
          ).mockReturnValue(userAttribute)
        })

        describe('and we want the short form message', () => {
          it('should return an error', () => {
            const {
              result: { current },
            } = renderHook(
              () =>
                useFiltersErrors([notRequiredFilter], {
                  useLongMessageForm: false,
                }),
              { wrapper }
            )
            expect(current).toEqual(invalidValueMessage)
          })
        })

        describe('and we want the long form message', () => {
          it('should return an error', () => {
            const {
              result: { current },
            } = renderHook(() =>
              useFiltersErrors([notRequiredFilter], {
                useLongMessageForm: true,
              })
            )
            expect(current).toEqual(invalidValueLongMessage)
          })
        })
      })

      describe('when filter is linked to a user attribute that has a value', () => {
        beforeEach(() => {
          const userAttribute = {
            name: 'some-ua-name',
            value: 'some value!',
          } as any as UserAttributeWithValue
          ;(
            getUserAttributeMatchingTypeAndExpression as jest.Mock<any>
          ).mockReturnValue(userAttribute)
        })

        it('should not return any error', () => {
          const {
            result: { current },
          } = renderHook(() => useFiltersErrors([notRequiredFilter]), {
            wrapper,
          })
          expect(current).toEqual({})
        })
      })
    })
  })
})
