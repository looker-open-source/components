import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { ButtonGroup } from './ButtonGroup';
import { ButtonItem } from './ButtonItem';
describe('ButtonGroup', () => {
  test('controlled', () => {
    function TestComponent() {
      const [value, setValue] = useState(['Bananas']);
      return React.createElement(ButtonGroup, {
        value: value,
        onChange: setValue
      }, React.createElement(ButtonItem, null, "Apples"), React.createElement(ButtonItem, null, "Oranges"), React.createElement(ButtonItem, null, "Bananas"));
    }

    renderWithTheme(React.createElement(TestComponent, null));
    const apples = screen.getByText('Apples');
    const bananas = screen.getByText('Bananas');
    const oranges = screen.getByText('Oranges');
    expect(apples).toHaveAttribute('aria-pressed', 'false');
    expect(bananas).toHaveAttribute('aria-pressed', 'true');
    expect(oranges).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(apples);
    expect(apples).toHaveAttribute('aria-pressed', 'true');
    expect(bananas).toHaveAttribute('aria-pressed', 'true');
    expect(oranges).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(bananas);
    expect(apples).toHaveAttribute('aria-pressed', 'true');
    expect(bananas).toHaveAttribute('aria-pressed', 'false');
    expect(oranges).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(oranges);
    expect(apples).toHaveAttribute('aria-pressed', 'true');
    expect(bananas).toHaveAttribute('aria-pressed', 'false');
    expect(oranges).toHaveAttribute('aria-pressed', 'true');
  });
  test('options', () => {
    const options = [{
      label: 'Smoked Gouda',
      value: 'Gouda'
    }, {
      value: 'Cheddar'
    }, {
      disabled: true,
      value: 'Swiss'
    }];
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(ButtonGroup, {
      options: options,
      value: ['Cheddar'],
      onChange: onChangeMock
    }));
    const goudaButton = screen.getByText('Smoked Gouda');
    const cheddarButton = screen.getByText('Cheddar');
    const swissButton = screen.getByText('Swiss');
    expect(goudaButton).toHaveAttribute('aria-pressed', 'false');
    expect(cheddarButton).toHaveAttribute('aria-pressed', 'true');
    expect(swissButton).toHaveAttribute('aria-pressed', 'false');
    expect(swissButton).toBeDisabled();
    fireEvent.click(goudaButton);
    expect(onChangeMock).toBeCalledWith(['Cheddar', 'Gouda']);
    onChangeMock.mockClear();
    fireEvent.click(cheddarButton);
    expect(onChangeMock).toHaveBeenCalledWith([]);
    onChangeMock.mockClear();
    fireEvent.click(swissButton);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('disabled', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(ButtonGroup, {
      disabled: true,
      onChange: onChangeMock
    }, React.createElement(ButtonItem, null, "Apples")));
    const applesButton = screen.getByText('Apples');
    fireEvent.click(applesButton);
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('JSX children', () => {
    renderWithTheme(React.createElement(ButtonGroup, null, React.createElement(ButtonItem, null, React.createElement("strong", null, "BOLD"), " thing")));
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
//# sourceMappingURL=ButtonGroup.spec.js.map