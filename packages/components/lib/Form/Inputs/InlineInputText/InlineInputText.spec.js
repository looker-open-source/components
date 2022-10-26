import { renderWithTheme } from '@looker/components-test-utils';
import { screen, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';
import { Button } from '../../../Button';
import { InlineInputText, InlineInputTextBase } from './InlineInputText';

const ControlledInlineInputText = () => {
  const [value, setValue] = useState('Type here...');

  const onChange = event => {
    setValue(event.currentTarget.value);
  };

  const onClick = () => {
    setValue('You clicked the button');
  };

  return React.createElement(React.Fragment, null, React.createElement(InlineInputText, {
    value: value,
    onChange: onChange
  }), React.createElement(Button, {
    onClick: onClick
  }, "Click Me"));
};

describe('InlineInputText', () => {
  test('renders and displays placeholder', () => {
    renderWithTheme(React.createElement(InlineInputText, {
      placeholder: "this is the placeholder"
    }));
    expect(screen.getByPlaceholderText('this is the placeholder')).toBeInTheDocument();
  });
  test('renders and displays value', () => {
    renderWithTheme(React.createElement(InlineInputText, {
      value: "this is the value"
    }));
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('renders and displays when passed prop simple', () => {
    renderWithTheme(React.createElement(InlineInputText, {
      simple: true,
      value: "this is the value"
    }));
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('renders and displays when passed prop readOnly', () => {
    renderWithTheme(React.createElement(InlineInputText, {
      simple: true,
      value: "this is the value"
    }));
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('renders and displays when passed prop underlineOnlyOnHover', () => {
    renderWithTheme(React.createElement(InlineInputText, {
      underlineOnlyOnHover: true,
      value: "this is the value"
    }));
    expect(screen.getByDisplayValue('this is the value')).toBeInTheDocument();
  });
  test('applies style when prop disabled is passed', () => {
    renderWithTheme(React.createElement(InlineInputTextBase, {
      placeholder: "type here..."
    }));
    expect(screen.getByPlaceholderText('type here...').parentElement).toBeInTheDocument();
  });
  test('change value as user types', () => {
    renderWithTheme(React.createElement(InlineInputTextBase, {
      placeholder: "type here..."
    }));
    expect(screen.getByPlaceholderText('type here...')).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('type here...').closest('input'), {
      target: {
        value: 'this is the new value'
      }
    });
    expect(screen.getByText('this is the new value')).toBeInTheDocument();
  });
  test('onChange behaves as expected', () => {
    renderWithTheme(React.createElement(ControlledInlineInputText, null));
    expect(screen.getByText('Type here...')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Click Me'));
    expect(screen.queryByText('Type here...')).not.toBeInTheDocument();
    expect(screen.getByText('You clicked the button')).toBeInTheDocument();
  });
});
//# sourceMappingURL=InlineInputText.spec.js.map