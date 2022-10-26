import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Button } from '../Button/Button';
import { FieldText } from './Fields/FieldText/FieldText';
import { Form } from './Form';
describe('Form', () => {
  test('two invalid children', () => {
    renderWithTheme(React.createElement(Form, {
      validationMessages: {
        name1: {
          message: 'e1',
          type: 'error'
        },
        name2: {
          message: 'e2',
          type: 'error'
        }
      }
    }, React.createElement(FieldText, {
      label: "label1",
      id: "text-field",
      name: "name1"
    }), React.createElement(FieldText, {
      label: "label2",
      id: "text-field",
      name: "name2"
    })));
    expect(screen.getByText('e1')).toBeInTheDocument();
    expect(screen.getByText('e2')).toBeInTheDocument();
  });
  test('with one invalid child and a submit button', () => {
    renderWithTheme(React.createElement(Form, {
      validationMessages: {
        name2: {
          message: 'e2',
          type: 'error'
        }
      }
    }, React.createElement(FieldText, {
      label: "label1",
      id: "text-field",
      name: "name1"
    }), React.createElement(FieldText, {
      label: "label2",
      id: "text-field",
      name: "name2"
    }), React.createElement(Button, null, "Submit")));
    expect(screen.getByText('e2')).toBeInTheDocument();
  });
  test('Should trigger onInput handler', () => {
    const onInput = jest.fn();
    renderWithTheme(React.createElement(Form, {
      onInput: onInput
    }, React.createElement(FieldText, {
      label: "label",
      id: "text-field",
      name: "name"
    })));
    userEvent.type(screen.getByRole('textbox'), 'hi');
    expect(onInput).toHaveBeenCalledTimes(2);
  });
  test('Should trigger onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(Form, {
      onChange: onChange
    }, React.createElement(FieldText, {
      label: "label",
      id: "text-field",
      name: "name"
    })));
    userEvent.type(screen.getByRole('textbox'), 'hi');
    expect(onChange).toHaveBeenCalledTimes(2);
  });
  test.skip('Should trigger onSubmit handler', () => {
    const onSubmit = jest.fn();
    renderWithTheme(React.createElement(Form, {
      onSubmit: onSubmit
    }, React.createElement(FieldText, {
      label: "label",
      id: "text-field",
      name: "name"
    }), React.createElement(Button, {
      type: "submit"
    }, "Submit")));
    userEvent.click(screen.getByRole('button'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
//# sourceMappingURL=Form.spec.js.map