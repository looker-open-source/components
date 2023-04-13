let _ = t => t,
  _t,
  _t2;

import { render, screen } from '@testing-library/react';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { renderWithTheme } from '../../../../components-test-utils/src';
import { theme } from '../../theme';
import { generateIntentShade } from './generateIntentShade';
describe('generateIntentShade', () => {
  test('default', () => {
    const Test = styled.p.withConfig({
      displayName: "generateIntentShadespec__Test",
      componentId: "sc-poy04n-0"
    })(_t || (_t = _`
      background: ${0};
      color: ${0};
    `), generateIntentShade('blue'), generateIntentShade('lightblue'));
    renderWithTheme(React.createElement(Test, null, "Find me"));
    const test = screen.getByText('Find me');
    expect(test).toHaveStyle('background: #0000bf');
    expect(test).toHaveStyle('color: #348fac');
  });
  test('light background', () => {
    const Test = styled.p.withConfig({
      displayName: "generateIntentShadespec__Test",
      componentId: "sc-poy04n-1"
    })(_t2 || (_t2 = _`
      background: ${0};
      color: ${0};
    `), generateIntentShade('blue'), generateIntentShade('lightblue'));
    const customTheme = theme;
    theme.colors.background = 'black';
    render(React.createElement(ThemeProvider, {
      theme: customTheme
    }, React.createElement(Test, null, "Find me")));
    const test = screen.getByText('Find me');
    expect(test).toHaveStyle('background: rgb(64, 64, 255);');
    expect(test).toHaveStyle('color: rgb(255, 255, 255);');
  });
});
//# sourceMappingURL=generateIntentShade.spec.js.map