let _ = t => t,
    _t;

import React from 'react';
import { screen } from '@testing-library/react';
import styled from 'styled-components';
import { renderWithTheme } from '../../../../components-test-utils/src';
import { intentUIBlend } from './intentUIBlend';
describe('intentUIBlend', () => {
  test('default', () => {
    const Test = styled.p.withConfig({
      displayName: "intentUIBlendspec__Test",
      componentId: "sc-61trt-0"
    })(_t || (_t = _`
      background: ${0};
      background-color: ${0};
      color: ${0};
    `), intentUIBlend('critical', 0), intentUIBlend('critical', 1), intentUIBlend('critical', 4));
    renderWithTheme(React.createElement(Test, null, "Find me"));
    const test = screen.getByText('Find me');
    expect(test).toHaveStyleRule('background', '#fcf6f6');
    expect(test).toHaveStyleRule('background-color', '#f8e4e6');
    expect(test).toHaveStyleRule('color', '#d34054');
  });
});
//# sourceMappingURL=intentUIBlend.spec.js.map