import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Text } from './Text';
test('Text has default fontSize', () => {
  renderWithTheme(React.createElement(Text, null, "Hello"));
  expect(screen.getByText('Hello')).toHaveStyleRule('font-size', '1rem');
  expect(screen.getByText('Hello')).toHaveStyleRule('line-height', '1.5rem');
  expect(screen.getByText('Hello')).toHaveStyleRule('color', undefined);
});
//# sourceMappingURL=Text.spec.js.map