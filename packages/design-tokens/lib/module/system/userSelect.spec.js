let _ = t => t,
  _t;

import { screen } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import { renderWithTheme } from '../../../components-test-utils/src';
import { userSelect } from './userSelect';
test('userSelect', () => {
  const Test = styled.p.withConfig({
    displayName: "userSelectspec__Test",
    componentId: "sc-og7j00-0"
  })(_t || (_t = _`
    ${0}
  `), userSelect);
  renderWithTheme(React.createElement(Test, {
    userSelect: "none"
  }, "Find me"));
  expect(screen.getByText('Find me')).toHaveStyle('user-select: none');
});
//# sourceMappingURL=userSelect.spec.js.map