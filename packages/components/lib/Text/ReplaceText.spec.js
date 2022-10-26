import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { ReplaceText } from './ReplaceText';
describe('ReplaceText', () => {
  test('globally replaces a case-insensitive string with JSX', () => {
    const {
      container
    } = renderWithTheme(React.createElement(ReplaceText, {
      match: "long",
      replace: (text, index) => React.createElement("span", {
        key: index
      }, text)
    }, "Some LONG text that is long and this is how long it is."));
    expect(container).toMatchInlineSnapshot(`
      <div>
        Some 
        <span>
          LONG
        </span>
         text that is 
        <span>
          long
        </span>
         and this is how 
        <span>
          long
        </span>
         it is.
      </div>
    `);
  });
});
//# sourceMappingURL=ReplaceText.spec.js.map