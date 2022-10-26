import _extends from "@babel/runtime/helpers/extends";
import { renderWithTheme } from '@looker/components-test-utils';
import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { SingleNumberInput } from './SingleNumberInput';
describe('SingleNumberInput component', () => {
  const props = {
    item: {
      id: 'test_id',
      type: '=',
      value: []
    },
    onChange: jest.fn()
  };
  beforeEach(() => {
    props.onChange.mockClear();
  });
  it('defaults to empty string', () => {
    renderWithTheme(React.createElement(SingleNumberInput, props));
    const input = screen.getByTestId('single-number');
    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveDisplayValue('');
  });
  it('shows the current itemValue', () => {
    renderWithTheme(React.createElement(SingleNumberInput, _extends({}, props, {
      item: {
        id: 'test_id',
        type: '=',
        value: 1
      }
    })));
    const input = screen.getByTestId('single-number');
    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveDisplayValue('1');
  });
  describe('calls onChange handler', () => {
    it('calls onChange handler for number value', () => {
      renderWithTheme(React.createElement(SingleNumberInput, props));
      const input = screen.getByTestId('single-number');
      fireEvent.change(input, {
        target: {
          value: '2'
        }
      });
      expect(props.onChange).toHaveBeenCalledWith('test_id', {
        value: [2]
      });
    });
    it('Does not call onChange handler for not numeric value', () => {
      renderWithTheme(React.createElement(SingleNumberInput, props));
      fireEvent.change(screen.getByTestId('single-number'), {
        target: {
          value: 'not numeric value'
        }
      });
      expect(props.onChange).not.toHaveBeenCalled();
    });
    it('calls onChange handler for big integer', () => {
      renderWithTheme(React.createElement(SingleNumberInput, props));
      const input = screen.getByTestId('single-number');
      fireEvent.change(input, {
        target: {
          value: '12345678901234567890'
        }
      });
      expect(props.onChange.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "test_id",
            Object {
              "value": Array [
                12345678901234567890n,
              ],
            },
          ],
        ]
      `);
    });
  });
});
//# sourceMappingURL=SingleNumberInput.spec.js.map