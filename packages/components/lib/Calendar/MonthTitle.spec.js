import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import en from 'date-fns/locale/en-US';
import ko from 'date-fns/locale/ko';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { MonthTitle } from './MonthTitle';
const defaultProps = {
  inline: false,
  locale: en,
  month: new Date('July 1, 2021'),
  rangeType: 'draft'
};
test('above 1st week', () => {
  renderWithTheme(React.createElement(MonthTitle, _extends({}, defaultProps, {
    month: new Date('Jan 12, 2022')
  })));
  const title = screen.getByText('Jan 2022');
  expect(title).toHaveStyle('margin-bottom: 0.125rem');
});
test('inline with 1st week', () => {
  renderWithTheme(React.createElement(MonthTitle, _extends({}, defaultProps, {
    inline: true
  })));
  const title = screen.getByText('Jul 2021');
  expect(title).toHaveStyle('margin-bottom: -2rem');
});
test('localization', () => {
  renderWithTheme(React.createElement(MonthTitle, _extends({}, defaultProps, {
    locale: ko
  })));
  expect(screen.getByText('7월 2021')).toBeVisible();
});
test('month names do not overlap days on the same line', () => {
  renderWithTheme(React.createElement(MonthTitle, defaultProps));
  expect(screen.getByText('Jul 2021')).toHaveStyle('width: fit-content');
});
//# sourceMappingURL=MonthTitle.spec.js.map