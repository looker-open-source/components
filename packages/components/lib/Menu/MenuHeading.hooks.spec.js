import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { useElementVisibility } from './MenuHeading.hooks';

const TestHook = () => {
  const [isVisible, ref] = useElementVisibility();
  return React.createElement("div", {
    ref: ref
  }, isVisible.toString());
};

describe('MenuHeading Hooks', () => {
  it('it returns true as the default visibility state', () => {
    renderWithTheme(React.createElement(TestHook, null));
    expect(screen.getByText('true')).toBeVisible();
  });
});
//# sourceMappingURL=MenuHeading.hooks.spec.js.map