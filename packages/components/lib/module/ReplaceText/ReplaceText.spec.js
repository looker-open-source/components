

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import Basic from './stories/Basic';
import CustomReplace from './stories/CustomReplace';
describe('ReplaceText', () => {
  test('globally replaces a case-insensitive string with higlighted text', () => {
    renderWithTheme(React.createElement(Basic, null));
    screen.getAllByText(/che/i).forEach(element => {
      expect(element).toHaveStyle('font-weight: 600; text-decoration: underline');
    });
  });
  test('accepts custom replace component', () => {
    const {
      container
    } = renderWithTheme(React.createElement(CustomReplace, null));
    expect(container).toMatchInlineSnapshot(`
      <div>
        <em>
          Che
        </em>
        ddar 
        <em>
          che
        </em>
        ese
      </div>
    `);
  });
});
//# sourceMappingURL=ReplaceText.spec.js.map