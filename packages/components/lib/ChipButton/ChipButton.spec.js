import { renderWithTheme } from '@looker/components-test-utils';
import React from 'react';
import { screen } from '@testing-library/react';
import { ChipButton } from './ChipButton';
test('ChipButton', () => {
  renderWithTheme(React.createElement(ChipButton, null, "chip"));
  expect(screen.getByText('chip')).toBeInTheDocument();
});
//# sourceMappingURL=ChipButton.spec.js.map