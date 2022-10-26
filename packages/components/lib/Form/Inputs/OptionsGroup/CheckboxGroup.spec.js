import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import 'jest-styled-components';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import map from 'lodash/map';
import { CheckboxGroup } from './CheckboxGroup';
const checkboxOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Swiss',
  value: 'swiss'
}, {
  label: 'Roquefort',
  value: 'roquefort'
}];
const checkboxProps = {
  defaultValue: ['swiss', 'cheddar'],
  id: '1',
  name: 'group1',
  options: checkboxOptions
};
test('FieldCheckboxGroup render a list of checkbox', () => {
  const extractCheckboxFromDomList = list => {
    const options = list.getElementsByTagName('label');
    return map(options, el => {
      return el.textContent;
    });
  };

  const renderListContent = () => {
    renderWithTheme(React.createElement(CheckboxGroup, checkboxProps));
    return screen.getByTestId('checkbox-list');
  };

  const view = renderListContent();
  expect(extractCheckboxFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
test('CheckboxGroup can be checked and unchecked when user clicks', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(CheckboxGroup, _extends({}, checkboxProps, {
    defaultValue: [],
    onChange: handleChange
  })));
  const checkbox = screen.getByLabelText('Roquefort');
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledWith(['roquefort']);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledWith(['roquefort']);
  expect(checkbox).not.toBeChecked();
});
test('CheckboxGroup render a list of checkbox with defaultValue checked', () => {
  renderWithTheme(React.createElement(CheckboxGroup, _extends({}, checkboxProps, {
    defaultValue: ['cheddar']
  })));
  expect(screen.getByLabelText('Cheddar')).toBeChecked();
  expect(screen.getByLabelText('Gouda')).not.toBeChecked();
});
test('CheckboxGroup render a list of checkbox all unchecked after user clicked on defaultValue', () => {
  renderWithTheme(React.createElement(CheckboxGroup, checkboxProps));
  const Cheddar = screen.getByLabelText('Cheddar');
  fireEvent.click(Cheddar);
  expect(screen.getByLabelText('Cheddar')).not.toBeChecked();
});
test('CheckboxGroup disabled all checkbox', () => {
  renderWithTheme(React.createElement(CheckboxGroup, _extends({}, checkboxProps, {
    disabled: true
  })));
  expect(screen.getByLabelText('Cheddar')).toBeDisabled();
  expect(screen.getByLabelText('Gouda')).toBeDisabled();
  expect(screen.getByLabelText('Swiss')).toBeDisabled();
  expect(screen.getByLabelText('Roquefort')).toBeDisabled();
});
test('CheckboxGroup disabled one specific checkbox', () => {
  const options = checkboxOptions.map(option => {
    return _objectSpread({
      disabled: ['Roquefort'].includes(option.label)
    }, option);
  });
  renderWithTheme(React.createElement(CheckboxGroup, _extends({}, checkboxProps, {
    options: options
  })));
  expect(screen.getByLabelText('Cheddar')).toBeEnabled();
  expect(screen.getByLabelText('Roquefort')).toBeDisabled();
});
//# sourceMappingURL=CheckboxGroup.spec.js.map