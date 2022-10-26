let _ = t => t,
    _t;

import React from 'react';
import { screen } from '@testing-library/react';
import styled from 'styled-components';
import { renderWithTheme } from '../../components-test-utils/src';
import { ComponentsProvider } from './ComponentsProvider';
const FauxParagraph = styled.p.withConfig({
  displayName: "ComponentsProviderspec__FauxParagraph",
  componentId: "sc-1k86yic-0"
})(_t || (_t = _`
  background: ${0};
  color: ${0};
  font-family: ${0};
`), ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.fonts.body);
describe('ComponentsProvider', () => {
  test('Nesting ignores parent values (not a desireable choice)', () => {
    const Test = () => {
      return React.createElement(ComponentsProvider, {
        themeCustomizations: {
          colors: {
            background: 'black'
          }
        }
      }, React.createElement(FauxParagraph, null, "1 layer"), React.createElement(ComponentsProvider, {
        themeCustomizations: {
          colors: {
            key: 'purple'
          }
        }
      }, React.createElement(FauxParagraph, null, "2 layer")));
    };

    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByText('1 layer')).toHaveStyle('color:rgb(108, 67, 224)');
    expect(screen.getByText('1 layer')).toHaveStyle('background: black');
    expect(screen.getByText('2 layer')).toHaveStyle('color: purple');
    expect(screen.getByText('2 layer')).toHaveStyle('background:rgb(255, 255, 255);');
  });
  test('loadGoogleFonts', () => {
    const Test = () => {
      return React.createElement(ComponentsProvider, {
        loadGoogleFonts: true
      }, React.createElement(FauxParagraph, null, "Some Text"));
    };

    renderWithTheme(React.createElement(Test, null));
    expect(screen.getByText('Some Text')).toHaveStyle("font-family: Roboto,'Noto Sans','Noto Sans JP','Noto Sans CJK KR','Noto Sans Arabic UI','Noto Sans Devanagari UI','Noto Sans Hebrew','Noto Sans Thai UI',Helvetica,Arial,sans-serif;");
  });
});
//# sourceMappingURL=ComponentsProvider.spec.js.map