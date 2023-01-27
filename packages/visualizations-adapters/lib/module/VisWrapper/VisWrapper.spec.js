
import React from 'react';
import { useTheme } from 'styled-components';
import { render, screen } from '@testing-library/react';
import { VisWrapper } from './VisWrapper';
describe('VisWrapper', () => {
  it('wraps itself in ComponentsProvider if rendered outside of theme context', () => {
    const CustomVis = () => {
      const theme = useTheme();
      return React.createElement(React.Fragment, null, React.createElement("p", null, "Rendered Without Error!"), React.createElement("dl", null, React.createElement("dt", null, "Background Color:"), React.createElement("dd", null, theme.colors.background)));
    };
    render(React.createElement(VisWrapper, null, React.createElement(CustomVis, null)));
    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument();
  });
});
//# sourceMappingURL=VisWrapper.spec.js.map