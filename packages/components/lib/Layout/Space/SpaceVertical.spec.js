import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { SpaceVertical } from './SpaceVertical';
const content = React.createElement(React.Fragment, null, React.createElement("div", null, "one"), React.createElement("div", null, "two"), React.createElement("div", null, "three"), React.createElement("div", null, "four"));
describe('SpaceVertical', () => {
  test('reversed', () => {
    renderWithTheme(React.createElement(SpaceVertical, {
      "data-testid": "space",
      reverse: true
    }, content));
    expect(screen.getByTestId('space')).toHaveStyle('flex-direction: column-reverse;');
  });
});
//# sourceMappingURL=SpaceVertical.spec.js.map