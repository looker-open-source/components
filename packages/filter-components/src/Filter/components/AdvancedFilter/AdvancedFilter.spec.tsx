/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { AdvancedFilter } from './AdvancedFilter'
import type { AdvancedFilterProps } from './AdvancedFilter'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'

const renderAdvancedFilter = (props?: Partial<AdvancedFilterProps>) => {
  return renderWithTheme(
    <AdvancedFilter
      updateAST={jest.fn()}
      expressionType="string"
      validationMessage={{
        message: 'test error',
      }}
      name="test filter"
      ast={{
        type: 'string',
        value: 'testexpression',
      }}
      changeFilter={jest.fn()}
      allowMultipleValues={true}
      {...props}
    />
  )
}

describe('Advanced filters', () => {
  describe('add button', () => {
    it('should render the add button', () => {
      renderAdvancedFilter()
      const addButtonIcon = screen.queryByText('Add')
      expect(addButtonIcon).toBeInTheDocument()
    })

    it('should not render the add button when allowMultipleValues is false', () => {
      renderAdvancedFilter({
        allowMultipleValues: false,
      })
      const addButtonIcon = screen.queryByText('Add')
      expect(addButtonIcon).not.toBeInTheDocument()
    })

    it('should not render the add button when allowMultipleValues and hideAdd are both true', () => {
      renderAdvancedFilter({
        allowMultipleValues: true,
        hideAdd: true,
      })
      const addButtonIcon = screen.queryByText('Add')
      expect(addButtonIcon).not.toBeInTheDocument()
    })

    it('should not render the add button when the field is a parameter', () => {
      renderAdvancedFilter({
        allowMultipleValues: true,
        field: {
          parameter: true,
        },
      })
      const addButtonIcon = screen.queryByText('Add')
      expect(addButtonIcon).not.toBeInTheDocument()
    })
  })
})
