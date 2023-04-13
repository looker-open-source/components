let _ = t => t,
  _t;

import { screen } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import { renderWithTheme } from '../../../../components-test-utils/src';
import { textDecoration } from './text_decoration';
test('text-decoration', () => {
  const Test = styled.p.withConfig({
    displayName: "text_decorationspec__Test",
    componentId: "sc-1eut5db-0"
  })(_t || (_t = _`
    ${0}
  `), textDecoration);
  renderWithTheme(React.createElement(Test, {
    textDecoration: "underline"
  }, "Find me"));
  expect(screen.getByText('Find me')).toHaveStyle('text-decoration: underline');
});
//# sourceMappingURL=text_decoration.spec.js.map