import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ValidationMessage } from './ValidationMessage';
test('An error message', () => {
  renderWithTheme(React.createElement(ValidationMessage, {
    type: "error",
    message: "Error!"
  }));
  expect(screen.getByText('Error!')).toBeInTheDocument();
});
//# sourceMappingURL=ValidationMessage.spec.js.map