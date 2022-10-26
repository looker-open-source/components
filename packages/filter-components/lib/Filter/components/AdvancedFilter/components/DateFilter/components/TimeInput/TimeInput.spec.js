import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { TimeInput } from './TimeInput';
describe('TimeInput', () => {
  it('onChange returns a properly formatted date object', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(TimeInput, {
      date: new Date(2010, 9, 29, 15, 26, 35),
      onChange: handleChange
    }));
    const inputBox = screen.getByDisplayValue('03:26 pm');
    fireEvent.click(inputBox);
    const newTime = screen.getByText('10:30 am');
    fireEvent.click(newTime);
    expect(handleChange.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          2010-10-29T17:30:00.000Z,
        ],
      ]
    `);
  });
});
//# sourceMappingURL=TimeInput.spec.js.map