import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { FieldChips } from './FieldChips';
test('A FieldChip with description', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(FieldChips, {
    description: "no vegetables allowed",
    id: "FieldChipsID",
    label: "Chip label",
    onChange: handleChange,
    values: []
  }));
  expect(screen.getByLabelText('Chip label')).toBeInTheDocument();
  expect(screen.getByText('no vegetables allowed')).toBeInTheDocument();
});
//# sourceMappingURL=FieldChips.spec.js.map