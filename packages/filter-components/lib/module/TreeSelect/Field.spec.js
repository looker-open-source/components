
import { Text } from '@looker/components';
import { fireEvent, waitForElementToBeRemoved, screen } from '@testing-library/react';
import noop from 'lodash/noop';
import React from 'react';
import { renderWithTheme } from '@looker/test-utils';
import { Field } from './Field';
describe('Field tests', () => {
  it('renders a field with label', async () => {
    const {
      container
    } = renderWithTheme(React.createElement(Field, {
      label: "Test Field",
      displayLabel: React.createElement(Text, null, "Test Field"),
      payload: {},
      onClick: noop
    }));
    expect(container).toBeVisible();
    expect(await screen.findByText('Test Field')).toBeVisible();
  });
  it('should call onClick', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(Field, {
      label: "Test Field",
      displayLabel: React.createElement(Text, null, "Test Field"),
      payload: {
        obj: 'hi'
      },
      onClick: onClick
    }));
    const field = screen.getByText('Test Field');
    fireEvent.click(field);
    expect(onClick).toHaveBeenCalledWith('Test Field', {
      obj: 'hi'
    });
  });
  it('should behave disabled', async () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(Field, {
      label: "Test Field",
      displayLabel: React.createElement(Text, null, "Test Field"),
      payload: {
        obj: 'hi'
      },
      onClick: onClick,
      disabled: "disabled"
    }));
    const field = screen.getByText('Test Field');
    fireEvent.click(field);
    fireEvent.mouseOver(field);
    const disabledText = screen.getByText('disabled');
    expect(disabledText.innerHTML).toBe('disabled');
    expect(onClick).toHaveBeenCalledTimes(0);

    fireEvent.mouseOut(field);
    await waitForElementToBeRemoved(() => screen.queryByText('disabled'));
  });
});
//# sourceMappingURL=Field.spec.js.map