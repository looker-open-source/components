import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import 'jest-styled-components';
import React, { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import map from 'lodash/map';
import { RadioGroup } from './RadioGroup';
const radioOptions = [{
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
const radioProps = {
  defaultValue: 'swiss',
  id: '1',
  name: 'group1',
  options: radioOptions
};
test('RadioGroup render a list of radio', () => {
  const extractRadioFromDomList = list => {
    const options = list.getElementsByTagName('label');
    return map(options, el => {
      return el.textContent;
    });
  };

  const renderListContent = () => {
    renderWithTheme(React.createElement(RadioGroup, radioProps));
    return screen.getByTestId('radio-list');
  };

  const view = renderListContent();
  expect(extractRadioFromDomList(view)).toEqual(['Cheddar', 'Gouda', 'Swiss', 'Roquefort']);
});
test('RadioGroup selects a radio on click', () => {
  const handleChange = jest.fn();
  renderWithTheme(React.createElement(RadioGroup, _extends({}, radioProps, {
    onChange: handleChange
  })));
  const radio = screen.getByLabelText('Cheddar');
  fireEvent.click(radio);
  expect(handleChange).toHaveBeenCalledWith('cheddar');
  expect(radio).toBeChecked();
});
test('RadioGroup works with defaultValue', () => {
  renderWithTheme(React.createElement(RadioGroup, _extends({}, radioProps, {
    defaultValue: 'cheddar'
  })));
  expect(screen.getByLabelText('Cheddar')).toBeChecked();
});
test('RadioGroup works with value', () => {
  function ControlledTest() {
    const [value, setValue] = useState('cheddar');
    return React.createElement(RadioGroup, {
      options: radioOptions,
      name: "controlled",
      value: value,
      onChange: setValue
    });
  }

  renderWithTheme(React.createElement(ControlledTest, null));
  const cheddar = screen.getByLabelText('Cheddar');
  const swiss = screen.getByLabelText('Swiss');
  expect(cheddar).toBeChecked();
  expect(swiss).not.toBeChecked();
  fireEvent.click(swiss);
  expect(cheddar).not.toBeChecked();
  expect(swiss).toBeChecked();
});
test('RadioGroup disabled all Radios', () => {
  renderWithTheme(React.createElement(RadioGroup, _extends({}, radioProps, {
    disabled: true
  })));
  expect(screen.getByLabelText('Cheddar')).toBeDisabled();
  expect(screen.getByLabelText('Gouda')).toBeDisabled();
  expect(screen.getByLabelText('Swiss')).toBeDisabled();
  expect(screen.getByLabelText('Roquefort')).toBeDisabled();
});
test('RadioGroup disabled one specific Radio', () => {
  const options = radioOptions.map(option => {
    return _objectSpread({
      disabled: ['Swiss'].includes(option.label)
    }, option);
  });
  renderWithTheme(React.createElement(RadioGroup, _extends({}, radioProps, {
    options: options
  })));
  expect(screen.getByLabelText('Cheddar')).toBeEnabled();
  expect(screen.getByLabelText('Swiss')).toBeDisabled();
});
//# sourceMappingURL=RadioGroup.spec.js.map