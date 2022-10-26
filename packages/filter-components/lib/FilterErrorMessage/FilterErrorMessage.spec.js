import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { FilterErrorMessage } from './FilterErrorMessage';
describe('FilterErrorMessage tests', () => {
  it('displays that the required filter is in an error state', () => {
    renderWithTheme(React.createElement(FilterErrorMessage, {
      filters: [{
        expression: '',
        expressionType: 'string',
        name: 'testfilter',
        isRequired: true,
        allowMultipleValues: true
      }]
    }));
    expect(screen.getByText('Selection required')).toBeVisible();
  });
});
//# sourceMappingURL=FilterErrorMessage.spec.js.map