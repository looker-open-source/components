import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { StringFilter } from './StringFilter';
describe('String filter test', () => {
  it('should render a StringFilter', () => {
    const item = {
      id: '1',
      is: true,
      type: 'match',
      value: []
    };
    renderWithTheme(React.createElement(StringFilter, {
      item: item,
      filterType: "string",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('is');
    expect(inputs[1]).toHaveValue('');
  });
});
//# sourceMappingURL=StringFilter.spec.js.map