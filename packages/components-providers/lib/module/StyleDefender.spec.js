

import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleDefender } from './StyleDefender';
import { ThemeProvider } from './ThemeProvider';
describe('StyleDefender', () => {
  test('Direct styles', () => {
    render(React.createElement(ThemeProvider, null, React.createElement(StyleDefender, null, "Find me")));
    const test = screen.getByText('Find me');
    expect(test).toHaveStyle("font-family: Roboto,'Noto Sans','Noto Sans JP','Noto Sans CJK KR','Noto Sans Arabic UI','Noto Sans Devanagari UI','Noto Sans Hebrew','Noto Sans Thai UI',Helvetica,Arial,sans-serif");
  });
  test('Computed', () => {
    render(React.createElement(ThemeProvider, null, React.createElement(StyleDefender, null, React.createElement("p", null, "Find me"))));
    const computedStyle = getComputedStyle(screen.getByText('Find me'));
    expect(computedStyle.boxSizing).toEqual('border-box');
  });
  test('Computed negative', () => {
    render(React.createElement(ThemeProvider, null, React.createElement("p", null, "Find me")));
    const computedStyle = getComputedStyle(screen.getByText('Find me'));
    expect(computedStyle.boxSizing).not.toEqual('border-box');
  });
});
//# sourceMappingURL=StyleDefender.spec.js.map