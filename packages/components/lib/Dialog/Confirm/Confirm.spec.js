import _extends from "@babel/runtime/helpers/extends";
import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { theme } from '@looker/design-tokens';
import { Button } from '../../Button';
import { jaJP } from '../../locales';
import { Confirm } from './Confirm';
const requiredProps = {
  message: 'Foo',
  onConfirm: jest.fn(),
  title: 'Bar'
};
const optionalProps = {
  cancelLabel: "Don't Delete",
  confirmLabel: 'Delete',
  message: 'This is permanent',
  onCancel: jest.fn(),
  title: 'Delete the thing?'
};
afterEach(() => {
  requiredProps.onConfirm.mockClear();
  optionalProps.onCancel.mockClear();
});
describe('Confirm', () => {
  test('with defaults', async () => {
    renderWithTheme(React.createElement(Confirm, requiredProps, open => React.createElement(Button, {
      onClick: open
    }, "Do Something")));
    const opener = screen.getByText('Do Something');
    fireEvent.click(opener);
    const button = screen.getByText('Confirm');
    expect(screen.getByText(requiredProps.title)).toBeVisible();
    expect(screen.getByText(requiredProps.message)).toBeVisible();
    expect(button).toHaveStyleRule(`background: ${theme.colors.key}`);
    fireEvent.click(button);
    expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Cancel'));
    await waitForElementToBeRemoved(() => screen.queryByText(requiredProps.title));
    expect(screen.queryByText(requiredProps.title)).not.toBeInTheDocument();
  });
  test('with custom props', () => {
    renderWithTheme(React.createElement(Confirm, _extends({}, requiredProps, optionalProps, {
      buttonColor: "critical"
    }), open => React.createElement(Button, {
      onClick: open
    }, "Do Something")));
    const opener = screen.getByText('Do Something');
    fireEvent.click(opener);
    const button = screen.getByText(optionalProps.confirmLabel || '');
    expect(button).toHaveStyleRule(`background: ${theme.colors.critical}`);
    fireEvent.click(screen.getByText(optionalProps.cancelLabel || ''));
    fireEvent.click(button);
    expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1);
    expect(optionalProps.onCancel).toHaveBeenCalledTimes(1);
  });
  test('i18n', () => {
    renderWithTheme(React.createElement(Confirm, requiredProps, open => React.createElement(Button, {
      onClick: open
    }, "Do Something")), undefined, jaJP);
    const opener = screen.getByText('Do Something');
    fireEvent.click(opener);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('確認');
    expect(buttons[1]).toHaveTextContent('キャンセル');
  });
});
//# sourceMappingURL=Confirm.spec.js.map