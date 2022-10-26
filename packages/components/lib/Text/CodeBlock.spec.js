import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { CodeBlock } from './CodeBlock';
test('A default CodeBlock component', () => {
  renderWithTheme(React.createElement(CodeBlock, null, "Hello"));
  expect(screen.getByText('Hello')).toBeInTheDocument();
  expect(screen.getByText('Hello').tagName).toEqual('CODE');
});
//# sourceMappingURL=CodeBlock.spec.js.map