/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Category } from '@looker/sdk';
import { AdvancedFilter } from './AdvancedFilter';
import type { AdvancedFilterProps } from './AdvancedFilter';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';

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
  );
};

describe('Advanced filters', () => {
  describe('add button', () => {
    it('should render the add button', () => {
      renderAdvancedFilter();
      const addButtonIcon = screen.queryByText('Add');
      expect(addButtonIcon).toBeInTheDocument();
    });

    it('should not render the add button when allowMultipleValues is false', () => {
      renderAdvancedFilter({
        allowMultipleValues: false,
      });
      const addButtonIcon = screen.queryByText('Add');
      expect(addButtonIcon).not.toBeInTheDocument();
    });

    it('should not render the add button when allowMultipleValues and hideAdd are both true', () => {
      renderAdvancedFilter({
        allowMultipleValues: true,
        hideAdd: true,
      });
      const addButtonIcon = screen.queryByText('Add');
      expect(addButtonIcon).not.toBeInTheDocument();
    });

    it('should not render the add button when the field is a parameter', () => {
      renderAdvancedFilter({
        allowMultipleValues: true,
        field: {
          parameter: true,
        },
      });
      const addButtonIcon = screen.queryByText('Add');
      expect(addButtonIcon).not.toBeInTheDocument();
    });

    it('renders the label instead of the value for numeric parameter filters', () => {
      const enumerations = [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
      ];
      renderAdvancedFilter({
        allowMultipleValues: true,
        field: {
          parameter: true,
          category: Category.parameter,
          type: 'number',
          has_allowed_values: true,
        },
        expressionType: 'number',
        ast: {
          is: true,
          type: '=',
        },
        enumerations,
      });
      const inputs = screen.getAllByRole('textbox');
      expect(inputs[0]).toHaveValue('is');
      expect(inputs[1]).toHaveValue('One');
    });
  });
});
