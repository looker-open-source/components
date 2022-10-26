import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { TimeFormat } from '.';
const date = new Date('January 25, 1988 11:58:03');
test('TimeFormat renders only time', () => {
  renderWithTheme(React.createElement(TimeFormat, null, date));
  const time = screen.getByText('11:58:03 AM');
  expect(time).toBeInTheDocument();
});
//# sourceMappingURL=TimeFormat.spec.js.map