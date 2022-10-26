import { ComponentsProvider } from '@looker/components';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { Filter } from './Filter';
describe('Filter', () => {
  it('reflects changes to the expression prop', () => {
    const onChangeMock = jest.fn();
    const {
      rerender
    } = renderWithTheme(React.createElement(Filter, {
      expression: "",
      expressionType: "date",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    }));
    expect(screen.getByText('is any time')).toBeVisible();
    rerender(React.createElement(ComponentsProvider, null, React.createElement(Filter, {
      expression: "1999",
      expressionType: "date",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    })));
    expect(screen.getByDisplayValue('is in the year')).toBeVisible();
    expect(screen.getByDisplayValue('1999')).toBeVisible();
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  it('reflects changes to the filter type prop', () => {
    const onChangeMock = jest.fn();
    const {
      rerender
    } = renderWithTheme(React.createElement(Filter, {
      expression: "1999",
      expressionType: "date",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    }));
    expect(screen.getByDisplayValue('is in the year')).toBeVisible();
    expect(screen.getByDisplayValue('1999')).toBeVisible();
    rerender(React.createElement(ComponentsProvider, null, React.createElement(Filter, {
      expression: "1999",
      expressionType: "string",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    })));
    expect(screen.getByDisplayValue('is')).toBeVisible();
    expect(screen.getByText('1999')).toBeVisible();
  });
  it('handles multi-step interactive changes', () => {
    const onChangeMock = jest.fn();

    const TestComponent = () => {
      const [expression, setExpression] = useState('');

      const handleChange = value => {
        onChangeMock(value);
        setExpression(value.expression);
      };

      return React.createElement(Filter, {
        expression: expression,
        expressionType: "number",
        onChange: handleChange,
        name: "Test Filter",
        allowMultipleValues: true
      });
    };

    renderWithTheme(React.createElement(TestComponent, null));
    const select = screen.getByDisplayValue('is');
    fireEvent.click(select);
    fireEvent.click(screen.getByText('is between'));
    fireEvent.change(screen.getByTestId('low'), {
      target: {
        value: '5'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '[5,]'
    });
    expect(screen.getByDisplayValue('is between')).toBeVisible();
    fireEvent.change(screen.getByTestId('high'), {
      target: {
        value: '10'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '[5,]'
    });
  });
  it('handles multi-step interactive changes with proper on change', () => {
    const onChangeMock = jest.fn();

    const TestComponent = () => {
      const [expression, setExpression] = useState('[5,]');

      const handleChange = value => {
        onChangeMock(value);
        setExpression(value.expression);
      };

      return React.createElement(Filter, {
        expression: expression,
        expressionType: "number",
        onChange: handleChange,
        name: "Test Filter",
        allowMultipleValues: true
      });
    };

    renderWithTheme(React.createElement(TestComponent, null));
    expect(onChangeMock).not.toHaveBeenCalled();
    fireEvent.change(screen.getByTestId('single-number'), {
      target: {
        value: '5'
      }
    });
    expect(onChangeMock).not.toHaveBeenCalled();
    fireEvent.change(screen.getByTestId('single-number'), {
      target: {
        value: '6'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '>=6'
    });
  });
  it('use dispatchConfigTypeChange to call onChange in EditMode', () => {
    const onChangeMock = jest.fn();

    const TestComponent = () => React.createElement(Filter, {
      expression: '1',
      expressionType: "number",
      onChange: onChangeMock,
      name: "Test Filter",
      config: {
        display: 'inline',
        type: 'slider'
      },
      dispatchConfigTypeChange: true,
      allowMultipleValues: true
    });

    renderWithTheme(React.createElement(TestComponent, null));
    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '1'
    });
  });
  it('does not call onChange when dispatchConfigTypeChange is false', () => {
    const onChangeMock = jest.fn();

    const TestComponent = () => React.createElement(Filter, {
      expression: '1,2,3',
      expressionType: "number",
      onChange: onChangeMock,
      name: "Test Filter",
      config: {
        display: 'inline',
        type: 'slider'
      },
      dispatchConfigTypeChange: false,
      allowMultipleValues: true
    });

    renderWithTheme(React.createElement(TestComponent, null));
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  it('does not switch component types while typing (Matches Advanced)', () => {
    let expression = '5 mont';

    const onChange = newValue => {
      expression = newValue.expression;
    };

    const TestComponent = () => {
      const [, setUpdate] = useState(false);
      return React.createElement(React.Fragment, null, React.createElement("button", {
        onClick: () => setUpdate(true)
      }, "rerender"), React.createElement(Filter, {
        expression: expression,
        expressionType: "date",
        onChange: onChange,
        name: "Test Filter",
        allowMultipleValues: true
      }));
    };

    renderWithTheme(React.createElement(TestComponent, null));
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('matches (advanced)');
    expect(inputs[1]).toHaveValue('5 mont');
    fireEvent.change(inputs[1], {
      target: {
        value: '5 month'
      }
    });
    fireEvent.click(screen.getByText('rerender'));
    const updatedInputs = screen.getAllByRole('textbox');
    expect(updatedInputs[0]).toHaveValue('matches (advanced)');
    expect(updatedInputs[1]).toHaveValue('5 month');
  });
  it('requires at least one of: expressionType, field, type', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: "",
      name: "test"
    }));
    renderWithTheme(React.createElement(Filter, {
      expression: "",
      name: "test",
      expressionType: "string"
    }));
    renderWithTheme(React.createElement(Filter, {
      expression: "",
      name: "test",
      field: {}
    }));
    renderWithTheme(React.createElement(Filter, {
      expression: "",
      name: "test",
      type: "date_filter"
    }));
    renderWithTheme(React.createElement(Filter, {
      expression: "",
      name: "test",
      expressionType: "string",
      field: {},
      type: "field_filter"
    }));
  });
});
//# sourceMappingURL=Filter.spec.js.map