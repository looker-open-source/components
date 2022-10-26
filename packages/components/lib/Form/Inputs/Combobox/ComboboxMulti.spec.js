import { renderWithTheme } from '@looker/components-test-utils';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { ComboboxMulti, ComboboxMultiInput, ComboboxMultiList, ComboboxMultiOption } from '.';
afterEach(cleanup);
describe('<ComboboxMulti/> with values', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderComboboxMulti = () => renderWithTheme(React.createElement(ComboboxMulti, {
    onChange: handleChange,
    values: [{
      label: 'Bar',
      value: '102'
    }, {
      label: 'Qux',
      value: '104'
    }]
  }, React.createElement(ComboboxMultiInput, {
    placeholder: "Type here"
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    label: "Foo",
    value: "101",
    onClick: handleClick
  }), React.createElement(ComboboxMultiOption, {
    label: "Bar",
    value: "102",
    onClick: handleClick
  }), React.createElement(ComboboxMultiOption, {
    label: "Baz",
    value: "103",
    onClick: handleClick
  }), React.createElement(ComboboxMultiOption, {
    label: "Qux",
    value: "104",
    onClick: handleClick
  }))));

  afterEach(() => {
    handleChange.mockClear();
    handleClick.mockClear();
  });
  test('Adds new values to existing', () => {
    renderComboboxMulti();
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.mouseDown(input);
    const foo = screen.getByText('Foo');
    expect(foo).toBeInTheDocument();
    expect(screen.getByText('Baz')).toBeInTheDocument();
    expect(screen.getAllByText('Bar')).toHaveLength(2);
    expect(screen.getAllByText('Qux')).toHaveLength(2);
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(handleChange).toHaveBeenCalledTimes(0);
    fireEvent.click(foo);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith([{
      label: 'Bar',
      value: '102'
    }, {
      label: 'Qux',
      value: '104'
    }, {
      label: 'Foo',
      value: '101'
    }]);
    fireEvent.click(document);
  });
  test('Removes existing values via option click or enter key', () => {
    renderComboboxMulti();
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.keyDown(input, {
      key: 'ArrowDown'
    });
    fireEvent.keyDown(input, {
      key: 'ArrowDown'
    });
    fireEvent.keyDown(input, {
      key: 'ArrowDown'
    });
    fireEvent.keyDown(input, {
      key: 'Enter'
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith([{
      label: 'Qux',
      value: '104'
    }]);
    fireEvent.mouseDown(input);
    const qux = screen.getAllByText('Qux')[0];
    fireEvent.click(qux);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenNthCalledWith(2, [{
      label: 'Bar',
      value: '102'
    }]);
    fireEvent.click(document);
  });
  test('Removes existing values via chip delete', () => {
    renderComboboxMulti();
    const removeChip = screen.getAllByRole('button')[1];
    fireEvent.click(removeChip);
    expect(handleChange).toHaveBeenCalledWith([{
      label: 'Bar',
      value: '102'
    }]);
    fireEvent.click(document);
  });
  test('freeInput allows values to be added', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(ComboboxMulti, {
      onChange: onChangeMock,
      values: [{
        value: 'Bar'
      }, {
        value: 'Qux'
      }]
    }, React.createElement(ComboboxMultiInput, {
      placeholder: "Type here",
      freeInput: true
    }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
      value: "Foo",
      onClick: handleClick
    }), React.createElement(ComboboxMultiOption, {
      value: "Bar",
      onClick: handleClick
    }), React.createElement(ComboboxMultiOption, {
      value: "Baz",
      onClick: handleClick
    }), React.createElement(ComboboxMultiOption, {
      value: "Qux",
      onClick: handleClick
    }))));
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.change(input, {
      target: {
        value: 'apples,bananas,'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith([{
      value: 'Bar'
    }, {
      value: 'Qux'
    }, {
      value: 'apples'
    }, {
      value: 'bananas'
    }]);
    fireEvent.click(document);
  });
});
//# sourceMappingURL=ComboboxMulti.spec.js.map