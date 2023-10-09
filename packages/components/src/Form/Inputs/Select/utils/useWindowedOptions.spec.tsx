/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { ScrollToMe } from './useWindowedOptions';

describe('ScrollToMe', () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const realScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
  const scrollIntoViewMock = jest.fn();

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  });
  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    window.HTMLElement.prototype.scrollIntoView = realScrollIntoView;
    jest.resetAllMocks();
  });

  it('calls scrollIntoView', () => {
    const { container } = renderWithTheme(
      <ScrollToMe isScrollingRef={{ current: false }} top={19} />
    );
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(container.firstChild).toHaveStyleRule('top', '19px');
  });

  it('does not call scrollIntoView if user is already scrolling', () => {
    renderWithTheme(<ScrollToMe isScrollingRef={{ current: true }} top={0} />);
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
