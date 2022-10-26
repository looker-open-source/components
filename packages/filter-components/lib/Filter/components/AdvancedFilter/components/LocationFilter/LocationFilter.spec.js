import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { LocationFilter } from './LocationFilter';
describe('Location filter test', () => {
  it('should render a LocationFilter', () => {
    const item = {
      id: '1',
      type: 'anyvalue'
    };
    renderWithTheme(React.createElement(LocationFilter, {
      item: item,
      filterType: "location",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(screen.getByRole('textbox')).toHaveValue('is anywhere');
  });
});
//# sourceMappingURL=LocationFilter.spec.js.map