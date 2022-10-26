import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Legend } from './Legend';
test('A Legend', () => {
  renderWithTheme(React.createElement(Legend, null, "I am legend"));
  expect(screen.getByText('I am legend')).toBeInTheDocument();
  expect(screen.getByText('I am legend').tagName).toEqual('LEGEND');
});
//# sourceMappingURL=Legend.spec.js.map