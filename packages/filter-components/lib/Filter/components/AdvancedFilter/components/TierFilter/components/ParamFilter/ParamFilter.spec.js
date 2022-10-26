import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { ParamFilter } from './ParamFilter';
describe('ParamFilter tests', () => {
  const enumerations = [{
    label: 'First',
    value: 'first'
  }, {
    label: 'Second',
    value: 'second'
  }, {
    label: 'Third',
    value: 'third'
  }];
  it('should select new option when clicked', async () => {
    renderWithTheme(React.createElement(ParamFilter, {
      item: {
        id: 1,
        value: ['first']
      },
      enumerations: enumerations
    }));
    const select = await screen.findByText('First');
    expect(select).toBeVisible();
  });
});
//# sourceMappingURL=ParamFilter.spec.js.map