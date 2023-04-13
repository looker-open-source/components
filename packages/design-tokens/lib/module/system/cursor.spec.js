let _ = t => t,
  _t;

import { screen } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import { renderWithTheme } from '../../../components-test-utils/src';
import { cursor } from './cursor';
test('cursor', () => {
  const Test = styled.p.withConfig({
    displayName: "cursorspec__Test",
    componentId: "sc-7mezib-0"
  })(_t || (_t = _`
    ${0}
  `), cursor);
  renderWithTheme(React.createElement(Test, {
    cursor: "readonly"
  }, "Find me"));
  expect(screen.getByText('Find me')).toHaveStyle('cursor: readonly');
});
//# sourceMappingURL=cursor.spec.js.map