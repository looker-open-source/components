import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { theme } from '@looker/design-tokens';
import { Add, Delete } from '@styled-icons/material';
import { screen } from '@testing-library/react';
import { Icon } from './Icon';
describe('Icon', () => {
  test('Default', () => {
    renderWithTheme(React.createElement(Icon, {
      icon: React.createElement(Add, null)
    }));
  });
  test('Styled system size', () => {
    renderWithTheme(React.createElement(Icon, {
      "data-testid": "icon-wrapper",
      icon: React.createElement(Add, null),
      size: "large"
    }));
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle(`height: ${theme.sizes.large}`);
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle(`width: ${theme.sizes.large}`);
  });
  test('Explicit size - integer as pixels', () => {
    renderWithTheme(React.createElement(Icon, {
      "data-testid": "icon-wrapper",
      icon: React.createElement(Add, null),
      size: 12
    }));
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle('width: 12px');
  });
  test('Explicit size - string', () => {
    renderWithTheme(React.createElement(Icon, {
      "data-testid": "icon-wrapper",
      icon: React.createElement(Add, null),
      size: "1rem"
    }));
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle('width: 1rem');
  });
  test('DOM attribute support', () => {
    renderWithTheme(React.createElement(Icon, {
      icon: React.createElement(Add, null),
      "aria-label": "Add"
    }));
    expect(screen.getByLabelText('Add')).toBeInTheDocument();
  });
  test(`No title by default`, () => {
    renderWithTheme(React.createElement(Icon, {
      icon: React.createElement(Delete, null)
    }));
    expect(screen.queryByLabelText("Oscar's House")).not.toBeInTheDocument();
  });
  test(`Title is assigned properly to SVG art`, () => {
    renderWithTheme(React.createElement(Icon, {
      icon: React.createElement(Delete, null),
      title: "Oscar's House"
    }));
    expect(screen.getByTitle("Oscar's House")).toBeInTheDocument();
  });
});
//# sourceMappingURL=Icon.spec.js.map