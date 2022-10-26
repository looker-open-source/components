let _ = t => t,
    _t;

import { screen } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import { renderWithTheme } from '../../../../components-test-utils/src';
import { textTransform } from './text_transform';
test('text-transform', () => {
  const Test = styled.p.withConfig({
    displayName: "text_transformspec__Test",
    componentId: "sc-m8huxu-0"
  })(_t || (_t = _`
    ${0}
  `), textTransform);
  renderWithTheme(React.createElement(Test, {
    textTransform: "uppercase"
  }, "Find me"));
  expect(screen.getByText('Find me')).toHaveStyle('text-transform: uppercase');
});
//# sourceMappingURL=text_transform.spec.js.map