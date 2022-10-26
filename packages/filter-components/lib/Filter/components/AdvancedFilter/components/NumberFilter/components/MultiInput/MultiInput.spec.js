import { Portal } from '@looker/components';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { MultiInput } from './MultiInput';
describe('MultiInput', () => {
  const item = {
    id: '1',
    type: '=',
    is: true,
    value: []
  };
  it('calls onChange with numbers', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(MultiInput, {
      item: item,
      onChange: onChange,
      placeholder: "any value"
    }));
    const input = screen.getByPlaceholderText('any value');
    fireEvent.change(input, {
      target: {
        value: '123,456,'
      }
    });
    expect(input).toHaveValue('');
    expect(onChange).toHaveBeenCalledWith('1', {
      value: [123, 456]
    });
  });
  it('calls onChange with valid inputValue when closed', async () => {
    const onChange = jest.fn();

    const ClosingComponent = () => {
      const [isOpen, setIsOpen] = useState(true);

      const handleClick = () => setIsOpen(false);

      return React.createElement(React.Fragment, null, isOpen ? React.createElement(Portal, null, React.createElement(MultiInput, {
        item: item,
        onChange: onChange,
        placeholder: "any value"
      })) : React.createElement("div", null, "Closed"), React.createElement("button", {
        onClick: handleClick
      }, "Close"));
    };

    renderWithTheme(React.createElement(ClosingComponent, null));
    const input = screen.getByPlaceholderText('any value');
    fireEvent.change(input, {
      target: {
        value: '123'
      }
    });
    expect(onChange).not.toHaveBeenCalled();
    const button = screen.getByText('Close');
    fireEvent.click(button);
    const closed = await screen.findByText('Closed');
    expect(closed).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith('1', {
      value: [123]
    });
  });
  it('does not call onChange if a non-number is entered', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(MultiInput, {
      item: item,
      onChange: onChange,
      placeholder: "any value"
    }));
    const input = screen.getByPlaceholderText('any value');
    fireEvent.change(input, {
      target: {
        value: '100k,'
      }
    });
    expect(input).toHaveValue('100k');
    expect(onChange).not.toHaveBeenCalled();
  });
  it('calls onChange with a big integer', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(MultiInput, {
      item: item,
      onChange: onChange,
      placeholder: "any value"
    }));
    const input = screen.getByPlaceholderText('any value');
    fireEvent.change(input, {
      target: {
        value: '12345678901234567890,'
      }
    });
    expect(onChange.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
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
//# sourceMappingURL=MultiInput.spec.js.map